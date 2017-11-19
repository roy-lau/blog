### ====================== My subline setting =======================

     {
        "font_size": 12,
        "fade_fold_buttons": false,     	// 不管鼠标在不在行号边栏，代码折叠按钮一直显示
        "highlight_line": true,         	// 突出显示当前光标所在的行
        "highlight_modified_tabs": true,    // 使标签与修改文件更可见(文件有变动时，tab处高亮显示)
        "trim_trailing_white_space_on_save": true,  // 为true时，保存文件时会删除每行结束后多余的空格
        "auto_indent": true,                        // 按回车时，自动与制表位对齐
        "indent_guide_options": ["draw_active"],    // 制表位的对齐白线，draw_normal为一直显示，
                                                       draw_active为只显示当前光标所在的代码控制域
        "ignored_packages":[""],        	// 为空字符串时，可以启动vi模式
        "save_on_focus_lost": true      	// 切换到其它文件标签或点击其它非本软件区域，文件自动保存
    }

#### 打开jade文件 --> preerences --> setting-Syntax

    {
    	"tab_size": 2,
    	"translate_tabs_to_spaces": true
    }
#### 安装的插件

	{
		"bootstrapped": true,
		"in_process_packages":
		[
		],
		"installed_packages":
		[
			"Emmet",   // 快速编辑HTML，css插件
			"HTML-CSS-JS Prettify",   // HTML-CSS-JS格式化
			"LESS",
			"OmniMarkupPreviewer",   // markdown文本实时预览插件(用法：Ctrl+Alt+o )
			"OneDarkMaterial", 		 // 皮肤
			"Package Control",
			"Vuejs Complete Package"
		]
	}

#### subline代码片段

步骤：Tools --> Developer --> New snippent 文件中写入下面片段:

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


#### Emmet配置让单标签闭合

步骤：preference --> package Seeting --> emeet --> Setting-User配置文件中写入下面片段：

	{
		"syntaxProfiles":{
			"html":"xhtml",
			"vue":"xhtml"
		}
	}

#### HTML-CSS-JS Prettify格式化.vue文件

步骤：preference --> package Seeting --> HTML/CSS/JS Prettify --> Plugin Options-Default  配置文件中：

将下面代码：
```
  "html":
        {
            "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
            "allowed_file_syntaxes": ["html", "xml"],
            "disallowed_file_patterns": []
        },
```

改为：
```
  "html":
        {
            "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "vue"],
            "allowed_file_syntaxes": ["html", "xml"],
            "disallowed_file_patterns": []
        },
```

这行加在底部，可以让浏览器不停的刷新
`<meta http-equiv="refresh" content="0.1">`
