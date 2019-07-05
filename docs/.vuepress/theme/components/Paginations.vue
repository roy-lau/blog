<!-- 分页组件 -->
<template>
    <v-flex md10 lg10 class="paginations" v-if="prev || current || next">
        <v-layout row wrap align-center justify-space-between fill-height>
            <div class="text-xs-left" v-if="prev">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn fab dark color="purple" :to="prev.path" v-on="on">
                            <v-icon dark>arrow_back</v-icon>
                        </v-btn>
                    </template>
                    <span>上一页: {{ prev.title || prev.path }}</span>
                </v-tooltip>
            </div>
            <div class="text-xs-left" v-else />
            <div class="text-xs-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on">- {{current}} -</v-btn>
                    </template>
                    <span>当前页</span>
                </v-tooltip>
            </div>
            <div class="text-xs-right" v-if="next">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn fab dark color="purple" :to="next.path" v-on="on">
                            <v-icon dark>arrow_forward</v-icon>
                        </v-btn>
                    </template>
                    <span>下一页: {{ next.title || next.path }}</span>
                </v-tooltip>
            </div>
        </v-layout>
    </v-flex>
</template>
<script>
import { resolvePage } from '../utils'
export default {
    computed: {
        // 上一页
        prev() {
            const prev = this.$page.frontmatter.prev
            if (prev === false) {
                return
            } else if (prev) {
                return resolvePage(this.$site.pages, prev, this.$route.path)
            } else {
                return resolvePrev(this.$page, this.$site.pages)
            }
        },
        // 当前页
        current() {
            return resolveCurrent(this.$page, this.$site.pages) +1
        },
        // 下一页
        next() {
            const next = this.$page.frontmatter.next
            if (next === false) {
                return
            } else if (next) {
                return resolvePage(this.$site.pages, next, this.$route.path)
            } else {
                return resolveNext(this.$page, this.$site.pages)
            }
        },
    },
}

// 分页用到的相关函数
function resolvePrev(page, items) {
    return find(page, items, -1)
}

function resolveCurrent(page, items) {
    for (let i = 0; i < items.length; i++) {
        const cur = items[i]
        if (cur.type !== 'page' && cur.path === decodeURIComponent(page.path)) {
            return i
        }
    }
}

function resolveNext(page, items) {
    return find(page, items, 1)
}

function find(page, items, offset) {
    for (let i = 0; i < items.length; i++) {
        const cur = items[i]
        if (cur.type !== 'page' && cur.path === decodeURIComponent(page.path)) {
            return items[i + offset]
        }
    }
}
</script>
<style scoped>
.paginations {
    width: 100%;
    height: 200px;
}
</style>