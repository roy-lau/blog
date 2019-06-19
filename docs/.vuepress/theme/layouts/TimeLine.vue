<template>
    <v-layout row wrap justify-center>
        <v-flex d-flex md10 lg10>
            <v-card color="white" class="card--flex-toolbar elevation-15">
                <v-timeline>
                    <v-timeline-item v-for="(page, i) in $site.pages" v-if="page.title" :color="years[i].color" :key="page.key" small>
                        <template v-slot:opposite>
                            <span :class="`headline font-weight-bold ${years[i].color}--text`" v-text="years[i].year" />
                        </template>
                        <div class="py-3">
                            <h2 :class="`headline font-weight-light mb-3 ${years[i].color}--text`"> 标题 {{page.title}}</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sint amet blanditiis eum eligendi dolorum obcaecati quidem perferendis sapiente, quis qui, rerum ut vero, vel velit! Omnis, labore quo nihil!
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        years: [{
                color: 'cyan',
                year: '1960'
            },
            {
                color: 'green',
                year: '1970'
            },
            {
                color: 'pink',
                year: '1980'
            },
            {
                color: 'amber',
                year: '1990'
            },
            {
                color: 'orange',
                year: '2000'
            }
        ]
    }),
    components: {},
    methods: {

    }
}
</script>
<style>
.card--flex-toolbar {
    margin-top: -66px;
    padding: 30px;
}
</style>