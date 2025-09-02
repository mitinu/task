<template>
<div class="column_numbering">
     <div class="column">
        <div>
            <div
                v-for="value in [0,10,20,30,40,50,60].reverse()"    
                :key="value"
                class="number"
            >
                <div><span class="ts14">{{ value }}</span></div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div
            v-for="j in 6"
            :key="j"
            class="border"
        >

        </div>
</div>
</div>
</template>

<script>
export default {
    name: "columnNumbering",
}
</script>

<style>

.ts14{
    font-size: 14pt;
}
.column_numbering{
    position: relative;
    display: flex;
    width: 45px;
    .column{
        width: 45px;
        .number{
            width: 30px;
            height: 50px;   
            align-content: start;
            justify-items: center;
        }
    }

    .grid{
        position: absolute;
        right: 0;
        .border{
            width: 20px;
            height: 50px;
            border-top: 1px solid #FFFFFF1A;
            border-bottom: 1px solid #FFFFFF1A;
            box-sizing: border-box
        }
    }     
        
}
</style>
