<template>
    <div class="hero">
        <div class="container">
            <therapy-block 
                v-for="therapy in therapy.therapy" :key="therapy.images"
                :image="therapy.src"
                :name="therapy.name"
                :content="therapy.content"
            />
            <!-- <div class="gallery-scroll horizontal flex">
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
            </div>  -->
        </div>
    </div>
</template>

<script>
import images from '@/assets/images/terapie.js'

    export default {
        async asyncData({$content}) {
            const therapy = await $content('therapy').fetch();
            return {therapy}
        },
        data () {
            return {
                images: images
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/locomotive.scss';

.therapy {
    .half {
        img {
            width: 100%;
        }
    }
    .text {
        padding: 80px;
        justify-content: center;
        h2 {
            margin: 24px 0;
        }
    }
}

</style>