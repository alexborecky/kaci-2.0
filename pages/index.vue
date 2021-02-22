<template>
    <div class="hero flex">
        <div class="container">
            <LocomotiveScroll
                ref="scroller"
                :getted-options="{
                smooth: true,
                direction: 'horizontal',
                smartphone: {
                    smooth: true,
                    direction: 'horizontal',
                },
                tablet: {
                    smooth: true,
                    direction: 'horizontal',
                },
                }"
            >
            <div class="example horizontal">
                <!-- <header data-scroll-section>
                    <h1>
                    Horizontal<br />
                    Scroll
                    </h1>
                </header> -->
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <gallery-component
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    </div>
                </div>
            </div> 
        </LocomotiveScroll>
        </div>
    </div>
</template>

<script>
import GalleryComponent from '../components/GalleryComponent.vue'
// import { 
//     Hooper, 
//     Slide,
//     Navigation as HooperNavigation,
//     Pagination as HooperPagination
//      } from 'hooper';
// import 'hooper/dist/hooper.css';
// import { VueAgile } from 'vue-agile'
// import Agile from 'vue-agile/src/Agile.vue';

    export default {
        components: {
                GalleryComponent
            // agile: VueAgile,
            // Hooper,
            // Slide,
            // HooperNavigation,
            // HooperPagination,

        },
        data () {
            return {
                // hooperSettings: {
                //     infiniteScroll: true,
                //     wheelControl: false,
                //     autoPlay: true,
                //     playSpeed: 4000,
                //     transition: 1200,
                // }
            }
        },
        mounted () {
            // $(function() {
            //     $("body").mousewheel(function(event, delta) {
            //         this.scrollLeft -= (delta * 30);
            //         event.preventDefault();
            //     });
            // });
            // document.addEventListener('wheel', (e) => {
            //     document.getElementById('scroll_container').scrollLeft += e.deltaY;
            // })
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/demo.scss';

.hero {
    align-items: center;
    .container {
        .slider {
            .example-section {
                display: flex;
                align-items: center;
            }
        }
    }
}

.container, .js-locomotive, .example, .horizontal {
    overflow: visible;
}

</style>