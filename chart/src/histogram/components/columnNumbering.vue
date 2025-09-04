<template>
<div class="column_numbering">
     <div class="column">
        <div
            v-for="value in numberingFields(height).reverse()"    
            :key="value"
            class="number"
        >
            <div><span class="ts14">{{ value }}</span></div>
        </div>
    </div>
    <div class="grid">
        <div
            v-for="j in numberFields(height)"
            :key="j"
            class="border"
        >
        </div>
        <div class="h50px"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "columnNumbering",
    props:{
        height:{required: true},
    },
    methods:{
        numberFields(number){
            const ferstNumber = parseInt((number+"").slice(0,1))
            if (ferstNumber==1)
                return 10
            else 
                return ferstNumber
        },
        numberingFields(number){
            let Rank = Math.floor(Math.log10(Math.abs(number)))
            let ferstNumber = parseInt((number+"").slice(0,1))
            if (ferstNumber==1){
                Rank--
                ferstNumber = 10
            }
            const returnArr = []
            for (let i = 0; i <= ferstNumber; i++) {
                returnArr.push(i*10**Rank)
            }
            return returnArr
        }
    }
}
</script>

<style>
.h50px{
    height: 50px;
}
.ts14{
    font-size: 14pt;
}
.column_numbering{
    position: relative;
    display: flex;
    width: 45px;
    flex: 1;
    .column{
        display: flex;
        flex-direction: column;
        width: 45px;
        .number{
            flex: 1;
            width: 30px;
            align-content: start;
            justify-items: center;
        }
    }

    .grid{
        height: 100%;
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        .border{
            flex: 1;
            width: 20px;
            border-top: 1px solid #FFFFFF1A;
            border-bottom: 1px solid #FFFFFF1A;
            box-sizing: border-box
        }
    }     
        
}
</style>
