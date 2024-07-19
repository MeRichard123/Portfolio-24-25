<script>
import { gsap } from 'gsap'

export default {
    setup() {
        const colourMode = useColorMode();
        const routeName = ref('index');
        
        const route = useRoute();

        watch(() => route.fullPath, (value) => {
            if (value === '/' || value.startsWith("/#")) {
                routeName.value = 'index';
            }
            else {
                routeName.value = 'other';
            }
        }, { immediate: true })

        onMounted(() =>{
        if (colourMode.value === 'dark') {

            useColorMode().preference = 'dark';
            let tl = gsap.timeline();
            tl.to('#light', {
                duration: 0.5,
                opacity: 0,
            });
            tl.to('#dark', {
                duration: 0.5,
                opacity: 1,
            }, '-=0.5');
        }
        });

        function toggleTheme() {
            let timeline = gsap.timeline();

            if (colourMode.value == 'light') {
                timeline.to('#light', {
                    duration: 0.5,
                    opacity: 0,
                });
                timeline.to('#dark', {
                    duration: 0.5,
                    opacity: 1,
                }, '-=0.5');
                useColorMode().value = 'dark';
                useColorMode().preference = 'dark'; 
            } else {
                timeline.to('#dark', {
                    duration: 0.5,
                    opacity: 0,
                });
                timeline.to('#light', {
                    duration: 0.5,
                    opacity: 1,
                }, '-=0.5');
                useColorMode().value = 'light';
                useColorMode().preference = 'light';    
            }
        }
        return {
            toggleTheme,
            routeName
        }
    }
}
</script>

<template>
    <nav class="nav">
        <ul class="nav__nav-list">
            <div class="line"></div>
                <li class="nav__nav-list__item" v-show="routeName === 'index'"> 
                    <a href="https://read.cv/merichard123">Read.CV</a>
                </li>
                <li class="nav__nav-list__item" v-show="routeName === 'index'"> 
                    <a href="#projects">Projects</a>
                </li>
                <li class="nav__nav-list__item" v-show="routeName === 'index'"> 
                    <a href="#blogs">Blog</a>
                </li>
                <li class="nav__nav-list__item" v-show="routeName === 'index'">
                    <a href="#contact">Contact</a>
                </li>
            <li class="nav__nav-list__item" v-show="routeName === 'other'"> 
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="nav__nav-list__item">
                <div @click="toggleTheme" class="theme-toggle">
                    <svg id="light" fill="#000" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
                    </svg>

                    <svg id="dark" fill="#000" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" />
                    </svg>
                </div>
            </li>
        </ul>
    </nav>
</template>



<style scoped>
nav {
    margin: 10px;
}

.nav__nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin-right: 70px;
}

#dark {
    opacity: 0;
}

.theme-toggle {
    display: flex;
    position: relative;
    cursor: pointer;
    padding: 10px;
    transform-origin: 50% 50%;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.theme-toggle:hover {
    transform: rotate(-0.2turn);
}

.theme-toggle svg {
    fill: #000;
    position: absolute;
    transform: translate(-50%, -50%);
}

.dark-mode svg {
    fill: #fff;
}

.light-mode svg {
    fill: #000;
}

.line {
    width: 100%;
    height: 1.5px;
    margin: 0 2rem 0 70px;
}

.dark-mode .line {
    background-color: #fff;
}

.light-mode .line {
    background-color: #000;
}

.nav__nav-list__item {
    padding: 10px;
    font-weight: 100;
}

.nav__nav-list__item a {
    text-decoration: none;
    color: inherit;
}

@media screen and (max-width: 768px) {
    .mav__nav-list {
        margin-right: 0;
        justify-content: center;
        align-items: center;
    }

    .line {
        display: none;
    }
}
</style>