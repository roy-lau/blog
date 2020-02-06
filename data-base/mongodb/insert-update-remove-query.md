# 						MongoDB 插入 更新 删除 查询 文档

[目录](README.md)

### 插入文档

> 文档的数据结构和JSON基本一样。

> 所有存储在集合中的数据都是BSON格式。

> BSON是一种类json的一种二进制形式的存储格式,简称Binary JSON。

MongoDB 使用 `insert()` 或 `save()` 方法向集合中插入文档，语法如下：

```sql
db.COLLECTION_NAME.insert(document)
```

__实例:__

以下文档可以存储在 MongoDB 的 test_tbl 数据库 的 col 集合中：

```sql
>db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '学习网站',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

_以上实例中 col 是我们的集合名，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。_

查看已插入文档：

```sql
> db.col.find()
{ "_id" : ObjectId("56064886ade2f21f36b03134"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "学习网站", "url" : "http://www.runoob.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
>
```
我们也可以将数据定义为一个变量，如下所示：
```sql
> document=({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '学习网站',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
});
```
执行后显示结果如下：
```json
{
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```
执行插入操作：
```sql
> db.col.insert(document)
WriteResult({ "nInserted" : 1 })
>
```
插入文档你也可以使用 `db.col.save(document)` 命令。如果不指定 `_id` 字段 `save()` 方法类似于 `insert()` 方法。如果指定 `_id` 字段，则会更新该 `_id` 的数据。

__笔记：__

3.2 版本后还有以下几种语法可用于插入文档:

* **db.collection.insertOne():** 向指定集合中插入一条文档数据
* **db.collection.insertMany():** 向指定集合中插入多条文档数据

```js
#  插入单条数据
> var document = db.collection.insertOne({"a": 3})
> document
{
        "acknowledged" : true,
        "insertedId" : ObjectId("571a218011a82a1d94c02333")
}

#  插入多条数据
> var res = db.collection.insertMany([{"b": 3}, {'c': 4}])
> res
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("571a22a911a82a1d94c02337"),
                ObjectId("571a22a911a82a1d94c02338")
        ]
}
```

### 更新文档

MongoDB 使用 `update()` 和 `save()` 方法来更新集合中的文档

__update()方法__

`update()` 方法用于更新已存在的文档，语法如下：
```sql
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

参数说明：

* **query :**  `update`的查询条件，类似`sql update`查询内`where`后面的。
* **update :**  `update`的对象和一些更新的操作符（如`$,$inc...`）等，也可以理解为`sql update`查询内`set`后面的
* **upsert :**  可选，这个参数的意思是，如果不存在`update`的记录，是否插入`objNew`,`true`为插入，默认是`false`，不插入。
* **multi :**  可选，`mongodb` 默认是`false`,只更新找到的第一条记录，如果这个参数为`true`,就把按条件查出来多条记录全部更新。
* **writeConcern :** 可选，抛出异常的级别。

实例

我们在集合 col 中插入如下数据：
```sql
>db.col.insert({
    title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '学习网站',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```
接着我们通过 `update()` 方法来更新标题`(title)`:
```sql
>db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })   # 输出信息
> db.col.find().pretty()
{
        "_id" : ObjectId("56064f89ade2f21f36b03136"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```
可以看到标题`(title)`由原来的 `"MongoDB 教程"` 更新为了 `"MongoDB"`。

以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。
```sql
>db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})
```
__save() 方法__

`save()` 方法通过传入的文档来替换已有文档。语法格式如下：
```sql
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
```
参数说明：

* **document :**  文档数据。
* **writeConcern :** 可选，抛出异常的级别。

实例

以下实例中我们替换了 `_id` 为 `56064f89ade2f21f36b03136` 的文档数据：

```sql
>db.col.save({
    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "Runoob",
    "url" : "http://www.runoob.com",
    "tags" : [
            "mongodb",
            "NoSQL"
    ],
    "likes" : 110
})
```
替换成功后，我们可以通过 `find()` 命令来查看替换后的数据

```sql
>db.col.find().pretty()
{
        "_id" : ObjectId("56064f89ade2f21f36b03136"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "Runoob",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "NoSQL"
        ],
        "likes" : 110
}
>
```
更多实例:

只更新第一条记录：
```sql
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
```
全部更新：
```sql
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
```
只添加第一条：
```sql
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
```
全部添加加进去:
```sql
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
```
全部更新：
```sql
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
```
只更新第一条记录：
```sql
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```

__笔记__

在3.2版本开始，MongoDB提供以下更新集合文档的方法：

* **db.collection.updateOne()** 向指定集合更新单个文档
* **db.collection.updateMany()** 向指定集合更新多个文档

首先我们在test集合里插入测试数据
```sql
use test
db.test_collection.insert( [
{"name":"abc","age":"25","status":"zxc"},
{"name":"dec","age":"19","status":"qwe"},
{"name":"asd","age":"30","status":"nmn"},
] )
```
更新单个文档
```sql
> db.test_collection.updateOne({"name":"abc"},{$set:{"age":"28"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.test_collection.find()
{ "_id" : ObjectId("59c8ba673b92ae498a5716af"), "name" : "abc", "age" : "28", "status" : "zxc" }
{ "_id" : ObjectId("59c8ba673b92ae498a5716b0"), "name" : "dec", "age" : "19", "status" : "qwe" }
{ "_id" : ObjectId("59c8ba673b92ae498a5716b1"), "name" : "asd", "age" : "30", "status" : "nmn" }
>
```
更新多个文档
```sql
> db.test_collection.updateMany({"age":{$gt:"10"}},{$set:{"status":"xyz"}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.test_collection.find()
{ "_id" : ObjectId("59c8ba673b92ae498a5716af"), "name" : "abc", "age" : "28", "status" : "xyz" }
{ "_id" : ObjectId("59c8ba673b92ae498a5716b0"), "name" : "dec", "age" : "19", "status" : "xyz" }
{ "_id" : ObjectId("59c8ba673b92ae498a5716b1"), "name" : "asd", "age" : "30", "status" : "xyz" }
>
```

* **WriteConcern.NONE:** 没有异常抛出
* **WriteConcern.NORMAL:** 仅抛出网络错误异常，没有服务器错误异常
* **WriteConcern.SAFE:** 抛出网络错误异常、服务器错误异常；并等待服务器完成写操作。
* **WriteConcern.MAJORITY:**  抛出网络错误异常、服务器错误异常；并等待一个主服务器完成写操作。
* **WriteConcern.FSYNC_SAFE:**  抛出网络错误异常、服务器错误异常；写操作等待服务器将数据刷新到磁盘。
* **WriteConcern.JOURNAL_SAFE:** 抛出网络错误异常、服务器错误异常；写操作等待服务器提交到磁盘的日志文件。
* **WriteConcern.REPLICAS_SAFE:** 抛出网络错误异常、服务器错误异常；等待至少2台服务器完成写操作。

### 删除文档

>  `MongoDB remove()`函数是用来移除集合中的数据。

> `MongoDB`数据更新可以使用`update()`函数。在执行`remove()`函数前先执行`find()`命令来判断执行的条件是否正确，这是一个比较好的习惯。

语法：

`remove()` 方法的基本语法格式如下所示：
```sql
db.collection.remove(
   <query>,
   <justOne>
)
```

MongoDB 是 2.6 版本以后的，语法格式如下：
```sql
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```

参数说明：

* **query :** （可选）删除的文档的条件。
* **justOne :**  （可选）如果设为 `true` 或 `1`，则只删除一个文档。
* **writeConcern :** （可选）抛出异常的级别。

实例

以下文档我们执行两次插入操作：
```sql
>db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '学习网站',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```
使用 `find()` 函数查询数据：
```sql
> db.col.find()
{ "_id" : ObjectId("56066169ade2f21f36b03137"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "学习网站", "url" : "http://www.runoob.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
{ "_id" : ObjectId("5606616dade2f21f36b03138"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "学习网站", "url" : "http://www.runoob.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
```
接下来我们移除 `title` 为 `'MongoDB 教程'` 的文档：
```sql
>db.col.remove({'title':'MongoDB 教程'})
WriteResult({ "nRemoved" : 2 })           # 删除了两条数据
>db.col.find()
……                                        # 没有数据
```
如果你只想删除第一条找到的记录可以设置 `justOne` 为 `1`，如下所示：
```sql
>db.COLLECTION_NAME.remove(DELETION_CRITERIA,1)
```
如果你想删除所有数据，可以使用以下方式（类似常规 `SQL` 的 `truncate` 命令）：
```sql
>db.col.remove({})
>db.col.find()
>
```

__笔记__

`remove()` 方法已经过时了，现在官方推荐使用 `deleteOne()` 和 `deleteMany()` 方法。

如删除集合下全部文档：
```sql
db.inventory.deleteMany({})
```
删除 `status` 等于 `A` 的全部文档：
```sql
db.inventory.deleteMany({ status : "A" })
```
删除 `status` 等于 `D` 的一个文档：
```sql
db.inventory.deleteOne( { status: "D" } )
```

### 查询文档

> MongoDB 查询文档使用 `find()` 方法。
> `find()` 方法以非结构化的方式来显示所有文档。

语法：

MongoDB 查询数据的语法格式如下：
```sql
db.collection.find(query, projection)
```
* **query ：** 可选，使用查询操作符指定查询条件
* **projection ：** 可选，使用投影操作符指定返回的键。查询时返回文档中所有键值，只需省略该参数即可（默认省略）。

如果你需要以易读的方式来读取数据，可以使用 `pretty()` 方法，语法格式如下：
```sql
>db.col.find().pretty()
```
`pretty()` 方法以格式化的方式来显示所有文档。

实例:

以下实例我们查询了集合 `col` 中的数据：
```sql
> db.col.find().pretty()
{
        "_id" : ObjectId("56063f17ade2f21f36b03133"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```
除了 `find()` 方法之外，还有一个 `findOne()` 方法，它只返回一个文档。

__MongoDB 与 RDBMS Where 语句比较__

如果你熟悉常规的 `SQL` 数据，通过下表可以更好的理解 `MongoDB` 的条件语句查询：

|操作 	|格式 				|范例 	|RDBMS中的类似语句
|-------|-------------------|-------|---------------------------------------------
|等于 	|`{<key>:<value>}` 	|`db.col.find({"by":"学习网站"}).pretty()` 	|`where by = '学习网站'`
|小于 	|`{<key>:{$lt:<value>}`} 	|`db.col.find({"likes":{$lt:50}}).pretty()` 	|`where likes < 50`
|小于或等于 |`{<key>:{$lte:<value>}`} 	|`db.col.find({"likes":{$lte:50}}).pretty()` 	|`where likes <= 50`
|大于 	|`{<key>:{$gt:<value>}`} 	|`db.col.find({"likes":{$gt:50}}).pretty()` 	|`where likes > 50`
|大于或等于 	|`{<key>:{$gte:<value>}`} 	|`db.col.find({"likes":{$gte:50}}).pretty()` 	|`where likes >= 50`
|不等于 	|`{<key>:{$ne:<value>}`} 	|`db.col.find({"likes":{$ne:50}}).pretty()` 	|`where likes != 50`

