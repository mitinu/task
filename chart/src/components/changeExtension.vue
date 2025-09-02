<template>
    <div class="triangle-with-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>

export default {
    name: "changeExtension",
}
</script>

<style>
.triangle-with-lines {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent #747886 transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: nwse-resize;
}

.line {
    position: absolute;
    background: #B3B3B3;
    height: 2px;
    transform-origin: left center;
    transform: rotate(135deg);

}

.line:nth-child(1) {
    width: 30px;
    top: 20px;
    left: -9px;
}

.line:nth-child(2) {
    width: 20px;
    top: 30px;
    left: -7px;
}

.line:nth-child(3) {
    width: 10px;
    top: 39px;
    left: -5px;
}
</style>
