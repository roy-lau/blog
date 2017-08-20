# yum

* 用YUM安装软件包：`yum install <package_name>`

* 用YUM删除软件包：`yum remove <package_name>`

* yum 设置安装路径：`yum install --installroot=/usr/src/ vim`

* yum升级：`yum -y upgrade`(升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变), `yum -y update`(升级所有包，改变软件设置和系统设置,系统版本内核都升级)


	
* 查看软件安装路径：`whereis <package_name>`

* 查看运行的进程：`ps(linux)	tasklist(windows)`

* 查看物理CPU个数 ：`cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l `

* 查看每个物理CPU中core的个数(即核数) ：`cat /proc/cpuinfo| grep "cpu cores"| uniq `

* 查看逻辑CPU的个数 ：`cat /proc/cpuinfo| grep "processor"| wc -l`