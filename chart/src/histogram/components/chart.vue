<template>
    <div 
    class="chart" 
    >
        <columnNumbering
            :height="height"
        />
        <columnsMain
            :height="height"
            :dataChart="dataChart"
        />
    </div>
</template>

<script>
import columnsMain from './columnsMain.vue';
import columnNumbering from './columnNumbering.vue';

export default {
    name: "chart",
    props:{
        dataChart:{required: true}
    },
    components:{
        columnsMain,
        columnNumbering
    },
    data(){
        return{
            height: null
        }
    },
    beforeMount(){
        let maxNumber = 0
        for (const indicatorsKey in this.dataChart) {
           const indicators = this.dataChart[indicatorsKey]
           for (const indicatorKey in indicators) {
                const indicator = indicators[indicatorKey]
                if(maxNumber<indicator.value)
                    maxNumber = indicator.value
            }
        }
        this.height = (parseInt((maxNumber+"").slice(0,1))+1)*10**(Math.floor(Math.log10(Math.abs(maxNumber))))
        console.log(this.height)
    }
}
</script>

<style>
.chart{
    flex: 1;
    display: flex;
}
</style>
