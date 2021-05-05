<template>
    <div class="hero">
        <div class="container">
            <div class="gallery-scroll vertical flex">
                <div class="gallery-section" data-scroll-section>
                    <div class="gallery-content">
                    <img 
                        v-for="images in images" 
                        :key="images.src"
                        data-scroll
                        data-scroll-speed="-0.5"
                        :src="images.src"
                    />
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import images from '@/assets/images/terapie.js'

    export default {
        data () {
            return {
                images: images,
            }
        },
        head () {
            return {
                title: 'Vertical'
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/locomotive.scss';


.js-locomotive {
    position: realtive;
}

.gallery-scroll {
    height: auto;
    flex-flow: column;
    .gallery-content {
        flex-flow: column;
        margin-right: 0;
        width: 100%;
    }
}

img {
    height: 80vh;
    margin: 80px 0;
    transform: none !important;
    &:first-child {
        margin-top: 40px !important;
    }
    &:nth-child(odd) {
        align-self: flex-start;
    }
    &:nth-child(even) {
        align-self: flex-end;
    }
    @media only screen and (max-width: 640px) {
        width: 100%;
        height: auto;
        margin-right: 0;
        margin: 16px 0;
    }
}

</style>