<template>
<div class="columnsMain">
    <div class="contener_column">
        <column
            v-for="(indicators, idx) in data"
            :key="idx"
            :indicators="indicators"
            class="column"
        />
        
    </div>
    <div class="grid">
        <div
            v-for="i in data.length"
            :key="i"
        >
            <div
                v-for="j in 6"
                :key="j"
                class="border"
            >

            </div>
        </div>
    </div>
</div>
</template>

<script>
import column from './column.vue';


export default {
    name: "columnsMain",
    components:{
        column
    },
    props:{
        data:{required: true}
    }
}
</script>

<style>

.columnsMain{
    height: 370px;
    position: relative;
    .contener_column{
        position: absolute;
        top: 0;

        display: flex;
        
    }
    .grid {
        display: flex;
        .border{
            width: 75px;
            height: 50px;
            border: 1px solid #FFFFFF1A;
            box-sizing: border-box
        }
    }
}
</style>
