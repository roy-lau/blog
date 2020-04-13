<template>
  <div id="Home">
    <h1>this is home page , are you show ?</h1>

    <ul class="wrapper">
      <li v-for="list in $site.pages" :key="list.key">
        <h3>
          <router-link :to="list.path" v-text="list.title || '无标题'" class="text--link" />
        </h3>
        <time class="tag" v-text="list.lastUpdated" />
        <router-link
          v-for="(tag,id) in list.tags"
          :key="id"
          :to="'/tag/'+tag"
          v-text="tag"
          class="tag"
        />
        <p v-text="list.excerpt"></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {}
};
</script>
<style lang="stylus" scoped></style>