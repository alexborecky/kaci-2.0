<template>
    <div class="hero">
        <div class="container">
            <LocomotiveScroll
                ref="scroller"
                :getted-options="{
                smooth: true,
                direction: 'horizontal',
                getDirection: true,
                smartphone: {
                    smooth: false,
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                },
                tablet: {
                    smooth: true,
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                },
                }"
            >
            <div class="gallery-scroll horizontal flex">
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
        </LocomotiveScroll>
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

.gallery-scroll {
    width: 320vw;
}

.js-locomotive {
    position: realtive;
}

img {
    height: 100%;
    margin-right: 80px;
    transform: none !important;
    @media only screen and (max-width: 640px) {
        width: 100%;
        height: auto;
        margin-right: 0;
        margin: 16px 0;
    }
}

</style>