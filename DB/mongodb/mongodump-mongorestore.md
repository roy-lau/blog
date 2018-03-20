# 						MongoDB 备份(mongodump)与恢复(mongorestore)

[目录](README.md)

#### MongoDB数据备份

> 在`Mongodb`中我们使用`mongodump`命令来备份`MongoDB`数据。该命令可以导出所有数据到指定目录中。

> `mongodump`命令可以通过参数指定导出的数据量级转存的服务器。

语法
```mongodb
>mongodump -h dbhost -d dbname -o dbdirectory
```

* **-h：** `MongDB`所在服务器地址，例如：`127.0.0.1`，当然也可以指定端口号：`127.0.0.1:27017`
* **-d：** 需要备份的数据库实例，例如：`test`
* **-o：** 备份的数据存放位置，例如：`c:\data\dump`，当然该目录需要提前建立，在备份完成后，系统自动在`dump`目录下建立一个`test`目录，这个目录里面存放该数据库实例的备份数据。

实例

在本地使用 `27017` 启动你的`mongod`服务。打开命令提示符窗口，进入`MongoDB`安装目录的`bin`目录输入命令`mongodump`:
```mongodb
>mongodump
```
执行以上命令后，客户端会连接到ip为 `127.0.0.1` 端口号为 `27017` 的`MongoDB`服务上，并备份所有数据到 `bin/dump/` 目录中。命令输出结果如下：

<img src="imgs/mongodump.png" alt="mongodump输出结果图" />

mongodump 命令可选参数列表如下所示：

|语法											|描述					|实例
|-----------------------------------------------|-----------------------|---------------------
|`mongodump --host HOST_NAME --port PORT_NUMBER`|该命令将备份所有`MongoDB`数据	|`mongodump --host runoob.com --port 27017`
|`mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY`|		|`mongodump --dbpath /data/db/ --out /data/backup/`
|`mongodump --collection COLLECTION --db DB_NAME`	|该命令将备份指定数据库的集合。	|`mongodump --collection mycol --db test`

#### MongoDB数据恢复

mongodb使用 mongorestore 命令来恢复备份的数据。

语法
```mongodb
>mongorestore -h <hostname><:port> -d dbname <path>
```
* **--host <:port>, -h <:port>：** MongoDB所在服务器地址，默认为： localhost:27017
* **--db , -d ：**    需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2
* **--drop：** 恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用哦！
* **<path>：** `mongorestore` 最后的一个参数，设置备份数据所在位置，例如：`c:\data\dump\test`。你不能同时指定 `<path>` 和 `--dir` 选项，`--dir`也可以设置备份目录。
* **--dir：** 指定备份的目录,你不能同时指定 `<path>` 和 `--dir` 选项。

接下来我们执行以下命令:
```mongodb
>mongorestore
```
执行以上命令输出结果如下：

<img src="imgs/mongorestore.png" alt="mongorestore输出结果图" />

<a href="" style="float: right;"></a>