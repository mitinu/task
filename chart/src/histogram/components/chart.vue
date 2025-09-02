<template>
    <div class="chart">
        <columnNumbering/>
        <columnsMain
            :data="testData.data"
        />
    </div>
</template>

<script>
import columnsMain from './columnsMain.vue';
import columnNumbering from './columnNumbering.vue';

export default {
    name: "chart",
    components:{
        columnsMain,
        columnNumbering
    },
    data(){
        return{
            testData: {
                data: [
                    {
                        indicator_1_1:{
                            value: 10,
                            color: "#BCD0EEE0"
                        },
                        indicator_1_2:{
                            value: 20,
                            color: "#5080CB"
                        },
                        indicator_2_1:{
                            value: 21,
                            color: "#BCD0EEE0"
                        },
                        indicator_2_2:{
                            value: 35,
                            color: "#66708B"
                        },
                        
                        date:"29 дек"
                    },
                    {
                        indicator_1_1:{
                            value: 10,
                            color: "#BCD0EEE0"
                        },
                        indicator_1_2:{
                            value: 20,
                            color: "#5080CB"
                        },
                        indicator_2_1:{
                            value: 21,
                            color: "#BCD0EEE0"
                        },
                        indicator_2_2:{
                            value: 35,
                            color: "#66708B"
                        },
                        date:"29 дек"
                    },
                    {
                        indicator_1_1:{
                            value: 10,
                            color: "#BCD0EEE0"
                        },
                        indicator_1_2:{
                            value: 20,
                            color: "#5080CB"
                        },
                        indicator_2_1:{
                            value: 21,
                            color: "#BCD0EEE0"
                        },
                        indicator_2_2:{
                            value: 35,
                            color: "#66708B"
                        },
                        date:"29 дек"
                    },

                ]
            }
        }
    }
}
</script>

<style>
.chart{
    display: flex;
}
</style>
