<template>
    <v-navigation-drawer v-model="showSideBar" fixed class="elevation-15">
        <v-card-actions class="card-actions-bg">
            <v-list-tile class="grow">
                <v-list-tile-avatar color="white darken-3" size="50">
                    <v-img class="elevation-8" :src="$withBase('/imgs/avatar.svg')" alt="avatar" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-btn flat color="white" small>Roy Lau</v-btn>
                </v-list-tile-content>
                <!-- 邮箱 start -->
                <v-layout align-center justify-end>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" tag="a" href="mailto:897379293@qq.com" traget="_blink">
                                <v-icon>email</v-icon>
                            </v-btn>
                        </template>
                        <span color="white">897379293@qq.com</span>
                    </v-tooltip>
                </v-layout>
                <!-- 邮箱 end -->
            </v-list-tile>
        </v-card-actions>
                <v-list>
            <v-list-tile v-for="item in items" :key="item.color" v-ripple="{ class: `${item.color}--text` }" :to="item.path">
                <v-list-tile-action>
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title :class="item.color+'--text'">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props: {
        showSideBar: { // 是否显示侧边
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            items: [
                { title: '主页', icon: 'home', color: 'indigo', path: '/home' },
                { title: '归档', icon: 'folder', color: 'orange', path: '/files' },
                { title: '标签', icon: 'loyalty', color: 'brown', path: '/tags' },
                { title: '时间线', icon: 'access_alarm', color: 'green', path: '/timeline' }
            ]
        }
    },
    methods: {
        toPath(path) {

        }
    },
}
</script>
<style>
.card-actions-bg {
    height: 128px;
    background-size: 100% 120%;
    background-image: url('/imgs/title-bg.png');
}
</style>