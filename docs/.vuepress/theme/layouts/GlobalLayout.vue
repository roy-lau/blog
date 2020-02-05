<template>
    <v-container fluid grid-list-md class="pa-0" ref="container">
        <v-layout row wrap>
            <!-- 侧边栏(固定定位,其实不占用实际位置) start -->
            <!-- <v-flex md2 lg2 class="pa-0"> -->
                <SideBar :show-side-bar="showSideBar" :Layout="layout" />
            <!-- </v-flex> -->
            <!-- 侧边栏 end -->
            <!-- 头部 start -->
            <v-flex :class="hcfClass" class="pa-0 side-x">
                <Header @toggle-side-bar="toggleSideBar" :Layout="layout" />
            </v-flex>
            <!-- 头部 end -->
        </v-layout>
        <v-layout row wrap>
            <!-- 主体部分 start -->
            <v-flex :class="hcfClass" class="side-x">
                <component :is="layout" :Layout="layout" />
            </v-flex>
            <!-- 主体部分 end -->
            <!-- 底部 start -->
            <v-flex :class="hcfClass" class="pa-0 side-x">
                <Footer />
            </v-flex>
            <!-- 底部 end -->
            <!-- 回到顶部 end -->
            <GoTop />
            <!-- 回到顶部 end -->
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed: {
        layout() {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
                    return this.$frontmatter.layout
                }
                return 'Layout'
            }
            return 'NotFound'
        },

        // header component and footer class
        hcfClass() {
            return this.showSideBar ? 'xs12 sm12 md12 lg10 xl10 offset-lg2 offset-xl2' : 'xs12 sm12 md12 lg12 xl12'
        }
    },
    data() {
        return {
            showSideBar: true,
            isMobile: null
        }
    },
    watch: {
      $route(to, from) {
        this.$nextTick(function() {
          this.layoutShowSiderBar()
        })
      }
    },
    components: {
        SideBar: () => import('@theme/components/SideBar.vue'),
        Header: () => import('@theme/components/Header.vue'),
        Footer: () => import('@theme/components/Footer.vue'),
        GoTop: () => import('@theme/components/GoTop.vue')
    },
    methods: {
        toggleSideBar() {
            this.showSideBar = !this.showSideBar
        },
        // layout 页面不显示 siderBar
        layoutShowSiderBar(){
              if (this.layout === 'Layout') {
                this.showSideBar = false
            }else{
                this.showSideBar = true
            }
        },
        hasShowSideBar(e){
             if (!this.$el.contains(e.target) && this.showSideBar) {
                this.showSideBar = false
            }
        }
    },
    created() {
        const ua = navigator.userAgent.toLowerCase();
        this.isMobile = /ios|iphone|ipod|ipad|android/.test(ua);
        this.showSideBar = !this.isMobile
        this.layoutShowSiderBar()
        if (this.isMobile) {
            document.addEventListener('click', this.hasShowSideBar, false);
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hasShowSideBar, false);
    }

}
</script>
<style scoped>
.side-x {
    transition: all .5s;
}
</style>