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
    width: 400px;
    background-color: red;
    box-shadow: 0 32px 120px 0 rgba($color: #000000, $alpha: .4);
    z-index: 100;
    transform: none !important;
    margin: 40px;
     img {
         height: 100%;
         width: auto;
        //  @media only screen and (max-width: 650px) {
        //      width: 100%;
        //      height: auto;
        //  }
     }
}

</style>