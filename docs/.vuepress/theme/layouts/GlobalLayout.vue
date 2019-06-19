<template>
    <v-container fluid grid-list-md class="pa-0">
        <v-layout row wrap>
            <!-- 侧边栏(固定定位,其实不占用实际位置) start -->
            <v-flex d-flex md2 lg2 class="pa-0">
                <SideBar :show-side-bar="showSideBar" />
            </v-flex>
            <!-- 侧边栏 end -->
            <!-- 头部 start -->
            <v-flex d-flex md10 lg10 offset-md2 offset-lg2 class="pa-0">
                <Header @toggle-side-bar="toggleSideBar" />
            </v-flex>
            <!-- 头部 end -->
            <!-- 主体部分 start -->
            <v-flex d-flex md10 lg10 offset-md2 offset-lg2>
                <component :is="layout" />
            </v-flex>
            <!-- 主体部分 end -->
            <!-- 底部 start -->
            <v-flex d-flex md12 lg12>
                <Footer />
            </v-flex>
            <!-- 底部 end -->
        </v-layout>
    </v-container>
</template>
<script>
import SideBar from "@theme/components/SideBar.vue"
import Header from "@theme/components/Header.vue"
import Footer from "@theme/components/Footer.vue"
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
        }
    },
    data() {
        return {
            showSideBar: true
        }
    },
    components: {
        SideBar,
        Header,
        Footer
    },
    methods: {
        toggleSideBar() {
            this.showSideBar = !this.showSideBar
        }
    }
}
</script>
<style>
.card--flex-toolbar {
    margin-top: -66px;
    padding: 30px;
}
</style>