<template>
    <div class="theme-container">
        <Header />

        <transition-drop>
            <div v-show="transitonStatus">
                <details>
                    <summary>$site</summary>
                    <pre>{{$site}}</pre>
                </details>
                <details>
                    <summary>$page</summary>
                    <pre>{{$page}}</pre>
                </details>
                <details>
                    <summary>$frontmatter</summary>
                    <pre>{{$frontmatter}}</pre>
                </details>
                <details>
                    <summary>$lang</summary>
                    <pre>{{$lang}}</pre>
                </details>
                <details>
                    <summary>$localePath 当前页面的 locale 路径前缀，默认值为 /</summary>
                    <pre>{{$localePath}}</pre>
                </details>
                <details>
                    <summary>$title 用于当前页面的 title 标签的值。</summary>
                    <pre>{{$title}}</pre>
                </details>
                <details>
                    <summary>$description</summary>
                    <pre>{{$description}}</pre>
                </details>
                <details>
                    <summary>$themeConfig 即 siteConfig.themeConfig</summary>
                    <pre>{{$themeConfig}}</pre>
                </details>
            </div>
        </transition-drop>

        <transition-drop delay="0.04">
            <Content v-show="transitonStatus" />
        </transition-drop>

        <transition name="fade">
        	<!-- start loading 页面 -->
            <LoadingPage v-show="firstLoad" class="loading-wrapper" />
        	<!-- end loading 页面 -->
        </transition>
    </div>
</template>
<script>
import TransitionDrop from '@theme/components/Transition/Drop'
import TransitonStatusMixin from '@theme/mixins/TransitonStatus'

import Header from '@theme/components/Header'
export default {
    mixins: [TransitonStatusMixin],
    components: { TransitionDrop,Header },
    data() {
        return {
            firstLoad: true, // 判断是否是第一次加载页面
        }
    },
    computed: {

    },
    methods: {
        /**
         * 处理 loading (判断页面是否是第一次加载，是否显示 loading)
         * description： 没有 sessionStorage 存储（第一次加载页面）1000 毫秒后关闭 loading
         * 				 有 sessionStorage 存储（非第一次加载页面），0 毫秒关闭 loading
         */
        handleLoading() {
            const _firstLoadKey = this.$page.key + "_firstLoad",
                time = sessionStorage.getItem(_firstLoadKey) ? 1000 : 0

            setTimeout(() => {
                this.firstLoad = false
                if (sessionStorage.getItem(_firstLoadKey)) sessionStorage.setItem(_firstLoadKey, false)
            }, time)
        }
    },
    mounted() {
        this.handleLoading()
        console.log(this.$site)
    }
}
</script>
<style lang="stylus" scoped>
.theme-container
  .loading-wrapper
    position absolute
    z-index 10
    top 0
    bottom 0
    left 0
    right 0
    margin auto
</style>