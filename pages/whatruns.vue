<script setup> 
const theme = ref("light");

watch(() => useColorMode().value, (value) => {
    if (value === "light") {
        theme.value = "light";
    } else {
        theme.value = "dark";
    }
});
</script>


<template>
    <div class="container">
        <h2 class="title">What Powers this Site?</h2>
        <div class="brands">
            <div class="brand">
                <NuxtImg v-if="theme == 'light'" src="/images/whatruns/nuxt.svg" alt="Nuxt.js" />
                <NuxtImg v-else src="/images/whatruns/nuxt-dark.svg" alt="Nuxt.js" />
                <p>Nuxt - a web app framework that just made it easier for me to serve content and deal with routing.</p>
            </div>
            <div class="brand">
                <NuxtImg src="/images/whatruns/vue.svg" alt="Vite" />
                <p>Vue.JS - My javascript framework of choice for this year.</p>
            </div>  
            <div class="brand">
                <NuxtImg v-if="theme == 'light'" src="/images/whatruns/vercel-logotype-dark.png" alt="Vercel" />
                <NuxtImg v-else src="/images/whatruns/vercel-logotype-light.png" alt="Vercel" />
                <p>Vercel - The IaaS and hosting platform this is running on.</p>
            </div>
            <div class="brand">
                <NuxtImg src="/images/whatruns/gsap.svg" alt="GSAP" />
                <p>Greensock GSAP - used in some animations on this site</p>
            </div>
            <div class="brand">
                <NuxtImg src="/images/whatruns/dev.svg" alt="DEV" />
                <p>DEV - I use this to write and post blogs which are displayed here via their API.</p>
            </div>
            <div class="brand">
                <NuxtImg src="/images/whatruns/contentful.svg" alt="Contentful" />
                <p>Contentful - I use this as a CMS to keep all the project info pages you see when you read more.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 1rem;
    max-width: 70vw;
    margin: 0 auto;
    text-align: center;
    min-height: 100vh;
}
.title {
    position: relative !important;
}

.title::after {
    content: '';
    width: 50%;   
    position: absolute;
    left: 15%;
    bottom: -10px;
    height: 6px;
}

.light-mode .title::after {
    background-color: #F8E279;
}
.dark-mode .title::after {
    background-color: #8f6ff2;
}
.brands {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 5rem;
    margin-top: 4rem;
}
.brand img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: 0 auto;
}
.brand p {
    margin-top: 1.2rem;
    max-width: 30ch;
}
</style>