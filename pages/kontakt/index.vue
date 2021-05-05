<template>
    <div class="hero contact">
        <div class="container flex column center">
            <div class="about flex">
                <div class="image">
                    <img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/9C78F579-7998-42AE-B0EB-94D35BF72767_ENbpJNwKUQ.jpeg" alt="">
                </div>
                <div class="content">
                    <h1>Kateřina Jirkovská</h1>
                    <p>Focení je pro mě vášen, realizace, svoboda, láska. Těší mě skrz focení propojovat svůj svět s fotografovaným, být sama sebou, vyjádřit se a vyjádřit tím tak i ostatní. Svět kolem mě. Potkávat se s lidmi a poslouchat jejich příběhy. Zachytit pak jejich příběh, cestu nebo momentální rozpoložení.</p>
                    <div class="contact-info flex column flex-left">
                        <p></p>
                        <a href=""><h2>info@jirkovskaphoto.com</h2></a>
                    </div>
                    <div class="social-media">
                        <ul class="flex">
                            <li><a target="_blank" href="https://instagram.com/jirkovska.photography"><img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/instagram_C84yqf0aX.svg" alt=""></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/katerinajirkovskaphoto"><img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/facebook_U8iKQqMuo1fE.svg" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.container {
    min-height: 80vh;
    .about {
        width: 100%;
        align-items: center;
        .image {
            width: 50%;
            img {
                width: 80%;
                height: 100%;
            }
        }
        .content {
            width: 50%;
            height: 100%;
            // padding-left: 80px;
            p {
                max-width: 560px;
            }
            h1 {
                margin: 16px 0;
            }
            .contact-info {
                width: 100%;
                margin: 80px 0;
                h2 {
                    position: relative;
                    transition: .2s ease-in-out;
                    &:hover {
                        opacity: .4;
                    }
                }
            }
            .social-media {
                ul {
                    list-style: none;
                    padding-left: 0;
                    img {
                        margin-right: 16px;
                        transition: .2s ease-in-out;
                        &:hover {
                            opacity: .4;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1280px) {
        .about {
            .content {
                .contact-info {
                    margin: 40px 0;
                }
            }
        }
    }
    @media only screen and (max-width: 960px) {
        .about {
            flex-flow: column;
            align-items: center;
            justify-content: center;
            .image {
                display: flex;
                justify-content: center;
                width: 60%;
            }
            .content {
                display: flex;
                width: 100%;
                flex-flow: column;
                align-items: center;
                text-align: center;
                .contact-info {
                    margin: 40px 0;
                    align-items: center;
                }
            }
        }
    }
    @media only screen and (max-width: 550px) {
        margin-top: 60px;
        .about {
            .image {
                width: 80%;
            }
        }
    }
}

</style>