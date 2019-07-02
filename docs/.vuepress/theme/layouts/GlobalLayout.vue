<template>
    <v-container fluid grid-list-md class="pa-0">
        <v-layout row wrap>
            <!-- 侧边栏(固定定位,其实不占用实际位置) start -->
            <v-flex md2 lg2 class="pa-0">
                <SideBar :show-side-bar="showSideBar" />
            </v-flex>
            <!-- 侧边栏 end -->
            <!-- 头部 start -->
            <v-flex :class="hfClass" class="pa-0">
                <Header @toggle-side-bar="toggleSideBar" />
            </v-flex>
            <!-- 头部 end -->
        </v-layout>
        <v-layout row wrap>
            <!-- 主体部分 start -->
            <v-flex xs12 sm12 md12 lg10 xl10 offset-lg2 offset-xl2>
                    <component :is="layout" />
            </v-flex>
            <!-- 主体部分 end -->
            <!-- 底部 start -->
            <v-flex :class="hfClass" class="pa-0">
                <Footer />
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
            return this.showSideBar ? 'xs12 sm12 md12 lg10 xl10 offset-lg2 offset-xl2' : 'xs12 sm12 md12 lg12 xl12'
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

</style>