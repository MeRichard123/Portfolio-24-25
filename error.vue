<template>
    <div class="error">
        <h1 v-if="error.statusCode === 404">404</h1>
        <h3 v-if="error.statusCode === 404">Page not found</h3>
        <h3 v-else>An error occurred - {{ error.statusCode }} </h3>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>

<style>
.error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-size: 2rem;
}

h1 {
    margin-bottom: 2rem;
}
</style>