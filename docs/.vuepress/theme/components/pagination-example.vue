<!-- 分页组件 -->
<template>
    <div class="text-xs-center">
        <v-pagination v-model="page" :length="6" @previous="onPrev" @input="onCurrent" @next="onNext"></v-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page: 1
        }
    },
      methods: {
    	        // 点击上一页
        onPrev(val) {
            console.log('上一页',this.current)
        },
        // 点击当前页
        onCurrent(){
            console.log('当前页',this.current)
        },
        // 点击下一页
        onNext(val) {
            console.log('下一页',this.current)
        },
    }
}
</script>