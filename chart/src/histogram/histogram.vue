<template>
    <div 
        class="histogram" 
        :ref="el => histogram = el"  
        :style="{ 
            transform: `translate(${positionX}px, ${positionY}px)`,
            // width: `${width}px`,
            // height: `${height}px`
        }"
        :move="!fullScreen"

        >
        <headerComponent
            @exit="exit"
            @swapShapeScreen="swapShapeScreen"
              
            @mousedown="startDrag"
            @touchstart="startDrag"
            :style="{ 
                cursor: `${fullScreen?'auto':'move'}`,
            }"
   

        />
        <div class="mb20"><span class="ts14">{{columnTittle}}</span></div>
        <chart
            :dataChart="dataHistogram.dataChart"
        />
        <legendChart
            :legends="dataHistogram.legends"
        />
        <svg 
        v-if="!fullScreen"
        class="changeExtension"
        width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M34 0V34H0L34 0Z" fill="#747886"/>
            <path d="M13 28.3555L28.5 12.8555" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round"/>
            <path d="M19 29.5518L29 19.5518" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round"/>
            <path d="M25 30.9131L30.5 25.4131" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>
</template>

<script>
import chart from './components/chart.vue';
import legendChart from './components/legendChart.vue';
import headerComponent from '@/components/headerComponent.vue';
import moveDiv from '@/mixins/moveDiv.vue'


export default {
    name: "histogram",
    components:{
        chart,
        legendChart,
        headerComponent
    },
    props:{
        columnTittle:{default: "Кол-во, шт"},
        dataHistogram:{required: true}
    },
    mixins: [moveDiv],
    computed:{
        cauntSlider(){
            return this.width
        }
    },
    methods:{
        exit(){
            this.$emit("exit")
        },
        
    }
}
</script>

<style>
.ts14{
    font-size: 14pt;
}
.mb20{
    margin-bottom: 20px;
}
.histogram{
    resize: auto;

    width: 960px;
    height: 540px;
    position: relative;
    background-color: #292F45;
    padding: 15px;
    padding-top: 55px;
    box-sizing: border-box;

    overflow: auto;
    user-select: none;

    display: flex;
    flex-direction: column;
    




    /* Скрываем иконку resize */
    &::-webkit-resizer {
        display: none;
        background-color: transparent;
    }
    
    /* Для Firefox */
    & {
        scrollbar-width: none;
    }
    
    &::-webkit-scrollbar {
        display: none;
    }

}
.changeExtension{
    position: absolute;
    bottom: 0;
    right: 0;
}


</style>
