###  My subline setting

```json
 {
    "font_size": 12,
    // 不管鼠标在不在行号边栏，代码折叠按钮一直显示
    "fade_fold_buttons": false,
    // 突出显示当前光标所在的行
    "highlight_line": true,
    // 使标签与修改文件更可见(文件有变动时，tab处高亮显示)
    "highlight_modified_tabs": true,
    // 为true时，保存文件时会删除每行结束后多余的空格
    "trim_trailing_white_space_on_save": true,
    // 按回车时，自动与制表位对齐
    "auto_indent": true,
    // 制表位的对齐白线，draw_normal为一直显示，draw_active为只显示当前光标所在的代码控制域
    "indent_guide_options": ["draw_active"],
    // 为空字符串时，可以启动vi模式
    "ignored_packages":[""],
    // 切换到其它文件标签或点击其它非本软件区域，文件自动保存
    "save_on_focus_lost": true
}
```
#### 打开jade文件 --> preerences --> setting-Syntax

```json
    {
    	"tab_size": 2,
    	"translate_tabs_to_spaces": true
    }
```

#### 安装的插件

```json
{
	"bootstrapped": true,
	"in_process_packages":[],
	"installed_packages":
	[
		// 快速编辑HTML，css插件
		"Emmet",
		// HTML-CSS-JS格式化
		"HTML-CSS-JS Prettify",
		"LESS",
		// markdown文本实时预览插件(用法：Ctrl+Alt+o )
		"OmniMarkupPreviewer",
		// 皮肤
		"OneDarkMaterial",
		"Package Control",
		// vue 插件
		"Vuejs Complete Package",
		// 代码注释插件
		"DocBlockr",
		// 可以记住折叠状态和位置的插件
		"BufferScroll"
	]
}
```

#### subline代码片段

步骤：Tools --> Developer --> New snippent 文件中写入下面片段:

```xml
<snippet>
	<content><![CDATA[
	按下tab键出现的代码片段
	${number} : 鼠标停留的位置
]]></content>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<tabTrigger>`!`唤醒代码片段的关键字 </tabTrigger>
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<scope>`source.python` 在什么文件类型下</scope>
</snippet>
```

#### Emmet配置让单标签闭合

步骤：preferences --> package Seeting --> emeet --> Setting-User配置文件中写入下面片段：

```json
{
	"syntaxProfiles":{
		"html":"xhtml",
		"vue":"xhtml"
	}
}
```
#### HTML-CSS-JS Prettify格式化.vue文件

步骤：preferences --> package Seeting --> HTML/CSS/JS Prettify --> Plugin Options-Default  配置文件中：

将下面代码：
```json
"html": {
        "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
        "allowed_file_syntaxes": ["html", "xml"],
        "disallowed_file_patterns": []
    },
```

改为：
```json
"html": {
        "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "vue"],
        "allowed_file_syntaxes": ["html", "xml"],
        "disallowed_file_patterns": []
    },
```

### markdowm 文件单独配置

步骤：preferences --> Browse Packages 打开 `Data\Packages\User\`目录下一个名字叫 `Markdown.sublime-settings` 的配置文件中：
	
```json
	// 配置不自动清除空格
   "trim_trailing_white_space_on_save": false
```

### 主题背景（会提示下载文件图标）

	Material Theme
	配置
	"color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
	"theme": "Material-Theme.sublime-theme",

这行加在底部，可以让浏览器不停的刷新
`<meta http-equiv="refresh" content="0.1">`

sublime_txt3注册码：

	—– BEGIN LICENSE —–
	Member J2TeaM
	Single User License
	EA7E-1011316
	D7DA350E 1B8B0760 972F8B60 F3E64036
	B9B4E234 F356F38F 0AD1E3B7 0E9C5FAD
	FA0A2ABE 25F65BD8 D51458E5 3923CE80
	87428428 79079A01 AA69F319 A1AF29A4
	A684C2DC 0B1583D4 19CBD290 217618CD
	5653E0A0 BACE3948 BB2EE45E 422D2C87
	DD9AF44B 99C49590 D2DBDEE1 75860FD2
	8C8BB2AD B2ECE5A4 EFC08AF2 25A9B864
	—— END LICENSE ——
