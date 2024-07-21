<script lang="ts" setup>
const props = defineProps({
    text: String,
    link: String,
    isSecondary: Boolean
})
</script>

<template>
    <NuxtLink :to="link" class="btn" :class="{secondary: isSecondary}">{{text}}</NuxtLink>
</template>

<style scoped>
.btn {
    padding: 15px 60px;
    border-radius: 50vw;
    background-color: #F08A4B;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    border: 1px solid #000;
    font-size: clamp(0.7rem, 2vw, 1rem);
    text-align: center;
}

.light-mode .btn {
    background-color: #F08A4B;
    border-color: #000;
}
.dark-mode .btn {
    background-color: #8368EE;
    border-color: #fff;
}

.light-mode .btn:hover {
    box-shadow: 14px 13px 0px 2px #F8E279, 15px 14px 0px 2px #000;
}
.dark-mode .btn:hover {
    box-shadow: 14px 13px 0px 2px #8442D8, 15px 14px 0px 2px #fff;
}

.light-mode .secondary:hover {
    box-shadow: 14px 13px 0px 2px #dfab67, 15px 14px 0px 2px #000;
}
.dark-mode .secondary:hover {
    box-shadow: 14px 13px 0px 2px #8f6ff2, 15px 14px 0px 2px #fff;
}

.btn:focus {
    outline: 2px solid #14b5c4;
}


</style>