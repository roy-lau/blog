# 		http-server用法及帮助

$ hs --help

usage: http-server [path] [options]<br>

options:<br>

  	-p           Port to use [8080]
  	-a           Address to use [0.0.0.0]
  	-d           Show directory listings [true]
  	-i           Display autoIndex [true]
  	-e --ext     Default file extension if none supplied [none]
  	-s --silent  Suppress log messages from output
  	--cors[=headers]   	Enable CORS via the "Access-Control-Allow-Origin" header
                     		Optionally provide CORS headers list separated by commas
  	-o [path]    Open browser window after starting the server
  	-c           Cache time (max-age) in seconds [3600], e.g. -c10 for 10 seconds.

               To disable caching, use -c-1.
  	-U --utc     Use UTC time format in log messages.

  	-P --proxy   Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com

  	-S --ssl     Enable https.
  	-C --cert    Path to ssl cert file (default: cert.pem).
  	-K --key     Path to ssl key file (default: key.pem).

  	-r --robots  Respond to /robots.txt [User-agent: *\nDisallow: /]
  	-h --help    Print this list and exit.


__用法：

hs 是http-server的简写<br>
usage: http-server [path] [options] 		# path要启动项目的路径，options参数，如-p 1024 <br>
 
	$ hs						# 直接运行hs，默认启动当前目录，监听8080端口
 	Starting up http-server, serving ./
	Available on:
	  http://127.0.0.1:8080
	Hit CTRL-C to stop the server

	$ hs -p 1024 				# 设置监听端口
	$ hs -a 127.0.0.1 			# 设置监听的ip地址
	$ hs -d 					# 是否显示目录列表，默认为[true]
	$ hs -i 					# 是否显示 autoIndex，默认为[true]
	$ hs -e  or --ext 			# 设置文件模板的扩展名，如：jijia2，jade，如果没有提供默认的文件扩展名(默认 'html')
	$ hs -s  or --silent 		# 禁止日志信息输出
	$ hs --cors[=headers]    	# 设置http头，默认为Access-Control-Allow-Origin
	$ hs -o  [path]				# 自动唤起默认浏览器，也可以跟浏览器的路径
	$ hs -c 					# Cache 设置最大缓存时间
	$ hs -U 					# 显示UTC格式的日志时间
	$ hs -P 			
	$ hs -S 					# 启动HTTPS协议(需要两个协议文件cert.pem和key.pem)
	$ hs -C 					# 设置cert.pem文件名，默认为cert.pem。启动HTTPS时需要
	$ hs -K 					# 设置key.pem文件名，默认为key.pem。启动HTTPS时需要
	$ hs -r 					# robots 指定爬虫协议路径
	$ hs -h 					# 显示帮助文档
