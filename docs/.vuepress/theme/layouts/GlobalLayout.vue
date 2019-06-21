<template>
    <v-container fluid grid-list-md class="pa-0">
        <v-layout row wrap>
            <!-- 侧边栏(固定定位,其实不占用实际位置) start -->
            <v-flex d-flex md2 lg2 class="pa-0">
                <SideBar :show-side-bar="showSideBar" />
            </v-flex>
            <!-- 侧边栏 end -->
            <!-- 头部 start -->
                <transition name="slide-x">
            <v-flex d-flex :class="hfClass" class="pa-0">
                    <Header @toggle-side-bar="toggleSideBar" />
            </v-flex>
                </transition>
            <!-- 头部 end -->
        </v-layout>
        <v-layout row wrap>
            <!-- 主体部分 start -->
            <v-flex d-flex md10 lg10 offset-md2 offset-lg2>
                <transition name="fade">
                    <component :is="layout" />
                </transition>
            </v-flex>
            <!-- 主体部分 end -->
            <!-- 底部 start -->
            <v-flex d-flex :class="hfClass" class="pa-0">
                <transition name="slide-x">
                    <Footer />
                </transition>
            </v-flex>
            <!-- 底部 end -->
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
        // header and footer class
        hfClass() {
            return this.showSideBar ? 'md10 lg10 offset-md2 offset-lg2' : 'md12 lg12'
        }
    },
    data() {
        return {
            showSideBar: true
        }
    },
    components: {
        SideBar: () => import('@theme/components/SideBar.vue'),
        Header: () => import('@theme/components/Header.vue'),
        Footer: () => import('@theme/components/Footer.vue')
    },
    methods: {
        toggleSideBar() {
            this.showSideBar = !this.showSideBar
        }
    }
}
</script>
<style scoped>
/* 渐显动画 */
.fade-enter-active,
.fade-leave-active {
     transition: all .3s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* x轴滑动动画 */
.slide-x-enter-active,
.slide-x-leave-active {
    /*transition: margin .3s ease-out;*/
     transition:all 2s;
}

.slide-x-enter,
.slide-x-leave-to {
    /*opacity: 0;*/
}
</style>