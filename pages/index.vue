<template>
    <div class="hero">
        <!-- <hooper :settings="hooperSettings">
            <slide>
                <HeaderImage
                    title="Lidé"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/lide/people38_7F01bifHqqWK.jpg"
                />
            </slide>
            <slide>
                <HeaderImage
                    title="Akce"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/letna_2/letna-two31_H7OANpZmKm.jpg"
                />
            </slide>
            <slide>
                <HeaderImage
                    title="Místa"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/Neapol/neapol27_wCKBVUD-eb.jpg"
                />
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper> -->
        <agile
            :fade="true"
            :speed="1200"
        >
            <div class="slide">
                <HeaderImage
                    title="Lidé"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/lide/people38_7F01bifHqqWK.jpg"
                />
            </div>
            <div class="slide">
                <HeaderImage
                    title="Akce"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/letna_2/letna-two31_H7OANpZmKm.jpg"
                />
            </div>
            <div class="slide">
                <HeaderImage
                    title="Místa"
                    link="/"
                    image="https://ik.imagekit.io/alexborecky/Kaci/Neapol/neapol27_wCKBVUD-eb.jpg"
                />
            </div>
        </agile>
    </div>
</template>

<script>
import { 
    Hooper, 
    Slide,
    Navigation as HooperNavigation,
    Pagination as HooperPagination
     } from 'hooper';
import 'hooper/dist/hooper.css';
import { VueAgile } from 'vue-agile'
import Agile from 'vue-agile/src/Agile.vue';
    export default {
        components: {
            agile: VueAgile,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination
        },
        data () {
            return {
                hooperSettings: {
                    infiniteScroll: true,
                    wheelControl: false,
                    autoPlay: true,
                    playSpeed: 4000,
                    transition: 1200,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>