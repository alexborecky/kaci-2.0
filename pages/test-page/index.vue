<template>
    <div class="hero">
        <div class="container flex center">
            <h2>Hello</h2>
        </div>
        <agile
            :fade="true"
            :speed="1000"
        >
            <div class="slide">
                Test slide 01
            </div>
            <div class="slide">
                Test slide 02
            </div>
        </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

    export default {
         data() {
            return {
            }
        },
        components: {
            agile: VueAgile
        }
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: green;
}

.container {
    height: 100%;
    background-color: red;
}

.agile {
    height: 100vh;
    .slide {
        height: 100%;
        background-color: blue;
    }
}

</style>