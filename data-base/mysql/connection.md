## MySQL 连接

<a href="README.md">目录</a>

 以下是从命令行中连接mysql服务器的简单实例：

```bash
[root@host]# mysql -u root -p
Enter password:******

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2854760 to server version: 5.0.9

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.


mysql> exit
Bye
```

PHP 脚本连接 MySQL

该函数有 6 个参数，在成功链接到 MySQL 后返回连接标识，失败返回 FALSE

```php
mysqli_connect(host,username,password,dbname,port,socket);
```
使用PHP的 mysqli_close() 函数来断开与MySQL数据库的链接。
该函数只有一个参数为 mysqli_connect() 函数创建连接成功后返回的 MySQL 连接标识符。
```php
bool mysqli_close ( mysqli $link )
```

_本函数关闭指定的连接标识所关联的到 MySQL 服务器的非持久连接。如果没有指定 `link_identifier，`则关闭上一个打开的连接。_
_提示：通常不需要使用 mysqli_close()，因为已打开的非持久连接会在脚本执行完毕后自动关闭。_

连接 MySQL参数说明

| 参数			| 	描述
|---------------|------------------------------
|host			| 	可选。规定主机名或 IP 地址。
|username		| 	可选。规定 MySQL 用户名。
|password		| 	可选。规定 MySQL 密码。
|dbname			| 	可选。规定默认使用的数据库。
|port			| 	可选。规定尝试连接到 MySQL 服务器的端口号。
|socket			| 	可选。规定 socket 或要使用的已命名 pipe。

PHP脚本连接实例
```php
<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('Could not connect: ' . mysqli_error());
}
echo '数据库连接成功！';
mysqli_close($conn);
?>
```

NODEJS脚本连接实例
```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```


<a href="create-drop-select-database.md" style="float: right;"><—— mysql 创建 删除 选择 数据库</a>
