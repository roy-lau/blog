<template>
    <v-layout row wrap justify-center>
            <v-flex d-flex md8 lg8 v-if="$site.pages" v-for="page in $site.pages">
                <v-card v-if="page.title">
                    <v-card ripple :to="page.regularPath" flat>
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
                                            <v-card-text class="subheading py-1 white--text lighten-3">
                                                <v-icon color="grey lighten-3">perm_identity</v-icon>{{page.frontmatter.author||page.author||'roylau'}} /
                                                <v-icon color="grey lighten-3">date_range</v-icon> {{page.frontmatter.date||page.date||'时间'}}
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-flex>
                            </v-layout>
                        </v-img>
                    </v-card>
                    <v-card-text v-if="page.excerpt" v-html="page.excerpt"> </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions><!-- <v-icon>loyalty</v-icon> &nbsp;&nbsp; -->
                        <v-btn  small v-for="(tag,idx) in headleTags(page.frontmatter.tags)" :key="idx" :color="tagsConf[idx].color">
                             <span class="white--text">{{tag||'标签'}}</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
    </v-layout>
</template>
<script>
export default {
	data:()=>({
		tagsConf:[
		{icon:'loyalty',color:'brown'},
		{icon:'loyalty',color:'red'},
		{icon:'loyalty',color:'pink'},
		{icon:'loyalty',color:'deep-purple'},
		{icon:'loyalty',color:'indigo'},
		{icon:'loyalty',color:'blue'},
		{icon:'loyalty',color:'light-blue'},
		{icon:'loyalty',color:'cyan'},
		{icon:'loyalty',color:'teal'},
		{icon:'loyalty',color:'green'},
		{icon:'loyalty',color:'light-green'},
		{icon:'loyalty',color:'lime'},
		{icon:'loyalty',color:'yellow'},
		{icon:'loyalty',color:'amber'},
		{icon:'loyalty',color:'orange'},
		{icon:'loyalty',color:'deep-orange'}, // next brow
		{icon:'loyalty',color:'blue-grey'},
		{icon:'loyalty',color:'grey'},
		{icon:'loyalty',color:'black'},
		{icon:'loyalty',color:'white'},
		{icon:'loyalty',color:'transparent'}
		]
	}),
    components: {},
    computed: {},
    methods: {
        headleTags(tag) {
            if (typeof tag === "string") {
                return [tag]
            } else {
                return tag
            }
        }
    },
    created() {
        console.log(this)
    },
}
</script>