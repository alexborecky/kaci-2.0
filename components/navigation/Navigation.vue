<template>
    <div class="navigation full-width transition" :class="{'colorNav' : $route.path == '/', 'hidden-navbar': !showNavbar, scrolled: !scrolledNav}">
        <div class="container flex">
            <ul class="flex center">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/reference">Reference</nuxt-link></li>
            </ul>
            <nuxt-link to="/" class="logo">
                <div>
                    <img class="transition" src="https://ik.imagekit.io/alexborecky/Kaci/Jirkovska__UDPUMkJYOknd.svg" alt="">
                </div>
            </nuxt-link>
            <ul class="flex center">
                <li><nuxt-link to="/o-mne">O mně</nuxt-link></li>
                <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
const OFFSET = 60
    export default {
        name: 'Navigation',
        data () {
            return {
                colorNav: false,
                showNavbar: true,
                scrolledNav: true,
                lastScrollPosition: 0,
                scrollValue: 0
            }
        },
        mounted () {
            this.lastScrollPosition = window.pageYOffset
            window.addEventListener('scroll', this.onScroll)
            const viewportMeta = document.createElement('meta')
            viewportMeta.name = 'viewport'
            viewportMeta.content = 'width=device-width, initial-scale=1'
            document.head.appendChild(viewportMeta)
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },

        methods: {
            onScroll () {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                return 
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition
            this.scrolledNav = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
            }
        }
    }
</script>

<style lang="scss" scoped>

.navigation {
    position: fixed;
    height: 80px;
    z-index: 100;
    top: 0;
    .container {
        height: 100%;
        align-items: center;
        justify-content: space-between;
        .logo {
            img {
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                text-align: center;
                margin-top: -8px;
                &:hover {
                    opacity: .64;
                }
            }
        }
        ul {
            height: 100%;
            li {
                list-style: none;
                margin: 0 24px;
                a {
                    color: black;
                }
            }
        }
    }
}

.colorNav {
    .container {
        ul {
            li {
                a {
                    color: white;
                }
            }
        }
    }
}

a.nuxt-link-exact-active {
    font-weight: 800;
}

.navigation.hidden-navbar {
  transform: translate3d(0, -120%, 0);
}

</style>