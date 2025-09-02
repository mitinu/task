<template>
    <div class="legends">
        <div
            v-for="(legend, idx) in testData.legends"
            :key="idx"
            class="legend"
        >
            <div :style="{ backgroundColor: legend.color }" class="cube"></div>
            <span class="ts14">{{ legend.value }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "legendChart",  
    data(){
        return {
            testData:{
                legends:[
                    {
                        value: "Позиция за 2020 год",
                        color: "#5080CB"
                    },
                    {
                        value: "Позиция за 2021 год",
                        color: "#66708B"
                    },
                    {
                        value: "Часть из общего числа",
                        color: "#BCD0EEE0"
                    },
                ]
            }
        }
    }
}
</script>

<style>
.ts14{
    font-size: 14pt;
}

.legends{
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: 1px solid #8E98AF;
    border-radius: 4px;
    .legend{
        display: flex;
        .cube{
            width: 15px;
            height: 15px;
            background-color: black;
            margin-right: 10px;
        }
    }
}
</style>
