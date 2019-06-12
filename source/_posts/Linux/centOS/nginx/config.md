#    nginx配置说明


<details>
	<summary>默认的 config</summary>

```
	# user  nobody;
	worker_processes  1;

	# error_log  logs/error.log;
	# error_log  logs/error.log  notice;
	# error_log  logs/error.log  info;

	# pid        logs/nginx.pid;


	events {
	    worker_connections  1024;
	}


	http {
	    include       mime.types;
	    default_type  application/octet-stream;

	    # log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
	    #                   '$status $body_bytes_sent "$http_referer" '
	    #                   '"$http_user_agent" "$http_x_forwarded_for"';

	    # access_log  logs/access.log  main;

	    sendfile        on;
	    # tcp_nopush     on;

	    # keepalive_timeout  0;
	    keepalive_timeout  65;

	    # gzip  on;

	    server {
	        listen       80;
	        server_name  localhost;

	        # charset koi8-r;

	        # access_log  logs/host.access.log  main;

	        location / {
	            root   html;
	            index  index.html index.htm;
	        }

	        # error_page  404              /404.html;

	        #  redirect server error pages to the static page /50x.html
	        #
	        error_page   500 502 503 504  /50x.html;
	        location = /50x.html {
	            root   html;
	        }

	        #  proxy the PHP scripts to Apache listening on 127.0.0.1:80
	        #
	        # location ~ \.php$ {
	        #     proxy_pass   http://127.0.0.1;
	        # }

	        #  pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
	        #
	        # location ~ \.php$ {
	        #     root           html;
	        #     fastcgi_pass   127.0.0.1:9000;
	        #     fastcgi_index  index.php;
	        #     fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
	        #     include        fastcgi_params;
	        # }

	        #  deny access to .htaccess files, if Apache's document root
	        #  concurs with nginx's one
	        #
	        # location ~ /\.ht {
	        #     deny  all;
	        # }
	    }


	    #  another virtual host using mix of IP-, name-, and port-based configuration
	    #
	    # server {
	    #     listen       8000;
	    #     listen       somename:8080;
	    #     server_name  somename  alias  another.alias;

	    #     location / {
	    #         root   html;
	    #         index  index.html index.htm;
	    #     }
	    # }


	    #  HTTPS server
	    #
	    # server {
	    #     listen       443 ssl;
	    #     server_name  localhost;

	    #     ssl_certificate      cert.pem;
	    #     ssl_certificate_key  cert.key;

	    #     ssl_session_cache    shared:SSL:1m;
	    #     ssl_session_timeout  5m;

	    #     ssl_ciphers  HIGH:!aNULL:!MD5;
	    #     ssl_prefer_server_ciphers  on;

	    #     location / {
	    #         root   html;
	    #         index  index.html index.htm;
	    #     }
	    # }

	}
```

</details>

<details>
	<summary>nginx 配置文件结构</summary>
1、全局块：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。

2、events块：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。

3、http块：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。

4、server块：配置虚拟主机的相关参数，一个http中可以有多个server。

5、location块：配置请求的路由，以及各种页面的处理情况。

```
	...              # 全局块

	events {         # events块
	   ...
	}

	http      # http块
	{
	    ...   # http全局块
	    server        # server块
	    {
	        ...       # server全局块
	        location [PATTERN]   # location块
	        {
	            ...
	        }
	        location [PATTERN]
	        {
	            ...
	        }
	    }
	    server
	    {
	      ...
	    }
	    ...     # http全局块
	}
```

</details>

<details>
	<summary>示例</summary>

