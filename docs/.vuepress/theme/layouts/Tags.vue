<template>
    <div>这是标签页面 {{$route.query.tag}} </div>
</template>

<script>
export default {
    data() {
        return {
            pageSize: 5, // 每页显示多少篇文章
            pageCurrent: 1, // 默认当前是在第几页
        }
    },
    computed: {
        // 过滤后的文章数据
        filterTags() {
            let pages = this.$site.pages
            return pages.filter(({ type }) => type === 'post')
        },

        // 分页长度    WTF： 四舍五入不太合适，以后优化
        pageLength() {
            return Math.round(this.filterTags.length / this.pageSize)
        },

        // pageStart： 开始页，pageCurrent 的变化会改变 pageStart。 pageCurrent 的变化是由 v-pagination 组件控制的
        pageStart() {
            return this.pageSize * (this.pageCurrent - 1)
        },

        // pageEnd： 结束页，pageCurrent 的变化会改变 pageEnd。 pageCurrent 的变化是由 v-pagination 组件控制的
        pageEnd() {
            return this.pageSize * this.pageCurrent
        },

        // 处理后的文章数据
        postList() {
            console.table({ '开始页': this.pageStart, '结束页': this.pageEnd })

            let post = new Array(this.pageSize),
                _size = this.pageSize

            for (let i = this.pageEnd; i >= this.pageStart; i--) {
                post[_size--] = this.filterTags[i]
            }

            return post
        }
    },
    methods: {

    }
}
</script>
<style>
.card--flex-toolbar {
    margin-top: -66px;
    padding: 30px;
}
</style>