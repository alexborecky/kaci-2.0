<template>
    <div class="hero flex">
        <div class="container">
            <div class="galleries flex">
                <gallery-component
                        v-for="cat in cat.cover" :key="cat.src"
                        :image="cat.src"
                        :link="cat.link"
                        :title="cat.title"
                        data-scroll
                        data-scroll-speed="1"
                    />
            </div>
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
    min-height: 64vh;
    height: 80vh;
    @media (max-width: 800px) {
        height: auto;
    }
    .container {
        display: flex;
        z-index: 0;
        height: 90%;
        justify-content: center;
        align-items: center;
    }
}

.container, .js-locomotive, .example, .horizontal {
    overflow: visible;
}

.galleries {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {
        flex-flow: column;
        margin-top: 40px;
        &:last-child {
                margin-bottom: 40px;
            }
    }
}

</style>