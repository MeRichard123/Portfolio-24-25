<script setup>
onMounted(() => {
  const html = document.querySelector('html');
  
  useColorMode().value = 'light';

  if (useColorMode().value === 'dark') {
    html.classList.add('dark-mode');
  } else if (useColorMode().value === 'light') {
    html.classList.add('light-mode');
    useColorMode().preference = 'light';
    useColorMode().value = 'light';
  }
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

body {
  /* background-color: #fcfaf2; */
  font-family: "Roboto Mono", monospace;
  /* color: #3F3C3C; */
  transition: all 0.5s ease-in-out;
}

.light-mode body {
  background-color: #FCFAF2;
  color: #3F3C3C;
}
.dark-mode body {
  background-color: #130F26;
  color: #fff;
}

.highlight, p > a {
  color: #F08A4B;
}

.link {
  color: #6b2b02;
  position: relative;
  z-index: 10;
  cursor: pointer;
}

.link:focus {
  outline: 2px solid #14b5c4;
  padding: 2px;
  border-radius: 5px;
}

.dark-mode .link {
  color: #f3f1f6;
  position: relative;
  z-index: 10;
}

.link::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #F08A4B;
  position: absolute;
  bottom: 0;
  transition: height 0.3s;
  z-index: -1;
  left: 0;
}

.dark-mode .link::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #8f6ff2;
  position: absolute;
  bottom: 0;
  transition: height 0.3s;
  z-index: -1;
  left: 0;
}

.dark-mode .link:hover::after {
  height: 10px;
}

.light-mode .link:hover::after {
  height: 10px;
}

.dark-mode .highlight, .dark-mode p > a {
  color: #a68fff;
}

h2 {
  font-size: clamp(2.2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  font-family: 'Mogra', cursive;
}

h3 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  font-family: 'Mogra', cursive;
}

/* For Markdown Rendering where images are in p tags */
p:has(> img) {
  text-align: center;
}

p > img {
    width: 80% !important;
    object-fit: cover !important;
    margin: 20px auto !important;
    text-align: center;
}

pre {
  background-color: #2c2832;
  padding: 2rem;
  border-radius: 10px;
  overflow-x: auto;
  margin: 2rem 0;
}

p + p {
  margin-top: 2rem;
}

p + ul:not(.activeFilterUL):not(.skillUL){
  margin: 2rem 0;
}



hr + p {
  margin: 2rem 0;
}

p + hr {
  margin: 2rem 0;
}

h3:has(a) {
  margin-top: 1rem;
}

h3 > a {
  color: #000;
  text-decoration: none;
}

h2:has(a) {
  margin-top: 1rem;
}
h2 > a {
  color: #000;
  text-decoration: none;
}
h4:has(a) {
  margin-top: 1rem;
}
h4 > a {
  color: #000;
  text-decoration: none;
}
.dark-mode h4 > a {
  color: #fff;
}
.dark-mode h2 > a {
  color: #fff;
}
.dark-mode h3 > a {
  color: #fff;
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #c9d1d9;
  vertical-align: middle;
  background-color: #161b22;
  border: solid 1px rgba(110,118,129,0.4);
  border-bottom-color: rgba(110,118,129,0.4);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(110,118,129,0.4);
}

ul , ol{
  list-style-position: inside;
}

iframe {
    width: 100%;
    margin: 2rem 0;
}

.article h1 {
  margin: 2rem 0;
}

pre code {
  color: rgb(217, 214, 214);
}

</style>