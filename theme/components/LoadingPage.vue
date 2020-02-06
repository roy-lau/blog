<template>
  <div id="loader-wrapper">
    <div class="loader-main">
      <img :src="$withBase('/loadings/loading-bars.svg')" alt="loading……" class="loading-svg" />
    </div>
    <h3 class="title" v-if="$frontmatter.home">{{$site.title || $localeConfig.title}}</h3>
    <p class="description" v-if="$frontmatter.home">{{$site.description || $localeConfig.description}}</p>
  </div>
</template>

<style lang="stylus" scoped>
#loader-wrapper
  height 100vh
  width 100vw
  background #fff
  background var(--background-color)
  .loader-main
    position fixed
    width 120px
    height 50px
    top 45%
    left 50%
    z-index 555
    transform translate(-50%,0)
    .loading-svg
      width 100px
      height 100px

  .title
    margin 8rem auto 2rem
    text-align center
    color $textColor
    color var(--text-color)
    font-size 30px
    box-sizing border-box
    padding 0 10px
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
  .description
    margin auto
    text-align center
    color $textColor
    color var(--text-color)
    font-size 22px
    box-sizing border-box
    padding 0 10px
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
</style>