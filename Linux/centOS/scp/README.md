#  scp 上传&&下载

1、上传本地文件到服务器

	scp /path/filename username@servername:/path/

例如`scp /var/www/test.php root@192.168.0.101:/var/www/ 把本机/var/www/`目录下的`test.php`文件上传到`192.168.0.101`这台服务器上的`/var/www/`目录中

 

2、从服务器上下载文件

下载文件我们经常使用wget，但是如果没有http服务，如何从服务器上下载文件呢？

	scp username@servername:/path/filename /var/www/local_dir（本地目录）

例如`scp root@192.168.0.101:/var/www/test.txt 把192.168.0.101上的/var/www/test.txt` 的文件下载到`/var/www/local_dir`（本地目录）

 

3、从服务器下载整个目录

	scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）

例如:`scp -r root@192.168.0.101:/var/www/test /var/www/`

 

4、上传目录到服务器

	scp -r local_dir username@servername:remote_dir

例如：`scp -r test root@192.168.0.101:/var/www/` 把当前目录下的`test`目录上传到服务器的`/var/www/` 目录


### 用法

scp 本地用户名 @IP 地址 : 文件名 1 远程用户名 @IP 地址 : 文件名 2

[ 本地用户名 @IP 地址 :] 可以不输入 , 可能需要输入远程用户名所对应的密码 。

可能有用的几个参数 :

`-v` 和大多数 linux 命令中的 `-v` 意思一样 , 用来显示进度 。 可以用来查看连接 , 认证 , 或是配置错误 。

`-C` 使能压缩选项 。

`-r` 上传下载文件夹(默认是文件) 。

`-P` 选择端口 。 注意 `-p` 已经被 `rcp` 使用 。

`-4` 强行使用 IPV4 地址 。

`-6` 强行使用 IPV6 地址 。