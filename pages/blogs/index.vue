<script setup>
useSeoMeta({
    title: 'Richard | Blog',
    ogTitle: 'Richard | Blog',
});

const filters = ref([]);
const activeFilters = ref([]);
const posts = ref([]);

const tags = await getBlogTags();
filters.value = tags;

const blog_posts = await getBlogPosts();
posts.value = blog_posts;

const addActiveFilter = (filter, event) => {
    event.target.classList.toggle('active');
    if (activeFilters.value.includes(filter)) {
        activeFilters.value = activeFilters.value.filter((activeFilter) => activeFilter !== filter);
        posts.value = posts.value.filter((post) => computeFilter(post));
        if (activeFilters.value.length === 0) {
            posts.value = blog_posts;
        } else {
            posts.value = posts.value.filter((post) => computeFilter(post));
        }
    } else {
        activeFilters.value.push(filter);
        posts.value = posts.value.filter((post) => computeFilter(post));
    }
};

const computeFilter = (post) => (
    (activeFilters.value.length === 0) 
    || activeFilters.value.every(
        (filter) => post.tag_list.includes(filter)
    )
);

</script>

<template>
    <div class="container">
        <header>
            <h2>My Blog Posts</h2>
            <p>My little corner of the internet where I write things I've learned and share my experiences.</p>
        </header>
        <Suspense>
            <div class="blog-container">
                <aside class="sidebar">
                    <p>Categories</p>
                    <ul class="filters">
                        <li 
                            class="filter" 
                            @click="addActiveFilter(filter, $event)" 
                            v-for="filter in filters" 
                            :key="filter"
                            >
                            {{filter}}
                        </li>
                    </ul>
                </aside>
                <div class="blogs">
                    <div class="activeFilters">
                        <p>Currently Viewing:</p>
                        <ul>
                            <li v-for="filter in activeFilters" :key="filter">
                                #{{filter}}
                            </li>
                        </ul>
                        <p v-if="!activeFilters.length">All Posts</p>
                    </div>
                    <div v-for="post in posts" :key="post.id" class="post">
                        <NuxtLink :to="'/blogs/'+ post.slug" class="h4">{{post.title}}</NuxtLink>
                        <span class="tag" v-for="tag in post.tag_list">#{{tag}}</span>
                        <p>{{post.description}}</p>
                        <span class="post__date">{{post.readable_publish_date }}</span>
                    </div>
                </div>
            </div>
            <template #fallback>
                Loading
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
header {
    padding: 2rem;
    text-align: center;
    margin-bottom: 3rem;
}
header p {
    margin: 2px auto;
    max-width: 60ch;
}

.container {
    min-height: 100vh;
}

.filters {
    margin: 10px 15px;
    list-style: none;
}

.filter {
    padding: 0.2rem;
}
.filter:hover {
    cursor: pointer;
    text-decoration: underline;
}

.active {
    background-color: #f0f0f0;
    text-decoration: underline;
}
.dark-mode .active {
    background-color: #464c64;
}
.active::after {
    content: '✖';
    margin-left: 0.5rem;
    text-decoration: none;
}

.sidebar {
    margin: 0 auto;
}
.sidebar p {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.blog-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 3rem;
    margin: 0 auto;
    place-content: center;
    max-width: 80vw;
}

.post {
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 1rem;
}

.post:last-of-type {
    border-bottom: none;
}

.post__date {
    display: block;
    font-size: 0.8rem;
    margin: 0.7rem 0;
    color: #666;
}

.dark-mode .post__date {
    color: #b2b2b2;
}

.h4 {
    margin: 15px 0;
    font-size: 1.7rem;
    font-weight: bold;
    display: block;
    text-decoration: none;
    color: #333;
}

.dark-mode .h4 {
    color: #fff;
}

.tag {
    margin: 0 0.5rem 1rem 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    display: inline-block;
}

.light-mode .tag {
    background-color: #F08A4B;
    color: #1d1d1d;
}

.dark-mode .tag {
    background-color: #8368EE;
    color: #FEFEFE;
}



.activeFilters {
    margin: 1rem 0;
    display: flex;
    margin-left: 5px;
}
.activeFilters p {
    font-weight: bold;
    margin-right: 10px;
}
.activeFilters ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.filter {
    position: relative;
}

.filter::before {
    content: '#';
}

@media screen and (max-width: 768px) {
    .blog-container {
        grid-template-columns: 1fr;
        max-width: 100vw;
        margin: 0;
        gap: 0;
    }
    .sidebar {
        display: none;
    }
    .post {
        padding: 1rem;
    }
    .post__date {
        font-size: 0.8rem;
    }
    .h4 {
        font-size: 1.5rem;
    }
    .tag {
        font-size: 0.7rem;
    }
    
}
</style>