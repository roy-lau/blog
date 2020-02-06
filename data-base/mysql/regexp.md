## mysql regexp正则表达式


<a href="README.md">目录</a>

|模式	 	|描述																											 |
|-----------|----------------------------------------------------------------------------------------------------------------|
|`^`		|匹配输入字符串的开始位置。如果设置了 `RegExp` 对象的 `Multiline` 属性，`^` 也匹配 `'\n'` 或 `'\r'` 之后的位置。	|
|`$`		|匹配输入字符串的结束位置。如果设置了`RegExp` 对象的 `Multiline` 属性，`$` 也匹配 `'\n'` 或 `'\r'` 之前的位置。	|
|`.`		|匹配除 `"\n"` 之外的任何单个字符。要匹配包括 `'\n'` 在内的任何字符，请使用象 `'[.\n]'` 的模式。				|
|`[...]` 	|字符集合。匹配所包含的任意一个字符。例如， `'[abc]'` 可以匹配 `"plain"` 中的`'a'`。							|
|`[^...]` 	|负值字符集合。匹配未包含的任意字符。例如， `'[^abc]'` 可以匹配 `"plain"` 中的`'p'`。							|
|`p1 p2 p3` |匹配 `p1` 或 `p2` 或 `p3`。例如，`'z food'` 能匹配 `"z"` 或 `"food"`。`'(z f)ood'` 则匹配 `"zood"` 或 `"food"`。	|
|`*`	 	|匹配前面的子表达式零次或多次。例如，`zo*` 能匹配 `"z"` 以及 `"zoo"`。`*` 等价于`{0,}`。						|
|`+`		|匹配前面的子表达式一次或多次。例如，`'zo+'` 能匹配 `"zo"` 以及 `"zoo"`，但不能匹配 `"z"`。`+` 等价于 `{1,}`。	|
|`{n}`	 	|`n` 是一个非负整数。匹配确定的 `n` 次。例如，'o{2}' 不能匹配 `"Bob"` 中的 'o'，但是能匹配 "food" 中的两个 o。	|
|`{n,m}`	|`m` 和 `n` 均为非负整数，其中`n <= m`。最少匹配 `n` 次且最多匹配 `m` 次。										|

实例

* 查找`name`字段中以`'st'`为开头的所有数据：
```sql
mysql> SELECT name FROM person_tbl WHERE name REGEXP '^st';
```
* 查找`name`字段中以`'ok'`为结尾的所有数据：
```sql
mysql> SELECT name FROM person_tbl WHERE name REGEXP 'ok$';
```
* 查找`name`字段中包含`'mar'`字符串的所有数据：
```sql
mysql> SELECT name FROM person_tbl WHERE name REGEXP 'mar';
```
* 查找`name`字段中以元音字符开头或以`'ok'`字符串结尾的所有数据：
```sql
mysql> SELECT name FROM person_tbl WHERE name REGEXP '^[aeiou]|ok$';
```

<a href="transaction.md" style="float: right;"><—— mysql 事务</a>
