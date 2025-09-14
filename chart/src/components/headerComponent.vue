<template>
    <div class="headerComponent p5">
        <div></div>
        <div class="alignSelfCenter"><span class="ts16">{{ heading }}</span></div>
        <div class="changWindow">
            <div class="mr8" @click.stop="exit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.80762 10.085L17.3927 10.1311" stroke="white" stroke-width="1.66667" stroke-linecap="round"/>
                </svg>

            </div>
            <div class="mr8" @click.stop="swapShapeScreen">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2357_1103)">
                    <path d="M4.1665 7.5L1.6665 10L4.1665 12.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.5 4.16699L10 1.66699L12.5 4.16699" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5 15.833L10 18.333L7.5 15.833" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.8335 7.5L18.3335 10L15.8335 12.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.6665 10H18.3332" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 1.66699V18.3337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2357_1103">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

            </div>
            <div class="mr8" @click.stop="exit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3.5L3.5 16.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5 16.5L3.5 3.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
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
.mr8{
    height: 100%;
    padding-right: 8px;
    align-content: center;
    justify-items: center;
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
    height: 36px;
}
</style>
