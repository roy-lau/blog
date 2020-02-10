<template>
       <v-container fluid grid-list-md class="pa-0" ref="container">
            <!-- 头部 start -->
            <Header />
            <!-- 头部 end -->
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
    },
    data() {
        return {
            showSideBar: true,
            isMobile: null
        }
    },
    watch: {
        $route(to, from) {
            this.$nextTick(function() {})
        }
    },
    components: {
        SideBar: () => import('@theme/components/SideBar.vue'),
        Header: () => import('@theme/components/Header.vue'),
        Footer: () => import('@theme/components/Footer.vue'),
        GoTop: () => import('@theme/components/GoTop.vue')
    },
    methods: {}

}
</script>
<style scoped>
</style>