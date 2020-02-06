#    ssh 配置

### 客户端

* 创建配置文件

先在 `/root/.ssh` 文件夹下创建一个名为 `config` 的文件

```bash
 	cd ~/.ssh 	# 进入 .ssh 文件夹下
 	touch config 	# 创建 config 文件
```

* 配置文件

```json
Host tencent-cloud
	HostName 139.199.99.154
	Port 22
	User root
	IdentityFile ~/.ssh/id_rsa
Host aliyun
	HostName 139.199.99.154
	Port 22
	User root
	IdentityFile ~/.ssh/id_rsa
```

**Host** 后面是别名 tencent-cloud 的话就可以通过 `ssh tencent-cloud ` 进行登录

**HostName** 为服务器IP

**Port** 端口

**User** 用户名

**IdentityFile** 自己ID私钥

### 配置服务端(linux服务器)

```bash
cd ~/.ssh
scp -p ~/.ssh/id_rsa.pub root@[IP地址]:/root/.ssh/authorized_keys
```

然后把自己的公钥加入到 `authorized_keys` 文件中，没有的话需要自己创建。