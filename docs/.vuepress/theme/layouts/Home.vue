<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md8 lg8 v-if="$site.pages" v-for="page in $site.pages" transition="slide-y-reverse-transition">
            <v-card v-if="page.title">
                <!-- :to="page.regularPath" -->
            <v-card ripple :to="page.regularPath">
                <v-img max-height="300px" min-height="200px" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                    <template v-slot:placeholder>
                        <v-layout fill-height align-center justify-center>
                            <!-- <v-progress-circular indeterminate color="grey lighten-3"></v-progress-circular> -->
                            <img :src="$withBase('/loadings/loading-wave.svg')" alt="loading……" />
                        </v-layout>
                    </template>
                    <v-layout column fill-height class="white--text mt-0">
                        <v-spacer />
                        <v-flex shrink style="background: rgba(0,0,0,.2);">
                            <v-expand-transition>
                                <div class="transition-fast-in-fast-out">
                                    <v-card-title class="headline pb-1 white--text">{{page.title}}</v-card-title>
                                    <v-card-text class="subheading py-1 white--text">时间，作者</v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-flex>
                    </v-layout>
                </v-img>
            </v-card>
                <v-card-text v-if="page.excerpt" v-html="page.excerpt"> </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn flat small color="orange">
                        <v-icon dark>folder</v-icon> {{page.frontmatter.categories||'归档'}}
                    </v-btn>
                    <v-btn flat small color="brown">
                        <v-icon dark>loyalty</v-icon> {{page.frontmatter.tags||'标签'}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    components: {},
    methods: {},
    created() {
        console.log(this)
    },
}
</script>
<style>
.headline:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ac3e40;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}
</style>
