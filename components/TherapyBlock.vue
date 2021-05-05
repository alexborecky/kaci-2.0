<template>
    <div class="full-width therapy flex">
        <div class="half photos flex">
            <img :src="image" alt="">
        </div>
        <div class="half text flex column flex-left">
            <h2>{{name}}</h2>
            <p>“{{content}}”</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TherapyBlock',
        props: [
            'image',
            'name',
            'content'
        ]
    }
</script>

<style lang="scss" scoped>

.therapy {
    margin: 80px 0;
    min-height: 50vh;
    justify-content: center;
    align-items: center;
    &:nth-child(even) {
        .photos {
            order: 2;
        }
        .text {
            order: 1;
        }
    }
    .half {
        img {
            max-width: 100%;
        }
    }
    .photos {
        order: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .text {
        order: 2;
        padding: 80px;
        h2 {
            margin: 24px 0;
            font-weight: 700;
        }
        @media (max-width: 1100px) {
            padding: 0px;
        }
    }
    @media (max-width: 1100px) {
        flex-flow: column;
        .half {
            width: 100%;
        }
        .photos {
            margin-top: 40px;
        }
        .text {
            max-width: 700px;
            width: 90%;
            text-align: center;
            align-items: center;
        }
        &:nth-child(even) {
            .photos {
                order: 1;
            }
            .text {
                order: 2;
            }
        }
    }
    @media (max-width: 550px) {
        margin: 40px 0;
        .text {
            width: 100%;
        }
    }
}

</style>