<template>
    <div>
        <v-card class="overflow-hidden">
            <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll prominent src="//picsum.photos/1920/1080?random" fade-img-on-scroll scroll-target="#scrolling-techniques-3">
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
                </template>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <template v-slot:extension>
                    <v-tabs align-with-title>
                        <v-tab>Tab 1</v-tab>
                        <v-tab>Tab 2</v-tab>
                        <v-tab>Tab 3</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
            <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
                <v-container style="height: 1000px;"></v-container>
            </v-sheet>
        </v-card>
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
    </div>
</template>
<script>
export default {
    data: () => ({
        expand: true,
        showSideBar: true,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    methods: {

    },
}
</script>