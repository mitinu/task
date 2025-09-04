<template>
    <histogram
        :dataHistogram="dataHistogram"
    />
</template>

<script>
import histogram from './histogram/histogram.vue';

export default {
    name: "app",
    components:{
        histogram
    },
    data(){
        return {
            dataHistogram:{
                legends:[
                    {
                        id: 1,
                        title: "Позиция за 2020 год",
                        color: "#5080CB"
                    },
                    {
                        id: 2,
                        title: "Позиция за 2021 год",
                        color: "#66708B"
                    },
                    {
                        id: 3,
                        title: "Часть из общего числа",
                        color: "#BCD0EEE0"
                    },
                ],
                dataChart: [
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
*{
    margin: 0;
    padding: 0;
    color: white;
}
</style>
