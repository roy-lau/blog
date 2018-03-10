## Mysql 元数据

<a href="README.md">目录</a>

* **查询结果信息：**  `SELECT, UPDATE` 或 `DELETE`语句影响的记录数。
* **数据库和数据表的信息：**  包含了数据库及数据表的结构信息。
* **MySQL服务器信息：**  包含了数据库服务器的当前状态，版本号等

### 获取查询语句影响的记录数

__PERL 实例__

在 DBI 脚本中， 语句影响的记录数通过函数 do( ) 或 execute( )返回：

```perl
# 方法 1
# 使用do( ) 执行  $query
my $count = $dbh->do ($query);
# 如果发生错误会输出 0
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);

# 方法 2
# 使用prepare( ) 及 execute( ) 执行  $query
my $sth = $dbh->prepare ($query);
my $count = $sth->execute ( );
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);
```

__PHP 实例__

在PHP中，你可以使用 mysqli_affected_rows( ) 函数来获取查询语句影响的记录数。

```php
$result_id = mysqli_query ($conn_id, $query);
# 如果查询失败返回
$count = ($result_id ? mysqli_affected_rows ($conn_id) : 0);
print ("$count 条数据被影响\n");
```

### 数据库和数据表列表

__PERL 实例__

```perl
# 获取当前数据库中所有可用的表。
my @tables = $dbh->tables ( );
foreach $table (@tables ){
   print "表名 $table\n";
}
```

__PHP 实例__

输出 MySQL 服务器上的所有数据库：
```php

<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
$db_list = mysqli_query($conn, 'SHOW DATABASES');
while ($db = mysqli_fetch_object($db_list))
{
  echo $db->Database . "<br />";
}
mysqli_close($conn);
?>
```

### 获取服务器元数据

|命令 				|	描述
|-------------------|---------------------------
|SELECT VERSION( ) 	|	服务器版本信息
|SELECT DATABASE( ) |	当前数据库名 (或者返回空)
|SELECT USER( ) 	|	当前用户名
|SHOW STATUS 		|	服务器状态
|SHOW VARIABLES 	|	服务器配置变量


<a href="using-sequences.md" style="float: right;"><—— mysql 序列使用</a>
