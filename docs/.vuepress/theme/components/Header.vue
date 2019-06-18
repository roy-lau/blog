<template>
    <v-card>
        <v-toolbar color="indigo" dark extended flat>
            <v-toolbar-side-icon @click.stop="toggle" />
             <v-card-text>
            <h2 class="text-xs-left text-sm-left text-md-center text-lg-center">{{$frontmatter.title}}</h2>
             </v-card-text>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="search">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>
export default {
    methods: {
        toggle() {
            this.$emit('toggle-side-bar')
        }
    },
}
</script>