### 		SQL 笔记

## 函数

### MAX() 最大值函数

* `MAX()` 函数返回所选列的最大值

```SQL
SELECT MAX(column_name) FROM table_name
```

### MIN() 最小值函数

* `MIN()` 函数返回所选列的最小值

```SQL
SELECT MIN(column_name) FROM table_name
```

### COUNT() 总行数函数

* `COUNT()` 数返回符合指定条件的行数。（NULL 不计入）

```SQL
SELECT COUNT(column_name) FROM table_name
```

### SUM() 求和函数

* `SUM()` 函数返回**数字列**的总和

```SQL
SELECT SUM(column_name) FROM table_name
```

### AVG() 平均数函数

* `AVG()` 函数返回数字列的平均值

```SQL
SELECT AVG(column_name) FROM table_name
```

### SQRT() 平方根函数

* `SQRT()` 函数用于计算得出任何数值的平方根。你可以像下面这样使用 SELECT 语句计算任何数值的平方根

```SQL
SELECT SQRT(16);
```

### ROUND() 数值舍入函数

* `ROUND()` 函数用于把数值字段舍入为指定的小数位数

```SQL
SELECT ROUND(column_name,decimals) FROM table_name;
```

|参数 |	描述|
|-----|-----|
| `column_name` | 必需。要舍入的字段。|
| `decimals` | 必需。规定要返回的小数位数。|


### RAND() 随机数函数

* `RAND()` 函数，用于产生 0 至 1 之间的随机数

```SQL
SELECT RAND();
```




### SQL 日期函数

TODO…… https://www.w3cschool.cn/sql/82rg1ozi.html

<details>
  <summary>
	下面的列表中是 `SQL` 中所有与日期和时间相关的重要函数。 `RDBMS` 可能会支持更多其他的函数。下面的列表基于 `MySQL` 关系型数据库管理系统
  </summary>

| 名称 | 描述|
|------|-----|
| `ADDDATE()` | 增加日期|
| `ADDTIME()` | 增加时间|
| `CONVERT_TZ()` | 将当前时区更改为另一时区|
| `CURDATE()` | 返回当前日期|
| `CURRENT_DATE(), CURRENT_DATE` | CURDATE() 的别名|
| `CURRENT_TIME(), CURRENT_TIME` | CURTIME() 的别名|
| `CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP` | NOW() 的别名|
| `CURTIME()` | 返回当前时间|
| `DATE_ADD()` | 将两个日期相加|
| `DATE_FORMAT()` | 按照指定格式格式化日期|
| `DATE_SUB()` | 将两个日期相减|
| `DATE()` | 从 date 或者 datetime 表达式中提取出日期部分|
| `DATEDIFF()` | 将两个日期相减|
| `DAY()` | DAYOFMONTH() 的别名|
| `DAYNAME()` | 返回某天在用星期中的名称|
| `DAYOFMONTH()` | 返回某天是当月的第几天 （1-31）|
| `DAYOFWEEK()` | 返回某天是该星期的第几天|
| `DAYOFYEAR()` | 返回某天是一年中的第几天（1-366）|
| `EXTRACT` | 提取日期中的某一部分|
| `FROM_DAYS()` | 将天数转换为日期|
| `FROM_UNIXTIME()` | 将某个日期格式化为 UNIX 时间戳|
| `HOUR()` | 提取小时|
| `LAST_DAY` | 返回参数日期所在月份的最后一天|
| `LOCALTIME(), LOCALTIME` | NOW() 的别名|
| `LOCALTIMESTAMP, LOCALTIMESTAMP()` | NOW() 的别名|
| `MAKEDATE()` | 利用年份和某天在该年所处的天数来创建日期|
| `MAKETIME` | MAKETIME()|
| `MICROSECOND()` | 由参数返回微秒|
| `MINUTE()` | 由参数返回分钟|
| `MONTH()` | 返回日期参数的月份|
| `MONTHNAME()` | 返回月份的名字|
| `NOW()` | 返回当前日期和时间|
| `PERIOD_ADD()` | 向年月格式的日期数据之间添加一段时间|
| `PERIOD_DIFF()` | 返回两个年月格式的日期数据之间的月份数|
| `QUARTER()` | 返回日期参数所在的季度|
| `SEC_TO_TIME()` | 将秒数转换为 'HH:MM:SS' 格式|
| `SECOND()` | 返回参数中的秒数 (0-59)|
| `STR_TO_DATE()` | 将字符串转换为日期数据|
| `SUBDATE()` | 以三个参数调用的时候是 DATE_SUB() 的同义词|
| `SUBTIME()` | 减去时间|
| `SYSDATE()` | 返回函数执行的时的时刻|
| `TIME_FORMAT()` | 格式化时间|
| `TIME_TO_SEC()` | 将时间参数转换为秒数|
| `TIME()` | 返回参数表达式中的时间部分|
| `TIMEDIFF()` | 将两个时间相减|
| `TIMESTAMP()` | 只有一个参数时，该函数返回 date 或者 datetime 表达式。当有两个参数时，将两个参数相加。|
| `TIMESTAMPADD()` | 在 datetime 表达式上加上一段时间|
| `TIMESTAMPDIFF()` | 在 datetime 表达式上减去一段时间|
| `TO_DAYS()` | 将日期参数转换为天数|
| `UNIX_TIMESTAMP()` | 返回 UNIX 时间戳|
| `UTC_DATE()` | 返回当前 UTC 日期|
| `UTC_TIME()` | 返回当前 UTC 时间|
| `UTC_TIMESTAMP()` | 返回当前 UTC 日期和时间|
| `WEEK()` | 返回参数的星期数|
| `WEEKDAY()` | 返回日期参数时一个星期中的第几天|
| `WEEKOFYEAR()` | 返回日期参数是日历上的第几周 (1-53)|
| `YEAR()` | 返回日期参数中的年份|
| `YEARWEEK()` | 返回年份和星期|

