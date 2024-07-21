<script setup>
useSeoMeta({
    title: 'Richard | Tech Stack',
    ogTitle: 'Richard | Tech Stack',
});
</script>

<template>
    <div class="main">
        <h1>My Tech Stack</h1>
        <div class="left">
            <p>
                tlr; At the end of the day, I don't really have a preference, I accept every single tool
                on this list has its flaws, but also some handy features. I decide what I use on a project 
                per project basis.
            </p>
            <h2>Programming Languages</h2>
            <h3>Rust</h3>
            <p>
                Rust is known to be a 'safe' Programming Language. I like it because it has some really neat features, 
                like pattern matching and other nice bits I like about Haskell. I think the compiler albeit annoying is 
                really helpful during development. I also really like how Rust handles errors; Errors as values is so much
                 nicer than try catch. Currently I use Rust as a general purpose language but I hope to use it for more 
                 specific things like web servers in the future.
            </p> 
            <h3>Typescript</h3>
            <p>
                Typescript. The supposedly type safe version of Javascript. Javascript is a mess of Programming language 
                design, Typescript may not fix all of its issues, but it allows for some level of type safety. The on 
                going debate of JS Doc vs Typescript is not something I want to be involved in, but I'll use typescript 
                for the sake of it anyway. I tend to use Typescript as the language for using Frontend and Backend web 
                libraries, purely because I enjoy the autocomplete.
            </p>
            <h3>C/ C++
                <span class="small">/^C(#|\+\+)?$/</span>
            </h3>
            <p>
                The holy duo. C was created in the 1970s by Dennis Ritchie and is just great, it is super simple 
                (to an extent) no bloat. I like how fast and simple it is. It initially learned this learn more about 
                how computers work on a low level, and memory management (turns out that is a misconception), but I've continued
                to use it because I feel it helps me understand the decisions other programming languages made in their design.
                C++ is something I have to learn at University, 
                so I don't really use it outside of that, but I heard understanding it is useful in the real world. 
                C++ was created by Bjarne Stroustrup in 1985 as an extension of C. I also did some C# at University so 
                I am familiar with it a little. Once may say I have the infinity gauntlet of C (only missing Holy C, 
                maybe soon!).
            </p>
            <h3>Python</h3>
            <p>
                Python is "a general-purpose programming language" widely used for Data Science. This one is here because 
                it was the first programming language I learned. I don't really like using it (not because it is bad, 
                but because I have other preferences), and if I had to I think I would use Mojo its better superset. I 
                have used Python for a very long time I mainly use it for demos and data science nowadays.
            </p>
            <h3>Haskell</h3>
            <p>
                Haskell is a purely functional language created by mathematicians. I found that learning a pure 
                functional programming language changes the way you think about stuff. It is a very mathematical 
                language, which I think is quite fun to use from time to time. I only really use it for coding problems, 
                when I feel like changing languages, or some from of 
                "<a 
                href="https://www.urbandictionary.com/define.php?term=compsoy"
                rel="noreferrer noopener"
                class="highlight"
                target="_blank"
                >comp soyery</a>".
            </p>
            <h2>Frontend Tools</h2>
            <h3>Vue JS</h3>
            <p>
                Vue is probably my favourite frontend framework, due to its simplicity, and ease of use. I love the 
                tooling and community that surrounds it. If I had to recommend a frontend framework to anyone it would be 
                Vue. The options API gives you a nice basis for how to structure your code. Vue like many others focuses 
                on building UIs but with better DX.
            </p>
            <h3>React JS</h3>
            <p>
                React is another frontend framework for building UIs. I've used it in the past, it's ok. I used it 
                extensively for ages. Again its not bad I just prefer Vue. I do really like Next JS though, makes backend 
                code really easy, I like how they structure the code. I also like having the power of SSR.
            </p>
            <h3>HTML / CSS</h3>
            <p>
                HTML5 and CSS3 are pretty self explanatory. They are the backbone of any website, hence knowing them is 
                key for any web developer. HTML is used for the structure and actual content, CSS makes it look pretty.
            </p>
            <h3>SCSS / Tailwind / Styled Components</h3>
            <p>
                I have used a lot of different libraries for styling a webpage. SCSS is an extension on CSS which allows 
                for nesting, and some programming like structures such as loops. Tailwind is library made up of lots of 
                utility classes which you use to style your site. Styled Components is a CSS-in-JS type solution. I like 
                tailwind because of how easy it is to use and set up. I use Styled Components too because sometimes it is 
                nice to have JS like functionality in CSS. I don't really have a preference I just use whatever I feel 
                like using that day.
            </p>
            <h2>Backend and other Tools</h2>
            <h3>Django</h3>
            <p>
                Django is a full stack python framework, I learned it at a time where I used python a a lot. I started 
                like most people using templates, I later moved to only using the Rest Framework to make API using Django. 
                I used this one the most, so I became comfortable with it and continued using it. I don't really use it 
                that much nowadays.</p>
            <h3>Express</h3>
            <p>
                I haven't used this too much, but in the little experience I have, I love how simple this one is. 
                It allows for super clean apps and I really like using it. I have been a little with Deno recently too.
            </p>
            <h3>Git</h3>
            <p>
                Git is used for version management, knowing your way around git is very important. I like most people 
                know my way around Git a little, but if anything goes wrong I will panic and turn to tools like 
                <a 
                    href="https://ohshitgit.com/"
                    class="highlight"
                    rel="noreferrer noopener"
                    target="_blank"
                >OShitGit</a> 
                and 
                <a 
                    href="https://gitexplorer.com/"
                    class="highlight"
                    rel="noreferrer noopener"
                    target="_blank"
                >GitExplorer</a>.
            </p>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 20px clamp(20px, 2.5vw, 80px);
    min-height: 90vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left {
    text-align: left;
    max-width: 60rem;
    width: 100%;
    padding: 50px 0;
}

h2 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    width: 100%;
    margin-top: 40px;
    position: relative;
}

h2::after {
    content: '';
    height: 3px;
    position: absolute;
    background-color: black;
    bottom: -8px;
    left: 0;
    width: 100%;
}

.dark-mode h2::after {
    background-color: white;
}

h3 {
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    margin: 30px 0 10px 0; 
}

.small {
    font-size: 0.8rem;
    font-style: italic;
    font-family: 'Roboto Mono', monospace;  
    color: gray;
}

@media screen and (max-width: 768px) {
    p {
        text-align: justify;
    }
    
}
</style>