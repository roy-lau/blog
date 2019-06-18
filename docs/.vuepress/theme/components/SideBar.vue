<template>
    <v-navigation-drawer v-model="drawer" hide-overlay stateless>
        <v-card >
            <v-toolbar flat class="transparent">
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Roy Lau</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
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
            drawer: true,
            items: [
                { title: '主页', icon: 'dashboard' },
                { title: '关于', icon: 'question_answer' }
            ],
            right: null
        }
    }
}
</script>