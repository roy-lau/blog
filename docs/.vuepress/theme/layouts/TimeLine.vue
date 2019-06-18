<template>
    <div class="theme-container">
        <div class="md-layout md-gutter" v-if="$frontmatter.layout === 'TimeLine'">
            <div class="md-layout-item md-size-15">
                <SideBar />
            </div>
            <div class="md-layout-item md-size-30">
                <ol>
                	<li v-for="pageInfo in $site.pages" :key="pageInfo.key" v-text="pageInfo.title" v-show="pageInfo.title"></li>
                </ol>
            </div>
            <div class="md-layout-item md-size-15">

                <h1>$site</h1>
                <pre>{{$site}}</pre>
                <h1>$page</h1>
                <pre>{{$page}}</pre>
            </div>
        </div>
        <div>时间线页面不存在！</div>
    </div>
</template>
<script>
import SideBar from "@theme/components/SideBar.vue"
export default {
    components: {
        SideBar
    }
}
</script>