</details>

### NOW() 获取当前时间函数

* NOW() 函数返回当前系统的日期和时间。

```SQL
SELECT NOW() FROM table_name;

-- SQLserver
SELECT GETDATE()
```

### FORMAT() 格式化函数

* `FORMAT()` 函数用于对字段的显示进行格式化

```SQL
SELECT FORMAT(column_name,format) FROM table_name;
```

|参数 |	描述|
|-----|-----|
|`column_name` | 必需。要格式化的字段。|
|`format` | 必需。规定格式。|





### GROUP BY 分组语句

> `GROUP BY` 语句通常与集合函数（`COUNT，MAX，MIN，SUM，AVG`）一起使用，以按一个或多个列对结果集进行分组。

* `GROUP BY` 语句用于结合 `Aggregate` 函数，根据一个或多个列对结果集进行分组

```SQL
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```

### HAVING 子句
> 在 `SQL` 中增加 `HAVING` 子句原因是，`WHERE` 关键字无法与 `Aggregate` 函数一起使用。
> `HAVING` 子句已添加到 `SQL` 中，因为 `WHERE` 关键字不能用于聚合函数。

* `HAVING` 子句, 让 `Aggregate` 函数可以在 `WHERE` 关键字后使用

```SQL
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```


### FIELD() 查找字段函数

* `FIELD(str,str1,str2,str3,...)`

> 返回的索引（从1开始的位置）的 `str` 在 `str1，str2，str3，...` 列表中。如果str没有找到，则返回0。

```SQL
SELECT FIELD('ej', 'Hej', 'ej', 'Heja', 'hej', 'foo')
-- 返回： 2
```

### FIRST() 查找第一个行函数

* `FIRST()` 函数返回指定的列中第一个记录的值。

```SQL
SELECT FIRST(column_name) FROM table_name
-- MS Access 支持 FIRST() 函数。

-- SQL Server 语法
SELECT TOP 1 column_name FROM table_name ORDER BY column_name ASC

-- MySQL 语法
SELECT column_name FROM table_name ORDER BY column_name ASC LIMIT 1

-- Oracle 语法
SELECT column_name FROM table_name WHERE ORDER BY column_name ASC ROWNUM <=1
```

### LAST() 查找最后一个行函数

