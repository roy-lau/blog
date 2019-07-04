<template>
    <v-dialog v-model="showRssDialog" max-width="500px">
        <v-card ref="emailForm">
            <v-card-title>订阅</v-card-title>
            <v-card-text>
                <a href="">点击复制链接</a>
            </v-card-text>
            <v-card-text>
            <v-text-field ref="email" v-model="email" :rules="[() => !!email || 'This field is required']" :error-messages="errorMessages" label="邮箱" placeholder="请输入您要订阅本博客的邮箱地址" required />
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" flat @click="showRssDialog=false">取消</v-btn>
                <v-btn color="primary" flat @click="rssDialogOk">订阅</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {
        showRssDialog: { // 是否显示 rss 弹框
            type: Boolean,
            default: true
        }
    },
    data(){
    	return{
    		email:null,
    		errorMessages:''
    	}
    },
    methods: {
        rssDialogOk() {
            alert("恭喜您，订阅成功")
        }
    }
}
</script>