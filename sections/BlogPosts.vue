<script>
import Button from '@/components/Button.vue'
</script>

<template>
    <div class="container" id="blogs">
        <h2>Featured Blog Posts</h2>
        <div class="blog-container">
           <div class="blog">
            <span class="blog__date">December 29th 2021 </span> 
            <h4>Building a Timetable Generator</h4>
            <p>A rundown of my A-Level CS final year project</p>
            <a href="/blogs/building-a-timetable-generator-31o7">Read More -></a>
          </div>
          <div class="line"></div>
          <div class="blog">
            <span class="blog__date">June 11th 2020 </span> 
            <h4>Building a CSS Framework</h4>
            <p>How I got to building my CSS framework and why you should too</p>
            <a href="/blogs/making-my-own-css-framework-50j9">Read More -></a>
          </div>
         
        </div>
        <div class="btn-container">
            <Button text="More Posts" link="/blogs" />
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
    margin-top: 8rem;
    height: 80vh;
}

.btn-container {
    margin-top: 2rem;
}

.blog-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
}

.blog-container::before {
    content: url('/public/images/drop.svg');
    width: 100px;
    height: 100px;
    position: absolute;
    left: calc(-1*(100px + 150px));
    z-index: 0;
    top: 30%;
    transform: translateY(-30%);
}

.dark-mode .blog-container::before {
    content: url('/public/images/drop-dark.svg');
}

.blog {
    margin: 1rem 0;
    padding: 1rem;
}

.line {
    width: 100%;
    height: 4px;
    margin-left: 1rem;
}

.dark-mode .line {
    background-color: #fff;
}
.light-mode .line {
    background-color: #F6F3E6;
}

.blog h4 {
    font-family: 'Dosis', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    margin-left: -2px;
}

.blog p {
    margin-bottom: 1rem;
}

.light-mode .blog a {
    color: #F08A4B;
}

.dark-mode .blog a {
    color: #a68fff;
}   
</style>
