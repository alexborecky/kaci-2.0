<template>
    <div class="hero" :style="{backgroundImage: 'url('+ image +')'}">
        <div class="cover hero"></div>
        <div class="container flex center">
            <div class="title flex column center">
                <h1>{{ title }}</h1>
                <nuxt-link :to="link" class="gallery-link flex center">
                    Otevřít Galerii
                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8L28 8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.5 3.5L28 8L23.5 12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderImage',
        props: [
            'title',
            'link',
            'image'
        ]
    }
</script>

<style lang="scss" scoped>

.hero {
    background-size: cover;
    background-position: center;
    height: 100vh;
    z-index: 2;
    .cover {
        z-index: 1;
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
    }
    .container {
        z-index: 10;
        position: relative;
        height: 100%;
        .title {
            a {
                svg {
                    margin-left: 8px;
                    transition: .3s ease-in;
                }
                &:hover {
                    svg {
                        transform: translateX(8px);
                    }
                }
            }
        }
    }
}

</style>