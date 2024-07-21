interface ProjectType {
  image: string;
  title: string;
  tech: string[];
  description: string;
  projectPageLink: string;
  year: number;
}

export default defineEventHandler(async (event) : Promise<ProjectType[]> => {
    try {
        let yearParam : any = getQuery(event).year;
        yearParam = parseInt(yearParam);

        return [
            {
                image: '/projects/dss.png',
                title: 'Digital Sky Studios',
                tech: ['ReactJS', 'Three.js'],
                description: "Digital Sky Studios is a Game Development Studio.",
                projectPageLink: '/project/digital-sky-studios',
                year: 2023
            },
            {
                image: '/projects/Rich UI.png',
                title: 'Rich UI',
                tech: ['HTML', "Sass"],
                description: "My own custom CSS library for personalised UIs.",
                projectPageLink: '/project/rich-ui',
                year: 2020
            },
            {
                image: '/projects/TURTLES.png',
                title: 'Turtles and Tortoises',
                tech: ["HTML", "CSS"],
                description: "A Collection of Types of Turtles and Tortoises.",
                projectPageLink: '/project/turtles-and-tortoises',
                year: 2020
            },
            {
                image: '/projects/iMate.png',
                title: 'iMate',
                tech: ["Android", "DotNet", "Maui"],
                description: "An intelligent mood tracking application, for students and young people.",
                projectPageLink: '/project/imate',
                year: 2024
            },
            {
                image: '/projects/GitMerged.png',
                title: 'GitMerged',
                tech: ["Django"],
                description: "A Dating Site concept for Developers to meet other like-minded developers.",
                projectPageLink: '/project/gitmerged',
                year: 2020
            },
            {
                image: '/projects/TreeMe.png',
                title: 'TreeMe',
                tech: ["ReactJS", "Django"],
                description: "A Family Tree generator to help you present and share your relations.",
                projectPageLink: '/project/treeme',
                year: 2021
            },
            {
                image: '/projects/KSTABLER.png',
                title: 'KsTabler',
                tech: ["ReactJS", "Django"],
                description: "A timetable maker for my school.",
                projectPageLink: '/project/kstabler',
                year: 2022
            },
        ].filter(project => project.year === yearParam);
    } catch (error) {
        throw createError({
            status: 400,
            statusMessage: "Invalid year parameter"
        }); 
    }
});