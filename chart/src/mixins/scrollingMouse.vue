<template>

</template>

<script>
export default {
    name: "scrollingMouse",
    data() {
        return {
            down: false,
            scrollLeft: 0,
            x: 0
        }
    },
    methods: {
        handleMouseDown(e) {
            this.down = true;
            this.scrollLeft = e.currentTarget.scrollLeft;
            this.x = e.clientX;
        },
        handleMouseMove(e) {
            if (this.down) {
                e.currentTarget.scrollLeft = this.scrollLeft + this.x - e.clientX;
            }
        },
        handleMouseUp() {
            this.down = false;
        }

    }
}
</script>

<style scoped>

</style>
