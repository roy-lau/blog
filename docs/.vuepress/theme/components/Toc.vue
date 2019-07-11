<template>
    <div class="toc-warp" :class="{ 'open-toc': hasToc }">
        <h3 class="title"><a href="" class="link">目录</a></h3>
        <div class="body">
            <ul class="lists">
                <li v-for="(item, index) in catalogList" :key="index" class="list" :class="{ active: currentIndex === index }">
                    <a class="link ellipsis" :href="'#' + item.id" :style="{ marginLeft: offsetList[index] * 8 + 'px' }">
                        {{ item.textContent.substring(2) }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {throttle} from 'lodash' // 节流 https://www.html.cn/doc/lodash/#_throttlefunc-wait0-options
import { getScrollTop } from '@theme/utils'
export default {
    name: "Toc",
    data() {
        return {
            allH: [],
            catalogList: [],
            currentIndex: 0,
            offsetList: [],
            hasToc: false
        };
    },
    watch: {
      $route(to, from) {
        this.$nextTick(function() {
            this.getTocList();
        })
      }
    },
    mounted(){
       this.$nextTick(function() {
            this.getTocList();
            this.changeIndex();
            window.addEventListener('scroll', this.onScroll)
        })
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll: throttle(function () {
          this.changeIndex()
        }, 300),
        changeToc() {
            this.hasToc = !this.hasToc;
        },
        /**
         * 获取目录列表
         * @return {[type]} [description]
         */
        getTocList() {
            this.catalogList.splice(0, this.catalogList.length);
            this.offsetList.splice(0, this.offsetList.length);
            this.allH.splice(0, this.allH.length);
            if (typeof window === "undefined") return;
            if (!document.querySelector(".layout-card")) {
                return;
            }
            let a = [];
            let allH = document
                .querySelector(".layout-card")
                .querySelectorAll("h1,h2,h3,h4,h5,h6");
            if (allH.length === 0) {
                return;
            }
            let nodeArr = [].slice.call(allH);
            nodeArr.forEach((val, i) => {
                this.allH.push(val.offsetTop);
                this.catalogList.push(val);
                if (i === 0) {
                    a.push(0);
                } else {
                    let hNow = Number(val.tagName.slice(1));
                    let hPrev = Number(nodeArr[i - 1].tagName.slice(1));
                    if (hNow > hPrev) {
                        a.push(a[i - 1] + (hNow - hPrev));
                    } else if (hNow < hPrev) {
                        a.push(a[i - 1] - (hPrev - hNow));
                    } else {
                        a.push(a[i - 1]);
                    }
                }
            });
            let min = a.reduce((x, y) => {
                return x > y ? y : x;
            });
            let offset = Math.abs(min);
            a.forEach(val => {
                if (min < 0) {
                    val += offset;
                }
                if (min > 0) {
                    val -= offset;
                }
                this.offsetList.push(val);
            });
        },
        /**
         * 页面滚动时触发，通过改变index，改变 toc 的选中项
         * @return {Number} currentIndex  当前index
         */
        changeIndex() {
            const tocWarpCls = document.getElementsByClassName("toc-warp")[0];
            let h = getScrollTop();
            // 动态设置目录距离顶部的位置
            tocWarpCls.style.top = h >= 200 ? '100px' : '260px'
            // 动态设置滚动位置的 index
            for (let i = 0, len = this.allH.length; i < len; i++) {
                if (i + 1 === this.allH.length || h < this.allH[i]) {
                    return (this.currentIndex = i);
                }
                if (h >= this.allH[i] && h < this.allH[i + 1]) {
                    return (this.currentIndex = i);
                }
            }

        },
    }
};
</script>
<style lang="stylus" scoped>

.toc-warp
    width 20rem
    height 60%
    position fixed
    top 260px
    right 50px
    overflow-y auto
    border-radius 16px
    // background white
    transition all 0.2s ease-in-out
    @media $display.lg-only
        width 15rem
        right 35px
    .title
        text-align center
        line-height 20px

    a.link
        position relative
        text-decoration none
        color rgb(52, 73, 94)
        &::after
          content ''
          width 100%
          height 1px /*设置伪元素的高度，这里是下划线的粗细*/
          position absolute
          top 100%
          left 0
          background-color currentColor /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
          transform scale(0)
          transition all .2s
        &:hover::after
          transform scale(1)
          transform-origin center
    .body
        .lists
            list-style none
            text-indent 5px
            .list
                height 30px
                line-height 30px
                a.link
                    transition: background 0.5s
            .active
                dispaly block
                color #3f51b5
                a.link
                    display block
                    margin 4px 0
                    padding-left 3px
                    position relative
                    background-color silver
                    border-left: 4px solid #3f51b5
                    font-weight 600
                    color inherit
                    &:hover
                        text-decoration underline


</style>