<template>
    <div class="hero">
        <div class="container">
            <div class="gallery-scroll horizontal flex">
                <div class="gallery-section" data-scroll-section>
                    <div class="gallery-content flex">
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
import images from '@/assets/images/svatby.js'

    export default {
        data () {
            return {
                images: images
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/locomotive.scss';

</style>