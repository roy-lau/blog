<template>
  <div class="theme-container">
    <Header />

    <transition-drop>
      <div v-show="transitonStatus">
        <details>
          <summary>$site</summary>
          <pre>{{$site}}</pre>
        </details>
        <details>
          <summary>$page</summary>
          <pre>{{$page}}</pre>
        </details>
        <details>
          <summary>$frontmatter</summary>
          <pre>{{$frontmatter}}</pre>
        </details>
        <details>
          <summary>$lang</summary>
          <pre>{{$lang}}</pre>
        </details>
        <details>
          <summary>$localePath 当前页面的 locale 路径前缀，默认值为 /</summary>
          <pre>{{$localePath}}</pre>
        </details>
        <details>
          <summary>$title 用于当前页面的 title 标签的值。</summary>
          <pre>{{$title}}</pre>
        </details>
        <details>
          <summary>$description</summary>
          <pre>{{$description}}</pre>
        </details>
        <details>
          <summary>$themeConfig 即 siteConfig.themeConfig</summary>
          <pre>{{$themeConfig}}</pre>
        </details>
      </div>
    </transition-drop>

    <transition-drop delay="0.04">
      <ClientOnly>
        <component :is="layout"  v-show="transitonStatus" />
      </ClientOnly>
    </transition-drop>

    <transition name="fade">
      <!-- start loading 页面 -->
      <LoadingPage v-show="firstLoad" class="loading-wrapper" />
      <!-- end loading 页面 -->
    </transition>
  </div>
</template>
<script>
import TransitionDrop from "@theme/components/Transition/Drop";
import TransitonStatusMixin from "@theme/mixins/TransitonStatus";

import Header from "@theme/components/Header";
import Post from "@theme/components/Post";

import Home from "./Home";
import Tag from "./Tag";
import TimeLine from "./TimeLine";
import Category from "./Category";
import errorPage from "./404";

export default {
  mixins: [TransitonStatusMixin],
  components: { TransitionDrop, Header, Home, Tag, TimeLine, Category, Post, errorPage },
  data() {
    return {
      firstLoad: true // 判断是否是第一次加载页面
    };
  },
  computed: {
    // 包含 nav 导航里？
    includesNav(){
      const path = this.$route.path;
      const { nav } = this.$themeConfig
      // console.log(nav)

      for (let index = 0; index < nav.length; index++) {
        const list = nav[index];
        if(list.link){
          if(list.link.split('/')[1].toUpperCase() == path.split('/')[1].toUpperCase()){
            return true
          }
        }else{
         return false
        }
      }
    },
    // 包含在文章里 ?
    includesPost(){
      const path = this.$route.path;
      const pages = this.$site.pages
      // console.log(pages)

      for (let index = 0; index < pages.length; index++) {
        const list = pages[index];
        if(list.path){
          if(list.path === path){
            return true
          }
        }else{
          return false
        }
      }

    },
    /**
     * 首先： '/' 肯定是 home 页
     * 然后是 nav 导航，当前路由如果在配置里的导航 link 中，那就是导航页了
     * 再然后 post 文章页面，当前路由如果包含在 $site 的 pages 中，那就是文章页了
     * 最后，如果上述情况都不满足，那就到 404 页面了
     */
    layout() {
      let path = this.$route.path;

      if (path === "/") {
        return "Home";
      }else if(this.includesNav){
        let _path = path.split('/')[1]
        return `${_path.charAt(0).toUpperCase()}${_path.slice(1)}`
      }else if(this.includesPost){
        return "Post";
      }else{
        return "errorPage"
      }

    }
  },
  methods: {
    /**
     * 处理 loading (判断页面是否是第一次加载，是否显示 loading)
     * description：没有 sessionStorage 存储（第一次加载页面）1000 毫秒后关闭 loading
     * 				      有 sessionStorage 存储（非第一次加载页面），0 毫秒关闭 loading
     */
    handleLoading() {
      const _firstLoadKey = this.$page.key + "_firstLoad",
        time = sessionStorage.getItem(_firstLoadKey) ? 1000 : 0;

      setTimeout(() => {
        this.firstLoad = false;
        if (sessionStorage.getItem(_firstLoadKey))
          sessionStorage.setItem(_firstLoadKey, false);
      }, time);
    }
  },
  mounted() {
    this.handleLoading();
    console.log('comput layout: ' , this.layout);
  }
};
</script>
<style lang="stylus" scoped>
.theme-container 
  .loading-wrapper
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

</style>