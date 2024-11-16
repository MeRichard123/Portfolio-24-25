<script setup>
const slug = ref('');
const markdown = ref('');

const rainbowColours = ref([
    '#e74c3c',
    '#e67e22',
    '#f1c40f',
    '#2ecc71',
    '#3498db',
    '#9b59b6',  
    '#f368e0',

]);

if (useRoute().params.blog) {
    slug.value = useRoute().params.blog;
}

useSeoMeta({
    title: `Richard | Blog`,
    ogTitle: `Richard | Blog`,
});

const article = await getArticle(slug.value);

function find_next(markdown, firstIdx, string) {
    let failSafe = 0;
    while(markdown[firstIdx] !== string) {
        firstIdx++;
        failSafe++;
        if (failSafe > 100) {
            break;
        }
        if (markdown[firstIdx] === string) {
            return firstIdx;
        }
    }
    return -1;
}

function parse_embed(markdown) {
    let start;
    let keyword = 'youtube';
    start = markdown.search(/{% youtube .* %}/g);
    if (start === -1) {
        start = markdown.search(/{% embed .* %}/g);
        keyword = 'embed';
    }
    if (start > 0) {
        const end = find_next(markdown, start, '}');
        let url = markdown.slice(start, end).split(' ')[2].split('/');
        url = url[url.length - 1];
        if (keyword === 'youtube') {
            return markdown.replace(/{% youtube .* %}/g, '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        } else {
            return markdown.replace(/{% embed .* %}/g, '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
    }  
    return markdown;
}

function parse_latex(markdown) {
    let start;
    start = markdown.search(/{% katex %}/g);
    if (start === -1) {
        return;
    }
    if (start > 0) {
        // todo maybeeeee???
        let next = markdown.replace(/{% katex %}\s+/g, '\$$$');
        return next.replace(/\s{% endkatex %}/g, '\$$$');
    }
    return markdown;
}

markdown.value = parse_embed(article.body_markdown);
//markdown.value = parse_latex(markdown.value);

</script>

<template>
    <div class="article">
        <Head>
            <Style type="text/css" src="/github-markdown.css" />
        </Head>
        <p class="date">{{article.readable_publish_date }}</p>
        <NuxtImg v-if="article.cover_image" :src="article.cover_image" class="article__cover_image" alt="" />
        <NuxtLink class="back" to="/blogs">&lt; all posts</NuxtLink>
        <h1>{{article.title}}</h1>
        <div class="tags">
            <span 
                v-for="(tag, index) in article.tags" 
                class="tag" 
                :key="tag"
            >
            <span 
                :style="{ color: rainbowColours[index % rainbowColours.length]}"
            >#</span>{{tag}}</span>
        </div>
        <p class="time">Reading Time: {{article.reading_time_minutes}} mins</p>
        <MDC :value="markdown" />
    </div>
</template>

<style scoped>
.tag {
    margin: 0 0.5rem;
    color: rgb(104, 99, 99);
}

.dark-mode .tag {
    color: rgb(205, 194, 194);
}

.back {
    display: block;
}
.light-mode .back {
    color: #F08A4B;
}
.dark-mode .back {
    color: #8f6ff2;
}

.article {
    padding: 1rem;
    max-width: 75ch;
    margin: 0 auto;
}

.article h1 {
    font-size: 2.5rem;
    margin-top: 20px;
    text-align: center;
}

.article__cover_image{
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 30px;
}

.tags { 
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
}

.time {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
}
.date {
    text-align: center;
    margin-bottom: 1rem;
}

@media screen and (max-width: 800px) {
    .article{
        text-align: justify !important;
    }
}
</style>