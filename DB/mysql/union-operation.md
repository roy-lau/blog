## UNION操作符


<a href="README.md">目录</a>


### mysql UNION操作符

> MySQL UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据。

语法

```mysql
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
```

参数

* `expression1, expression2, ... expression_n:` 要检索的列。
* `tables:` 要检索的数据表。
* `WHERE conditions:` 可选， 检索条件。
* `DISTINCT:` 可选，删除结果集中重复的数据。默认情况下 `UNION` 操作符已经删除了重复数据，所以 `DISTINCT` 修饰符对结果没啥影响。
* `ALL:` 可选，返回所有结果集，包含重复数据。


__创建演示数据库__

```mysql
# 创建 Website 表
mysql> CREATE TABLE IF NOT EXISTS `Websites`(
   `Websites_id` INT UNSIGNED AUTO_INCREMENT,
   `Websites_name` VARCHAR(100) NOT NULL,
   `Websites_url` VARCHAR(80) NOT NULL,
   `Websites_alexa` VARCHAR(100) NOT NULL,
   `Websites_country` VARCHAR(100) NOT NULL,
   PRIMARY KEY ( `Websites_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入数据
mysql> INSERT INFO Websites
	(Websites_name, Websites_url, Websites_alexa, Websites_country)
	VALUES
	("Google", "https://www.google.com", 1, "USE"),
	("淘宝", "https://www.taobao.com", 13, "CN"),
	("菜鸟教程", "https://www.runoob.com", 4689, "CN"),
	("GitHub", "https://github.com", 20, "USN"),
	("Facebook", "https://www.facebook.com", 3, "USN"),
	("stackoverflow", "https://stackoverflow.com", 0, "IND");

# 查看数据
mysql> SELECT * FROM Websites;
+----+------------------+---------------------------+----------------+------------------+
| id | Websites_name    | Websites_url  			| Websites_alexa | Websites_country |
+----+------------------+---------------------------+----------------+------------------+
| 1  | Google       	| https://www.google.cm/    | 1     		 | USA     			|
| 2  | 淘宝         	| https://www.taobao.com/   | 13    		 | CN      			|
| 3  | 菜鸟教程     	| http://www.runoob.com/    | 4689  		 | CN      			|
| 4  | 微博         	| http://weibo.com/         | 20    		 | CN      			|
| 5  | Facebook     	| https://www.facebook.com/ | 3     		 | USA     			|
| 7  | stackoverflow 	| http://stackoverflow.com/ | 0 			 | IND     			|
+----+------------------+---------------------------+----------------+------------------+


# 创建 app 表
mysql> CREATE TABLE IF NOT EXISTS `apps`(
   `apps_id` INT UNSIGNED AUTO_INCREMENT,
   `apps_name` VARCHAR(100) NOT NULL,
   `apps_url` VARCHAR(80) NOT NULL,
   `apps_country` VARCHAR(100) NOT NULL,
   PRIMARY KEY ( `apps_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入数据
mysql> INSERT INFO apps
	(apps_id, apps_name, apps_url, apps_country)
	VALUES
	("QQ APP", "https://im.qq.com", "CN"),
	("微博 APP", "https://weibo.com", "CN"),
	("淘宝 APP", "https://taobao.com", "CN");

# 查看数据
mysql> SELECT * FROM apps;
+----+--------------+---------------------------+---------------+
| id | apps_name   	| apps_url                  | apps_country 	|
+----+--------------+---------------------------+---------------+
|  1 | QQ APP     	| http://im.qq.com/       	| CN      		|
|  2 | 微博 APP 	| http://weibo.com/       	| CN      		|
|  3 | 淘宝 APP 	| https://www.taobao.com/ 	| CN      		|
+----+--------------+---------------------------+---------------+
```

__mysql UNION 实例__

> 下面的 SQL 语句从 "Websites" 和 "apps" 表中选取所有不同的country（只有不同的值）：

```mysql
SELECT apps_country FROM Websites
UNION
SELECT apps_country FROM apps
ORDER BY apps_country;
+---------------+
| apps_country 	|
+---------------+
| CN      		|
| IND      		|
| USA      		|
+---------------+
```

__注释：__ `UNION` 不能用于列出两个表中所有的`apps_country`。如果一些网站和APP来自同一个国家，每个国家只会列出一次。`UNION` 只会选取不同的值。请使用 `UNION ALL` 来选取重复的值！

__mysql UNION ALL 实例__

> 下面的 `SQL` 语句使用 `UNION ALL` 从 `"Websites"` 和 `"apps"` 表中选取所有的`apps_country`（也有重复的值）：

```mysql
SELECT apps_country FROM Websites
UNION ALL
SELECT apps_country FROM apps
ORDER BY apps_country;
+---------------+
| apps_country 	|
+---------------+
| CN      		|
| CN      		|
| CN      		|
| CN      		|
| CN      		|
| IND      		|
| USA      		|
| USA      		|
| USA      		|
+---------------+
```

__带有 WHERE 的 SQL UNION ALL 实例__

> 下面的 `SQL` 语句使用 `UNION ALL` 从 `"Websites"` 和 `"apps"` 表中选取所有的中国(CN)的数据（也有重复的值）：

```mysql
SELECT country, name FROM Websites
WHERE country='CN'
UNION ALL
SELECT country, app_name FROM apps
WHERE country='CN'
ORDER BY country;
+---------------+-----------+
| apps_country 	|apps_name  |
+---------------+-----------+
| CN      		|淘宝     	|
| CN      		|QQ APP     |
| CN      		|菜鸟教程   |
| CN      		|微博 APP   |
| CN      		|微博 	 	|
| CN      		|淘宝 APP 	|
+---------------+-----------+
```

<a href="where-clause.md" style="float: right;"><—— mysql where语句</a>
