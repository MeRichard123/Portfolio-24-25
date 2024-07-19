<script lang="ts" setup>
const props = defineProps(
    {
        title: String,
        tags: Array<String>,
        description: String,
        image: String,
        link: String,
    }
);
</script>

<template>
    <div class="project-card">
        <div class="project-card__content">
            <h3 class="project-card__title">{{ title }}</h3>
            <div class="project-card__tags">
                <span v-for="tag in tags" :key="(tag as PropertyKey)" class="project-card__tag">{{ tag }}</span>
            </div>
            <p class="project-card__description">{{ description }}</p>
            <a :href="link" class="project-card__link">See More -></a>
        </div>
        <div class="project-card__image__container">
            <img class="project-card__image" :src="image" />
        </div>
    </div>
</template>

<style scoped>
.project-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin: 1rem;
    background-color: #FCFAF2;
    padding: 1.5rem 20px 1.5rem 1.5rem;
    color: #1D1D1D;
    flex-wrap: wrap-reverse;
}

.dark-mode .project-card {
    background-color: #130F26;
    color: #fff;
}

.light-mode .project-card__link {
    color: #F08A4B;
}
.dark-mode .project-card__link {
    color: #8368EE;
}


.project-card__content {
    margin: 20px;
    width: 100%;
    flex: 1 1 0;
}

.project-card__image__container {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
}

.project-card__image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.project-card__tags {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
}

.light-mode .project-card__tag {
    background-color: #F08A4B;
    color: #1d1d1d;
    font-weight: lighter;
    padding: 8px 15px;
    border-radius: 100vh;
}

.dark-mode .project-card__tag {
    background-color: #8368EE;
    color: #FEFEFE;
    font-weight: lighter;
    padding: 8px 15px;
    border-radius: 100vh;
}

.project-card__description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    word-wrap: break-word;
}

.project-card__title {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'Dosis', sans-serif;
}

.project-card__image {
    background-color: #D9D9D9;
    width: 350px;
    height: 223px;
}

.project-card:nth-last-of-type(2n+1) {
    flex-direction: row-reverse;
}
</style>