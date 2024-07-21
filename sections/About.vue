<script>

const languages = [
    {
        lang: "En",
        title: "Hi! I'm",
        name: "Richard",
        ending: ".",
    },
    {
        lang: "Fr",
        title: "Salut! Je suis",
        name: "Richard",
        ending: ".",
    },
    {
        lang: "Sk",
        title: "Ahojte, Ja som",
        name: "Richard",
        ending: ".",
    },
    {
        lang: "De",
        title: "Hallo! Ich bin",
        name: "Richard",
        ending: ".",
    },
    {
        lang: "Kr",
        title: "안녕하세요!",
        name: "리차드",
        ending: "입니다.",
    }
]

export default defineComponent({
    name: 'About',
    setup() {
        const title = ref(languages[0]);
        const spinning = ref(false);
        const isNonLatin = ref(false);
        const ageValue = ref(20);

        const fontClassObject = computed(() => {
            return {
                'title': true,
                'non-latin': isNonLatin.value
            }
        });

        onMounted(() => {
            setInterval(() => {
                ageValue.value = calculateAge();
            }, 1000);
        });

        function shuffleLanguage() {
            const randomIndex = Math.floor(Math.random() * languages.length);
            title.value = languages[randomIndex];
            spinning.value = true;
            if (title.value.lang === "Kr") {
                isNonLatin.value = true;
            } else {
                isNonLatin.value = false;
            }

            setTimeout(() => {
                spinning.value = false;
            }, 1500);
        };

        function calculateAge() {
            const date = new Date();
            const dob = new Date('11-08-2003');

            const ageInMillis = (date.getTime() - dob.getTime());
            const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
            const roundedAge = ageInYears.toFixed(11);

            return roundedAge.toString();
        };

        return {
            title,
            spinning,
            shuffleLanguage,
            fontClassObject,
            ageValue
        }
    }
});

</script>

<template>
    <div class="about-container" id="about">
        <div class="title-container">
            <h1 :class="fontClassObject">
                {{ title.title }}
                <span class="highlight">{{ title.name }}</span>
                <span>{{ title.ending }}</span>
            </h1>
            <button @click="shuffleLanguage" class="shuffleLanguage">
                <svg :class="{ spin: spinning }" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                </svg>
            </button>
        </div>
        <h2 class="heading">Software Engineer and Creative Coder</h2>
        <hr />
        <p>I am a 
            <span 
                v-for="(char, idx) in (ageValue+'').split('')"
                :style="{ fontSize: `${ageValue.length - (idx/1.3)}px` }"
                class="age"
                >
                {{char}}
            </span> 
            year old Software Developer and Computer Science Student based in the UK. I am currently pursuing a
            bachelors degree at the University of Lincoln; graduating in 2025.</p>
        <p>I design <span class="highlight">accessible</span>, <span class="highlight">responsive websites</span>,
            prioritising <span class="highlight">user experience</span> through
            innovation. A curious learner, I
            dabble in <span class="highlight">NLP</span>, <span class="highlight">Machine Learning</span> and <span
                class="highlight">compiler
                development</span>, fuelling my passion
            for inclusive software solutions.
        </p>
        <p>Unrelated to my studies I enjoy linguistics; languages and the processes in which they aid communication have
            always fascinated me!</p>
        <div class="links">
            <a href="https://www.linkedin.com/in/richardcoric/" target="_blank" rel="noreferrer noopener">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="letter"
                        d="M26 18C27.5913 18 29.1174 18.6321 30.2426 19.7574C31.3679 20.8826 32 22.4087 32 24V31H28V24C28 23.4696 27.7893 22.9609 27.4142 22.5858C27.0391 22.2107 26.5304 22 26 22C25.4696 22 24.9609 22.2107 24.5858 22.5858C24.2107 22.9609 24 23.4696 24 24V31H20V24C20 22.4087 20.6321 20.8826 21.7574 19.7574C22.8826 18.6321 24.4087 18 26 18Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path class="letter" d="M16 19H12V31H16V19Z" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path class="letter"
                        d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="22" cy="22" r="21.25" stroke="black" stroke-width="1.5" />
                    <!-- The wave pattern -->
                    <mask id="waveMask">
                        <path class="wave" d="M 0 44 Q 11 40 22 44 T 44 44 V 88 H 0 Z" fill="white" />
                    </mask>
                    <rect class="water" x="0" y="0" width="44" height="44" fill="blue" mask="url(#waveMask)" />
                </svg>
            </a>
            <a href="https://github.com/MeRichard123" target="_blank" rel="noreferrer noopener">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_506_37)">
                        <path
                            d="M19 28.9999C14 30.4999 14 26.4999 12 25.9999M26 31.9999V28.1299C26.0375 27.6531 25.9731 27.1737 25.811 26.7237C25.6489 26.2737 25.3929 25.8634 25.06 25.5199C28.2 25.1699 31.5 23.9799 31.5 18.5199C31.4997 17.1238 30.9627 15.7811 30 14.7699C30.4559 13.5484 30.4236 12.1983 29.91 10.9999C29.91 10.9999 28.73 10.6499 26 12.4799C23.708 11.8588 21.292 11.8588 19 12.4799C16.27 10.6499 15.09 10.9999 15.09 10.9999C14.5764 12.1983 14.5441 13.5484 15 14.7699C14.0301 15.7886 13.4925 17.1434 13.5 18.5499C13.5 23.9699 16.8 25.1599 19.94 25.5499C19.611 25.8899 19.3573 26.2953 19.1953 26.7399C19.0334 27.1844 18.9668 27.658 19 28.1299V31.9999"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <circle cx="22" cy="22" r="21.25" stroke="black" stroke-width="1.5" />
                    <defs>
                        <clipPath id="clip0_506_37">
                            <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                        </clipPath>
                    </defs>
                    <mask id="waveMask">
                        <path class="wave" d="M 0 44 Q 11 40 22 44 T 44 44 V 88 H 0 Z" fill="white" />
                    </mask>
                    <rect class="water" x="0" y="0" width="44" height="44" fill="blue" mask="url(#waveMask)" />

                </svg>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.0912 22.7884C10.0671 21.0266 10.5177 19.3299 11.3441 18.0715C12.1704 16.8132 13.3047 16.0962 14.4975 16.0784L19.7444 16L19.8052 20.4286L14.5582 20.5069C14.1607 20.5129 13.7825 20.7519 13.5071 21.1713C13.2317 21.5908 13.0814 22.1563 13.0895 22.7436C13.0976 23.3308 13.2632 23.8917 13.5501 24.3027C13.8369 24.7138 14.2214 24.9414 14.619 24.9355L19.8659 24.8571L19.9267 29.2856L14.6798 29.364C13.487 29.3818 12.3334 28.699 11.4729 27.4659C10.6124 26.2327 10.1154 24.5502 10.0912 22.7884Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M23.8366 29.1354L22.1969 17.1354C22.1148 16.5349 22.5816 16 23.1877 16H24.9309C25.4579 16 25.8945 16.409 25.9288 16.9349L26.4284 24.5952C26.5064 25.792 28.2408 25.8624 28.4156 24.6759L29.5681 16.8542C29.6404 16.3635 30.0614 16 30.5574 16H31.816C32.449 16 32.9227 16.5807 32.7956 17.2008L30.336 29.2008C30.2406 29.666 29.8312 30 29.3564 30H24.8274C24.3275 30 23.9043 29.6307 23.8366 29.1354Z"
                        stroke="black" stroke-width="1.5" />
                    <circle cx="22" cy="22" r="21.25" stroke="black" stroke-width="1.5" />
                    <mask id="waveMask">
                        <path class="wave" d="M 0 44 Q 11 40 22 44 T 44 44 V 88 H 0 Z" fill="white" />
                    </mask>
                    <rect class="water" x="0" y="0" width="44" height="44" fill="blue" mask="url(#waveMask)" />

                </svg>
            </a>
        </div>
    </div>
