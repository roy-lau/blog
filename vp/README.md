

> 本博客使用 [vuepress](https://v1.vuepress.vuejs.org/zh/) 为主搭建，另外使用了 [vuetifyjs](https://vuetifyjs.com/zh-Hans) `UI` 组件
>>树
>>>二叉树
>>>>平衡二叉树
>>>>>满二叉树
<!-- more -->


### TODO

* [X] 整体框架搭建
* [X] 头部基本完成
* [-] __文章__
	- [X] 表格
	- [X] 行号
	- [X] 表情
	- [X] checkbox
	- [X] 代码高亮
	- [X] 作者
	- [X] 分页
	- [X] 更新时间
	- [X] 本文链接
	- [X] 回到顶部
* [X] __首页__
	- [X] 分页
	- [X] banner随机
	- [X] banner懒加载
	- [X] loading
	- [X] 跳转文章
	- [ ] 文章摘要
	- [ ] 跳转标签
	- [ ] 跳转归档
* [ ] __归档__
	- [X] 标题下划线
	- [X] 时间 chips
	- [ ] 文章摘要
	- [X] 按月份分组
	- [ ] 按时间排序
* [ ] __标签__
* [ ] 侧边栏的宽度调整(手机和`ipad`适配)
* [ ] 内容固定宽度(手机和`ipad`适配)
* [ ] 检索功能
* [ ] RSS 功能
* [-] 目录列表（toc）
	- [ ] 适配手机和平板
	- [ ] 动态调整距离顶部位置 待优化
	- [ ] 选择项一直在 `toc-warp` 的中心位置
* [ ] 评论还未完成
* [ ] 底部还未完成
* [ ] 一系列动画


大标题
====

中标题
-------

### 代码

`vuepress` 使用 [prismjs](https://prismjs.com/ "prismjs") 实现代码高亮

#### `js`代码

``` js {4}
// 这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长长很长很长很长很长很长很长很长很长很长很长很长的注释
	let num = 1
	function (){
		num++
	}
```

### clone && build && dev

```sh
# 下载
git clone git@github.com:roy-lau/blog.git --b dev blog-dev --depth=1

# 进入目录
cd blog-dev

# 安装依赖
npm i

# 运行项目
# npm run dev

# 构建项目
npm run build
```


#### `mysql` 代码

::: danger 警告
下面这段代码没能正常渲染
:::

```sql
SELECT * FROM USER;
```


	this is a coption code


### 表格示例

> `github` 的表格有 左对齐 右对齐 居中对齐，但很少会使用到不同的对齐方式。所有只做了下列一种方式


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### [表情符号 :smile:](../emoji/emoji-table.md "点击跳转至表情符号列表")
