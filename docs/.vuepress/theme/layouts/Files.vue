<template>
  <v-stepper v-model="currentStep" vertical>
  	<span v-for="(post,idx) in postList" v-if="post" :key="post.key">
	    <v-stepper-step :complete="currentStep > idx" :step="idx">
	      {{post.title}}
	      <small class="gray--text" v-html="post.frontmatter.date||post.lastUpdated||'时间'"></small>
	    </v-stepper-step>

	    <v-stepper-content :step="idx">
              <v-card ripple :to="post.regularPath" flat>
                    <v-img max-height="260px" min-height="100px" :src="'/imgs/random/material-' + (Math.round(Math.random() * 18) + 1) + '.png'">
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
						                <v-card-text class="gray--text" v-if="post.excerpt" v-html="post.excerpt"> </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-card>
	      <v-btn color="blue" @click="currentStep = idx+1">下一步</v-btn>
	      <v-btn flat>Cancel</v-btn>
	    </v-stepper-content>
  	</span>
<!--
    <v-stepper-step :complete="currentStep > 2" step="2">Configure analytics for this app</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="yellow" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="currentStep = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="currentStep > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="yellow" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="currentStep = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="yellow" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="currentStep = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content> -->
  </v-stepper>
</template>
<script>
export default {
    data() {
        return {
            currentStep: 0,
            pageSize: 5, // 每页显示多少篇文章
            pageCurrent: 1, // 默认当前是在第几页
        }
    },
    computed: {
        // 过滤后的文章数据
        filterDateList() {
            let pages = this.$site.pages
            return pages.filter(({ type }) => type === 'post')
        },

        // 分页长度    WTF： 四舍五入不太合适，以后优化
        pageLength() {
            return Math.round(this.filterDateList.length / this.pageSize)
        },

        // pageStart： 开始页，pageCurrent 的变化会改变 pageStart。 pageCurrent 的变化是由 v-pagination 组件控制的
        pageStart() {
            return this.pageSize * (this.pageCurrent - 1)
        },

        // pageEnd： 结束页，pageCurrent 的变化会改变 pageEnd。 pageCurrent 的变化是由 v-pagination 组件控制的
        pageEnd() {
            return this.pageSize * this.pageCurrent
        },

        // 处理后的文章数据
        postList() {
            console.table({ '开始页': this.pageStart, '结束页': this.pageEnd })

            let post = new Array(this.pageSize),
                _size = this.pageSize

            for (let i = this.pageEnd; i >= this.pageStart; i--) {
                post[_size--] = this.filterDateList[i]
            }

            return post
        }
    },
    methods: {

    }
}
</script>
<style>
.card--flex-toolbar {
    margin-top: -66px;
    padding: 30px;
}
</style>