# yum
用YUM安装软件包

	命令：yum install <package_name>

用YUM删除软件包

	命令：yum remove <package_name>

yum 设置安装路径

	命令：yum install --installroot=/usr/src/ vim
	
查看软件安装路径

	whereis <package_name>

查看运行的进程
	
	ps(linux)	tasklist(windows)

查看物理CPU个数 

	cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l 

查看每个物理CPU中core的个数(即核数) 

	cat /proc/cpuinfo| grep "cpu cores"| uniq 

查看逻辑CPU的个数 

	cat /proc/cpuinfo| grep "processor"| wc -l

### [network网络](network.md)

