<template>
    <v-layout row wrap justify-center>
           <v-flex d-flex md8 lg8 v-if="$site.pages" v-for="page in $site.pages">
            <v-card color="white" v-if="page.title" :to="page.regularPath" class="elevation-15">
                <v-card-text> {{page.title}} </v-card-text>
            </v-card>
        </v-flex>

    </v-layout>
</template>
<script>
export default {
    components: {},
    methods: {},
    created() {},
}
</script>