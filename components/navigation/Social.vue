<template>
    <div class="social-navigation">
        <ul class="flex">
            <li><a target="_blank" href="https://instagram.com/jirkovska.photography"><img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/instagram_C84yqf0aX.svg" alt=""></a></li>
            <li><a target="_blank" href="https://www.facebook.com/katerinajirkovskaphoto"><img src="https://ik.imagekit.io/alexborecky/Kaci/New_Web/facebook_U8iKQqMuo1fE.svg" alt=""></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Social'
    }
</script>

<style lang="scss" scoped>

.social-navigation {
    position: fixed;
    bottom: 24px;
    right: 10%;
    ul {
        list-style: none;
        img {
            height: 24px;
            margin-left: 8px;
        }
        a {
            transition: .2s ease-in-out;
            &:hover {
                opacity: .4;
            }
        }
    }
    @media only screen and (max-width: 640px) {
        display: none;
    }
}

</style>