<script>
import Button from '@/components/Button.vue'
</script>

<template>
    <div class="container" id="techstack">
        <h2>My Tech Stack</h2>
        <p class="desc">I have used a lot of different things over time but here are the things I actually like using and some necessary tools.</p>
        <div class="skills-container">
            <div class="skill-block">
                <p class="skill-title">Languages</p>
                <ul>
                    <li>Rust</li>
                    <li>Typescript</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Haskell</li>
                </ul>
            </div>
            <div class="skill-block">
                <p class="skill-title">Frontend</p>
                <ul>
                    <li>Vue JS</li>
                    <li>React / Next JS</li>
                    <li>HTML/ CSS</li>
                    <li>SCSS/ Tailwind</li>
                    <li>Styled Components</li>
                </ul>
            </div>
            <div class="skill-block">
                <p class="skill-title">Backend/ Tools</p>
                <ul>
                    <li>Django</li>
                    <li>Express</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
        <div class="btn-container">
            <Button text="More Info" link="/tech" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    text-align: center;
    margin-top: 10rem;
}

.btn-container {
    margin-top: 4rem;
}

.desc {
    margin-top: 1rem;
    max-width:80ch;
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    gap: 2rem;
}

@media screen and (max-width: 768px) {
    .skills-container {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
    
}

.skill-title {
    text-align: center;
    margin-bottom: 15px;
}

ul {
    list-style-position: inside;
}

li {
    margin: 5px 0;
}

.skill-block::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    width: calc(100% + 10px);
    height: 5px;
}

.light-mode .skill-block::after {
    background-color: #F08A4B;
}
.dark-mode .skill-block::after {
    background-color: #8368EE;
}

.skill-block {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: left;
    text-align: left;
    gap: 1rem;
    margin: 10px 60px;
}
</style>