# 						数据库

## 创建数据库

> 将以下示例复制并粘贴到查询窗口中，然后单击“执行” 。 此示例将创建数据库 Sales。 由于未使用关键字 PRIMARY，因此第一个文件 (Sales_dat) 将成为主文件。 因为在 Sales_dat 文件的 SIZE 参数中没有指定 MB 或 KB，将使用 MB 并按 MB 分配。 创建、修改或删除用户数据库后，应备份 Sales_log 文件以 MB 为单位进行分配，因为 MB 参数中显式声明了 SIZE 后缀

```SQL
USE master;  
GO  
CREATE DATABASE Sales  
ON   
( NAME = Sales_dat,  
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\saledat.mdf',  
    SIZE = 10,  
    MAXSIZE = 50,  
    FILEGROWTH = 5 )  
LOG ON  
( NAME = Sales_log,  
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\salelog.ldf',  
    SIZE = 5MB,  
    MAXSIZE = 25MB,  
    FILEGROWTH = 5MB ) ;  
GO
```

## 查看数据库

```SQL
-- 查看数据库的名称、id、创建时间
SELECT name, database_id, create_date  
FROM sys.databases;
```

## 添加数据文件

```SQL
USE master
GO
ALTER DATABASE AdventureWorks2012
ADD FILEGROUP Test1FG1;
GO
ALTER DATABASE AdventureWorks2012 
ADD FILE 
(
    NAME = test1dat3,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\t1dat3.ndf',
    SIZE = 5MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
),
(
    NAME = test1dat4,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\t1dat4.ndf',
    SIZE = 5MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
)
TO FILEGROUP Test1FG1;
GO
```

## 管理属性

### 查看或更改数据库的属性

> 将以下示例复制并粘贴到查询窗口中，然后单击“执行” 。 此示例使用 DATABASEPROPERTYEX 系统函数返回 AdventureWorks2012 数据库中 AUTO_SHRINK(自动收缩) 数据库选项的状态。 返回值 1 表示将该选项设置为 ON，返回值 0 表示将该选项设置为 OFF


```SQL
SELECT DATABASEPROPERTYEX('AdventureWorks2012', 'IsAutoShrink');
```

### 通过查询 sys.databases 查看数据库的属性

> 将以下示例复制并粘贴到查询窗口中，然后单击“执行” 。 此示例查询 sys.databases 目录视图来查看 AdventureWorks2012 数据库的几个属性。 此实例返回数据库 ID 号 (database_id)、数据库是只读还是读写的 (is_read_only)、数据库的排序规则 (collation_name) 和数据库兼容级别 (compatibility_level)。

```SQL
SELECT database_id, is_read_only, collation_name, compatibility_level  
FROM sys.databases WHERE name = 'AdventureWorks2012';
```

### 通过查询 sys.databases_scoped_configuration 查看数据库范围的配置的属性

> 将以下示例复制并粘贴到查询窗口中，然后单击“执行” 。 此示例查询 sys.database_scoped_configurations (Transact-SQL) 目录视图来查看当前数据库的多个属性。

```SQL
SELECT configuration_id, name, value, value_for_secondary  
FROM sys.database_scoped_configurations;
```

### 使用 ALTER DATABASE 更改 SQL Server 2016 数据库的属性


```SQL
USE AdventureWorks2012;
GO
-- 查看ALLOW_SNAPSHOT_ISOLATION（快照隔离）状态
SELECT name, snapshot_isolation_state,
     snapshot_isolation_state_desc AS description
FROM sys.databases
WHERE name = N'AdventureWorks2012';
GO
USE master;
GO
-- 设置ALLOW_SNAPSHOT_ISOLATION（快照隔离）状态
ALTER DATABASE AdventureWorks2012
    SET ALLOW_SNAPSHOT_ISOLATION ON;
GO
-- 检查设置结果
SELECT name, snapshot_isolation_state,
     snapshot_isolation_state_desc AS description
FROM sys.databases
WHERE name = N'AdventureWorks2012';
GO
```

### 使用 ALTER DATABASE SCOPED CONFIGURATION 更改数据库范围的属性

```SQL
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY
```

## 更改数据库的配置设置

> 该示例设置 AdventureWorks2012 示例数据库的 **恢复模式** 和 **数据页面验证** 选项。

```SQL
USE master;
GO
ALTER DATABASE AdventureWorks2012 
SET RECOVERY FULL, PAGE_VERIFY CHECKSUM;
GO
```

## 删除数据库

> 删除 `Sales` 和 `NewSales` 数据库

```SQL
USE master;  
GO  
DROP DATABASE Sales, NewSales;  
GO
```

