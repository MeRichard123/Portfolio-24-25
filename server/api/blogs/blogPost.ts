export default defineEventHandler(async (event) : Promise<any> => {
    const config = useRuntimeConfig();
    const URL = 'https://dev.to/api/articles';
    let slug : any = getQuery(event).slug;
    // images are broken fix later
    try {
    const res: any = await $fetch(`${URL}/merichard123/${slug}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'api-key': config.devtoApiKey as string,
        },
    });
    console.log(res);
    return res;
} catch (error) {
    return error;
}
});