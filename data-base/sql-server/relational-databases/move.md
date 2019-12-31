# 						数据库 —— 移动数据库




## 迁移部分包含的数据库

### 启用包含的数据库

```SQL
sp_configure 'contained database authentication', 1;  
GO  
RECONFIGURE ;  
GO
```

### 将数据库转换为部分包含的数据库

* 通过更改 CONTAINMENT 选项可以将数据库转换为包含的数据库。

> 将名为 Accounting 的数据库转换为部分包含的数据库。

```SQL
USE [master]  
GO  
ALTER DATABASE [Accounting] SET CONTAINMENT = PARTIAL  
GO
```

### 将用户迁移为包含的数据库用户

> 将所有基于 SQL Server 登录名的用户迁移到具有密码的包含数据库用户。 该示例不包括未启用的登录名。 必须在包含的数据库中执行该示例

```SQL
DECLARE @username sysname;  
DECLARE user_cursor CURSOR  
    FOR   
        SELECT dp.name   
        FROM sys.database_principals AS dp  
        JOIN sys.server_principals AS sp   
        ON dp.sid = sp.sid  
        WHERE dp.authentication_type = 1 AND sp.is_disabled = 0;  
OPEN user_cursor  
FETCH NEXT FROM user_cursor INTO @username  
    WHILE @@FETCH_STATUS = 0  
    BEGIN  
        EXECUTE sp_migrate_user_to_contained   
        @username = @username,  
        @rename = N'keep_name',  
        @disablelogin = N'disable_login';  
    FETCH NEXT FROM user_cursor INTO @username  
    END  
CLOSE user_cursor;  
DEALLOCATE user_cursor;
```

### 拆分和附加


#### 分离数据库

> 使用 sp_detach_db 分离 AdventureWorks2012 数据库

```SQL
USE master;  
GO  
EXEC sp_detach_db @dbname = N'AdventureWorks2012';  
GO 
```

上面方法，会将数据库文件（`AdventureWorks2012_Data.mdf` 和 `AdventureWorks2012_log`）复制到：`C:\MySQLServer\AdventureWorks2012_Data.mdf` 和 `C:\MySQLServer\AdventureWorks2012_Log.ldf`。

> 执行以下 Transact-SQL 语句来附加移动的数据库及其日志（可选）

```SQL
USE master;  
GO  
CREATE DATABASE MyAdventureWorks   
    ON (FILENAME = 'C:\MySQLServer\AdventureWorks2012_Data.mdf'),  
    (FILENAME = 'C:\MySQLServer\AdventureWorks2012_Log.ldf')  
    FOR ATTACH;
GO
```

### 升级数据库

#### 使用分离和附加来升级数据库

> 下面是分离数据库的语句

```SQL
USE master;  
GO  
EXEC sp_detach_db @dbname = N'MyDatabase';  
GO
```

> 下面语句是来附加移动的数据库及其日志（日志为可选项）

```SQL
USE master;  
GO  
CREATE DATABASE MyDatabase   
    ON (FILENAME = 'C:\MySQLServer\MyDatabase.mdf'),  
    (FILENAME = 'C:\MySQLServer\Database.ldf')  
    FOR ATTACH;  
GO
```

### 分离数据库

> 此示例将分离 AdventureWorks2012 数据库，同时将 skipchecks 设置为 true。

```SQL
EXEC sp_detach_db 'AdventureWorks2012', 'true';
```

### 附加数据库

>  此示例附加 AdventureWorks2012 数据库的文件并将该数据库重命名为 MyAdventureWorks。

```SQL
CREATE DATABASE MyAdventureWorks   
    ON (FILENAME = 'C:\MySQLServer\AdventureWorks_Data.mdf'),   
    (FILENAME = 'C:\MySQLServer\AdventureWorks_Log.ldf')   
    FOR ATTACH;
```

TODO： 升级？

```SQL
USE <database name>
EXEC sys.sp_cdc_vupgrade
```

### 用户数据库