### 删除数据库中的数据文件或日志文件

```SQL
USE master;
GO
ALTER DATABASE AdventureWorks2012
REMOVE FILE test1dat4;
GO
```

## 显示数据库的数据和日志空间信息

### 使用 sp_spaceused 显示数据库的数据和日志空间信息

```SQL
USE AdventureWorks2012;  
GO  
EXEC sp_spaceused N'Purchasing.Vendor';  
GO
```

### 通过查询 sys.database_files 显示数据库的数据和日志空间信息

```SQL
USE AdventureWorks2012;  
GO  
SELECT file_id, name, type_desc, physical_name, size, max_size  
FROM sys.database_files;  
GO
```

## 增加数据库的大小

> `MODIFY FILE` : 修改文件

```SQL
USE master;
GO
ALTER DATABASE AdventureWorks2012 
MODIFY FILE
    (NAME = test1dat3,
    SIZE = 20MB);
GO
```

## 重命名数据库

```SQL
-- 下面是重命名数据库的三种方法：
USE master;  
GO  
ALTER DATABASE MyTestDatabase SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
GO
ALTER DATABASE MyTestDatabase MODIFY NAME = MyTestDatabaseCopy;
GO  
ALTER DATABASE MyTestDatabaseCopy SET MULTI_USER;
GO
```

### 重命名后重置默认数据库

```SQL
USE [master]
GO
ALTER LOGIN [your-login] WITH DEFAULT_DATABASE=[new-database-name]
GO
```

## 将数据库设置为单用户模式

* 如果用户将数据库设置为单用户模式时连接到了数据库，则其他与数据库的连接将被关闭，且不发出警告。
* 即使设置此选项的用户已注销，数据库仍保持单用户模式。 这时，其他用户（但只能是一个）可以连接到数据库。

### 将数据库设置为单用户模式

> 此示例将数据库设置为 SINGLE_USER(单用户) 模式，以获得独占访问权。 然后，该示例将 AdventureWorks2012 数据库的状态设置为 READ_ONLY ，并将对数据库的访问权返回给所有用户。在第一个 WITH ROLLBACK IMMEDIATE 语句中指定终止选项 ALTER DATABASE 。 这将导致所有未完成事务都将被回滚，并将立刻断开 AdventureWorks2012 示例数据库的所有其他连接。

```SQL
USE master;
GO
-- 将数据库设置为单用户模式
ALTER DATABASE AdventureWorks2012
SET SINGLE_USER
WITH ROLLBACK IMMEDIATE; -- 如果这是失败，回滚
GO
-- 设置所有用户 READ_ONLY(只读) 权限
ALTER DATABASE AdventureWorks2012
SET READ_ONLY;
GO
-- 将数据库设置为多用户模式
ALTER DATABASE AdventureWorks2012
SET MULTI_USER;
GO
```

## 收缩数据库

* 限制和局限:
	* 收缩后的数据库不能小于数据库的最小大小。 最小大小是在数据库最初创建时指定的大小，或是上一次使用文件大小更改操作（如 DBCC SHRINKFILE）设置的显式大小。 例如，如果数据库最初创建时的大小为 10 MB，后来增长到 100 MB，则该数据库最小只能收缩到 10 MB，即使已经删除数据库的所有数据也是如此。
	* 不能在备份数据库时收缩数据库。 反之，也不能在数据库执行收缩操作时备份数据库。
	* 遇到 xVelocity 内存优化的列存储索引时，DBCC SHRINKDATABASE 将会失败。 遇到 columnstore 索引之前完成的工作将会成功，因此数据库可能会较小。 若要完成 DBCC SHRINKDATABASE，请在执行 DBCC SHRINKDATABASE 前禁用所有列存储索引，然后重新生成列存储索引。

* 当您计划收缩数据库时，请考虑以下信息：
	* 在执行会产生许多未使用空间的操作（如截断表或删除表操作）后，执行收缩操作最有效。
	* 大多数数据库都需要一些可用空间，以供常规日常操作使用。 如果反复收缩数据库并注意到数据库大小变大，则表明收缩的空间是常规操作所必需的。 在这种情况下，反复收缩数据库是一种无谓的操作。
	* 收缩操作不会保留数据库中索引的碎片状态，通常还会在一定程度上增加碎片。 这是不要反复收缩数据库的另一个原因。
	* 除非有特定要求，否则不要将 AUTO_SHRINK 数据库选项设置为 ON。


> 使用 DBCC SHRINKDATABASE 减少 UserDB 数据库中数据文件和日志文件的大小并允许数据库中有 10％ 的可用空间。

```SQL
DBCC SHRINKDATABASE (UserDB, 10);
GO
```