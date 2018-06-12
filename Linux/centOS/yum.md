# yum

1、备份

	mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

2、下载新的 `CentOS-Base.repo` 到 `/etc/yum.repos.d/`

	# CentOS 5
	wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-5.repo

	# CentOS 6
	wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo

	# CentOS 7
	wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
3、 生成缓存

	yum makecache


* 用YUM安装软件包：`yum install <package_name>`

* 用YUM删除软件包：`yum remove <package_name>`

* yum 设置安装路径：`yum install --installroot=/usr/src/ vim`

* yum升级：`yum -y upgrade`(升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变), `yum -y update`(升级所有包，改变软件设置和系统设置,系统版本内核都升级)


* 查看软件安装路径：`whereis <package_name>`

* 查看运行的进程：`ps(linux)	tasklist(windows)`

* 查看物理CPU个数 ：`cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l `

* 查看每个物理CPU中core的个数(即核数) ：`cat /proc/cpuinfo| grep "cpu cores"| uniq `

* 查看逻辑CPU的个数 ：`cat /proc/cpuinfo| grep "processor"| wc -l`