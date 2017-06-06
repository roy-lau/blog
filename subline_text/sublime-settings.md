 // While you can edit this file, it's best to put your changes in  
 // "User/Preferences.sublime-settings", which overrides the settings in here.  
 // Settings may also be placed in file type specific options files, for    
 // example, in Packages/Python/Python.sublime-settings for python files.   
 {  
   // Sets the colors used within the text area 

   主题文件的路径

      "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",  

   // Note that the font_face and font_size are overriden in the platform   
   // specific settings file, for example, "Preferences (Linux).sublime-settings".  
   // Because of this, setting them here will have no effect: you must set them     
   // in your User File Preferences.  

   设置字体和大小，必须在Settings-User里重写，这里设置没有任何效果   

      "font_face": "Consolas",
      "font_size": 12,

   // Valid options are "no_bold", "no_italic",     "no_antialias", "gray_antialias",   
   // "subpixel_antialias" and "no_round" (OS X only)   
   // 字体选项：no_bold不显示粗体字，no_italic不显示斜体字，no_antialias和no_antialias关闭反锯齿     
   // subpixel_antialias和no_round是OS X系统独有的     

      "font_options": [],

  
  在文字上双击会全选当前的内容，如果里面出现以下字符，就会被截断

      "word_separators”: “./()\”‘-:,.;~!@#$%^&*|+=[]{}`~?",

   
   是否显示行号

      "line_numbers": true,


   是否显示行号边栏

      "gutter": true,


   行号边栏和文字的间距

      "margin": 4,

   是否显示代码折叠按钮

      "fold_buttons": true,


   不管鼠标在不在行号边栏，代码折叠按钮一直显示

      "fade_fold_buttons": true,

   列显示垂直标尺，在中括号里填入数字，宽度按字符计算

      "rulers": [],

   是否打开拼写检查

      "spell_check": false,

   Tab键制表符宽度

      "tab_size": 4,

   设为true时，缩进和遇到Tab键时使用空格替代

      "translate_tabs_to_spaces": false,

  translate_tabs_to_spaces设置为true，Tab和Backspace的删除/插入作用于制表符宽度   
  否则作用于单个空格

      "use_tab_stops": true,

   false时禁止在载入的时候检测制表符和空格

      "detect_indentation": true,

   按回车时，自动与制表位对齐

      "auto_indent": true,

   // Makes auto indent a little smarter, e.g., by indenting the next line
   // after an if statement in C. Requires auto_indent to be enabled.

   针对C语言的

      "smart_indent": false,

   需要启用auto_indent，第一次打开括号缩进时插入空格？（没测试出来效果...）

      "indent_to_bracket": true,

   显示对齐的白线是否根据回车、tab等操作自动填补

      "trim_automatic_white_space": true,

   是否自动换行，如果选auto，需要加双引号

      "word_wrap": false,

   设置窗口内文字区域的宽度

      "wrap_width": 0,

   防止被缩进到同一级的字换行

      "indent_subsequent_lines": true,

   如果没有定义过，则文件居中显示（比如新建的文件）

      "draw_centered": false,

   自动匹配引号，括号等

      "auto_match_enabled": true,

   拼写检查的单词列表路径

      "dictionary": "Packages/Language - English/en_US.dic",

   代码地图的可视区域部分是否加上边框，边框的颜色可在配色方案上加入minimapBorder键

      "draw_minimap_border": false,

   突出显示当前光标所在的行

      "highlight_line": false,

   设置光标闪动方式`"smooth", "phase", "blink", "wide" and "solid"`.

      "caret_style": "smooth",

   是否特殊显示当前光标所在的括号、代码头尾闭合标记

      "match_brackets": true,

   设为false时，只有光标在括号或头尾闭合标记的两端时，match_brackets才生效

      "match_brackets_content": true,

   是否突出显示圆括号，match_brackets为true生效

      "match_brackets_square": false,

   是否突出显示大括号，match_brackets为true生效

      "match_brackets_braces": false,

   是否突出显示尖括号，match_brackets为true生效

      "match_brackets_angle": false,

   html和xml下突出显示光标所在标签的两端，影响HTML、XML、CSS等

      "match_tags": true,

   全文突出显示和当前选中字符相同的字符

      "match_selection": true,

   设置每一行到顶部，以像素为单位的间距，效果相当于行距

      "line_padding_top": 1,

   设置每一行到底部，以像素为单位的间距，效果相当于行距

      "line_padding_bottom": 1,

   // Set to false to disable scrolling past the end of the buffer.
   // On OS X, this value is overridden in the platform specific settings, so
   // you'll need to place this line in your user settings to override it.

   设置为false时，滚动到文本的最下方时，没有缓冲区
   
      "scroll_past_end": true,

   // This controls what happens when pressing up or down when on the first
   // or last line.
   // On OS X, this value is overridden in the platform specific settings, so
   // you'll need to place this line in your user settings to override it.

   设置成true，当光标已经在第一行时，再Up则到行首，如果光标已经在最后一行，再Down则跳到行尾

      "move_to_limit_on_up_down": false,

   按space或tab时，实际会产生白色的点（一个空格一个点）或白色的横线（tab_size设置的制表符的宽度），中状态下才能看到     
   设置为none时，什么情况下都不显示这些点和线  
   设置为selection时，只显示选中状态下的点和线   
   设置为all时，则一直显示 

         "draw_white_space": "selection",

   制表位的对齐白线是否显示，颜色可在主题文件里设置（guide，activeGuide，stackGuide）

      "draw_indent_guides": true,

   制表位的对齐白线，draw_normal为一直显示，draw_active为只显示当前光标所在的代码控制域

      "indent_guide_options": ["draw_normal"],

   为true时，保存文件时会删除每行结束后多余的空格

      "trim_trailing_white_space_on_save": false,

   为true时，保存文件时光标会在文件的最后向下换一行

      "ensure_newline_at_eof_on_save": false,

   切换到其它文件标签或点击其它非本软件区域，文件自动保存

      "save_on_focus_lost": false,

   编码时不能自动检测编码时，将自动检测ASCII, UTF-8 和 UTF-16

      "fallback_encoding": "Western (Windows 1252)",

   默认编码格式

      "default_encoding": "UTF-8",

   包含空字节的文件被打开默认为十六进制

      "enable_hexadecimal_encoding": true,

   // Determines what character(s) are used to terminate each line in new files.    
   // Valid values are 'system' (whatever the OS uses), 'windows' (CRLF) and    
   // 'unix' (LF only).     

    每一行结束的时候用什么字符做终止符

      "default_line_ending": "system",

   设置为enabled时，在一个字符串间按Tab将插入一个制表符  
   设置为true时，按Tab会根据前后环境进行代码自动匹配填补   

      "tab_completion": true,

   代码提示

      "auto_complete": true,

   代码提示的大小限制

      "auto_complete_size_limit": 4194304,

   代码提示延迟显示

      "auto_complete_delay": 50,

   代码提示的控制范围

      "auto_complete_selector": "source - comment",

   触发代码提示的其他情况

      "auto_complete_triggers": [ 
            {"selector": "text.html", "characters": "<"} 
      ],

   设为false时，选择提示的代码按回车或点击可以输出出来，但选择true时不会输出而是直接换行

      "auto_complete_commit_on_tab": false,

   auto_complete_commit_on_tab必须为true，控制代码提示的活跃度

      "auto_complete_with_fields": false,

   设置为false，使用Shift + tab总是插入制表符

      "shift_tab_unindent": true,

   选中的文本按Ctrl + f时，自动复制到查找面板的文本框里

      "find_selected_text": true,

   DataPackagesTheme - DefaultDefault.sublime-theme控制软件的主题

      "theme": "Default.sublime-theme",

   滚动的速度

      "scroll_speed": 1.0,

   左边边栏文件夹动画

      "tree_animation_enabled": true,

   标签页的关闭按钮
      "show_tab_close_buttons": true,

   // OS X 10.7 only: Set to true to disable Lion style full screen support.    
   // Sublime Text must be restarted for this to take effect.   
   针对OS X

      "use_simple_full_screen": false,

   水平垂直滚动条：system和disabled为默认显示方式，enabled为自动隐藏显示 

      "overlay_scroll_bars": "system",

   热推出功能！退出时不会提示是否保存文件，而是直接退出   
   下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里

      "hot_exit": true,

   软件使用最后的设定打开文件，hot_exit为true时没有效果

      "remember_open_files": true,

   // OS X only: When files are opened from finder, or by dragging onto the     
   // dock icon, this controls if a new window is created or not.   
   针对OS X

      "open_files_in_new_window": true,

   // there's a folder open within the window. This is always enabled on OS X,  
   // changing it here won't modify the behavior.   
   针对OS X

      "close_windows_when_empty": true,

   哪些文件会被显示到边栏上
   // project basis.

      "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS"],
      "file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb", "*.idb", ".DS_Store", "*.class", "*.psd", "*.db"],

   // Goto Anything or Find in Files

      "binary_file_patterns": ["*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip"],

   删除你想要忽略的插件，需要重启
   
    "ignored_packages": ["Vintage"]
 }


 ======================================My setting ===================================


     {
        "font_size": 12,
        "fade_fold_buttons": false,     // 不管鼠标在不在行号边栏，代码折叠按钮一直显示
        "highlight_line": true,         // 突出显示当前光标所在的行
        "highlight_modified_tabs": true,    // 使标签与修改文件更可见(文件有变动时，tab处高亮显示  )
        "trim_trailing_white_space_on_save": true,  // 为true时，保存文件时会删除每行结束后多余的空格
        "auto_indent": true,                        // 按回车时，自动与制表位对齐
        "indent_guide_options": ["draw_active"],    // 制表位的对齐白线，draw_normal为一直显示，
                                                       draw_active为只显示当前光标所在的代码控制域
        "ignored_packages":[""],        // 为空字符串时，可以启动vi模式
        "save_on_focus_lost": true      // 切换到其它文件标签或点击其它非本软件区域，文件自动保存
    }

#### 打开jade文件 --> preerences --> setting-Syntax

    {
    	"tab_size": 2,
    	"translate_tabs_to_spaces": true
    }

这行加在底部，可以让浏览器不停的刷新
`<meta http-equiv="refresh" content="0.1">`