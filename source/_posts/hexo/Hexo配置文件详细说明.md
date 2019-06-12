---
title: Hexo配置文件详细说明
date: 2019-06-11 13:12:21
tags: hexo
categories: hexo
---

### 配置

> 根目录下 `_config.yml` 文件中修改大部份的配置。

### 网站

| 参数            | 描述
|-----------------|---------
| title           | 网站标题
| subtitle        | 网站副标题
| description     | 网站描述
| author          | 您的名字
| language        | 网站使用的语言,默认是en ，中文网站填zh-CN
| timezone        | 网站时区。Hexo 默认使用您电脑的时区。时区列表。比如说：America/New_York, Japan, 和 UTC 。

其中，description主要用于SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。author参数用于主题显示文章的作者。

### 网址

| 参数                 	| 描述                     | 默认值
|-----------------------|--------------------------|------
| url                  	| 网址
| root               	| 网站根目录
| permalink         	| 文章的永久链接格式      	| `:year/:month/:day/:title/`
| permalink_defaults  	| 永久链接中各部分的默认值


### 目录

| 参数             | 描述 							 | 默认值
|------------------|---------------------------------|----------------
| source_dir       | 资源文件夹，存放用户的资源文件   	 |  `source`
| public_dir       | 公共文件夹，存放生成的静态文件 	 |  `public`
| tag_dir          | 标签文件夹  					 |  `tags`
| archive_dir      | 归档文件夹  					 |  `archives`
| category_dir     | 分类文件夹  					 |  `categories`
| code_dir         | 代码目录  						 |  `downloads/code`
| i18n_dir         | 国际化（i18n）文件夹   			 |  `:lang`
| skip_render      | 跳过指定文件的渲染，您可使用 glob 表达式来匹配路径。


### 文章

| 参数                 |描述  							  	| 默认值
|---------------------|-------------------------------------|--------------
| new_post_name       | 新文章的文件名称    					| `:title.md`
| default_layout      | 预设布局    							| `post`
| auto_spacing        | 在中文和英文之间加入空格    			|
| titlecase           | 把标题转换为 title case   			| `false`
| external_link       | 在新标签中打开链接 					| `true`
| filename_case       | 把文件名称转换为 (1) 小写或 (2) 大写   |  `0`
| render_drafts       | 显示草稿    							| `false`
| post_asset_folder   | 启动 Asset 文件夹(`yarn add hexo-asset-image -S`)| `false`
| relative_link       | 把链接改为与根目录的相对位址  			| `false`
| future              | 显示未来的文章     					| `true`
| highlight           | 代码块的设置							|

#### highlight

| 参数 			| 描述 				| 默认值
|---------------|-------------------|---------------
| enable 		| 是否使用代码高亮	| `true`
| line_number 	| 是否显示行号		| `true`
| auto_detect 	| 是否自动检测语言	| `false`
| tab_replace 	| tab 替代设置

### 首页设置

首页设置，可以自己决定每页显示的文章数量和显示文章的顺序

| 参数 				| 描述
|-------------------|------
| index_generator 	| 主页设置

#### index_generator

| 参数 		| 描述				| 默认值
|-----------|-------------------|------------
| path 		| 首页的根目录
| per_page 	| 每页显示文章的数量  | `10`
| order_by 	| 显示文章的顺序 		| `-date`

### 分类&标签

| 参数                | 描述        	| 默认值
|---------------------|--------------|--------------
| default_category    | 默认分类     | `uncategorized`
| category_map        | 分类别名
| tag_map             | 标签别名


### 时间/日期格式

| 参数            | 描述        | 默认值
|-----------------|------------|-------------
| date_format     | 日期格式    | `YYYY-MM-DD`
| time_format     | 时间格式    | `H:mm:ss`

### 分页

| 参数          		| 描述                              		| 默认值
|-------|------|
| per_page    		| 每页显示的文章量 (0 = 关闭分页功能)   	| `10`
| pagination_dir  	| 分页目录                        		| `page`

### 部署

这里是关于网站部署的配置，常用的有部署类型和部署地址

| 描述 		| 描述
|-----------|-------------
| deploy 	| 网站部署配置

#### deploy

| 描述 	| 描述
|-------|------------
| type 	| 网站部署类型(`git`)
| repo 	| 网站部署地址(github仓库地址)

### 扩展

| 参数        | 描述
|-------------|--------------------------------
| theme       | 当前主题名称。值为false时禁用主题
| deploy      | 部署部分的设置
