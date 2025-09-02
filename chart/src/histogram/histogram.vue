<template>
    <div class="histogram" :ref="el => histogram = el"
        :style="{ 
            transform: `translate(${positionX}px, ${positionY}px)`,
            width: `${width}px`,
            height: `${height}px`
        }"
        :move="!fullScreen"

        >
        <headerComponent
            heading="Заголовок блока"
            @exit="exit"
            @swapShapeScreen="swapShapeScreen"
              
            @mousedown="startDrag"
            @touchstart="startDrag"
            :style="{ 
                cursor: `${fullScreen?'auto':'move'}`,
            }"
   

        />
        <div class="mb20"><span class="ts14">Кол-во, шт</span></div>
        <chart/>
        <legendChart/>
        <changeExtension
            v-if="!fullScreen"
            @mousedown="startResize($event)"
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
    mixins: [moveDiv],
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
    width: 960px;
    height: 540px;
    position: relative;
    background-color: #292F45;
    padding: 15px;
    padding-top: 55px;
    box-sizing: border-box;

    overflow: auto;
    user-select: none;
}
</style>
