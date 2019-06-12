# vscode 配置

安装插件：

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

快捷键：

```json
// 将按键绑定配置放入此文件中即可覆盖默认值
[
  {
    "key": "ctrl+d",
    "command": "-editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+down",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+down",
    "command": "-problems.action.focusProblemsFromFilter",
    "when": "problemsFilterFocus"
  },
  {
    "key": "ctrl+down",
    "command": "-scrollLineDown",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+down",
    "command": "-search.focus.nextInputBox",
    "when": "inputBoxFocus && searchViewletVisible"
  },
  {
    "key": "ctrl+down",
    "command": "-selectNextSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "ctrl+down",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+down",
    "command": "-editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+up",
    "command": "-scrollLineUp",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+up",
    "command": "-search.action.focusSearchFromResults",
    "when": "firstMatchFocus && searchViewletVisible"
  },
  {
    "key": "ctrl+up",
    "command": "-search.focus.previousInputBox",
    "when": "inputBoxFocus && searchViewletVisible && !searchInputBoxFocus"
  },
  {
    "key": "ctrl+up",
    "command": "-selectPrevSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "ctrl+up",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+up",
    "command": "-editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+a",
    "command": "editor.action.formatDocument",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+q",
    "command": "editor.action.changeAll",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+f2",
    "command": "-editor.action.changeAll",
    "when": "editorTextFocus && !editorReadonly"
  },
    {
    "key": "ctrl+m",
    "command": "-editor.action.toggleTabFocusMode"
  },
  {
    "key": "ctrl+m",
    "command": "markdown.showPreviewToSide",
    "when": "editorLangId == 'markdown'"
  },
  {
    "key": "ctrl+k v",
    "command": "-markdown.showPreviewToSide",
    "when": "editorLangId == 'markdown'"
  }
]
```
