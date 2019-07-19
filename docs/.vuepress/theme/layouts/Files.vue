<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8>
            <v-timeline dense clipped align-top>
                <v-slide-x-reverse-transition group hide-on-leave>
                    <v-timeline-item v-for="(post, i) in postList" :color="colors[i]" v-if="post" :key="i"> <!-- fill-dot  -->
                        <v-card :color="colors[i]" dark flat>
                            <v-card-title v-text="post.date" />
                            <v-list class="white">
                                <template v-for="list in post.list" >
                                    <v-layout row wrap mt-2 ml-2>
                                        <v-flex xs10 sm10 md10 lg10 xl10 >
                                            <router-link :to="list.path" :class="`${colors[i]}--text text--lighten-1 text-xs-left text--link title`" v-text="list.title" />
                                        </v-flex>
                                        <v-flex xs2 sm2 md2 lg2 xl2>
                                            <v-chip small outline :color="colors[i]" v-text="list.time" class="px-2" />
                                        </v-flex>
                                        <v-flex xs12 sm12 md12 lg12 xl12>
                                            <div class="grey--text text--darken-3 body-2 px-3" v-if="list.excerpt" v-html="list.excerpt"></div>
                                        </v-flex>
                                    </v-layout>
                                    <v-divider color="silver" class="mt-2"></v-divider>
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
            colors: ['orange','pink','deep-purple','indigo','blue','teal','light-blue','cyan','green','light-green','lime','amber','red','yellow','deep-orange','brown','blue-grey','grey','black','white','transparent'],
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

            let post = [];
            this.filterTime.forEach((item, i) => {
                let _dateTime = item.frontmatter.date || item.lastUpdated,
                    _dateArr = _dateTime.split(","),
                    _day = _dateArr[0],
                    _dayLength = _dateArr[0].length,
                    _month = _day.substr(0, 7),
                    _dayStr = _day.substr(7, _dayLength),
                    _time = _dayStr + _dateArr[1],

                    findItem = post.find(r => r && r.date === _month);

                if (findItem) {
                    findItem.list.push({ title: item.title, path: item.regularPath, excerpt: item.excerpt, time: _time });
                } else {
                    post.push({
                        date: _month,
                        list: [{ title: item.title, path: item.regularPath, excerpt: item.excerpt, time: _time }]
                    });
                }
            });
            return post
        }
    },
    methods: {

    }
}
</script>