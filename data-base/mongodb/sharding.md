# 						MongoDB 分片

[目录](README.md)

__分片__

在`Mongodb`里面存在另一种集群，就是分片技术,可以满足`MongoDB`数据量大量增长的需求。

当`MongoDB`存储海量的数据时，一台机器可能不足以存储数据，也可能不足以提供可接受的读写吞吐量。这时，我们就可以通过在多台机器上分割数据，使得数据库系统能存储和处理更多的数据。

__为什么使用分片?__

* 复制所有的写入操作到主节点
* 延迟的敏感数据会在主节点查询
* 单个副本集限制在12个节点
* 当请求量巨大时会出现内存不足。
* 本地磁盘不足
* 垂直扩展价格昂贵

#### MongoDB分片

下图展示了在MongoDB中使用分片集群结构分布：

<img src="imgs/sharding.png" alt="MongoDB分片图" />

上图中主要有如下所述三个主要组件：

* **Shard:** 用于存储实际的数据块，实际生产环境中一个`shard server`角色可由几台机器组个一个`replica set`承担，防止主机单点故障
* **Config Server:** `mongod`实例，存储了整个 `ClusterMetadata`，其中包括 `chunk`信息。
* **Query Routers:**    前端路由，客户端由此接入，且让整个集群看上去像单一数据库，前端应用可以透明使用。

__分片实例__

分片结构端口分布如下：
```
Shard Server 1：27020
Shard Server 2：27021
Shard Server 3：27022
Shard Server 4：27023
Config Server ：27100
Route Process：40000
```
步骤一：启动`Shard Server`
```bash
[root@100 /] mkdir -p /www/mongoDB/shard/s0
[root@100 /] mkdir -p /www/mongoDB/shard/s1
[root@100 /] mkdir -p /www/mongoDB/shard/s2
[root@100 /] mkdir -p /www/mongoDB/shard/s3
[root@100 /] mkdir -p /www/mongoDB/shard/log
[root@100 /] /usr/local/mongoDB/bin/mongod --port 27020 --dbpath=/www/mongoDB/shard/s0 --logpath=/www/mongoDB/shard/log/s0.log --logappend --fork
....
[root@100 /] /usr/local/mongoDB/bin/mongod --port 27023 --dbpath=/www/mongoDB/shard/s3 --logpath=/www/mongoDB/shard/log/s3.log --logappend --fork
```
步骤二： 启动`Config Server`
```bash
[root@100 /] mkdir -p /www/mongoDB/shard/config
[root@100 /] /usr/local/mongoDB/bin/mongod --port 27100 --dbpath=/www/mongoDB/shard/config --logpath=/www/mongoDB/shard/log/config.log --logappend --fork
```
__注意：__ 这里我们完全可以像启动普通`mongodb`服务一样启动，不需要添加`—shardsvr`和`configsvr`参数。因为这两个参数的作用就是改变启动端口的，所以我们自行指定了端口就可以。

步骤三： 启动`Route Process`
```bash
/usr/local/mongoDB/bin/mongos --port 40000 --configdb localhost:27100 --fork --logpath=/www/mongoDB/shard/log/route.log --chunkSize 500
```
`mongos`启动参数中，`chunkSize`这一项是用来指定`chunk`的大小的，单位是`MB`，默认大小为`200MB`.

步骤四： 配置`Sharding`

接下来，我们使用`MongoDB Shell`登录到`mongos`，添加`Shard`节点
```bash
[root@100 shard] /usr/local/mongoDB/bin/mongo admin --port 40000
MongoDB shell version: 2.0.7
connecting to: 127.0.0.1:40000/admin
mongos> db.runCommand({ addshard:"localhost:27020" })
{ "shardAdded" : "shard0000", "ok" : 1 }
......
mongos> db.runCommand({ addshard:"localhost:27029" })
{ "shardAdded" : "shard0009", "ok" : 1 }
mongos> db.runCommand({ enablesharding:"test" }) 	# 设置分片存储的数据库
{ "ok" : 1 }
mongos> db.runCommand({ shardcollection: "test.log", key: { id:1,time:1}})
{ "collectionsharded" : "test.log", "ok" : 1 }
```
步骤五： 程序代码内无需太大更改，直接按照连接普通的`mongo`数据库那样，将数据库连接接入接口`40000`

__笔记__

1. 创建`Sharding`复制集 `rs0`
```bash
mkdir /data/log
mkdir /data/db1
nohup mongod --port 27020 --dbpath=/data/db1 --logpath=/data/log/rs0-1.log --logappend --fork --shardsvr --replSet=rs0 &

mkdir /data/db2
nohup mongod --port 27021 --dbpath=/data/db2 --logpath=/data/log/rs0-2.log --logappend --fork --shardsvr --replSet=rs0 &
```
1.1 复制集rs0配置

```sql
# mongo localhost:27020
> rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27020'}, {_id: 1, host: 'localhost:27021'}]})
> rs.isMaster() 		# 查看主从关系
```
2. 创建Sharding复制集 rs1
```bash
mkdir /data/db3
nohup mongod --port 27030 --dbpath=/data/db3 --logpath=/data/log/rs1-1.log --logappend --fork --shardsvr --replSet=rs1 &
mkdir /data/db4
nohup mongod --port 27031 --dbpath=/data/db4 --logpath=/data/log/rs1-2.log --logappend --fork --shardsvr --replSet=rs1 &
```
2.1 复制集rs1配置
```sql
# mongo localhost:27030
> rs.initiate({_id: 'rs1', members: [{_id: 0, host: 'localhost:27030'}, {_id: 1, host: 'localhost:27031'}]})
> rs.isMaster() 		# 查看主从关系
```
3. 创建Config复制集 conf
```sql
mkdir /data/conf1
nohup mongod --port 27100 --dbpath=/data/conf1 --logpath=/data/log/conf-1.log --logappend --fork --configsvr --replSet=conf &
mkdir /data/conf2
nohup mongod --port 27101 --dbpath=/data/conf2 --logpath=/data/log/conf-2.log --logappend --fork --configsvr --replSet=conf &
```
3.1 复制集conf配置
```sql
# mongo localhost:27100
> rs.initiate({_id: 'conf', members: [{_id: 0, host: 'localhost:27100'}, {_id: 1, host: 'localhost:27101'}]})
> rs.isMaster() 		# 查看主从关系
```
4. 创建Route
```bash
nohup mongos --port 40000 --configdb conf/localhost:27100,localhost:27101 --fork --logpath=/data/log/route.log --logappend &
```
4.1 设置分片
```sql
# mongo localhost:40000
> use admin
> db.runCommand({ addshard: 'rs0/localhost:27020,localhost:27021'})
> db.runCommand({ addshard: 'rs1/localhost:27030,localhost:27031'})
> db.runCommand({ enablesharding: 'test'})
> db.runCommand({ shardcollection: 'test.user', key: {name: 1}})
```

<a href="mongodump-mongorestore.md" style="float: right;">MongoDB 备份(mongodump)与恢复(mongorestore)</a>