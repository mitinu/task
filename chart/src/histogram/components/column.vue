<template>
    <div>
        <canvas class="canvas" ref="canvas" height="300" width="75px"></canvas>
        <div class="date"><div><span>{{ indicators.date }}</span></div></div>
    </div>
</template>

<script>
export default {
    name: "column",
    props:{
        indicators:{required: true}
    },
    data(){
        return{
            canvas: document.getElementById("canvas")
        }
    },
    methods:{
        rendering(){
            const yHeightMax = this.$refs.canvas.offsetHeight
            const ctx = this.$refs.canvas.getContext("2d")

            const width = 20
            const xStepIndicator = 10+width
            let xNextIndicator = 12


            ctx.fillStyle = this.indicators.indicator_1_2.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_1_2.value*5, width, this.indicators.indicator_1_2.value*5)
            
            ctx.fillStyle = this.indicators.indicator_1_1.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_1_1.value*5, width, this.indicators.indicator_1_1.value*5)
            
            xNextIndicator+=xStepIndicator

            ctx.fillStyle = this.indicators.indicator_2_2.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_2_2.value*5, width, this.indicators.indicator_2_2.value*5)

            ctx.fillStyle = this.indicators.indicator_2_1.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_2_1.value*5, width, this.indicators.indicator_2_1.value*5)

        }

    },
    mounted(){
        this.rendering()
    }

}
</script>

<style>

.canvas{
    height: 300px; 
    width: 75px;
}
.date {
    width: 70px;
    height: 55px; 
    align-content: center;
    justify-items: center;
}

</style>
