<script setup>
    const year = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="footer__container">
            <div class="footer__content">
                <p>Richard © {{year}}</p>
                <p>Designed and built by yours truly</p>
            </div>
            <div class="line"></div>
            <div class="footer__sitemap">
                <p>Site Map</p>
                <div class="container">
                    <div class="flex">
                        <a href="#about">#About</a>
                        <a href="#projects">#Projects</a>
                        <a href="#techstack">#Tech Stack</a>
                        <a href="#blogs">#Blog</a>
                    </div>
                    <div class="flex">
                        <a href="/projects">/projects</a>
                        <a href="/blogs">/blogs</a>
                        <a href="/tech">/tech</a>
                        <a href="/whatruns">/whatruns</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer__container {
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    place-items: center;
    padding: 3rem;
    background-color: #AC9A45;
    color: #fff;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dark-mode .footer__container {
    background-color: #33073E;
}
.footer__content {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
}

.line {
    width: 5px;
    height: 100%;
    background-color: #fff;

}
.footer__content p {
    margin-bottom: 2rem;
}

.footer__sitemap {
    text-align: center;
}

.footer__sitemap p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.footer__sitemap .container{
    display: flex;
    gap: 3rem;
}

.footer__sitemap a {
    color: #fff;
}
</style>