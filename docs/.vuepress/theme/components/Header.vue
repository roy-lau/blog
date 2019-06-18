<template>
    <v-card flat>
        <v-toolbar color="indigo" dark extended flat>
            <v-toolbar-side-icon />
            <h2>{{$frontmatter.title}}</h2>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="toggle">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            showSideBar: true
        }
    },
    methods: {
    	toggle(){}
    },
}
</script>