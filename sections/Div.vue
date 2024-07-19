<template>
    <div class="container">
        <h3>Some more important skills</h3>
        <div class="main">
            <div class="div">
                I can center a div. 
            </div>
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
    height: 80vh;
    margin: 20px;
}

.btn-container {
    margin-top: 2rem;
}

.main {
    height: 80%;
    width: 100%;
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 4rem;
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.dark-mode .main {
    border: 2px dashed white;
}
.light-mode .main {
    border: 2px dashed black;
}

.div {
    padding: 2.5rem 3.5rem;
    position: relative;
    font-size: 1.1rem;
}

.div::after {
    content: '<div>';
    position: absolute;
    top: -15px;
    left: 10px;
    padding: 5px;
}

.light-mode .div::after, .light-mode .div::before{
    background-color: #FCFAF2;
}
.dark-mode .div::after, .dark-mode .div::before{
    background-color: #130F26;
}

.light-mode .div {
    border: 2px solid #000;
}
.dark-mode .div {
    border: 2px solid #fff;
}

.div::before {
    content: '</div>';
    position: absolute;
    bottom: -15px;
    right: 10px;
    padding: 5px; 
}

@media screen and (min-width: 900px) {
    .main {
        margin: 0 100px;
    }
}
</style>