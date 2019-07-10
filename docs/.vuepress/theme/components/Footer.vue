<!-- 底部组件 -->
<template>
    <v-footer dark  height="auto">
        <v-card class="flex pa-0" flat tile>
            <v-card-title class="deep-purple">
                <strong class="subheading">这是记录我文章的圣地!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider class="my-0 white"/>
            <v-card-actions class="deep-purple white--text justify-center">
                Copyright &copy; 2019 — <strong> RoyLau </strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram'
        ]
    })
}
</script>