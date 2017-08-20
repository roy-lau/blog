第一步：


 wget https://github.com/nodejs/node/archive/v6.6.0.tar.gz  # 源码（会有一些坑，而且还需要编译，不推荐使用）

 使用wget下载（推荐）
 wget https://nodejs.org/dist/v4.2.2/node-v4.2.2-linux-x64.tar.gz  # 直接下载编译号好的


第二步  解压缩文件包
tar -zvxf node-v4.2.4-linux-x64.tar.gz

第三部  NODE 环境配置
    这样可以使得在任何目录下，都可以使用/usr/local/src/node-v4.2.3-linux-x86/bin 下得node命令，
    步骤如下：
    a、切换到 root 用户
    b、vi /etc/profile
    c、在最下面加入
       # node （注释作用）
       export NODE_HOME=/usr/local/src/node-v4.2.3-linux-x86
       export PATH=$PATH:$NODE_HOME/bin  
       export NODE_PATH=$NODE_HOME/lib/node_modules
    d、:wq （保存并退出）
    e、source /etc/profile （使配置文件生效）

第四步 大功告成
    你就可以用 node -v 看自己的成果了！ 