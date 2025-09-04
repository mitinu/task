<template>

</template>

<script>
export default {
    name: "moveDiv",
    data() {
        return {
            positionX: 0,
            positionY: 0,
            isDragging: false,
            startX: 0,
            startY: 0,
            width: 950,
            height: 540,
            fullScreen: false,

        }
    },
    methods: {
        swapShapeScreen(){
            if (this.fullScreen) {
                this.width = 950
                this.height = 540
            }
            else{
                this.width = window.innerWidth  
                this.height = window.innerHeight
                this.positionX = 0
                this.positionY = 0
            }
            this.fullScreen = !this.fullScreen
        },

        startDrag(event) {
            if (!this.fullScreen ) {
                this.isDragging = true;
                this.startX = event.clientX - this.positionX;
                this.startY = event.clientY - this.positionY;

                document.addEventListener('mousemove', this.onDrag);
                document.addEventListener('mouseup', this.stopDrag);
                document.addEventListener('touchmove', this.onDrag);
                document.addEventListener('touchend', this.stopDrag);
                }
        },
        onDrag(event) {
            if (!this.isDragging) return;
        
            const clientX = event.touches?.[0]?.clientX ?? event.clientX;
            const clientY = event.touches?.[0]?.clientY ?? event.clientY;
            
            this.positionX = clientX - this.startX;
            this.positionY = clientY - this.startY;
        },
        stopDrag() {
            this.isDragging = false;
            document.removeEventListener('mousemove', this.onDrag);
            document.removeEventListener('mouseup', this.stopDrag);
            document.removeEventListener('touchmove', this.onDrag);
            document.removeEventListener('touchend', this.stopDrag);
        },
       
    }
}
</script>

<style scoped>

</style>
