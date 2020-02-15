<template>
    <div id="loader-wrapper">
        <div class="loader-main">

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" alt="loading……">
          <path transform="translate(2)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
          </path>
          <path transform="translate(8)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
          </path>
          <path transform="translate(14)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
          </path>
          <path transform="translate(20)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
          </path>
          <path transform="translate(26)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
          </path>
        </svg>

        </div>
        <h3 class="title">{{ $page.title}}</h3>
        <p class="description">{{$site.description || $localeConfig.description}}</p>
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
    svg
      fill $accentColor

  .title
    margin 8rem auto 2rem
    text-align center
    color $textColor
    font-size 28px
    box-sizing border-box
    padding 0 10px
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
  .description
    margin auto
    text-align center
    color $textColor
    font-size 20px
    box-sizing border-box
    padding 0 10px
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
</style>