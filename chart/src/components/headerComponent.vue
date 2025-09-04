<template>
    <div class="headerComponent p5">
        <div></div>
        <div class="alignSelfCenter"><span class="ts16">{{ heading }}</span></div>
        <div class="changWindow">
            <div class="m8" @click.stop="exit">
                <svg width="10" height="10" viewBox="0 0 10 10">
                    <line x1="2" y1="5" x2="8" y2="5" stroke="currentColor" stroke-width="1"/>
                </svg>
            </div>
            <div class="m8" @click.stop="swapShapeScreen">
                <svg width="10" height="10" viewBox="0 0 10 10">
                    <rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1"/>
                </svg>
            </div>
            <div class="m8" @click.stop="exit">
                <svg width="10" height="10" viewBox="0 0 10 10">
                    <line x1="2" y1="2" x2="8" y2="8" stroke="currentColor" stroke-width="1"/>
                    <line x1="8" y1="2" x2="2" y2="8" stroke="currentColor" stroke-width="1"/>
                </svg>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: "headerComponent",
    props:{
        heading:{default: "Заголовок блока"}
    },
    methods:{
        exit(){
            this.$emit("exit")
        },
        swapShapeScreen(){
            this.$emit("swapShapeScreen")
        }
    }
    
}
</script>

<style>
.alignSelfCenter{
    align-self: center;
}
.p5{
    padding: 5px;
    box-sizing: border-box;
}
.ts16{
    font-size: 16pt;
}
.changWindow{
    display: flex;
    cursor: pointer;
}
.m8{
    margin: 8px;
}
.hollowCube{
    border: 1px solid white;
    width: 6px;
    height: 6px;
    justify-self: center;
    align-self: center;

}
.headerComponent{
    top: 0;
    left: 0;
    position: absolute;
    background-color: #353D54;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
}
</style>
