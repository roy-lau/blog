<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8>
            <v-timeline dense clipped align-top>
                <v-slide-x-reverse-transition group hide-on-leave>
                    <v-timeline-item v-for="(post, i) in postList" :color="years[i].color" v-if="post" :key="i" smail>
                        <!-- fill-dot  -->
                        <v-card :color="years[i].color" dark flat>
                            <v-card-title v-text="post.date" />
                            <v-list class="white">
                                    <v-list-tile avatar v-for="list in post.list" :to="list.path"
                                     v-ripple="{ class: `${years[i].color}--text` }" class="py-2">
                                        <v-list-tile-content>
                                            <v-list-tile-title style="color: black;" headline dark v-text="list.title" />
                                            <v-list-tile-sub-title style="color: gray;">
                                                <div style="width: 100px;" v-if="list.excerpt" v-html="list.excerpt"></div>
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-tile-action>
                                            <v-list-tile-action-text v-text="list.time"/>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider color="silver" class="my-0"></v-divider>
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