# 				vuepress 开发分支

> 使用 `vuepress` 开发博客


### clone && build && dev


```sh
# 下载
git clone git@github.com:roy-lau/blog.git -b dev-vp blog-vp --depth=1

# 进入目录
cd blog-vp

# 下载 blog 原文件
git clone git@github.com:roy-lau/blog.git -b src src --depth=1
# 安装依赖
npm i

# 运行项目
# npm run dev

# 构建项目
npm run build
```


### 技术栈

* [vuepress](https://vuepress.vuejs.org/zh/)
* [参考仓库](https://github.com/vuepress-reco/vuepress-theme-reco)

使用 [git actions deploy](https://github.com/peaceiris/actions-gh-pages) 自动化构建 vuepress 项目到 gh-pages