### 		SQLserver 笔记


### if else 判断

#### 判断两个表是否相同

* checksum_agg()
* binary_checksum()

```SQL
-- 判断两个表是否相同
IF ( SELECT checksum_agg(binary_checksum(*)) FROM USERS ) = (SELECT checksum_agg(binary_checksum(*)) FROM USERS ) 
PRINT ( '相等' ) 
ELSE 
PRINT ( '不相等')
```

#### 简单的判断
```SQL
-- 简单的 if else 判断

DECLARE @strWhere VARCHAR ( 100 ) 
DECLARE @strSQL VARCHAR ( 100 )

IF @strWhere != '' 	
	SET @strSQL = '@strWhere不为空' 
ELSE 	
	SET @strSQL = '@strWhere为空' 
PRINT( @strSQL )  -- 输出： @strWhere为空
```
