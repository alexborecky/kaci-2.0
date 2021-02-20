<template>
    <div class="hero">
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
                <header data-scroll-section>
                    <h1>
                    Horizontal<br />
                    Scroll
                    </h1>
                </header>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="5" />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="2" />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="2" />
                    </div>
                </div>
            </div> 
        </LocomotiveScroll>
    </div>
</template>


<script>

export default {
    name: 'carousel',
    components: {
    },
    data() {
      return {
      }
    },
  }

</script>

<style lang="scss" scoped>
  
@import '@/assets/scss/demo.scss';

</style>