<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8 v-if="page" v-for="page in postList" :key="page.key" class="mt-5">
            <v-card v-if="page.type==='post'">
                <v-card ripple :to="page.regularPath" flat>
                    <v-img max-height="260px" min-height="100px" :src="'/imgs/random/material-' + (Math.round(Math.random() * 18) + 1) + '.png'">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center>
                                <!-- <v-progress-circular indeterminate color="grey lighten-3"></v-progress-circular> -->
                                <img :src="$withBase('/loadings/loading-wave.svg')" alt="loading……" />
                            </v-layout>
                        </template>
                        <v-layout column fill-height class="white--text mt-0">
                            <v-spacer />
                            <v-flex shrink style="background: rgba(0,0,0,.2);">
                                <v-expand-transition>
                                    <div class="transition-fast-in-fast-out">
                                        <v-card-title class="headline pb-1 white--text">{{page.title}}</v-card-title>
                                        <v-card-text class="subheading py-1 white--text lighten-3">
                                            <v-icon color="grey lighten-3">perm_identity</v-icon>{{page.frontmatter.author||page.author||'roylau'}} /
                                            <v-icon color="grey lighten-3">date_range</v-icon> {{page.frontmatter.date||page.lastUpdated||'时间'}}
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-card>
                <v-card-text class="gray--text" v-if="page.excerpt" v-html="page.excerpt"> </v-card-text>
                <v-divider class="my-0" />
                <v-card-actions>
                    <!-- <v-icon>loyalty</v-icon> &nbsp;&nbsp; -->
                    <v-btn small v-for="(tag,idx) in headleTags(page.frontmatter.tags)" :key="idx"
                        :color="tagsConf[idx].color" :to="{ path: '/tags/', query: { tag: tag }}">
                        <span class="tag-cls">{{tag||'标签'}}</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <!-- 分页 start -->
        <v-flex d-flex md8 lg8>
            <div class="text-xs-center">
                <v-pagination v-model="pageCurrent" :length="pageLength" circle color="deep-purple" />
            </div>
        </v-flex>
        <!-- 分页 end -->
    </v-layout>
</template>
<script>
// import {postList} from '@dynamic/postList.js'
export default {
    data: () => ({
        tagsConf: [
            { icon: 'loyalty', color: 'brown' },
            { icon: 'loyalty', color: 'pink' },
            { icon: 'loyalty', color: 'orange' },
            { icon: 'loyalty', color: 'deep-purple' },
            { icon: 'loyalty', color: 'indigo' },
            { icon: 'loyalty', color: 'blue' },
            { icon: 'loyalty', color: 'teal' },
            { icon: 'loyalty', color: 'light-blue' },
            { icon: 'loyalty', color: 'cyan' },
            { icon: 'loyalty', color: 'green' },
            { icon: 'loyalty', color: 'light-green' },
            { icon: 'loyalty', color: 'lime' },
            { icon: 'loyalty', color: 'amber' },
            { icon: 'loyalty', color: 'red' },
            { icon: 'loyalty', color: 'yellow' },
            { icon: 'loyalty', color: 'deep-orange' }, // next brow
            { icon: 'loyalty', color: 'blue-grey' },
            { icon: 'loyalty', color: 'grey' },
            { icon: 'loyalty', color: 'black' },
            { icon: 'loyalty', color: 'white' },
            { icon: 'loyalty', color: 'transparent' }
        ],
        pageSize: 5, // 每页显示多少篇文章
        pageCurrent: 1, // 默认当前是在第几页
    }),
    computed: {
        // 过滤后的文章数据
        pageList() {
            let pages = this.$site.pages
            return pages.filter(({ type }) => type === 'post')
        },

        // 分页长度    WTF： 四舍五入不太合适，以后优化
        pageLength(){
            return Math.round(this.pageList.length / this.pageSize)
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
                post[_size--] = this.pageList[i]
            }

            return post
        }
    },
    methods: {
        headleTags(tag) {
            if (typeof tag === "string") {
                return [tag]
            } else {
                return tag
            }
        },
    },
    created() {
        console.log(this)
    },
}
</script>
<style scoped>
.tag-cls{
    color: rgba(255,255,255,0.8);
}
.tag-cls:hover{
    color: white;
}
</style>