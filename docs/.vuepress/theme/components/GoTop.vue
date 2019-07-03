<template>
    <v-btn @click="GoTop" :class="{show:show}" class="gotop-btn" color="orange" fab dark>
        <v-icon>arrow_upward</v-icon>
    </v-btn>
</template>
<script>
export default {
    name: "GoTop",
    data() {
        return {
            show: false
        };
    },
    mounted() {
        this.hasShow();
    },
    methods: {
        hasShow() {
            const slef = this;
            window.addEventListener("scroll", function(e) {
                let h = slef.getScrollTop();
                if (h > 300) {
                    slef.show = true;
                } else {
                    slef.show = false;
                }
            });
        },
        GoTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        getScrollTop() {
            var scrollPos;
            if (typeof window === "undefined") return;
            if (window.pageYOffset) {
                scrollPos = window.pageYOffset;
            } else if (document.compatMode && document.compatMode != "BackCompat") {
                scrollPos = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollPos = document.body.scrollTop;
            }
            return scrollPos;
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