* `LAST()` 函数返回指定的列中第一个记录的值。

```SQL
SELECT LAST(column_name) FROM table_name
-- MS Access 支持 LAST() 函数。

-- SQL Server 语法
SELECT TOP 1 column_name FROM table_name ORDER BY column_name DESC

-- MySQL 语法
SELECT column_name FROM table_name ORDER BY column_name DESC LIMIT 1

-- Oracle 语法
SELECT column_name FROM table_name WHERE ORDER BY column_name DESC ROWNUM <=1
```


### LCASE()、LOWER() 转为小写

* sql `LCASE()` 函数把字段的值转换为小写。
* SQLserver `LOWER()` 函数把字段的值转换为小写。

```SQL
-- sql 语法
SELECT LCASE('HELLO WORD')
-- SQLserver 语法
SELECT LOWER('HELLO WORD')
```

### UCASE() 、 UPPER() 转为大写

* sql `UCASE()` 函数把字段的值转换为大写。
* SQLserver `UPPER()` 函数把字段的值转换为大写。

```SQL
-- sql 语法
SELECT UCASE('hello word')
-- SQLserver 语法
SELECT UPPER('hello word')
```

### MID() 文本提取字符函数

* `MID()` 函数用于从文本字段中提取字符

```SQL
SELECT MID(column_name,start[,length]) FROM table_name
```

|参数 |	描述|
|-----|-----|
|`column_name` | 必需。要提取字符的字段。|
|`start` | 必需。规定开始位置（起始值是 1）。|
|`length` | 可选。要返回的字符数。如果省略，则 `MID()` 函数返回剩余文本。|

### LEN() 获取字符长度函数

* `LEN()` 函数返回文本字段中值的长度

```SQL
SELECT LEN(column_name) FROM table_name
```

### CONCAT() 连接字符串函数

* `CONCAT()` 函数用于将两个字符串连接为一个字符串

```SQL
SELECT CONCAT('FIRST ', 'SECOND');
-- 返回： FIRST SECOND
```

### REPLACE() 字符串替换函数

```SQL
-- 语法
replace(original-string，search-string，replace-string)

-- 例子：
-- 将文章（article）表中标题（title）列名为 hello 的字符改为 你好
update `article` set title=replace(title,'hello','你好');
```

|参数 |	描述|
|-----|-----|
| `original-string` | 被搜索的字符串。可为任意长度。 |
| `search-string` | 要搜索并被 `replace-string` 替换的字符串。该字符串的长度不应超过 255 个字节。如果 `search-string` |是空字符串，则按原样返回原始字符串。
| `replace-string` | 该字符串用于替换 `search-string`。可为任意长度。如果 `replacement-string` 是空字符串，则删除出现的所有 `search-string`。 |

### TRIM() 去除字符串空格函数

> SQL 中的 TRIM 函数是用来移除掉一个字串中的字头或字尾。最常见的用途是移除字首或字尾的空白。这个函数在不同的资料库中有不同的名称：

* MySQL: `TRIM( )`, `RTRIM( )`, `LTRIM( )`
* Oracle: `RTRIM( )`, `LTRIM( )`
* SQL Server: `RTRIM( )`, `LTRIM( )`

```SQL
SELECT TRIM('   Sample   ');
-- 返回： 'Sample'
SELECT LTRIM('   Sample   ');
-- 返回： Sample   '
SELECT RTRIM('   Sample   ');
-- 返回： '   Sample'
```

### NULL 空相关的函数

> `ISNULL()`、`NVL()`、`IFNULL()` 和 `COALESCE()` 函数

```SQL
--  下面例子，如果函数内第一个参数是 NULL，返回第二个参数

-- SQL Server / MS Access
SELECT ISNULL(NULL,0)
-- Oracle
SELECT NVL(NULL,0)
-- MySQL
SELECT IFNULL(NULL,0)
SELECT COALESCE(NULL,0)
```

### 新增一列

> 新增一列，并让其自动累加

```SQL
ALTER TABLE table_name ADD column_name INT IDENTITY ( 1, 1 ) NOT NULL
```