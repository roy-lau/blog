# 						MongoDB 监控

[目录](README.md)

> 已经安装部署并允许MongoDB服务后，须要了解MongoDB的运行情况，并查看MongoDB的性能。这样在大流量得情况下可以很好的应对并保证MongoDB正常运作。

> MongoDB中提供了mongostat 和 mongotop 两个命令来监控MongoDB的运行情况。

__mongostat 命令__

`mongostat`是`mongodb`自带的状态检测工具，在命令行下使用。它会间隔固定时间获取`mongodb`的当前运行状态，并输出。如果你发现数据库突然变慢或者有其他问题的话，你第一手的操作就考虑采用`mongostat`来查看`mongo`的状态。

启动你的`Mongod`服务，进入到你安装的`MongoDB`目录下的`bin`目录， 然后输入`mongostat`命令，如下所示：
```cmd
D:\set up\mongodb\bin>mongostat
```
以上命令输出结果如下：

<img src="imgs/mongostat.png" alt="mongostat输出结果图" />

__mongotop 命令__

`mongotop`也是`mongodb`下的一个内置工具，`mongotop`提供了一个方法，用来跟踪一个`MongoDB`的实例，查看哪些大量的时间花费在读取和写入数据。 `mongotop`提供每个集合的水平的统计数据。默认情况下，`mongotop`返回值的每一秒。

启动你的`Mongod`服务，进入到你安装的`MongoDB`目录下的`bin`目录， 然后输入`mongotop`命令，如下所示：
```cmd
D:\set up\mongodb\bin>mongotop
```
以上命令执行输出结果如下：

<img src="imgs/mongotop.png" alt="mongotop输出结果图" />

带参数实例
```cmd
E:\mongodb-win32-x86_64-2.2.1\bin>mongotop 10
```

<img src="imgs/mongotop-10.gif" alt="mongotop 10 输出结果图" />

后面的`10`是`<sleeptime>`参数 ，可以不使用，等待的时间长度，以秒为单位，`mongotop`等待调用之间。通过的默认`mongotop`返回数据的每一秒。
```cmd
E:\mongodb-win32-x86_64-2.2.1\bin>mongotop --locks
```

报告每个数据库的锁的使用中，使用`mongotop - 锁`，这将产生以下输出：

<img src="imgs/mongotop--locks.gif" alt="mongotop 锁 输出结果图" />

输出结果字段说明：

* **ns：** 包含数据库命名空间，后者结合了数据库名称和集合。
* **db：** 包含数据库的名称。名为 . 的数据库针对全局锁定，而非特定数据库。
* **total：** mongod花费的时间工作在这个命名空间提供总额。
* **read：** 提供了大量的时间，这mongod花费在执行读操作，在此命名空间。
* **write：** 提供这个命名空间进行写操作，这mongod花了大量的时间。

<a href="nodejs-mongodb.md" style="float: right;">nodejs 连接MongoDB</a>