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
        <changeExtension
            v-if="!fullScreen"
        />
    </div>
</template>

<script>
import changeExtension from '@/components/changeExtension.vue';
import chart from './components/chart.vue';
import legendChart from './components/legendChart.vue';
import headerComponent from '@/components/headerComponent.vue';
import moveDiv from '@/mixins/moveDiv.vue'


export default {
    name: "histogram",
    components:{
        chart,
        legendChart,
        changeExtension,
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



</style>
