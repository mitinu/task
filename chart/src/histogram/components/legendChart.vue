<template>
    <div class="legends">
        <div
            v-for="(legend, idx) in legends"
            :key="idx"
            class="legend"
        >
            <div :style="{ backgroundColor: legend.color }" class="cube"></div>
            <span class="ts14">{{ legend.title }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "legendChart",  
    props:{
        legends:{default: () => []}
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
            align-self: center;
        }
    }
}
</style>
