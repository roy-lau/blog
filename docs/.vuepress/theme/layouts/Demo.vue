<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap style="border: 1px solid red;">
            <v-flex d-flex md2 lg2 style="border: 1px solid red;">
                <v-expand-x-transition>
                    <v-card color="purple" dark v-show="showSideBar">
                        <v-card-title primary class="title">侧边</v-card-title>
                        <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-expand-x-transition>
            </v-flex>
            <v-flex d-flex md10 lg10 style="border: 1px solid red;">
                <v-card color="indigo" dark>
                    <v-toolbar-side-icon @click.stop="toggle" />
                    <v-card-text>头部</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex md8 lg8 offset-md2 offset-lg2 style="border: 1px solid red;">
                <v-layout row wrap justify-center>
                    <v-flex d-flex md10 lg10>
                        <v-card color="sliver">
                            <v-card-text>内容</v-card-text>
                            <v-card-text>{{ lorem }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex md10 lg10>
                        <v-card color="red" dark>
                            <v-card-text>评论</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- 目录 start -->
            <v-flex d-flex md2 lg2>
                <v-card color="yellow">
                    <v-card-text>目录列表</v-card-text>
                </v-card>
            </v-flex>
            <!-- 目录 end -->
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        expand: true,
        showSideBar: true,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    methods: {
        toggle() {
            this.showSideBar = !this.showSideBar
        }
    },
}
</script>
