<template>
    <div class="project-container">
        <h2>My Projects</h2>
        <p class="subtitle">Other projects which I built in my spare time.</p>
        <h3 class="category">Featured Projects</h3>
        <div class="projects">
            <div v-for="project in featured_projects" :key="project.title" class="project">
                <p class="project__title">{{project.title}}</p>
                <p class="project__desc">{{project.desc}}</p>
                <a 
                    class="link" target="_blank" 
                    rel="noopener noreferrer" 
                    v-if="project.hasSite" 
                    :href="project.site"
                    >Site</a>
                <a class="link" target="_blank" 
                    rel="noopener noreferrer" 
                    :href="project.code"
                    >Code</a>
            </div>
        </div>
        <h3 class="category">Other Projects</h3>
        <div class="projects">
                <div v-for="project in projects" :key="project.title" class="project">
                    <p class="project__title">{{project.title}}</p>
                    <p class="project__desc">{{project.desc}}</p>
                    <a 
                        class="link" target="_blank" 
                        rel="noopener noreferrer" 
                        v-if="project.hasSite" 
                        :href="project.site"
                        >Site</a>
                    <a class="link" target="_blank" 
                        rel="noopener noreferrer" 
                        :href="project.code"
                        >Code</a>
                </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Richard | Projects',
    ogTitle: 'Richard | Projects',
});

const projects = ref([
    {
        title: 'MD ToC Generator',
        desc: 'Generate ToC for markdown files',
        code: 'https://github.com/MeRichard123/md-contents-generator',
        hasSite: false,
    },
    {
        title: 'CodeWarsKatas',
        desc: 'A Collection of my Code Katas.',
        site: 'https://richardscodekatas.surge.sh/',
        code: 'https://github.com/MeRichard123/CodeWars-CodeKatas-Collection',
        hasSite: true,
    },
    {
        title: 'Pokemon App',
        desc: 'PokeApi Pokedex',
        code: 'https://github.com/merichard123/pokemon-app/',
        hasSite: true,
    },
    {
        title: 'NumWord',
        desc: 'React Number to word calculator',
        site: 'https://merichard123.github.io/numword/',
        code: 'https://github.com/merichard123/numword/',
        hasSite: true,
    },
    {
        title: 'Personal Site',
        desc: 'List, Blog and Long Bio',
        site: 'https://merichard123.github.io/',
        code: 'https://github.com/merichard123/merichard123.github.io/',
        hasSite: true,
    },
    {
        title: 'About me Terminal',
        desc: 'Typewriter Terminal',
        site: 'https://merichard123.github.io/AboutMe-Terminal/',
        code: 'https://github.com/merichard123/AboutMe-Terminal/',
        hasSite: true,
    },
    {
        title: 'Elena Joy',
        desc: 'A Theoretical Photographer',
        site: 'https://merichard123.github.io/Elena-Joy',
        code: 'https://github.com/merichard123/Elena-Joy/',
        hasSite: true,
    },
    {
        title: 'Travelly',
        desc: 'A Theoretical Travel Company',
        site: 'https://merichard123.github.io/Travelly',
        code: 'https://github.com/merichard123/Travelly/',
        hasSite: true,
    },

    {
        title: 'JS-Validation',
        desc: 'Login validation with Javascript',
        site: 'https://merichard123.github.io/JS-Password-Validation',
        code: 'https://github.com/merichard123/JS-Password-Validation/',
        hasSite: true,
    },

    {
        title: 'Pear.com',
        desc: 'Apple.com inspired site',
        site: 'https://merichard123.github.io/Pear.com',
        code: 'https://github.com/merichard123/Pear.com/',
        hasSite: true,
    },
    {
        title: 'Discord Bot',
        desc: 'Built with NodeJS',
        site: '',
        code: 'https://github.com/merichard123/Developers-Discord-Bot/',
        hasSite: false,
    },
]);

const featured_projects = ref([
    {
        title: 'Cing-Cong',
        desc: 'A Pong game implemented in C',
        code: 'https://github.com/MeRichard123/cing-cong',
        hasSite: false,
    },
    {
        title: 'Brainy-Rust',
        desc: 'A Brainfuck interpreter written in Rust',
        code: 'https://github.com/MeRichard123/brainy-rust',
        hasSite: false,
    }, {
        title: 'richBuild',
        desc: 'A header only C build tool written in C',
        code: 'https://github.com/RichTools/richbuild',
        hasSite: false,
    },
]);
      
      
</script>

<style scoped>
.project-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    font-size: 1rem;
    background: url('/images/background-light.png') no-repeat center center/cover;
}

.dark-mode .project-container {
    background: url('/images/background-dark.png') no-repeat center center/cover;
}

h2 {
    margin-top: 30px;
    font-family: 'Dosis';
}

.link {
    margin-right: 10px;
    text-decoration: none;
}

.subtitle {
    padding: 10px;
    text-align: center;
}

.category {
    margin-top: 2rem;
}

.projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 1rem 0 4rem 0;
    justify-content: center;
    border-radius: 16px;
    backdrop-filter: blur(11.7px);
    -webkit-backdrop-filter: blur(11.7px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    max-width: 70vw;
}

.project {
    padding: 20px;
    margin: 20px;
    background-color: #fff;
    text-align: left;
    border-radius: 16px;
}

.dark-mode .project {
    background-color: #473c79;
    color: #fff;
}

.project__title {
    font-weight: bold;
    margin: 10px;
    text-align: center;
}
.project__desc {
    margin: 10px 0 10% 0;
    min-height: 2ch;
}

@media screen and (max-width: 768px) {
    .projects {
        max-width: 100vw;
    }
    
}
</style>