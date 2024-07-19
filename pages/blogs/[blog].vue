<script setup>
const slug = ref('');

if (useRoute().params.blog) {
    slug.value = useRoute().params.blog;
}

useSeoMeta({
    title: `Richard | Blog`,
    ogTitle: `Richard | Blog`,
});

const article = await getArticle(slug.value);


</script>

<template>
    <div class="article">
        <NuxtImg v-if="article.cover_image" :src="article.cover_image" class="article__cover_image" alt="" />
        <NuxtLink class="back" to="/blogs">&lt; all posts</NuxtLink>
        <h1>{{article.title}}</h1>
        <div class="tags">
            <span v-for="tag in article.tags" class="tag" :key="tag">{{tag}}</span>
        </div>
        <MDC :value="article.body_markdown" />
    </div>
</template>

<style scoped>
.tag {
    margin: 0 0.5rem;
}
.back {
    display: block;
}

.article {
    padding: 1rem;
    max-width: 70vw;
    margin: 0 auto;
}

.article__cover_image{
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 30px;
}
</style>