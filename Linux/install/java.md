1、查看CentOS自带JDK是否已安装。

	yum list installed |grep java

2、若有自带安装的JDK，如何卸载CentOS系统自带Java环境？

	卸载JDK相关文件输入：yum -y remove java-1.7.0-openjdk*。

	卸载tzdata-java输入：yum -y remove tzdata-java.noarch。

  当结果显示为Complete！即卸载完毕。

注：“*”表示卸载掉java 1.7.0的所有openjdk相关文件。

3、检查CentOS系统网络连接是否正常。

> 使用yum方式安装需要连接网络下载Java相应安装文件，故此需要使用ping命令测试网络；如：ping 百度URL即可。

4、查看yum库中的Java安装包。

	输入：yum -y list java* 

5、使用yum安装Java环境。

	输入：yum -y install java-1.7.0-openjdk* ，以yum库中java-1.7.0为例。 

  当结果显示为Complete！即安装完毕。

注：“*”表示将java-1.7.0的所有相关Java程序都安装上。

6、查看刚安装的Java版本信息。

	输入：java -version 可查看Java版本；

	输入：javac 可查看Java的编译器命令用法（可略）