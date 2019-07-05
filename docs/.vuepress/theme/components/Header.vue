<template>
    <header class="deep-purple header-warp" :class="{'h-layout': isLayout}">
        <v-layout row justify-space-between class="deep-purple ma-0 min-header" :class="{'elevation-5':hasMinHeader }">
            <v-flex xs1 sm1 md1 lg1 xl1>
                <v-btn flat icon @click.stop="$emit('toggle-side-bar')" color="white" title="切换视图">
                    <v-icon>view_headline</v-icon>
                </v-btn>
            </v-flex>
            <!-- <v-flex xs3> -->
            <h3 class="white--text text-xs-center top-title" :class="{'side-top':hasMinHeader}" v-text="$title" />
            <!-- </v-flex> -->
            <v-flex xs3 sm3 md3 lg3 xl3>
                <v-btn flat icon color="white" title="搜索">
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn flat icon @click.stop="showRssDialog=!showRssDialog" color="white" title="订阅">
                    <v-icon>rss_feed</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <h1 class="white--text text-xs-center header-title" :class="{'show':isLayout}" v-text="$title" />
        <!-- rss 订阅 dialog start -->
        <v-dialog v-model="showRssDialog" max-width="500px">
            <v-card ref="emailForm">
                <v-card-title>订阅</v-card-title>
                <v-card-text>
                        <a href="https:roy-lau.github.io/blog/rss">https:roy-lau.github.io/blog/rss</a>
                    <v-btn>点击复制链接</v-btn>
                </v-card-text>
                <v-card-text>
                    <v-text-field ref="email" v-model="emailValue" :rules="[() => !!emailValue || '邮箱地址不能为空']" :error-messages="errorMessages" label="请输入您要订阅本博客的邮箱地址" color="purple darken-2" required />
                </v-card-text>
                <v-card-actions>
                    <v-btn flat @click="$refs.email.reset(),showRssDialog=false">取消</v-btn>
                    <v-btn color="primary" flat @click="rssDialogOk">订阅</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- rss 订阅 dialog end -->
    </header>
</template>
<script>
import { getScrollTop } from '@theme/utils'
export default {
    components: {
        RssDialog: () => import('@theme/components/RssDialog.vue'),
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
        },
        emailForm() {
            return {
                emailValue: this.emailValue,
            }
        }
    },
    data() {
        return {
            hasMinHeader: false,
            showRssDialog: false,
            emailValue: null,
            errorMessages: ''
        }
    },
    methods: {
        rssDialogOk() {
            if (this.emailValue) {
                this.$refs.email.validate(true)
                alert("恭喜您，订阅成功")
            } else {
                this.$refs.email.validate(false)
                alert("很遗憾，订阅失败（请尝试复制rss链接订阅）")
            }
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

.top-title {
    transition: all .5s ease;
    padding-top: 30px;
    opacity: 0;
}

.top-title.side-top {
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