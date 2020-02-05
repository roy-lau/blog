<template>
    <header class="deep-purple" :class="{'h-layout': isLayout}">
        <v-layout align-cneter justify-space-between row class="deep-purple ma-0 min-header" :class="{'elevation-5 fixd':hasMinHeader }">
            <div>
                <v-btn flat icon @click.stop="toggleSideBar" color="white" title="切换视图">
                    <v-icon>view_headline</v-icon>
                </v-btn>
            </div>
            <div>
            <h3 class="white--text top-title" :class="{'side-top':hasMinHeader}" v-text="$title" />
            </div>
            <div>
                <v-btn flat icon color="white" title="搜索">
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn flat icon @click.stop="showRssDialog=!showRssDialog" color="white" title="订阅">
                    <v-icon>rss_feed</v-icon>
                </v-btn>
            </div>
        </v-layout>
        <h1 class="white--text text-lg-center header-title" :class="{'show':isLayout&&!hasMinHeader}" v-text="$title" />
        <!-- rss 订阅 dialog start -->
        <v-dialog v-model="showRssDialog" max-width="500px">
            <v-card ref="emailForm">
                <v-card-title><h3>订阅</h3></v-card-title>
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
import { debounce } from 'lodash'
import { getScrollTop } from '@theme/utils'
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
        },
        // header宽度样式
        headerWclass(){
             return this.showSideBar ? 'xs1 sm1 md1 lg1 xl1' :'xs3 sm3 md3 lg2 xl3'
        },
        emailForm() {
            return {
                emailValue: this.emailValue,
            }
        }
    },
    data() {
        return {
            showSideBar: false,
            hasMinHeader: false,
            showRssDialog: false,
            emailValue: null,
            errorMessages: ''
        }
    },
    methods: {
        toggleSideBar(){
            this.showSideBar = !this.showSideBar
            this.$emit('toggle-side-bar')
        },
        rssDialogOk() {
            if (this.emailValue) {
                this.$refs.email.validate(true)
                alert("恭喜您，订阅成功")
            } else {
                this.$refs.email.validate(false)
                alert("很遗憾，订阅失败（请尝试复制rss链接订阅）")
            }
        },
        changeHeader() {
            // if (!this.isLayout) return

            let topScroll = getScrollTop();
            this.hasMinHeader = topScroll > 100 ? true : false

            window.addEventListener('scroll', debounce(() => {

                let topScroll = getScrollTop();
                this.hasMinHeader = topScroll > 100 ? true : false

            }, 100));
        },
    },
    beforeCreate(){
        console.count('header-beforeCreate')
    },
    created(){
        console.count('header-created')
    },
    beforeMount(){
        console.count('header-beforeMount')
    },
    mounted(){
        this.changeHeader()
        console.count('header-mounted')
    },
    beforeUpdate(){
        console.count('header-beforeUpdate')
    },
    updated(){
        console.count('header-updated')
    },
    activated(){
        console.count('header-activated')
    },
    deactivated(){
        console.count('header-deactivated')
    },
    beforeDestroy(){
        console.count('header-beforeDestroy')
    },
    destroyed(){
        console.count('header-destroyed')
    },
    errorCaptured(){
        console.count('header-errorCaptured')
    },
}
</script>
<style scoped>

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
    width: 85%;
    transition: padding-top .5s ease;
}

.header-title.show {
    padding-top: 30px;
}

/*只有在 layout 页面是个这个*/
.h-layout {
    height: 200px;
}

.min-header {
    transition: box-shadow .8s ease;
}
.min-header.fixd {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 60px;
    /*opacity: .9;*/
}
</style>