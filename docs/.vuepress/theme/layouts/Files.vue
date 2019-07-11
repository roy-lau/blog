<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8>
            <v-timeline dense clipped align-top>
                <v-slide-x-reverse-transition group hide-on-leave>
                    <v-timeline-item v-for="(post, i) in postList" :color="years[i].color" v-if="post" :key="i" smail><!-- fill-dot  -->
                        <v-card :color="years[i].color" dark>
                            <v-card-title v-text="post.frontmatter.date||post.lastUpdated||'时间'" />
                            <v-card-text class="white" style="color: gray;" dark v-text="post.title" />
                        </v-card>
                    </v-timeline-item>
                </v-slide-x-reverse-transition>
            </v-timeline>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            years: [
                { icon: 'loyalty', color: 'orange' },
                { icon: 'loyalty', color: 'pink' },
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
                { icon: 'loyalty', color: 'deep-orange' },
                { icon: 'loyalty', color: 'brown' },
                { icon: 'loyalty', color: 'blue-grey' },
                { icon: 'loyalty', color: 'grey' },
                { icon: 'loyalty', color: 'black' },
                { icon: 'loyalty', color: 'white' },
                { icon: 'loyalty', color: 'transparent' }
            ],
            pageSize: 5, // 每页显示多少篇文章
            pageCurrent: 1, // 默认当前是在第几页
        }
    },
    computed: {
        // 过滤后的文章数据
        filterTime() {
            let pages = this.$site.pages
            return pages.filter(({ type }) => type === 'post')
        },

        // 处理后的文章数据
        postList() {


            let _size = this.filterTime.length,
                post = new Array(_size)

            for (let i = _size; i >= 0; i--) {
                post[_size--] = this.filterTime[i]
            }

            return post
        }
    },
    methods: {

    }
}
</script>