#### MongoDB AND 条件

MongoDB 的 `find()` 方法可以传入多个键`(key)`，每个键`(key)`以逗号隔开，即常规 `SQL` 的 `AND` 条件。

语法格式如下：
```sql
>db.col.find({key1:value1, key2:value2}).pretty()
```

实例

以下实例通过 `by` 和 `title` 键来查询 学习网站 中 `MongoDB` 教程 的数据
```sql
> db.col.find({"by":"学习网站", "title":"MongoDB 教程"}).pretty()
{
        "_id" : ObjectId("56063f17ade2f21f36b03133"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```
以上实例中类似于 `WHERE` 语句：`WHERE by='学习网站'` AND `title='MongoDB 教程'`

__MongoDB OR 条件__

MongoDB OR 条件语句使用了关键字 `$or`,语法格式如下：
```sql
>db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```
实例

以下实例中，我们演示了查询键 `by` 值为 学习网站 或键 `title` 值为 `MongoDB` 教程 的文档。
```sql
>db.col.find({$or:[{"by":"学习网站"},{"title": "MongoDB 教程"}]}).pretty()
{
        "_id" : ObjectId("56063f17ade2f21f36b03133"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```
`AND` 和 `OR` 联合使用

以下实例演示了 `AND` 和 `OR` 联合使用，类似常规 `SQL` 语句为： `'where likes>50 AND (by = '学习网站' OR title = 'MongoDB 教程')'`

```sql
>db.col.find({"likes": {$gt:50}, $or: [{"by": "学习网站"},{"title": "MongoDB 教程"}]}).pretty()
{
        "_id" : ObjectId("56063f17ade2f21f36b03133"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "学习网站",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```

__笔记__

补充一下 projection 参数的使用方法
```sql
db.collection.find(query, projection)
```
若不指定 `projection，`则默认返回所有键，指定 `projection` 格式如下，有两种模式
```sql
db.collection.find(query, {title: 1, by: 1}) -- inclusion模式 指定返回的键，不返回其他键
db.collection.find(query, {title: 0, by: 0}) -- exclusion模式 指定不返回的键,返回其他键
```
`_id` 键默认返回，需要主动指定 `_id:0` 才会隐藏

两种模式不可混用（因为这样的话无法推断其他键是否应返回）
```sql
db.collection.find(query, {title: 1, by: 0}) -- 错误
```
只能全`1`或全`0`，除了在`inclusion`模式时可以指定_id为0
```sql
db.collection.find(query, {_id:0, title: 1, by: 1}) -- 正确
```

<a href="operators.md" style="float: right;">MongoDB 条件操作符</a>