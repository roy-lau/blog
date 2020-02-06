<template>
    <div class="theme-container">

        <a href="/">首页</a>

        <transition-drop>
        	<div v-show="transitonStatus">
        		<details>
					<summary>$page</summary>
	            	<pre >{{$page}}</pre>
				</details>
        		<details>
					<summary>$site</summary>
	            	<pre >{{$site}}</pre>
				</details>
        	</div>
        </transition-drop>

        <transition-drop delay="0.04">
            <Content v-show="transitonStatus" />
        </transition-drop>

        <transition name="fade">
            <LoadingPage v-show="firstLoad" class="loading-wrapper" />
        </transition>
    </div>
</template>
<script>
import TransitionDrop from '@theme/components/Transition/Drop'
import TransitonStatusMixin from '@theme/mixins/TransitonStatus'
export default {
    mixins: [TransitonStatusMixin],
    components: { TransitionDrop },
    data() {
        return {
            firstLoad: true, // 判断是否是第一次加载页面
        }
    },
    methods: {
    	/**
    	 * 处理 loading (判断页面是否是第一次加载，是否显示 loading)
    	 * description： 没有 sessionStorage 存储（第一次加载页面）1000 毫秒后关闭 loading
    	 * 				有 sessionStorage 存储（非第一次加载页面），0 毫秒关闭 loading
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
        console.log(this.$withBase)
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


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>