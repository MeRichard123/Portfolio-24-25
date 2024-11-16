const URL = 'https://dev.to/api/articles';

export const getBlogTags = async () => {
    const res: any = await $fetch(`${URL}?username=merichard123`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    });
    const tags = new Set();
    await res.map((item: any) => {
        item.tag_list.map((tag: any) => {
            tags.add(tag);
        });
        return item;
    });
    return tags;
}

export const getBlogPosts = async () => {
    
    const res: any = await $fetch(`${URL}?username=merichard123`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return res;
}

export const getArticle = async (slug: string) => {
    const res: any = await $fetch(`/api/blogs/blogPost?slug=${slug}`, {
        method: 'GET',
    });
    const article = res;
 
    try {
        return JSON.parse(article);
    } catch (error) {
        return article;
    }
}