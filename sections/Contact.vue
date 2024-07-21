<script>
import Button from '@/components/Button.vue'

</script>

<template>
    <div class="container" id="contact">
        <div class="top"></div>
        <h2 class="title">Get in Touch?</h2>
        <div class="contact">
            <div class="contact__desc">
                <div class="desc__container">
                    <p>
                        If you would like to make an inquiry, propose an idea, or just want to chat.
                    </p>
                    <p>
                        Feel free to fill out the form on the right. 
                    </p>
                    <p>
                        Or send a message directly to: 
                        <a 
                            href="mailto:rcoric03@gmail.com"
                            class="link"
                            >rcoric03@gmail.com
                        </a>
                    </p>
                    <p>
                        Or Message me on Twitter: 
                        <a 
                            target="_blank"
                            class="link"
                            rel="noopener noreferrer"
                            href="https://x.com/Richard5977"
                        >@Richard59777</a>
                    </p>
                </div>
            </div>
            <div class="contact__form">
                <form 
                    name="contact" 
                    action="https://formspree.io/f/mzbwnelw"
                    method="POST"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="input">
                        <input type="text" name="name" required id="name"> 
                        <label for="name">Name</label>
                    </div>
                    <div class="input">
                        <input type="email" name="email" required id="email">
                        <label for="email">E-mail</label>
                    </div>
                    <div class="input">
                        <textarea name="message" required id="message" cols="30" rows="10"></textarea>
                        <label for="message">Message</label>
                    </div>
                    <input class="send-form" type="submit" value="Send">
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Top Wave */
.top {
    width: 100%;
    margin-top: -300px;
    height: 500px;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
.light-mode .top {
    background-image: url('/images/wave-top.svg');
}
.dark-mode .top {
    background-image: url('/images/wave-top-dark.svg');
}

.title {
    margin-top: -50px;
}

/* Form Styles */
.input {
    position: relative;
    width: 100%;
    margin-top: 40px;
}

.input label {
    position: absolute;
    top: 30px;
    left: 0;
    font-size: 0.8rem;
    letter-spacing: 4px;
    margin-left: 50px;
    z-index: 10;
    transition: all 0.2s ease-in-out;
}

.contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
}

@media screen and (max-width: 800px) {
    .contact {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
}

.contact__desc {
    padding: 0 70px;
    font-size: 1.2rem;
    display: grid;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    text-align: left;
}


.contact__desc p {
    margin: 3rem 0;
    max-width: 40ch;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    text-align: center;
    margin-top: 10rem;
    min-height: 80vh;
}

.light-mode .container {
    background-color: #F8E279;
}
.dark-mode .container {
    background-color: #8442D8;
}

.contact__form form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 70px;
}


.contact__form input {
    width: 100%;
    padding: 20px 50px;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 4px;
    position: relative;
    background-color: #FCFAF2;
    border-radius: 51px;
    margin: 10px 0;
    border: none;
}

.send-form {
    padding: 15px 60px;
    cursor: pointer;
    border-radius: 50vw;
    background-color: #F08A4B;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    border: 1px solid #000;
}

.light-mode .send-form {
    background-color: #F08A4B;
    border-color: #000;
}
.dark-mode .send-form {
    background-color: #8368EE;
    border-color: #fff;
}

.light-mode .send-form:hover {
    box-shadow: 14px 13px 0px 2px #dfab67, 15px 14px 0px 2px #000;
}
.dark-mode .send-form:hover {
    box-shadow: 14px 13px 0px 2px #8f6ff2, 15px 14px 0px 2px #fff;
}

.contact__form input:focus {
    outline: none;
    outline: 2px solid #000;
}

input:focus + label, textarea:focus + label,
input:valid + label, textarea:valid + label {
    transform: translateY(-50px);
}
.contact__form textarea {
    width: 100%;
    padding: 20px 50px;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 4px;
    background-color: #FCFAF2;
    border-radius: 25px;
    margin: 10px 0;
    border: none;
}

.contact__form textarea:focus {
    outline: none;
    outline: 2px solid #000;
}

@media screen and (max-width: 800px) {
    .contact__desc {
        font-size: clamp(1rem, 2vw, 1.5rem);
        padding: 0;
    }

    .contact__desc p {
        margin: 30px 0;
    }
    
    .send-form {
        padding: 0;
    }
    .contact__form form {
        width: 100%;
        padding: 0 10px;
    }

    .container {
        padding-bottom: 2rem;
    }
    
}
</style>