<template>
    <header class="deep-purple header-warp" :class="{'h-layout': isLayout}">
        <v-layout row justify-space-between class="deep-purple ma-0 min-header" :class="{'elevation-5':hasMinHeader }">
            <v-flex xs1 sm1 md1 lg1 xl1>
                <v-btn flat icon @click.stop="toggle" color="white" title="切换视图">
                    <v-icon>view_headline</v-icon>
                </v-btn>
            </v-flex>
            <!-- <v-flex xs3> -->
                <h3 class="white--text text-xs-center top-title" :class="{'side-top':hasMinHeader}">{{$title}}</h3>
            <!-- </v-flex> -->
            <v-flex xs3 sm3 md3 lg3 xl3>
                <v-btn flat icon @click.stop="search" color="white" title="搜索">
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn flat icon color="white" title="订阅">
                    <v-icon>rss_feed</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <h1 class="white--text text-xs-center header-title" :class="{'show':isLayout}">{{$title}}</h1>
    </header>
</template>
<script>
import { getScrollTop } from '@theme/utils'
export default {
    data() {
        return { hasMinHeader: false }
    },
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
        bindScrl() {
            if (!this.isLayout) return
            const self = this;
            let topScroll = getScrollTop();
            if (topScroll > 120) {
                this.hasMinHeader = true;
            } else {
                this.hasMinHeader = false;
            }
            window.onscroll = function() {
                let topScroll = getScrollTop();
                console.log(topScroll)
                if (topScroll > 120) {
                    self.hasMinHeader = true;
                } else {
                    self.hasMinHeader = false;
                }
            };
        },
    },
    mounted() {
        this.bindScrl();
    },
    activated() {
        this.bindScrl();
    },
}
</script>
<style scoped>
.header-warp {
    min-height: 60px;
    /*transition: all .3s ease;*/
    padding-top: 0px;
}

.top-title{
    transition: all .5s ease;
    padding-top: 30px;
    opacity: 0;
}
.top-title.side-top{
    padding-top: 15px;
    opacity: 1;
}
.header-title {
    transition: padding-top .5s ease;
}

.header-title.show {
    padding-top: 80px;
}
/*只有在 layout 页面是个这个*/
.h-layout {
    height: 200px;
}

.min-header {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 60px;
    /*opacity: .9;*/
}
</style>