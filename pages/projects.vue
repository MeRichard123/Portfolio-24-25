<template>
    <div class="project-container">
        <h2>My Projects</h2>
        <p>Other projects which I built in my spare time.</p>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Richard | Projects',
    ogTitle: 'Richard | Projects',
});
</script>

<style scoped>
.project-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-size: 1rem;
}

h2 {
    margin-top: 30px;
}
</style>