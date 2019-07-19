<!-- 所有的 md 文件都会通过这个（Layout）文件布局 -->
<template>
    <v-layout row wrap justify-center>
        <!-- 内容和评论 start -->
        <v-flex d-flex md8 lg8>
            <v-layout row wrap justify-center>
                <v-flex md10 lg10>
                    <v-card color="sliver" class="elevation-15 layout-card" :class="{'has':hasLayoutCard}">
                        <v-card-text>
                            <Content />
                        </v-card-text>
                        <v-divider />
                        <v-flex sm12 xs12 md12 lg12>
                            <div class="post-copyright">
                                <div class="content">
                                    <p>更新时间：
                                        <router-link :to="selfLink" class="text--link indigo--text" target="_blank" rel="external"><time :datetime="$page.lastUpdated||$frontmatter.date" itemprop="dateUpdated" v-text="$page.lastUpdated||$frontmatter.date" /></router-link>
                                    </p>
                                    <p>原文链接：
                                        <a :href="selfLink" class="text--link indigo--text" target="_blank" rel="external" v-text="selfLink" />
                                    </p>
                                </div>
                            </div>
                            <div class="text-xs-right">
                                <v-chip color="blue lighten-4">
                                    <v-avatar>
                                        <v-img :src="$withBase('/imgs/avatar.svg')" alt="my" />
                                    </v-avatar>
                                    Roy Lau
                                </v-chip>
                            </div>
                        </v-flex>
                    </v-card>
                </v-flex>
                <!-- 分页 start -->
                <Paginations />
                <!-- 分页 end -->
                <v-flex d-flex md10 lg10>
                    <v-card color="indigo" dark>
                        <v-card-text>评论 </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <!-- 内容和评论 end -->
        <!-- 目录 start -->
        <Toc />
 <!--                <v-flex d-flex md2 lg2>
            <v-card>
                <v-card-text>
                </v-card-text>
                <v-card-text class="input-text">目录列表</v-card-text>
                <h1>$localePath</h1>
                <pre>{{$localePath}}</pre>
                <h1>$description</h1>
                <pre>{{$description}}</pre>
                <h1>$themeConfig</h1>
                <pre>{{$themeConfig}}</pre>
                <h1>$frontmatter</h1>
                <pre>{{$frontmatter}}</pre>
                <h1>$page</h1>
                <pre>{{$page}}</pre>
                <h1>$site</h1>
                <pre>{{$site}}</pre>
            </v-card>
        </v-flex> -->
        <!-- 目录 end -->
    </v-layout>
</template>
<script>
import '@theme/styles/palette.styl'
export default {
    components: {
        Toc: () => import('@theme/components/Toc.vue'),
        Paginations: () => import('@theme/components/Paginations.vue')
    },
    data() {
        return {
            selfLink: window.location.href,
            hasLayoutCard: true,
        }
    },
    beforeCreate(){
        console.count('l-beforeCreate')
    },
    created(){
        console.count('l-created')
    },
    beforeMount(){
        console.count('l-beforeMount')
    },
    mounted(){
        // this.hasLayoutCard = true
        console.count('l-mounted')
    },
    beforeUpdate(){
        this.selfLink = window.location.href
        // this.hasLayoutCard = true
        console.count('l-beforeUpdate')
    },
    updated(){
        console.count('l-updated')
    },
    activated(){
        console.count('l-activated')
    },
    deactivated(){
        console.count('l-deactivated')
    },
    beforeDestroy(){
        console.count('l-beforeDestroy')
    },
    destroyed(){
        this.hasLayoutCard = null
        console.count('l-destroyed')
    },
    errorCaptured(){
        console.count('l-errorCaptured')
    },
}
</script>
<style lang="styl">
@require '../styles/content.styl'
</style>
<style scoped>
.layout-card {
    margin-top: 50px;
    padding: 30px;
    transition: all 1s;
}

.layout-card.has {
    margin-top: -66px;
}

.post-copyright .content {
    margin-bottom: 1em;
    padding: 20px 30px;
    word-break: break-all;
    color: #727272;
    background: #f1f3fa;
    border-radius: 30px 30px 0;
}
.post-copyright .content p{
    margin: 0;
}
</style>