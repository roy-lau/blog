<template>
    <div>
        <h1> this is home page , are you show ?</h1>

          <ul>
              <li v-for="list in $site.pages" :key="list.key">
                  <router-link :to="list.path" v-text="list.title" />
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