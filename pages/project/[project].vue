<script setup>
const { project } = useRoute().params;
const data = ref(null);

onMounted(async () => {
    const res = await useProjectData(project);
    try {
        data.value = res.data[0];
        console.log(data.value);
    } catch (error) {
        throw new Error({
            statusCode: 404,
        });
    }
});

</script>

<template>
    <div v-if="data">
        <div class="project-container">
            <h1 class="project__title">{{data.title}}</h1>
            <NuxtImg :src="data.headerImage.url" alt="" />
            <p class="tech_stack">{{data.techStack}}</p>
            <MDC :value="data.contentMd" />
            <div class="buttons">
                <a 
                    class="link"
                    v-if="data.siteLink"
                    :href="data.siteLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >Live Site</a>
                <a 
                    class="link" 
                    v-if="data.blogLink"
                    :href="data.blogLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >Read Blog</a>
                <a 
                    class="link" 
                    v-if="data.codeLink"
                    :href="data.codeLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >See Code</a>
                <a 
                    class="link" 
                    v-if="data.demoLink"
                    :href="data.demoLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >View Demo</a>
            </div>
        </div>
    </div>
    <div v-else class="loading">
        <ProjectDetailSkeleton />
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 20px 0;
    margin-top: 2rem;
}

.project-container {
    padding: 1rem;
    max-width: 60vw;
    margin: 0 auto;
    text-align: left;
    min-height: 100vh;
}

.tech_stack {
    text-align: center;
    color: gray;
    font-weight: bold;
    font-size: clamp(0.9rem, 1.1rem, 1.3rem);
    margin: 50px auto;
}

.project-container img {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    object-fit: contain;
    margin-top: 20px;
}

.project__title {
    margin-top: 30px;
    text-align: center;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

@media screen and (max-width: 768px) {
    .project-container {
        max-width: 100vw;
    }
    
}

</style>