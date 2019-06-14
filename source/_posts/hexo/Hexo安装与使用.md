---
title: hexo安装与使用
date: 2019-06-10 17:43:45
tags: hexo
categories: hexo
toc: true
---


### 初始化项目

```bash
npx hexo init <project-name>
```

### 目录

```
.
├── _config.yml 	网站的配置信息，您可以在此配置大部分的参数
├── package.json 	应用程序的信息
├── scaffolds 		模板文件夹
├── source 			资源文件夹，存放用户资源
|   ├── _drafts 	草稿
|   └── _posts
└── themes 			网站主题文件夹
```

### 新建一篇文章

```bash
hexo new [layout] <title>
# 例如
hexo new hexo安装与使用
```

### 刪除一篇文章

```bash
rm -rf <title>
hexo clean
hexo g
hexo d
```


### 启动服务器

```bash
npx hexo server -p 4567
```

|选项	| 描述	|
|-------|-------|
|`-p`, `--port`		| 	重设端口 					|
|`-s`, `--static` 	|	只使用静态文件 			 	|
|`-l`, `--log` 		|	启动日记记录，使用覆盖记录格式 |

### 生成静态文件

```bash
npx hexo generate # 可以简写为 g
```

|选项	| 	描述	|
|-------|------|
|`-d`, `--deploy`| 	文件生成后立即部署网站 |
|`-w`, `--watch` |	监视文件变动 			 |

### 发布

```bash
npx hexo publish [layout] <filename>
```

### 部署

```bash
npx hexo deploy # 可以简写为 d
```

|选项	| 	描述	|
|-------|------|
|`-g`, `--generate`| 部署之前预先生成静态文件 |

### 渲染文件

```bash
npx hexo render <file1> [file2] ...
```

|选项	| 	描述	|
|-------|------|
|`-o`, `--output`| 设置输出路径 |

### 迁移博客

从其他博客系统 迁移内容。
```bash
npx hexo migrate <type>
```

### 清除缓存

清除缓存文件 (db.json) 和已生成的静态文件 (public)。
在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。
```bash
npx  hexo clean
```

### 列出网站资料。

```bash
npx hexo list <type>
```

### 显示 Hexo 版本。

```bash
npx hexo version
```

## 选项

* 安全模式

在安全模式下，不会载入插件和脚本。当您在安装新插件遭遇问题时，可以尝试以安全模式重新执行。
```bash
npx  hexo --safe
```

* 调试模式

在终端中显示调试信息并记录到 debug.log。当您碰到问题时，可以尝试用调试模式重新执行一次，并 提交调试信息到 GitHub。
```bash
npx  hexo --debug
```

* 简洁模式

隐藏终端信息。
```bash
npx  hexo --silent
```

* 自定义配置文件的路径

自定义配置文件的路径，执行后将不再使用 **_config.yml**。
```bash
npx hexo --config custom.yml
```

* 显示草稿

显示 `source/_drafts` 文件夹中的草稿文章。
```bash
npx hexo --draft
```

* 自定义 CWD

自定义当前工作目录（Current working directory）的路径。
```bash
npx hexo --cwd /path/to/cwd
```