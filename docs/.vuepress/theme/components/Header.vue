<template>
    <header>

     <v-card class="overflow-hidden">
    <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll prominent src="//picsum.photos/1920/1080?random" fade-img-on-scroll scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
        </template>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab>Tab 1</v-tab>
                <v-tab>Tab 2</v-tab>
                <v-tab>Tab 3</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
        <v-container style="height: 1000px;"></v-container>
    </v-sheet>
    </v-card>
        <!-- rss 订阅 dialog start -->
        <v-dialog v-model="showRssDialog" max-width="500px">
            <v-card ref="emailForm">
                <v-card-title>
                    <h3>订阅</h3>
                </v-card-title>
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

        emailForm() {
            return {
                emailValue: this.emailValue,
            }
        }
    },
    data() {
        return {
            showSideBar: false,

        }
    },
    methods: {
        // toggleSideBar(){
        //     this.showSideBar = !this.showSideBar
        //     this.$emit('toggle-side-bar')
        // },
        // rssDialogOk() {
        //     if (this.emailValue) {
        //         this.$refs.email.validate(true)
        //         alert("恭喜您，订阅成功")
        //     } else {
        //         this.$refs.email.validate(false)
        //         alert("很遗憾，订阅失败（请尝试复制rss链接订阅）")
        //     }
        // },
        // changeHeader() {
        //     // if (!this.isLayout) return

        //     let topScroll = getScrollTop();
        //     this.hasMinHeader = topScroll > 100 ? true : false

        //     window.addEventListener('scroll', debounce(() => {

        //         let topScroll = getScrollTop();
        //         this.hasMinHeader = topScroll > 100 ? true : false

        //     }, 100));
        // }
    }
}
</script>
<style scoped>
</style>