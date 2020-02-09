module.exports = {
        theme: require.resolve('../../'),
        base: "/blog/",
        name: "Roy Lau",
        email: "897379293@qq.com",
        head: [
            // ['link', { rel: 'icon', href: '/logo.png' }]
        ],
        markdown: {
            lineNumbers: true //是否开启文章代码左边的行号显示
        },
        // 监听文件（路径搞不明白）
        extraWatchFiles: [
            // '.vuepress/foo.js', // 使用相对路径
            '/theme/index.js' // 使用绝对路径
        ],
        themeConfig: {
            smoothScroll: true, // 启用页面滚动效果
            // 搜索设置
            search: true,
            searchMaxSuggestions: 10,
            nav: [{
                    text: '首页',
                    link: '/home/'
                },
                {
                    text: '标签',
                    link: '/tag/'
                },
                {
                    text: '时间线',
                    link: '/timeLine/'
                },
                {
                    text: '分类',
                    link: '/category/'
                },
                {
                    text: '了解更多',
                    ariaLabel: '了解更多',
                    items: [{
                            text: 'API',
                            items: [{
                                    text: 'CLI',
                                    link: '/api/cli.html'
                                },
                                {
                                    text: 'Node',
                                    link: '/api/node.html'
                                }
                            ]
                        },
                        {
                            text: '开发指南',
                            items: [{
                                    text: '本地开发',
                                    link: '/miscellaneous/local-development.html'
                                },
                                {
                                    text: '设计理念',
                                    link: '/miscellaneous/design-concepts.html'
                                },
                                {
                                    text: 'FAQ',
                                    link: '/faq/'
                                },
                                {
                                    text: '术语',
                                    link: '/miscellaneous/glossary.html'
                                }
                            ]
                        },
                        {
                            text: '其他',
                            items: [{
                                    text: '从 0.x 迁移',
                                    link: '/miscellaneous/migration-guide.html'
                                },
                                {
                                    text: 'Changelog',
                                    link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: '关于',
                    ariaLabel: '关于',
                    items: [{
                            text: 'github',
                            link: 'https://github.com/roy-lau'
                        },{
                            text: 'QQ',
                            link: ''
                        },]
                }]
            }
        }