</template>


<style scoped>
.about-container {
    max-width: 700px;
    margin: 10rem 8px 8px 10rem;
    padding: 0 20px
}


@media screen and (max-width: 768px) {
    .about-container {
        margin: 0 1rem 0 1rem;
    }

    .links {
        justify-content: center;
    }

    .title {
        line-height: 80px;
    }
}

.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    position: relative;
}

svg {
    border-radius: 44px;
}

.dark-mode .water {
    fill: #8368eea9;
}

.light-mode .water {
    fill: #f08a4b98;
}

.water {
    height: 200%;
    fill: rgba(70, 185, 203, 0.588);
    transform: translateY(100%);
}


a:hover .water {
    animation: fillWater 4s forwards cubic-bezier(.17, .01, 0, .78);
    /* cubic-bezier(.79, .05, 0, .78); */
    /* cubic-bezier(0.165, 0.84, 0.44, 1); */
}

@keyframes fillWater {
    to {
        transform: translateY(-44px);
    }
}

.wave path {
    animation: moveWave 2s linear infinite;
}

@keyframes moveWave {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-22px);
    }
}

a:hover .water-rect {
    height: 1100%;
}


.title {
    font-family: "Dosis", sans-serif;
    font-size: clamp(1rem, 8vw, 4rem);
    font-weight: 800;
    margin: 20px 0;
    line-height: 25px;
}

.non-latin {
    font-size: clamp(1rem, 8vw, 3.5rem);
}

.dark-mode svg path,
.dark-mode svg circle {
    stroke: white !important;
}

.shuffleLanguage {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.shuffleLanguage:hover {
    transform: rotate(-0.1turn);
}

.shuffleLanguage svg {
    fill: #000;
}

.dark-mode .shuffleLanguage svg {
    fill: #fff;
}

.links {
    display: flex;
    margin-top: 20px;
    gap: 50px;
}


svg {
    position: relative;
}


svg::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-color: #000;
    left: 0;
}

.light-mode .links a svg path,
.light-mode .links a svg circle {
    stroke: #000;
}

.dark-mode .links a svg path,
.dark-mode .links a svg circle {
    stroke: #fff;
}

/* Spin animation */
.spin {
    animation: spin 0.5s linear 1;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }


    100% {
        transform: rotate(360deg);
    }
}

.heading {
    font-family: "Dosis", sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
}

hr {
    border: 0;
    height: 7px;
    background: #F6F3E6;
    margin: 20px 0;
}

p:first-of-type {
    margin-top: 35px;
}

@media screen and (max-width: 768px) {
    .heading {
        line-height: 38px;
    }
    
}
</style>