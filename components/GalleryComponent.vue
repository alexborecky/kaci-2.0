<template>
    <nuxt-link :to="link" class="gallery flex column center">
        <div class="image flex column center" :style="{backgroundImage: 'url('+ image +')'}">
        </div>
        <h2>{{title}}</h2>
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
    width: 30%;
    height: 100%;
    background-size: cover;
    background-position: center;
     .image {
        width: 100%;
        height: 100%;
        box-shadow: 0 32px 120px 0 rgba($color: #000000, $alpha: .4);
        background-position: center;
        background-size: cover;
        transition: .3s ease-in-out;
        img {
            max-width: 100%;
            height: 100%;
            transition: .3s ease-in-out;
        }
     }
     h2 {
         position: absolute;
         opacity: 1;
         font-size: 40px;
        margin: 8px 0;
        color: rgba($color: #fff, $alpha: 1);
        transition: .3s ease-in-out;
    }
    @media only screen and (max-width: 800px) {
        height: 80vh;
        width: 100%;
        margin-right: 0;
        margin-top: 40px;
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
            color: rgba($color: #fff, $alpha: 1);
        }
    }
    &:hover {
        .image {
            box-shadow: none;
            // transform: scale(1.02);
                opacity: .64;
                filter: blur(4px);
            h2 {
                color: rgba($color: #fff, $alpha: 1.0);
                opacity: 1;
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