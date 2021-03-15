<template>
    <div class="hero flex">
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
            <div class="example horizontal">
                <div 
                    class="example-section" 
                    data-scroll-section
                    v-for="cat in cat.cover" :key="cat.src"
                >
                    <gallery-component
                        :image="cat.src"
                        :link="cat.link"
                        data-scroll
                        data-scroll-speed="1"
                    />
                </div>
                <!-- <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <gallery-component
                        image="https://ik.imagekit.io/alexborecky/Kaci/New_Web/full-616_7f3ljl5UE.jpg"
                        link="/"
                        title="Svatby"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <gallery-component
                        image="https://ik.imagekit.io/alexborecky/Kaci/New_Web/full-616_7f3ljl5UE.jpg"
                        link="/"
                        title="Svatby"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    </div>
                </div> -->
            </div> 
        </LocomotiveScroll>
        </div>
    </div>
</template>

<script>
import GalleryComponent from '../components/GalleryComponent.vue'
    export default {
        async asyncData({$content}) {
            const cat = await $content('categories').fetch();
            return {cat}
        },
        components: {
            GalleryComponent
        },
        data () {
            return {

            }
        },

    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/locomotive.scss';

.hero {
    align-items: center;
    .container {
        z-index: 0;
    }
    @media only screen and (max-width: 640px) {
        .js-locomotive {
            margin-top: 80px;
        }
    }   
}

.container, .js-locomotive, .example, .horizontal {
    overflow: visible;
}

</style>