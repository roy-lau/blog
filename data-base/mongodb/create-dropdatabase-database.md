# 						MongoDB 创建 删除 数据库

[目录](README.md)

### 创建数据库

语法：

```mongodb
use DATABASE_NAME
```
如果数据库不存在，则创建数据库，否则切换到指定的数据库

实例：

创建`test_tbl`,查看当前数据库
```mongodb
> use test_tbl
switched to db test_tbl
> db
test_tbl
```

查看所有数据库
```mongodb
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

可以看到，我们刚创建的数据库 test_tbl 并不在数据库的列表中， 要显示它，我们需要向 test_tbl 数据库插入一些数据。
```mongodb
> use test_tbl
switched to db test_tbl
>  db.test_tbl.insert({"name":"资源共享"})
WriteResult({ "nInserted" : 1 })
> show dbs
admin     0.000GB
config    0.000GB
local     0.000GB
test_tbl  0.000GB
```

### 删除数据库

语法：

```mongodb
db.dropDatabase()
```
删除当前数据库，默认为`test`,可以使用 `db`命令查询当前数据库名

实例：

```mongodb
> show dbs 			# 首先，查看所有数据库
admin     0.000GB
config    0.000GB
local     0.000GB
test_tbl  0.000GB
> use test_tbl		# 切换到 test_tbl 数据库
switched to db test_tbl
> db.dropDatabase() # 删除当前数据库
{ "dropped" : "test_tbl", "ok" : 1 }
> show dbs			# 查看是否删除
admin   0.000GB
config  0.000GB
local   0.000GB
>
```

__删除集合__

删除集合语法格式如下：
```mongodb
db.collection.drop()
```

下面实例 删除 `test_tbl`数据库中的集合 `site`

```mongodb
> use test_tbl
switched to db test_tbl
> show tables
site
> db.site.drop()
true
> show tables
```

<a href="create-delete-collection.md" style="float: right;"> 创建 删除集合</a>