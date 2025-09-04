<template>

</template>

<script>
export default {
    name:"resizeObserver",
    data() {
        return {
            height: 0,
            resizeObserver: null
        }
    },
    beforeUnmount() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect()
        }
    },
    methods: {
        initResizeObserver() {
            this.resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    this.height = entry.contentRect.height
                    console.log('Высота изменилась:', this.height)
                    // // Вы можете вызвать здесь дополнительные методы
                    // this.onHeightChange(this.height)
                }
            })
            
            this.resizeObserver.observe(this.$refs.objectObservation)
        },
        // onHeightChange(newHeight) {
        // // Ваша логика при изменении высоты
        //     this.$emit('height-changed', newHeight)
        // }
    }
}
</script>

<style>
</style>