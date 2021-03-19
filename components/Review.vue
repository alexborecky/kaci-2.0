<template>
    <div class="review flex center">
        <div class="image" :style="{backgroundImage: 'url('+ image +')'}"></div>
        <div class="text flex column">
            <h2>{{name}}</h2>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Review',
        props: [
            'name',
            'text',
            'image'
        ]
    }
</script>

<style lang="scss" scoped>

.review {
    margin: 40px 0;
    .image {
        background-image: url(https://ik.imagekit.io/alexborecky/Kaci/lide/people26_YZYnRmwHg.jpg);
        height: 240px;
        width: 240px;
        border-radius: 1000px;
        background-position: center;
        background-size: cover;
        order: 1;
    }
    .text {
        order: 2;
        margin-left: 40px;
        p {
            max-width: 600px;
        }
        h2 {
            margin-bottom: 16px;
        }
    }
    &:nth-child(even) {
        .image {
            order: 2;
        }
        .text {
            order: 1;
            margin-left: 0px;
            margin-right: 40px;
        }
    }
    @media only screen and (max-width: 1100px) {
        .text {
            width: 50%;
            p {
                max-width: 100%;
            }
        }
        .image {
            align-self: flex-start;
        }
    }
    @media only screen and (max-width: 800px) {
        flex-flow: column;
        justify-content: center;
        align-items: center;
        .text {
            width: 100%;
            margin: 0px !important;
            text-align: center;
            justify-content: center;
            align-items: center;
            p {
                max-width: 480px;
            }
        }
        .image {
            align-self: center;
            margin-bottom: 24px;
        }
        &:nth-child(even) {
            .image {
                order: 1;
            }
        }
    }
}

</style>