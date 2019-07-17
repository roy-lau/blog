<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8>
            <v-timeline dense clipped align-top>
                <v-slide-x-reverse-transition group hide-on-leave>
                    <v-timeline-item v-for="(post, i) in postList" :color="years[i].color" v-if="post" :key="i" smail><!-- fill-dot  -->
                        <v-card :color="years[i].color" dark flat>
                            <!-- {{postList}} -->
                            <v-card-title  v-text="post.frontmatter.date || post.lastUpdated" />
                            <v-list class="white">
                                <template v-for="n in 3">
                                    <v-list-tile avatar v-ripple="{ class: `${years[i].color}--text` }" class="py-2" :to="post.regularPath">
                                        <v-list-tile-content>
                                            <v-list-tile-title style="color: black;" headline dark v-text="post.title" />
                                            <v-list-tile-sub-title style="color: gray;"><div style="width: 100px;" v-if="post.excerpt"  v-html="post.excerpt"></div> </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-tile-action>
                                            <v-list-tile-action-text>两天前</v-list-tile-action-text>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider color="silver" class="my-0"></v-divider>
                                </template>
                            </v-list>
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
            return pages.filter(({ type }) => type === 'post').sort()
        },

        // 处理后的文章数据
        postList() {
            console.log(this.filterTime)
            let _size = this.filterTime.length-1,
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