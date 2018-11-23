# vscode 配置

安装插件：

快捷键：

配置： 
```json
{
  "editor.fontSize": 18,
  "editor.tabSize": 2,
  "files.associations": {
    "*.vue": "vue"
  },
  "files.autoSave": "onFocusChange",
  "docthis.authorName": "royalu",
  "docthis.includeAuthorTag": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.options": {
    "plugins": [
      "html"
    ]
  },
  "beautify.language": {
    "js": {
      "type": [
        "javascript",
        "json"
      ],
      "filename": [
        ".jshintrc",
        ".jsbeautify"
      ]
    },
    "css": [
      "css",
      "scss"
    ],
    "html": [
      "htm",
      "html",
      "cshtml",
      "vue" //在这里加上vue
    ]
  },
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
}
```