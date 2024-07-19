const queryGen = (slug: string) => `
{
  projectEntryCollection(where: {slug: "${slug}"}){
    items{
      title,
      headerImage{
        url,
        width,
        height
      },
      techStack,
      contentMd,
      siteLink,
      blogLink,
      codeLink,
      demoLink
    }
  }
}`;

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const slug = getRouterParam(event, 'slug');
    if (!slug) return { status: 400, body: 'Bad Request' };

    const query = queryGen(slug);

    const res: any = await $fetch(config.public.contentfulUrl + config.contentfulSpace, {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${config.contentfulKey}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    if (!res.data.projectEntryCollection.items.length) return { status: 404, body: 'Not Found' };
    const data = res.data.projectEntryCollection.items;
  
    return {
        slug,
        data,
    }
});