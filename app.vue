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

.highlight {
  color: #F08A4B;
}

.link {
  color: #6b2b02;
  position: relative;
  z-index: 10;
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

.dark-mode .highlight {
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
</style>