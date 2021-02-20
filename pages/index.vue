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
                    <div class="slider example horizontal">
                        <div class="example-section first-section" data-scroll-section>
                            <div class="slide-container flex">
                                <GalleryComponent
                                    data-scroll
                                    data-scroll-speed="1"
                                />
                            </div>
                        </div>
                        <div class="example-section first-section" data-scroll-section>
                            <div class="slide-container flex">
                                <GalleryComponent
                                    data-scroll
                                    data-scroll-speed="1"
                                />
                            </div>
                        </div>
                        <div class="example-section first-section" data-scroll-section>
                            <div class="slide-container flex">
                                <GalleryComponent
                                    data-scroll
                                    data-scroll-speed="1"
                                />
                            </div>
                        </div>
                    </div> 
                </LocomotiveScroll>
        </div>
    </div>
</template>

<script>
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