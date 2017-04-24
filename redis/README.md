# 							 rides随记

1、开启服务：redis-server.exe redis.windows.conf

		[312] 01 Apr 10:44:27.761 # Warning: 32 bit instance detected but no memory limi
		t set. Setting 3 GB maxmemory limit with 'noeviction' policy now.
		                _._
		           _.-``__ ''-._
		      _.-``    `.  `_.  ''-._           Redis 3.0.504 (00000000/0) 32 bit
		  .-`` .-```.  ```\/    _.,_ ''-._
		 (    '      ,       .-`  | `,    )     Running in standalone mode
		 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
		 |    `-._   `._    /     _.-'    |     PID: 312
		  `-._    `-._  `-./  _.-'    _.-'
		 |`-._`-._    `-.__.-'    _.-'_.-'|
		 |    `-._`-._        _.-'_.-'    |           http://redis.io
		  `-._    `-._`-.__.-'_.-'    _.-'
		 |`-._`-._    `-.__.-'    _.-'_.-'|
		 |    `-._`-._        _.-'_.-'    |
		  `-._    `-._`-.__.-'_.-'    _.-'
		      `-._    `-.__.-'    _.-'
		          `-._        _.-'
		              `-.__.-'

		[312] 01 Apr 10:44:27.765 # Server started, Redis version 3.0.504
		[312] 01 Apr 10:44:27.770 * DB loaded from disk: 0.001 seconds
		[312] 01 Apr 10:44:27.772 * The server is now ready to accept connections on por
		t 6379

2、监听端口：redis-cli.exe -h 127.0.0.1 -p 6379  -a "mypass"  // 参数：-h 主机，-p 端口，-a 密码

	   默认写法redis-cli

	   设置键值对：ping 		// 用于检测rides是否启动，回复pong为启动
	   设置键值对：set myKey abc 		// set key值后面必须跟value
	   取出键值对：get myKey
	   删除键值对：del myKey

命令执行后输出 (integer) 1，否则将输出 (integer) 0

### redis key命令

#### 转储（dump）
 序列化给定 key ，并返回被序列化的值

	语法：
		dump keyname
	实例：
		127.0.0.1:6379> set greeting "hello, dumping word!"
		OK
		127.0.0.1:6379> dump greeting
		"\x00\x14hello, dumping word!\x06\x00\x8a\xa4\xf1\xff8\xe3e\xb7"

#### exists
 检查给定 key 是否存在。

	若 key 存在返回 1 ，否则返回 0 。
	语法： 
		exists keyname
	实例：
		127.0.0.1:6379> exists greeting
		(integer) 1

#### Expire 
 为给定 key 设置过期时间。设置成功返回 1 。 当 key 不存在或者不能为 key 设置过期时间时(比如在低于 2.1.3 版本的 Redis 中你尝试更新 key 的过期时间)返回 0 。

	语法：
		expire KEY_NAME TIME_IN_SECONDS
	实例：
		127.0.0.1:6379> expire greeting 60      // 一分钟后该键会自动消失
		(integer) 1 
		一分钟过去了……
		127.0.0.1:6379> get greeting
		(nil)

#### expireat
 EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。

	语法：
		EXPIREAT key timestamp
	实例：
		127.0.0.1:6379> expireat greeting 1293840000 	// 时间戳
		(integer) 1

#### pexpireat 

	Redis PEXPIREAT 命令用于设置 key 的过期时间，以毫秒计。key 过期后将不再可用。 
	语法：
		 PEXPIREAT KEY_NAME TIME_IN_MILLISECONDS_IN_UNIX_TIMESTAMP
	实例：
		127.0.0.1:6379> pexpireat hell  1555543555  // 毫秒
		(integer) 1

#### keys
 查询key

	实例：
		127.0.0.1:6379> set test1 redis
		OK
		127.0.0.1:6379> set test2 mysql
		OK
		127.0.0.1:6379> set test3 mongodb
		OK
		127.0.0.1:6379> keys test*     	// 查询所有以test开头的
		1) "test3"
		2) "test2"
		3) "test1"
		127.0.0.1:6379> keys *     	// 查询所有key
		…………此处省略…………

#### move
 Redis MOVE 命令用于将当前数据库的 key 移动到给定的数据库 db 当中。 

	语法：
		 MOVE KEY_NAME DESTINATION_DATABASE
	实例：
		127.0.0.1:6379> select 0			// redis默认使用数据库 0，为了清晰起见，这里再显式指定一次。
		OK 
		127.0.0.1:6379> set first name 		// 设置一个key为first
		OK
		127.0.0.1:6379> move first 1 		// 移动first到数据库1
		(integer) 1
		127.0.0.1:6379> exists first 		// exists返回(integer) 0，证明first已经被移走
		(integer) 0
		127.0.0.1:6379> select 1 			// 切换到数据库1
		OK
		127.0.0.1:6379[1]> exists first     // 鉴定完毕first存在
		(integer) 1
		127.0.0.1:6379[1]> get first 		// 鉴定完毕first的name没有丢 :smill:
		"name"

#### persist  and ttl
 Redis persist 命令用于移除给定 key 的过期时间，使得 key 永不过期。 

	语法：
		PERSIST KEY_NAME
	实例：
		127.0.0.1:6379> set test "learning redis"
		OK
		127.0.0.1:6379> ttl test            // key 存在，但没有设置剩余生存时间（-1）
		(integer) -1
		127.0.0.1:6379> expire test 60 		// 为key设置生存时间
		(integer) 1
		127.0.0.1:6379> ttl test            // 查看剩余的生存时间(秒)
		(integer) 56
		127.0.0.1:6379> ttl test			 // 查看剩余的生存时间(秒)
		(integer) 47
		127.0.0.1:6379> persist test 		// 移除key的生存时间
		(integer) 1
		127.0.0.1:6379> ttl test 			// 查看剩余的生存时间（-1为到期）
		(integer) -1

#### pttl
 Redis Pttl 命令以毫秒为单位返回 key 的剩余过期时间。 

	语法：
		 PTTL KEY_NAME
	实例：
		127.0.0.1:6379> set lean "learning redis"
		OK
		127.0.0.1:6379> ttl test            // key 存在，但没有设置剩余生存时间（-1）
		(integer) -1
		127.0.0.1:6379> expire lean 60 		// 为key设置生存时间
		(integer) 1
		127.0.0.1:6379> ttl lean			// 查看剩余的生存时间(秒)
		(integer) 54
		127.0.0.1:6379> pttl lean			// 查看剩余的生存时间(毫秒)
		(integer) 46574

#### randomkey 
 Redis RANDOMKEY 命令从当前数据库中随机返回一个 key 。

	语法：
	 	RANDOMKEY 
	实例：
		127.0.0.1:6379> mset first 'redis' second 'mongodb' third 'mysql'  // 设置多个key
		OK
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"first"
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"second"
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"first"
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"init"
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"init"
		127.0.0.1:6379> randomkey		// 随机返回一个key
		"init"
		127.0.0.1:6379> keys *			// 查看所有的key
		1) "third"
		2) "second"
		3) "first"
		4) "init"

#### rename 
 Redis Rename 命令用于修改 key 的名称 。 

	语法：
		RENAME OLD_KEY_NAME NEW_KEY_NAME
	实例：
		127.0.0.1:6379> mset first 'redis' second 'mongodb' third 'mysql'  // 设置多个key
		OK
		127.0.0.1:6379> rename first Penultimate 		// 修改first为Penultimate
		OK
		127.0.0.1:6379> exists first					// 查看first是否存在
		(integer) 0
		127.0.0.1:6379> exists Penultimate				// 查看Penultimate是否存在
		(integer) 1
		127.0.0.1:6379> rename first Penultimate		// 尝试修改不存在的key值first
		(error) ERR no such key
		127.0.0.1:6379> set pc "hasee"					// 设置pc为hasee
		OK
		127.0.0.1:6379> set pc1 "dell"					// 设置pc1为dell
		OK
		127.0.0.1:6379> rename pc pc1					// 改key值，pc为pc1
		OK
		127.0.0.1:6379> get pc							// 查看pc的value为nil空
		(nil)
		127.0.0.1:6379> get pc1							// 查看pc1为 hasee
		"hasee"

#### renamenx
 Redis Renamenx 命令用于在新的 key 不存在时修改 key 的名称 。

	语法：
		 RENAMENX OLD_KEY_NAME NEW_KEY_NAME
	实例：
		127.0.0.1:6379> set pc "hasee"					// 设置pc为hasee
		OK
		127.0.0.1:6379> set pc1 "dell"					// 设置pc1为dell
		OK
		127.0.0.1:6379> renamenx pc pc1					// 修改pc为pc1(0_失败)
		(integer) 0
		127.0.0.1:6379> renamenx pc1 pc					// 修改pc1为pc(0_失败)
		(integer) 0
		127.0.0.1:6379> get pc
		"hasee"
		127.0.0.1:6379> get pc1
		"dell"
		127.0.0.1:6379> exists pc3						// 查看pc3是否存在
		(integer) 0
		127.0.0.1:6379> renamenx pc pc3					// 修改pc为pc3(1_成功)
		(integer) 1
		127.0.0.1:6379> get pc          				// 查看pc是否还存在
		(nil)
		127.0.0.1:6379> get pc3 						// pc已被改为pc3
		"hasee"

#### type
 Redis Type 命令用于返回 key 所储存的值的类型。

	语法：
		TYPE KEY_NAME 
	返回值：
	  返回 key 的数据类型，数据类型有：
	    none (key不存在)
	    string (字符串)
	    list (列表)
	    set (集合)
	    zset (有序集)
	    hash (哈希表)
	实例：
		127.0.0.1:6379> hmset user:1 username sx pwd 123 		// 创建哈希
		OK
		127.0.0.1:6379> type user:1					// 查看类型
		hash
		127.0.0.1:6379> lpush Ltest book				// 创建列表
		(integer) 1
		127.0.0.1:6379> type Ltest					// 查看类型
		list
		127.0.0.1:6379> set getting confing				// 创建集合
		OK
		127.0.0.1:6379> type pat					// 查看集合
		set
		127.0.0.1:6379> sadd pat "dog"					// 创建无序集合
		(integer) 1
		127.0.0.1:6379> type getting					// 查看类型
		string




### rides数据类型

Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。

1、hash（哈希） 

	Redis hash 是一个键值对集合。
		Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。

	用法:
		127.0.0.1:6379> hmset user:1 username Ltest password 110119		// 设置hash
		OK
		127.0.0.1:6379> hgetall user:1 				// 获取
		1) "username"
		2) "Ltest"
		3) "password"
		4) "110119"

2、list（列表）

	127.0.0.1:6379> lpush Ltest vehicle  		// push数据到list
	(integer) 1
	127.0.0.1:6379> lpush Ltest room
	(integer) 2
	127.0.0.1:6379> lpush Ltest woman
	(integer) 3
	127.0.0.1:6379> lrange Ltest 0 10   		// 查询数据Ltest内的第0到第10条数据
	1) "woman"
	2) "room"
	3) "vehicle"

3、Set（集合）

Redis的Set是string类型的无序集合。
集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。
		
添加一个string元素到,key对应的set集合中，成功返回1,如果元素已经在集合中返回0,key对应的set不存在返回错误。

	sadd 命令

		sadd key member
		
	用法:
		127.0.0.1:6379> sadd setTest vehicle		// 添加集合##
		(integer) 1
		127.0.0.1:6379> sadd setTest room
		(integer) 1
		127.0.0.1:6379> sadd setTest woman
		(integer) 1
		127.0.0.1:6379> sadd setTest woman
		(integer) 0
		127.0.0.1:6379> smembers setTest		// 查询成员
		1) "vehicle"
		2) "woman"
		3) "room"

__注意：__ 以上实例中 woman 添加了两次，但根据集合内元素的唯一性，第二次插入的元素将被忽略。


4、zset(sorted set：有序集合)

Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。
不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。
zset的成员是唯一的,但分数(score)却可以重复。
		
	zadd 命令
		添加元素到集合，元素在集合中存在则更新对应score

		zadd key score member 

	用法:
		127.0.0.1:6379> zadd zTest 0 vehicle   		// 添加有序集合
		(integer) 1
		127.0.0.1:6379> zadd zTest 0 room
		(integer) 1
		127.0.0.1:6379> zadd zTest 0 woman
		(integer) 1
		127.0.0.1:6379> zadd zTest 0 woman
		(integer) 0
		127.0.0.1:6379> zrangebyscore zTest 0 100  	// 通过范围获取有序集合
		1) "room"
		2) "vehicle"
		3) "woman"

### rides配置(config)

	config get *						// 查看全部配置
	config get config_setting_name 				// 查看设置的配置项（格式：名）
	config set config_setting_name config_setting_value   	// 设置配置项（格式：name，value）

	redis.conf 配置项说明如下：


1. Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程

    	daemonize no

2. 当Redis以守护进程方式运行时，Redis默认会把pid写入/var/run/redis.pid文件，可以通过pidfile指定

   		pidfile /var/run/redis.pid

3. 指定Redis监听端口，默认端口为6379，作者在自己的一篇博文中解释了为什么选用6379作为默认端口，因为6379在手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字

		port 6379

4. 绑定的主机地址

		bind 127.0.0.1

5. 当 客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能

		timeout 300

6. 指定日志记录级别，Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose

		loglevel verbose

7. 日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null

    	logfile stdout

8. 设置数据库的数量，默认数据库为0，可以使用SELECT  命令在连接上指定数据库id 

   		databases 16

9. 指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合

	```save <seconds> <changes>```

    	Redis默认配置文件中提供了三个条件：

    	save 900 1
    	save 300 10
    	save 60 10000
	
    	分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。

10. 指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大

    	rdbcompression yes

11. 指定本地数据库文件名，默认值为dump.rdb

    	dbfilename dump.rdb

12. 指定本地数据库存放目录

    	dir ./

13. 设置当本机为slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步

    	slaveof <masterip> <masterport>

14. 当master服务设置了密码保护时，slav服务连接master的密码

    	masterauth <master-password>

15. 设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH <password>命令提供密码，默认关闭

    	requirepass foobared

16. 设置同一时间最大客户端连接数，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回max number of clients reached错误信息

    	maxclients 128

17. 指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区

    	maxmemory <bytes>

18. 指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no

    	appendonly no

19. 指定更新日志文件名，默认为appendonly.aof

    	appendfilename appendonly.aof

20. 指定更新日志条件，共有3个可选值：

    	no：表示等操作系统进行数据缓存同步到磁盘（快）
    	always：表示每次更新操作后手动调用fsync()将数据写到磁盘（慢，安全）
    	everysec：表示每秒同步一次（折衷，默认值）

    	appendfsync everysec

21. 指定是否启用虚拟内存机制，默认值为no，简单的介绍一下，VM机制将数据分页存放，由Redis将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析Redis的VM机制）

     	vm-enabled no

22. 虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个Redis实例共享

     	vm-swap-file /tmp/redis.swap

23. 将所有大于vm-max-memory的数据存入虚拟内存,无论vm-max-memory设置多小,所有索引数据都是内存存储的(Redis的索引数据 就是keys),也就是说,当vm-max-memory设置为0的时候,其实是所有value都存在于磁盘。默认值为0

     	vm-max-memory 0

24. Redis swap文件分成了很多的page，一个对象可以保存在多个page上面，但一个page上不能被多个对象共享，vm-page-size是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page大小最好设置为32或者64bytes；如果存储很大大对象，则可以使用更大的page，如果不 确定，就使用默认值

     	vm-page-size 32

25. 设置swap文件中的page数量，由于页表（一种表示页面空闲或使用的bitmap）是在放在内存中的，，在磁盘上每8个pages将消耗1byte的内存。

     	vm-pages 134217728

26. 设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4

     	vm-max-threads 4

27. 设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启

    	glueoutputbuf yes

28. 指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法

    	hash-max-zipmap-entries 64

    	hash-max-zipmap-value 512

29. 指定是否激活重置哈希，默认为开启（后面在介绍Redis的哈希算法时具体介绍）

    	activerehashing yes

30. 指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件

    	include /path/to/local.conf

### 查看服务器信息

  127.0.0.1:6379> info

	# Server
	redis_version:3.0.504
	redis_git_sha1:00000000
	redis_git_dirty:0
	redis_build_id:a4f7a6e86f2d60b3
	redis_mode:standalone
	os:Windows
	arch_bits:32
	multiplexing_api:WinSock_IOCP
	process_id:5800
	run_id:4d6afdd49a2039775e20214bb22680b27c0deea5
	tcp_port:6379
	uptime_in_seconds:5309
	uptime_in_days:0
	hz:10
	lru_clock:14966534
	config_file:D:\Program Files\redis\redis.windows.conf

	# Clients
	connected_clients:1
	client_longest_output_list:0
	client_biggest_input_buf:0
	blocked_clients:0

	# Memory
	used_memory:521064
	used_memory_human:508.85K
	used_memory_rss:483296
	used_memory_peak:521064
	used_memory_peak_human:508.85K
	used_memory_lua:26624
	mem_fragmentation_ratio:0.93
	mem_allocator:jemalloc-3.6.0

	# Persistence
	loading:0
	rdb_changes_since_last_save:0
	rdb_bgsave_in_progress:0
	rdb_last_save_time:1491361241
	rdb_last_bgsave_status:ok
	rdb_last_bgsave_time_sec:0
	rdb_current_bgsave_time_sec:-1
	aof_enabled:0
	aof_rewrite_in_progress:0
	aof_rewrite_scheduled:0
	aof_last_rewrite_time_sec:-1
	aof_current_rewrite_time_sec:-1
	aof_last_bgrewrite_status:ok
	aof_last_write_status:ok

	# Stats
	total_connections_received:1
	total_commands_processed:66
	instantaneous_ops_per_sec:0
	total_net_input_bytes:2490
	total_net_output_bytes:4745
	instantaneous_input_kbps:0.00
	instantaneous_output_kbps:0.00
	rejected_connections:0
	sync_full:0
	sync_partial_ok:0
	sync_partial_err:0
	expired_keys:1
	evicted_keys:0
	keyspace_hits:19
	keyspace_misses:4
	pubsub_channels:0
	pubsub_patterns:0
	latest_fork_usec:3000
	migrate_cached_sockets:0

	# Replication
	role:master
	connected_slaves:0
	master_repl_offset:0
	repl_backlog_active:0
	repl_backlog_size:1048576
	repl_backlog_first_byte_offset:0
	repl_backlog_histlen:0

	# CPU
	used_cpu_sys:0.87
	used_cpu_user:0.27
	used_cpu_sys_children:0.00
	used_cpu_user_children:0.00

	# Cluster
	cluster_enabled:0

	# Keyspace
	db0:keys=5,expires=0,avg_ttl=0
	127.0.0.1:6379> cpu

### 下载地址

	https://github.com/MSOpenTech/redis/releases		redis的github下载地址
	http://files.cnblogs.com/files/cuiwenyuan/Redis-3.2.100-Windows-32.zip  redis的32位地址
