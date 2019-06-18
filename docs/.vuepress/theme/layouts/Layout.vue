<template>
    <v-container fluid grid-list-md class="pa-0">
        <v-layout row wrap>
            <!-- 侧边栏 start -->
            <v-flex d-flex md2 lg2 class="pa-0">
                <SideBar :show-side-bar="showSideBar" />
            </v-flex>
            <!-- 侧边栏 end -->
            <v-flex d-flex md10 class="pa-0">
                <v-layout row wrap>
                    <!-- 头部 start -->
                    <v-flex d-flex md12 lg12>
                        <Header @toggle-side-bar="toggleSideBar" />
                    </v-flex>
                    <!-- 头部 end -->
                    <v-flex d-flex md12 color="gray">
                        <v-layout row wrap>
                            <!-- 内容和评论 start -->
                            <v-flex d-flex md8 lg8>
                                <v-layout row wrap justify-center>
                                    <v-flex d-flex md8 lg8 child-flex>
                                        <v-card color="white" class="card--flex-toolbar elevation-15">
                                            <v-card-text>
                                                <Content />
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex d-flex md8 lg8>
                                        <v-card color="indigo" dark>
                                            <v-card-text>评论</v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <!-- 内容和评论 end -->
                            <!-- 目录 start -->
                            <v-flex d-flex md2 lg2>
                                <v-card>
                                    <v-card-text>目录列表</v-card-text>
                                    <h1>$themeConfig</h1>
                                    <pre>{{$themeConfig}}</pre>
                                    <h1>$frontmatter</h1>
                                    <pre>{{$frontmatter}}</pre>
                                    <h1>$site</h1>
                                    <pre>{{$site}}</pre>
                                    <h1>$page</h1>
                                    <pre>{{$page}}</pre>
                                </v-card>
                            </v-flex>
                            <!-- 目录 end -->
                        </v-layout>
                    </v-flex>
                    <!-- 底部 start -->
                    <v-flex d-flex md12 lg12>
                        <Footer />
                    </v-flex>
                    <!-- 底部 end -->
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import SideBar from "@theme/components/SideBar.vue"
import Header from "@theme/components/Header.vue"
import Footer from "@theme/components/Footer.vue"
export default {
    data(){
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
            console.log(this.showSideBar)
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