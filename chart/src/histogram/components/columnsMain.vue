<template>
<div class="columnsMain"  
ref="columnsMain"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseUp"
>
    <div class="container_columns">
        <div 
            v-for="(indicators, idx) in dataChart"
            :key="idx"
            class="container_column"
        >
            <column
                :height="height"
                :indicators="indicators"
            />  
        </div>
    </div>
    <div class="grid">
        <div
            v-for="i in dataChart.length"
            :key="i"
            class="columnBorder"
        >
            <div
                v-for="j in numberFields(height)"
                :key="j"
                class="border"
            >
            </div>
            <div class="h50px"></div>
        </div>
    </div>
</div>
</template>

<script>
import column from './column.vue';
import scrollingMouseMovements from '@/mixins/scrollingMouse.vue'


export default {
    name: "columnsMain",
    components:{
        column
    },
    mixins: [scrollingMouseMovements],
    props:{
        height:{required: true},
        dataChart:{required: true}
    },
    methods:{
        numberFields(number){
            const ferstNumber = parseInt((number+"").split(0,1))
            if (ferstNumber==1)
                return 10
            else 
                return ferstNumber
        }
    },
}
</script>

<style>

.h50px{
    height: 50px;
}
.columnsMain{
    overflow: auto;

    cursor: grab;
    &:active {
        cursor: grabbing;
    }

    user-select: none;

    
    /* Для Chrome, Safari, Edge */
    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }
    -ms-overflow-style: none;  /* IE и Edge */
    scrollbar-width: none;     /* Firefox */





    flex: 999;
    width: 100%;
    position: relative;
    display: flex;
    .container_columns{
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        width: 100%;
        .container_column{
            flex: 1;
            display: flex;
            justify-content: center;
        }
    }
    .grid {
        display: flex;
        width: 100%;
        .columnBorder{
            min-width: 75px;
            flex: 1;
            display: flex;
            flex-direction: column;
            .border{
                flex: 1;
                border: 1px solid #FFFFFF1A;
                box-sizing: border-box
            }
        }
    }
}
</style>
