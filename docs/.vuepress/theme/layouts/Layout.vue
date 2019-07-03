<!-- 所有的 md 文件都会通过这个（Layout）文件布局 -->
<template>
    <v-layout row wrap justify-center>
        <!-- 内容和评论 start -->
        <v-flex d-flex md8 lg8>
            <v-layout row wrap justify-center>
                <v-flex md10 lg10>
                    <v-card color="sliver" class="elevation-15 card--flex-toolbar post-card">
                        <v-card-text>
                            <Content />
                        </v-card-text>
                        <v-flex sm11 xs11 md11 lg11>
                            <div class="text-xs-right">
                                <v-chip color="blue lighten-4">
                                    <v-avatar>
                                        <v-img :src="$withBase('/imgs/avatar.svg')" alt="my" />
                                    </v-avatar>
                                    Roy Lau
                                </v-chip>
                            </div>
                        </v-flex>
                        <span id="footerPost"></span>
                    </v-card>
                </v-flex>
                <v-flex d-flex md10 lg10>
                    <v-card color="indigo" dark>
                        <v-card-text>评论</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <!-- 内容和评论 end -->
        <!-- 目录 start -->
                    <Toc />
<!--         <v-flex d-flex md2 lg2>
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
    },
    methods: {

    }
}
</script>

<style lang="styl">
@require '../styles/content.styl'

.card--flex-toolbar {
    margin-top: -66px;
    padding: 30px;
}

</style>
