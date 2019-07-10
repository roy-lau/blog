<template>
    <v-btn @click="scrollToTop" :class="{show:show}" class="gotop-btn" color="orange" fab dark>
        <v-icon>arrow_upward</v-icon>
    </v-btn>
</template>
<script>
import { debounce } from 'lodash' // 防抖函数
import { getScrollTop } from '@theme/utils'
export default {
    name: "GoTop",
    props: {
        threshold: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            scrollTop: null
        }
    },
    computed: {
        show() {
            return this.scrollTop > this.threshold
        }
    },
    mounted() {
        this.scrollTop = getScrollTop()
        window.addEventListener('scroll', debounce(() => {
            this.scrollTop = getScrollTop()
        }, 100))
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            // this.scrollTop = 0
        }
    }
};
</script>
<style scoped>
.gotop-btn {
    position: fixed;
    right: 15px;
    bottom: 10px;
    opacity: 0;
    transform: scale(0);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.show {
    opacity: 1;
    transform: scale(1);
}
</style>