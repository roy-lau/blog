"===========  my vimrc  =============

" 设置文件编码检测类型及支持格式
set fencs=utf-8,gbk,ucs-bom,gb18030,gb2312,cp936

"解决consle输出乱码
language messages zh_CN.utf-8
set termencoding=utf-8,cp936

"设置编码
set encoding=utf-8

set fileencodings=utf-8,chinese,latin-1
if has("win32")
set fileencoding=chinese
else
set fileencoding=utf-8
endif


" 指定菜单语言
set langmenu=zh_CN.utf-8
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim
set guifont=新宋体:h18

"帮助语言
set helplang=cn 

" 配置多语言环境,解决中文乱码问题

if has("multi_byte")
    " UTF-8 编码
    set encoding=utf-8
    set termencoding=utf-8
    set formatoptions+=mM
    set fencs=utf-8,gbk
    if v:lang =~? '^/(zh/)/|/(ja/)/|/(ko/)'
        set ambiwidth=double
    endif
    if has("win32")
        source $VIMRUNTIME/delmenu.vim
        source $VIMRUNTIME/menu.vim
        language messages zh_CN.utf-8
    endif
else
    echoerr "Sorry, this version of (g)vim was not compiled with +multi_byte"
endif 

"开启语法高亮设置
if !exists("syntax_on")
    syntax on
endif
"设置语法高亮
set nu!
syntax enable
syntax on

"TAB距离
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set cindent

"自动透明
au GUIEnter * call libcallnr("vimtweak.dll", "SetAlpha", 211)

set nu  			                       " 打开行号
set wrap  			                     " 自动折行
au GUIEnter * simalt ~x          " 窗口启动时自动最大化
set guioptions-=m                " 隐藏菜单栏
set guioptions-=T                 " 隐藏工具栏 
set hlsearch 		                     " 搜索模式高亮显示.
set nobackup                         " 不自动生成备份文件
set mousehide   	                   " 在键入文本时隐藏鼠标
set tags=tags; 		                   " 程序中跳转
set laststatus=2                     " 启用状态栏信息
set autochdir  		                   " 自动设置目录为正在编辑的文件所在的目录
set ignorecase                       " 搜索模式里忽略大小写
filetype on                          " 启用文件类型侦测
filetype plugin on                   " 针对不同的文件类型加载对应的插件
filetype plugin indent on            " 启用缩进
set smartindent                      " 启用智能对齐方式
set clipboard+=unnamed               " 与Windows共享剪贴板
set autoread                         " 当文件在外部被修改，自动更新该文件 
colorscheme darkblue                 " 设置gvim背景颜色
imap <c-k> <Up>        " Ctrl + K 插入模式下光标向上移动    
imap <c-j> <Down>      " Ctrl + J 插入模式下光标向下移动   
imap <c-h> <Left>      " Ctrl + H 插入模式下光标向左移动    
imap <c-l> <Right>     " Ctrl + L 插入模式下光标向右移动
 

" 常规模式下用空格键来开关光标行所在折叠（注：zR 展开所有折叠，zM 关闭所有折叠）
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>
 
" -----------------------------------------------------------------------------
"  < Vundle 插件管理工具配置 >
" -----------------------------------------------------------------------------
" 在Vim的normal模式下执行命令 :PluginInstall  就可以下载插件
" git clone https://github.com/VundleVim/Vundle.vim.git /bundle/vundle
   
set nocompatible                                      "禁用 Vi 兼容模式  
filetype off                                          "禁用文件类型侦测  
set rtp+=$VIM/vimfiles/bundle/Vundle.vim              "让gvim找到vundle.vim路径
call vundle#begin('$VIM/vimfiles/bundle/')               "设置vundle默认的路径
                              
Plugin 'gmarik/vundle'                             "请求 Bundle 列表               

" 以下为要安装或更新的插件
Plugin 'emment-vim' 

call vundle#end() 
filetype plugin indent on

"---------------------------------------vimrc初始设置---------------------------------------------

source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim
behave mswin

set diffexpr=MyDiff()
function MyDiff()
  let opt = '-a --binary '
  if &diffopt =~ 'icase' | let opt = opt . '-i ' | endif
  if &diffopt =~ 'iwhite' | let opt = opt . '-b ' | endif
  let arg1 = v:fname_in
  if arg1 =~ ' ' | let arg1 = '"' . arg1 . '"' | endif
  let arg2 = v:fname_new
  if arg2 =~ ' ' | let arg2 = '"' . arg2 . '"' | endif
  let arg3 = v:fname_out
  if arg3 =~ ' ' | let arg3 = '"' . arg3 . '"' | endif
  if $VIMRUNTIME =~ ' '
    if &sh =~ '\<cmd'
      if empty(&shellxquote)
        let l:shxq_sav = ''
        set shellxquote&
      endif
      let cmd = '"' . $VIMRUNTIME . '\diff"'
    else
      let cmd = substitute($VIMRUNTIME, ' ', '" ', '') . '\diff"'
    endif
  else
    let cmd = $VIMRUNTIME . '\diff'
  endif
  silent execute '!' . cmd . ' ' . opt . arg1 . ' ' . arg2 . ' > ' . arg3
  if exists('l:shxq_sav')
    let &shellxquote=l:shxq_sav
  endif
endfunction

