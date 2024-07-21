<template>
    <div class="skeleton">
        <div class="title"></div>
        <div class="image"></div>
        <div class="tech"></div>
        <div class="description">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="buttons">
            <div class="button"></div>
            <div class="button"></div>
        </div>
    </div>
</template>

<style scoped>
    .skeleton {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .skeleton > div:not(:last-child):not(.description),
    .buttons > div, .buttons > div {
        animation: skeleton-loading 1s infinite alternate;
    }

    div {
        margin: 1rem;
        width: 80vw;
        border-radius: 20px;
    }
    .title {
        height: 50px;
        width: 50%;
        background-color: #f3f3f3;
    }

    .image {
        height: 400px;
        width: 80%;
        background-color: #f3f3f3;
    }

    .tech {
        height: 50px;
        width: 20%;
        background-color: #f3f3f3;
    }

    .description {
        width: 80%;
    }

    .line {
        height: 20px;
        width: 100%;
        background-color: #f3f3f3;
        margin: 10px 0;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    .button {
        height: 50px;
        width: 100px;
        background-color: #f3f3f3;
    }

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

</style>