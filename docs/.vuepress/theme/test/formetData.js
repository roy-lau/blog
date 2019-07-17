let arr = [{ "title": "本博客", "frontmatter": { "title": "本博客", "date": "2019 六月 26日, 凌晨 12:32:23", "tags": ["Blog", "vuepress", "vue", "vuetifyJs"], "categories": "blog", "toc": true }, "regularPath": "/", "relativePath": "README.md", "key": "v-79ad9d35", "path": "/", "headers": [{ "level": 3, "title": "TODO", "slug": "todo" }, { "level": 2, "title": "中标题", "slug": "中标题" }, { "level": 3, "title": "代码", "slug": "代码" }, { "level": 3, "title": "表格示例", "slug": "表格示例" }, { "level": 3, "title": "表情符号 😄", "slug": "表情符号" }], "excerpt": "<blockquote>\n<p>本博客使用 <a href=\"https://v1.vuepress.vuejs.org/zh/\" target=\"_blank\" rel=\"noopener noreferrer\">vuepress<OutboundLink/></a> 为主搭建，另外使用了 <a href=\"https://vuetifyjs.com/zh-Hans\" target=\"_blank\" rel=\"noopener noreferrer\">vuetifyjs<OutboundLink/></a> <code>UI</code> 组件</p>\n<blockquote>\n<p>树</p>\n<blockquote>\n<p>二叉树</p>\n<blockquote>\n<p>平衡二叉树</p>\n<blockquote>\n<p>满二叉树</p>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n", "type": "post", "lastUpdated": "2019 七月 16日, 下午 12:35:58" }, { "title": "Mysql 导出数据", "frontmatter": {}, "regularPath": "/database-export.html", "relativePath": "database-export.md", "key": "v-5a14a546", "path": "/database-export.html", "headers": [{ "level": 2, "title": "Mysql 导出数据", "slug": "mysql-导出数据" }, { "level": 3, "title": "导出表作为原始数据", "slug": "导出表作为原始数据" }, { "level": 3, "title": "导出SQL格式的数据", "slug": "导出sql格式的数据" }, { "level": 3, "title": "将数据表及数据库拷贝至其他主机", "slug": "将数据表及数据库拷贝至其他主机" }], "type": "post", "excerpt": "\r\n\r\n<a href=\"README.md\">目录</a>\r\n\r\n> MySQL中可以使用 `SELECT...INTO OUTFILE` 语句来简单的导出数据到文本文件上。\r\n\r\n__使用 `SELECT ... INTO OUTFILE` 语句导出数据__\r\n\r\n以下实例中我们将数据表 `test_tbl` 数据导出到 `tmp/tutorials.txt` 文件中:\r\n\r\n```sql\r\n ...", "lastUpdated": "2019 七月 5日, 下午 4:25:44" }, { "title": "http-server用法及帮助", "frontmatter": {}, "regularPath": "/http-server.html", "relativePath": "http-server.md", "key": "v-5cdd3886", "path": "/http-server.html", "type": "post", "excerpt": "\r\n\r\n```bash\r\n$ hs --help\r\n\r\nusage: http-server [path] [options]\r\n\r\noptions:\r\n\r\n  \t-p           Port to use [8080]\r\n  \t-a           Address to use [0.0.0.0]\r\n  \t-d           Show directory listings [tr ...", "lastUpdated": "2019 七月 5日, 下午 4:25:44" }, { "title": "PM2 用法及帮助", "frontmatter": { "title": "PM2 用法及帮助", "date": "2017 六月 6日, 晚上 11:43:27", "tags": ["pm2", "nodejs", "npm"], "categories": "pm2", "toc": true }, "regularPath": "/pm2.html", "relativePath": "pm2.md", "key": "v-4306cdb4", "path": "/pm2.html", "type": "post", "excerpt": "\r\n\r\n用法:\r\n\r\n    $ npm install pm2 -g            # 命令行安装 pm2\r\n    $ pm2 start app.js -i 4         # 后台运行pm2，启动4核\r\n    $ pm2 start app.js -i 0         # 后台运行pm2，启动全核\r\n\r\n也可以把'max' 参数传递给 start\r\n正确的进程数目依赖于C ...", "lastUpdated": "2019 七月 11日, 下午 4:38:40" }, { "title": "markdown-it-emoji 表情符号", "frontmatter": { "title": "markdown-it-emoji 表情符号", "date": "2019 七月 12日, 晚上 9:27:06", "tags": ["markdown-it-emoji", "emoji", "js"] }, "regularPath": "/vuepress/emoji-table.html", "relativePath": "vuepress/emoji-table.md", "key": "v-03bdf175", "path": "/vuepress/emoji-table.html", "headers": [{ "level": 3, "title": "表情符号", "slug": "表情符号" }], "excerpt": "<h3 id=\"表情符号\"><a class=\"header-anchor\" href=\"#表情符号\" aria-hidden=\"true\">#</a> 表情符号</h3>\n<ul>\n<li><a href=\"https://github.com/markdown-it/markdown-it-emoji\" target=\"_blank\" rel=\"noopener noreferrer\">markdown-it-emoji github 地址<OutboundLink/></a></li>\n<li><a href=\"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json\" target=\"_blank\" rel=\"noopener noreferrer\">表情json<OutboundLink/></a> 共 1480 个</li>\n</ul>\n", "type": "post", "lastUpdated": "2019 七月 12日, 下午 5:37:54" }]

let _size = arr.length - 1,
    list = new Array(_size)


// for (let i = _size; i >= 0; i--) {
//         let list1 = arr[i],
//             _dateTime1 = list1.frontmatter.date || list1.lastUpdated,
//             _dateArr1 = _dateTime1.split(','),
//             _day1 = _dateArr1[0],
//             _dayLength1 = _dateArr1[0].length,
//             _month1 = _day1.substr(0, _dayLength1 - 3),
//             _dayStr1 = _day1.substr(_dayLength1 - 3, _dayLength1),
//             _time1 = _dayStr1 + _dateArr1[1]
//     }


for (var i = 0; i < arr.length; i++) {
	        let list1 = arr[i],
            _dateTime1 = list1.frontmatter.date || list1.lastUpdated,
            _dateArr1 = _dateTime1.split(','),
            _day1 = _dateArr1[0],
            _dayLength1 = _dateArr1[0].length,
            _month1 = _day1.substr(0, _dayLength1 - 3),
            _dayStr1 = _day1.substr(_dayLength1 - 3, _dayLength1),
            _time1 = _dayStr1 + _dateArr1[1]
            // console.info(i)
            // console.info(_month1)
    for (var j = i + 1; j < arr.length; j++) {
    	let list2 = arr[j],
            _dateTime2 = list2.frontmatter.date || list2.lastUpdated,
            _dateArr2 = _dateTime2.split(','),
            _day2 = _dateArr2[0],
            _dayLength2 = _dateArr2[0].length,
            _month2 = _day2.substr(0, _dayLength2 - 3),
            _dayStr2 = _day2.substr(_dayLength2 - 3, _dayLength2),
            _time2 = _dayStr2 + _dateArr2[1]
        if (_month1=== _month2) {
        // console.log(_month1, _month2,_month1=== _month2)
            //如果第一个等于第二个，splice方法删除第二个
            arr.splice(j,1);
            j--;
            // i--;
        }else{
        // console.log(_month1, _month2)

        }
    }
}


