# 						MongoDB 创建 删除 集合

[目录](README.md)

### 创建集合

语法：
```sql
db.createCollection(name, options)
```

参数说明：
* name: 要创建的集合名称
* options: 可选参数，指定有关内存大小及索引的选项

options 参数如下：

|字段 		|类型 	|描述
|-----------|-------|---------------------------------------
|capped 	|布尔 	|（可选）如果为 `true`，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 **当该值为 true 时，必须指定 `size` 参数。**
|autoIndexId 	|布尔 	|（可选）如为 `true`，自动在 `_id` 字段创建索引。默认为 `false`。
|size 			|数值 	|（可选）为固定集合指定一个最大值（以字节计）。如果 `capped` 为 `true`，也需要指定该字段。
|max 			|数值 	|（可选）指定固定集合中包含文档的最大数量。

_在插入文档时，`MongoDB` 首先检查固定集合的 `size` 字段，然后检查 `max` 字段。_

实例:

在 test_tbl 数据库中创建 user 集合：
```sql
> use test_tbl
switched to db test
> db.createCollection("user")
{ "ok" : 1 }
>
```

查看已有集合
```sql
> show collections
user
>
```

createCollection() 关键参数的用法：
创建固定集合 mycol，整个集合空间大小 6142800 KB, 文档最大个数为 10000 个。

```sql
> db.createCollection("mycol",{capped:true,autoIndexId:true,size:6142800,max:10000})
{
        "note" : "the autoIndexId option is deprecated and will be removed in a future release",
        "ok" : 1
}
>
```
在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。

```sql
> db.mycol2.insert({name:"资源共享"})
WriteResult({ "nInserted" : 1 })
> show collections
mycol
mycol2
user
```

### 删除集合

语法：

```sql
db.collection.drop()
```

返回值

> 如果成功删除选定集合，则 `drop()` 方法返回 `true`，否则返回 `false`。

实例：

在数据库 `test_tbl` 中， 可以先通过 `show collections` 命令查看已存在的集合。
```sql
> use test_tbl
switched to db test_tbl
> show collections
mycol
mycol2
user
```
删除集合
```sql
> db.mycol2.drop()
true
```
通过 `show collections` 再次查看数据库`test_tbl`集合
```sql
> show collections
mycol
user
>
```

从返回结果中可以看出 mycol2 集合已被删除。


<a href="" style="float: right;"></a>