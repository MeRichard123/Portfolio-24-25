<template>
    <div>
        <About />
        <Projects />
        <TechStack />
        <BlogPosts />
        <Div />
        <Contact />
    </div>
</template>

<script setup>
import About from '@/sections/About.vue'
import Projects from '@/sections/Projects.vue';
import TechStack from '@/sections/TechStack.vue';
import BlogPosts from '@/sections/BlogPosts.vue';
import Div from '@/sections/Div.vue';
import Contact from '@/sections/Contact.vue';

definePageMeta({
  title: 'Richard | Software Engineer',
});

useSeoMeta({
  title: 'Richard | Software Engineer',
  ogTitle: 'Richard | Software Engineer',
  description: 'Richard Coric is a Software Engineer based in the UK. He is passionate about building software what helps people and learning new technologies.',
  ogDescription: 'Richard Coric is a Software Engineer based in the UK. He is passionate about building software what helps people and learning new technologies.',
});

</script>
