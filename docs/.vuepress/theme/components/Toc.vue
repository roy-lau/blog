<template>
   <ul>
   	<li v-for="item in headers"><a :href="'#'+item.slug">{{item.title}}</a></li>
   </ul>
</template>
<script>
export default {
    computed: {
      headers() {
            if (this.$page && this.$page.headers) return this.$page.headers
        }
    },
    methods: {

    },
}
</script>
<style>

</style>