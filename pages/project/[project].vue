<script setup>
const { project } = useRoute().params;
const data = ref(null);

onMounted(async () => {
    const res = await useProjectData(project);
    data.value = res.data[0];
});

</script>

<template>
    <div v-if="data">
        <h1>{{data.title}}</h1>
        <NuxtImg :src="data.headerImage.url" alt="" />
        <p>{{data.techStack}}</p>
        <MDC :value="data.contentMd" />
        <div class="buttons">
            <a v-if="data.siteLink">Live Site</a>
            <a v-if="data.blogLink">Read Blog</a>
            <a v-if="data.codeLink">See Code</a>
            <a v-if="data.demoLink">View Demo</a>
        </div>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    gap: 1rem;
}
</style>