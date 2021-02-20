<template>
    <div class="gallery">
        <img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/full-616_7f3ljl5UE.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'GalleryComponent'
    }
</script>

<style lang="scss" scoped>

.gallery {
    height: 50vh;
    max-width: 80%;
    background-color: red;
    box-shadow: 0 32px 120px 0 rgba($color: #000000, $alpha: .4);
    z-index: 100;
    transform: none !important;
    margin-right: 80px;
     img {
         height: 100%;
         width: auto;
     }
}

</style>