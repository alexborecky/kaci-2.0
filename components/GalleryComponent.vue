<template>
    <nuxt-link :to="link" class="gallery flex column" >
        <div class="image" :style="{backgroundImage: 'url('+ image +')'}"></div>
        <!-- <h2>{{title}}</h2> -->
    </nuxt-link>
</template>

<script>
    export default {
        name: 'GalleryComponent',
        props: [
            'image',
            'title',
            'link'
        ]
    }
</script>

<style lang="scss" scoped>

.gallery {
    height: 70vh;
    width: 100%;
    transform: none !important;
    margin-right: 40px;
    justify-content: space-between;
    align-items: flex-start;
     .image {
        width: 100%;
        height: 90%;
        box-shadow: 0 32px 120px 0 rgba($color: #000000, $alpha: .4);
        background-position: center;
        background-size: cover;
        transition: .3s ease-in-out;
     }
    @media only screen and (max-width: 640px) {
        height: 50vh;
        width: 100%;
        margin-right: 0;
        justify-content: center;
        .image {
            max-height: 90%;
            box-shadow: 0 32px 40px 0 rgba($color: #000000, $alpha: .16);
            img {
                max-width: 100%;
                width: auto;
            }
        }
        h2 {
            margin: 8px 0;
        }
    }
    &:hover {
        .image {
            transform: scale(1.02);
            img {
                box-shadow: 0 64px 80px -40px rgba($color: #000000, $alpha: .4);
            }
        }
        @media only screen and (max-width: 640px) {
            .image {
                transform: scale(1) translateX(0);
            }
        }
    }
}

</style>