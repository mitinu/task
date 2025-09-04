<template>
    <div class="column">
        <canvas class="canvas" ref="canvas" :height="height" width="75px"></canvas>
        <div class="date"><div><span>{{ indicators.date }}</span></div></div>
    </div>
</template>

<script>
export default {
    name: "column",
    props:{
        height:{required: true},
        indicators:{required: true}
    },
    methods:{
        rendering(){
            const yHeightMax = this.height
            

            const ctx = this.$refs.canvas.getContext("2d",{antialias: false})

           


            const width = 20
            const xStepIndicator = 10+width
            let xNextIndicator = 12
            


            ctx.fillStyle = this.indicators.indicator_1_2.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_1_2.value, width, this.indicators.indicator_1_2.value)
            
            ctx.fillStyle = this.indicators.indicator_1_1.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_1_1.value, width, this.indicators.indicator_1_1.value)
            
            xNextIndicator+=xStepIndicator

            ctx.fillStyle = this.indicators.indicator_2_2.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_2_2.value, width, this.indicators.indicator_2_2.value)

            ctx.fillStyle = this.indicators.indicator_2_1.color
            ctx.fillRect(xNextIndicator, yHeightMax-this.indicators.indicator_2_1.value, width, this.indicators.indicator_2_1.value)

        }

    },
    mounted(){
        this.rendering()
    }

}
</script>

<style>

.column{
    display: flex;
    flex-direction: column;

    .canvas{
        width: 75px;
        flex: 1;
        image-rendering: pixelated
    }
    .date {
        width: 70px;
        height: 50px; 
        align-content: center;
        justify-items: center;
    }
}

</style>
