#  					 	排序规则


## 数据库排序规则

### 使用 SERVERPROPERTY 函数 ，查询 SQL Server 实例的服务器排序规则

```SQL
SELECT CONVERT(varchar, SERVERPROPERTY('collation'));
```

### 使用 fn_helpcollations() 内置函数，查询服务器所有可用排序规则

```SQL
SELECT * FROM sys.fn_helpcollations();
```

### 使用 ALTER DATABASE 语句更改用户数据库的排序规则

```SQL
ALTER DATABASE myDB COLLATE Greek_CS_AI;
```
_更改数据库级排序规则不会影响列级排序规则或表达式级排序规则。_

### 检索数据库的当前排序规则

```SQL
SELECT CONVERT (VARCHAR(50), DATABASEPROPERTYEX('database_name','collation'));
```

## 列级排序规则


### 使用 ALTER TABLE 语句更改列的排序规则

> 表达式级排序规则在语句运行时设置，并且影响结果集的返回方式。 这可以使 ORDER BY 排序结果特定于区域设置。 要实现表达式级别的排序规则，请使用如下的 COLLATE 子句：

```SQL
SELECT name FROM customer ORDER BY name COLLATE Latin1_General_CS_AI;
```

## 表达式级排序规则

> 表达式级排序规则在语句运行时设置，并且影响结果集的返回方式。 这可以使 ORDER BY 排序结果特定于区域设置。 要实现表达式级别的排序规则，请使用如下的 COLLATE 子句

```SQL
SELECT name FROM customer ORDER BY name COLLATE Latin1_General_CS_AI;
```


## 设置数据库排序规则

```SQL
-- 使用 master 数据库
USE master;  
GO  
-- 如果 MyOptionsTest 数据库不为空，删除掉 MyOptionsTest 数据库
IF DB_ID (N'MyOptionsTest') IS NOT NULL  
DROP DATABASE MyOptionsTest;  
GO  
-- 创建 MyOptionsTest 数据库，并设置排序规则为 Latin1_General_100_CS_AS_SC
CREATE DATABASE MyOptionsTest  
COLLATE Latin1_General_100_CS_AS_SC;  
GO  
  
-- 检查 MyOptionsTest 数据库的排序规则。
SELECT name, collation_name  
FROM sys.databases  
WHERE name = N'MyOptionsTest';  
GO
```

## 更改数据库排序规则

```SQL
USE master;  
GO  
-- 设置 MyOptionsTest 数据库的排序规则为 French_CI_AS
ALTER DATABASE MyOptionsTest  
COLLATE French_CI_AS; 
GO  
  
-- 检查 MyOptionsTest 数据库的排序规则。 
SELECT name, collation_name  
FROM sys.databases  
WHERE name = N'MyOptionsTest';  
GO
```

## 设置和更改列排序规则

### CREATE TABLE 和 ALTER TABLE的 COLLATE 子句 设置排序规则

```SQL
-- 创建 MyTable 表时，设置 CharCol 列的排序规则为 French_CI_AS
CREATE TABLE dbo.MyTable  
  (PrimaryKey   int PRIMARY KEY,  
   CharCol      varchar(10) COLLATE French_CI_AS NOT NULL);  
GO  
-- 修改 MyTable 表的 CharCol 列 排序规则为 Latin1_General_CI_AS
ALTER TABLE dbo.MyTable ALTER COLUMN CharCol  
            varchar(10)COLLATE Latin1_General_CI_AS NOT NULL;  
GO
```

## 查看排序规则信息

### 查看服务器的排序规则设置

```SQL
SELECT CONVERT (varchar(256), SERVERPROPERTY('collation')); 
-- 或者
EXECUTE sp_helpsort;
```

### 查看 SQL server 的所有排序规则名称及描述

```SQL
SELECT name, description FROM sys.fn_helpcollations();
```

### 查看数据库的排序规则设置

```SQL
-- 查看当前所有数据库的排序规则
SELECT name, collation_name FROM sys.databases;
-- 或者（查看某个数据库的排序规则）
SELECT CONVERT (varchar(256), DATABASEPROPERTYEX('database_name','collation'));
```

### 查询所有不为空的列 的排序规则

```SQL
SELECT name, collation_name FROM sys.columns WHERE collation_name IS NOT NULL;
```

### 查看表和列的排序规则设置的具体步骤

```SQL
-- 查看所有表下的所有列的排序规则
SELECT t.name TableName, c.name ColumnName, collation_name  
FROM sys.columns c  
inner join sys.tables t on c.object_id = t.object_id;
```