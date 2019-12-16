# 							 在 docker 上安装使用 SqlServer

[参考](https://docs.microsoft.com/zh-cn/sql/linux/quickstart-install-connect-docker?view=sql-server-2017&pivots=cs1-bash)

```bash
# 拉取 2017 版的SqlServer
docker pull mcr.microsoft.com/mssql/server:2017-latest
```

```bash
# 运行 SqlServer 并创建账号密码
sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" \
   -p 1433:1433 --name mssql \
   -d mcr.microsoft.com/mssql/server:2017-latest

# 下面这条已成功启动
docker run -e 'ACCEPT_EULA=Y' -e "SA_PASSWORD=sa@123456" -p 1433:1433 --name mssql --restart always -d mcr.microsoft.com/mssql/server:2017-latest

# 复制文件到容器中
docker cp .\RYCPDC_C20191111new.bak 1343055f3205:/var/opt/mssql

# 进入镜像，连接本地数据库
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "sa@123456"


# 创建个卷（volume）

docker volume create mssql-dir

# 查看 卷（volume）

docker volume inspect mssql-dir

# 尝试加上 卷 不行（The database 'master' cannot be opened because it is version 904. This server supports version 869 and earlier. A downgrade path is not supported）猜测可能是我电脑ubuntu的问题
docker run -e 'ACCEPT_EULA=Y' -e "SA_PASSWORD=sa@123456" -p 1433:1433 --name mssql --restart always -v mssql-dir:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest

# 可以正常运行，但是无法连接
docker run -e 'ACCEPT_EULA=Y' -e "SA_PASSWORD=sa@123456" -p 1433:1433 --name mssql --restart always -v c:\Workspace\dbs\mssql:/var/opt/mssql -v c:\Workspace\dbs\mssql\backup:/backup -d mcr.microsoft.com/mssql/server:2017-latest
```
 
* --name sqlserver ：设置运行容器名称
* --restart always   ：设置容器自动重新启
* -v /opt/netcore/mssql:/var/opt/mssql  挂在目录，把容器数据库挂在到自定义目录
* -e 'ACCEPT_EULA=Y'  ：提示您接受最终用户许可协议。如果您不同意，安装将不会继续
* -e SA_PASSWORD='sa@123456' ：设置管理员SA用户和密码（必填参数，密码大于八位，并包含特殊符号）
* -e SQLSERVER_DATABASE=first ：创建一个叫“first”的数据库
* -e SQLSERVER_USER=roy  ：给“first”的数据库添加一个“roy”登录用户，权限只能访问first数据库
* -e SQLSERVER_PASSWORD='sa@123456'  ：给“roy”用户设置登录密码
* -p 1434:1433 ：设置端口监听外部端口1433，容器内部开放端口1433
* mcr.microsoft.com/mssql/server:2017-latest ：运行镜像



```SQL
RESTORE DATABASE [DBName_XXX] 
FROM DISK = N'C:\DBbak\TestDBbackup.bak' WITH
MOVE N'TestDB' TO N'C:\DB\DBName_XXX.mdf', 
MOVE N'TestDB_log' TO N'C:\DB\DBName_XXX_log.ldf',
FILE = 1, NOUNLOAD, STATS = 10
 
USE [master]
GO
CREATE LOGIN user_XXX WITH
PASSWORD = N'pwd_XXX'
, DEFAULT_DATABASE = DBName_XXX, CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
PRINT 'CREATE LOGIN OK.'
 
USE DBName_XXX
GO
CREATE USER user_XXX FOR LOGIN user_XXX WITH DEFAULT_SCHEMA = [dbo] 
GO
EXEC sp_addrolemember N'db_owner', N'user_XXX'
GO
PRINT 'CREATE USER OK.'

-- 将“C:\DBbak\TestDBbackup.bak”替换为你数据库备份的文件路径

-- DBName_XXX：数据库名

-- user_XXX：数据库登录用户名

-- pwd_XXX：数据库登录用户密码
```



```SQL
RESTORE DATABASE [DBName_XXX] 
FROM DISK = N'C:\DBbak\TestDBbackup.bak' WITH
MOVE N'TestDB' TO N'C:\DB\DBName_XXX.mdf', 
MOVE N'TestDB_log' TO N'C:\DB\DBName_XXX_log.ldf',
FILE = 1, NOUNLOAD, STATS = 10
 
USE [master]
GO
CREATE LOGIN user_XXX WITH
PASSWORD = N'pwd_XXX'
, DEFAULT_DATABASE = DBName_XXX, CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
PRINT 'CREATE LOGIN OK.'
 
USE DBName_XXX
GO
CREATE USER user_XXX FOR LOGIN user_XXX WITH DEFAULT_SCHEMA = [dbo] 
GO
EXEC sp_addrolemember N'db_owner', N'user_XXX'
GO
PRINT 'CREATE USER OK.'

-- 将“C:\DBbak\TestDBbackup.bak”替换为你数据库备份的文件路径

-- DBName_XXX：数据库名

-- user_XXX：数据库登录用户名

-- pwd_XXX：数据库登录用户密码

BACKUP DATABASE [first]
TO
  DISK = N'/var/opt/mssql/data\first1.bak'
WITH
  NAME = N'first - Backup',
  NOFORMAT, NOINIT, SKIP,
  STATS = 5

RESTORE DATABASE [first]
TO
  DISK = N'/var/opt/mssql/data\first.bak'
WITH
  NAME = N'first - Backup',
  NOFORMAT, NOINIT, SKIP,
  STATS = 5


使用SQL最简单备份,还原数据库

/* 备份 */
backup database TestDB to DISK = N'/var/opt/mssql/data\test.bak'
backup database Test to disk='D:/Test.bak'
/* 还原 */
restore database Test from disk='D:/Test.bak'
restore database TestDB from disk=N'/var/opt/mssql/data\test.bak'
restore database TestDB from disk=N'/var/opt/mssql/data\RYCPDC_C20191111new.bak'


/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'sa@123456' -Q 'RESTORE DATABASE TestDB FROM DISK = "/var/opt/mssql/test.bak" WITH MOVE "TestDB" TO "/var/opt/mssql/data/TestDB.mdf" , MOVE "TestDB_log" TO "/var/opt/mssql/data/TestDB.ldf"'
```


