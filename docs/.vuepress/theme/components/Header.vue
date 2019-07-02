<template>
    <header class="deep-purple header-warp" :class="{'h-layout': isLayout }" >
        <v-layout row justify-space-between v-scroll:#scroll-target="onScroll">
            <v-flex xs2>
                <v-btn flat icon @click.stop="toggle" color="white" title="切换视图">
                    <v-icon>view_headline</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs3 v-if="isLayout">
                <!-- <v-card-text class="white--text">{{$title}}</v-card-text> -->
            </v-flex>
            <v-flex xs1>
                <v-btn flat icon @click.stop="search" color="white" title="搜索">
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn flat icon color="white" title="订阅">
                    <v-icon>rss_feed</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row justify-center v-if="isLayout">
            <v-flex xs6>
                <h1 class="white--text">{{$title}}</h1>
            </v-flex>
        </v-layout>
    </header>
</template>
<script>
export default {
    computed: {
        isLayout() {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    return false
                }
                return true
            }
            return false
        }
    },
    methods: {
        toggle() {
            this.$emit('toggle-side-bar')
        },
        onScroll (e) {
        console.log(e.target.scrollTop)
      }
    },
}
</script>
<style>
.header-warp {
    /*background-color: #673AB7;*/
    min-height: 60px;
}
.h-layout{
    transition: height .3 ease;
    height: 200px;
}
</style>