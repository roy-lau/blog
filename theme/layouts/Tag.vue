<template>
  <div id="Tag">

    <ol class="wrapper">
      <li v-for="list in filterTagPages" :key="list.key">
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
        <!-- <p v-text="list.excerpt"></p> -->
      </li>
    </ol>
  </div>
</template>
<script>
import isArray from "lodash/isArray";
export default {
  computed: {
    filterTagPages() {
      const curTag = this.$route.path.split("/")[2];
      if (curTag) {
        return this.$site.pages.filter(post => {
          if (isArray(post.tags)) {
            return post.tags.includes(curTag);
          }
        });
      } else {
        return this.$site.pages;
      }
    }
  },
  created() {}
};
</script>
<style lang="stylus" scoped></style>