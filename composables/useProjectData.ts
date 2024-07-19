export const useProjectData = async (id: string) =>  {
    const data = await $fetch('/api/projects/' + id);
    return data;
}
