npm是什么
----------http://www.cnblogs.com/PeunZhang/p/5553574.html------

NPM的全称是Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包。
npm install 安装模块
-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）
-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它
-O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）
-E, --save-exact 精确安装指定模块版本

npm init 在项目中引导创建一个package.json文件
npm help 查看某条命令的详细帮助 
npm root 查看包的安装路径
npm ls 查看安装的模块
1.npm adduser 用户登录
2.npm publish 发布模块
npm access 在发布的包上设置访问级别
    npm access public [<package>]
    npm access restricted [<package>]
    npm access grant <read-only|read-write> <scope:team> [<package>]
    npm access revoke <scope:team> [<package>]
    npm access ls-packages [<user>|<scope>|<scope:team>]
    npm access ls-collaborators [<package> [<user>]]
    npm access edit [<package>]

npm config 管理npm的配置路径
    npm config set <key> <value> [-g|--global]
    npm config get <key>
    npm config delete <key>
    npm config list
    npm config edit
    npm get <key>
    npm set <key> <value> [-g|--global]

npm uninstall 卸载模块 
npm update 更新模块
npm outdated 检查模块是否已经过时
npm start 启动模块
npm stop 停止模块
npm restart 重新启动模块
npm test 测试模块
npm version 查看模块版本
npm view 查看模块的注册信息
npm remove <name>移除

npm cache 管理模块的缓存
    npm cache add <tarball file>
    npm cache add <folder>
    npm cache add <tarball url>
    npm cache add <name>@<version>
    npm cache ls [<path>]
    npm cache clean [<path>]
    npm cache clean 最常用命令无非清除npm本地缓存





