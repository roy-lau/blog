<template>
    <div id="Home">
        <h1> this is home page , are you show ?</h1>

          <ul class="wrapper">
              <li v-for="list in $site.pages" :key="list.key">
                  <router-link :to="list.path" v-text="list.title" /> <date v-text="list.lastUpdated" />
                  <p v-text="list.excerpt"></p>
              </li>
          </ul>
    
    </div>
</template>
<script>
export default {
    created(){
    }
}
</script>
<style lang="stylus" scoped>


</style>