```bash
	###########  每个指令必须有分号结束。#################
	# 配置用户或者组，默认为nobody nobody。
	# user root root;
	# 允许生成的进程数，默认为1
	# worker_processes 2;
	# 指定nginx进程运行文件存放地址
	# pid /nginx/pid/nginx.pid;
	# 制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
	error_log log/error.log debug;
	events {
	    # 设置网路连接序列化，防止惊群现象发生，默认为on
	    accept_mutex on;
	    # 设置一个进程是否同时接受多个网络连接，默认为off
	    multi_accept on;
	    # 事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
	    # use epoll;
	    # 最大连接数，默认为512
	    worker_connections  1024;
	}
	http {
	    # 文件扩展名与文件类型映射表
	    include       mime.types;
	    # 默认文件类型，默认为text/plain
	    default_type  application/octet-stream;
	    # 取消服务日志
	    # access_log off;

	    # 自定义格式
	    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for';
	    # combined为日志格式的默认值
	    access_log log/access.log myFormat;
	    # 允许 sendfile 方式传输文件，默认为off，可以在http块，server块，location块。
	    sendfile on;
	    # 每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
	    sendfile_max_chunk 100k;
	    # 连接超时时间，默认为75s，可以在http，server，location块。
	    keepalive_timeout 65;
		# 开启gzip压缩
	    gzip  on;
	    gzip_disable "MSIE [1-6].";

		# 设定请求缓冲
	    client_header_buffer_size    128k;
	    large_client_header_buffers  4 128k;

	    # 限制同一客户端ip地址("zone=" 给它一个名字，可以随便叫，这个名字要跟下面的 limit_conn 一致,$binary_remote_addr = 用二进制来储存客户端的地址，1m 可以储存 32000 个并发会话)
	    limit_conn_zone $binary_remote_addr zone=perip:3m;
	    # 限制同一server最大并发数
		limit_conn_zone $server_name zone=perserver:3m;

		# 限制并发连接数(一个IP允许两个并发连接，那么这个IP就是限速limit_rate * 2)
	    limit_conn perip 2;
	    limit_conn perserver 20;
	    # 限制下载速度（是对每个连接限速100k。这里是对连接限速，而不是对IP限速！）
	    limit_rate 500k;

	    # 设定负载均衡的服务器列表
		# weigth 参数表示权值，权值越高被分配到的几率越大
	    upstream mysvr {
	      server 127.0.0.1:7878;
	      # 热备
	      server 192.168.10.121:3333 backup;
	      server 192.168.68.45:8080 weight=1;
	    }
	    # 错误页
	    error_page 404 https://www.baidu.com;

	    server {
	        # 单连接请求上限次数。
	        keepalive_requests 120;
	        # 监听端口
	        listen       4545;
		    #定义使用 www.movie.cn访问
	        server_name  mysvr;

	        #设定本虚拟主机的访问日志
        	access_log  logs/movie.access.log  myFormat;

	        #默认请求
	        location / {

	            #定义首页索引文件的名称
	            index index.php index.html index.htm;
	            # 反向代理，和upstream的名字一样
	            proxy_pass http://mysvr;
	        }

	        # 定义错误提示页面
	        error_page   500 502 503 504 /50x.html;
	        location = /50x.html {
	        }

	        #静态文件，nginx自己处理
	        location ~ ^/(images|javascript|js|css|flash|media|static)/ {

	            #过期30天，静态文件不怎么更新，过期可以设大一点，
	            #如果频繁更新，则可以设置得小一点。
	            expires 30d;
	        }

	    	location ~ .*\.(gif|png|css|js|icon)$ {
	           proxy_set_header Host $http_host;
	           proxy_set_header X-Real_IP $remote_addr;
	           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	        }
	        # 图片
	        location ~* .*\.(jpeg|jpg|JPG)$ {
	            proxy_set_header Host $http_host;
	            proxy_set_header X-Real_IP $remote_addr;
	            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		        # image_filter resize 480 -;
		        # image_filter_jpeg_quality 50;
		        # image_filter_sharpen 10;
		        # image_filter_buffer 4M;
	        }
	        # 请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
	        location  ~*^.+$ {
	           # 根目录
	           # root path;

	           # 设置默认页
	           # index vv.txt;

	           # 请求转向 mysvr 定义的服务器列表
	           proxy_pass  http://mysvr;
	           # 拒绝的ip
	           deny 127.0.0.1;
	           # 允许的ip
	           allow 172.18.5.54;
	        }
	    }
	}
```

</details>

* `$remote_addr` 与 `$http_x_forwarded_for` 用以记录客户端的ip地址；
* `$remote_user`用来记录客户端用户名称；
* `$time_local` 用来记录访问时间与时区；
* `$request` 用来记录请求的url与http协议；
* `$status` 用来记录请求状态；成功是200，
* `$body_bytes_sent` 记录发送给客户端文件主体内容大小；
* `$http_referer` 用来记录从那个页面链接访问过来的；
* `$http_user_agent` 记录客户端浏览器的相关信息；