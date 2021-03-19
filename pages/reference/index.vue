<template>
    <div class="hero">
        <div class="container flex column">
            <div class="review-container flex column">
                <Review 
                    v-for="review in review.review" :key="review.name"
                    :name="review.name"
                    :text="review.text"
                    :image="review.image"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({$content}) {
            const review = await $content('reviews').fetch();
            return {review}
        },
    }
</script>

<style lang="scss" scoped>

.review-container {
    margin-top: 10vh;
}

</style>