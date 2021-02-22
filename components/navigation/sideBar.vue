<template>
    <div class="mobile-nav navigation full-width flex" :class="{'hidden-navbar': !showNavbar, scrolled: !scrolledNav, colour: !transparent,}">
      <div class="container flex">
        <nuxt-link to="/" class="logo">
                <div>
                    <svg width="156" height="23" viewBox="0 0 156 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.22844 5.44V5.2H6.50044V18.832C6.50044 20.096 6.24444 20.944 5.73244 21.376C5.22044 21.792 4.44444 22 3.40444 22C2.38044 22 1.46844 21.848 0.668437 21.544L0.740437 21.352C1.50844 21.656 2.30044 21.808 3.11644 21.808C3.66044 21.808 4.02044 21.576 4.19644 21.112C4.38844 20.648 4.48444 19.896 4.48444 18.856V5.44H2.22844ZM14.8597 5.44V5.2H19.1317V5.44H17.9557V21.76H19.1317V22H14.8597V21.76H15.9637V5.44H14.8597ZM27.5003 5.392C29.3563 5.264 30.9963 5.2 32.4203 5.2C36.3723 5.2 38.3483 6.52 38.3483 9.16C38.3483 10.28 38.0763 11.28 37.5323 12.16C36.9883 13.04 36.0523 13.624 34.7243 13.912L39.5243 22H37.2923L32.5883 14.056H29.4923V22H27.5003V5.392ZM32.4203 5.44C31.4923 5.44 30.5163 5.496 29.4923 5.608V13.816H33.0443C35.3003 13.72 36.4283 12.184 36.4283 9.208C36.4283 7.992 36.0923 7.064 35.4203 6.424C34.7483 5.768 33.7483 5.44 32.4203 5.44ZM48.9064 5.2V15.808L56.6584 5.2L56.8504 5.368L52.5544 11.224L58.9384 22H56.7064L51.3304 12.904L48.9064 16.24V22H46.9144V5.2H48.9064ZM64.6531 14.008C64.6531 11.096 65.3571 8.888 66.7651 7.384C68.1891 5.864 70.0131 5.104 72.2371 5.104C74.4611 5.104 76.2291 5.76 77.5411 7.072C78.8691 8.384 79.5331 10.48 79.5331 13.36C79.5331 16.24 78.8291 18.416 77.4211 19.888C76.0131 21.36 74.1331 22.096 71.7811 22.096C69.7491 22.096 68.0851 21.512 66.7891 20.344C66.1171 19.736 65.5891 18.896 65.2051 17.824C64.8371 16.736 64.6531 15.464 64.6531 14.008ZM72.1651 5.344C70.5491 5.344 69.2211 6.064 68.1811 7.504C67.1571 8.944 66.6451 11.056 66.6451 13.84C66.6451 16.624 67.1331 18.656 68.1091 19.936C69.0851 21.216 70.3811 21.856 71.9971 21.856C73.6291 21.856 74.9571 21.136 75.9811 19.696C77.0211 18.24 77.5411 16.136 77.5411 13.384C77.5411 10.616 77.0451 8.584 76.0531 7.288C75.0771 5.992 73.7811 5.344 72.1651 5.344ZM97.984 5.2C98.288 5.504 98.44 5.896 98.44 6.376C98.44 6.776 98.352 7.184 98.176 7.6L92.032 22L91.768 22.12L85.72 5.2H87.76L92.776 19.408L97.888 7.6C98.064 7.2 98.152 6.784 98.152 6.352C98.152 5.92 98.032 5.584 97.792 5.344L97.984 5.2ZM114.692 6.208C113.236 5.648 111.86 5.368 110.564 5.368C109.284 5.368 108.284 5.64 107.564 6.184C106.844 6.728 106.484 7.48 106.484 8.44C106.484 9.608 107.092 10.512 108.308 11.152C108.852 11.424 109.444 11.68 110.084 11.92C110.74 12.144 111.396 12.4 112.052 12.688C112.708 12.976 113.308 13.304 113.852 13.672C114.396 14.04 114.836 14.552 115.172 15.208C115.508 15.848 115.676 16.672 115.676 17.68C115.676 18.672 115.396 19.52 114.836 20.224C114.276 20.928 113.596 21.408 112.796 21.664C112.012 21.904 111.092 22.024 110.036 22.024C108.068 22.024 106.388 21.536 104.996 20.56L105.116 20.368C105.644 20.784 106.324 21.128 107.156 21.4C108.004 21.656 108.868 21.784 109.748 21.784C111.044 21.784 112.148 21.488 113.06 20.896C113.988 20.288 114.452 19.4 114.452 18.232C114.452 16.952 113.844 15.952 112.628 15.232C112.084 14.912 111.484 14.616 110.828 14.344C110.188 14.072 109.54 13.792 108.884 13.504C108.228 13.2 107.628 12.864 107.084 12.496C105.868 11.696 105.26 10.56 105.26 9.088C105.26 7.92 105.652 6.976 106.436 6.256C107.22 5.52 108.396 5.152 109.964 5.152C111.548 5.152 113.156 5.424 114.788 5.968L114.692 6.208ZM125.18 5.2V15.808L132.932 5.2L133.124 5.368L128.828 11.224L135.212 22H132.98L127.604 12.904L125.18 16.24V22H123.188V5.2H125.18ZM141.93 22H141.642L148.818 5.2L149.082 5.08L155.13 22H153.09L151.218 16.72H144.21L141.93 22ZM148.074 7.792L144.306 16.48H151.146L148.074 7.792ZM150.138 0.615999L151.866 0.567998L149.346 4H149.034L150.138 0.615999Z" fill="black"/>
                    </svg>
                </div>
            </nuxt-link>
        <div class="open">
            <div class="flex middle open-button" @click="isPassive = !isPassive" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> 
        </div>
      <transition name="fade">
        <div class="nav-container flex center-column-top" :class="{ passive: isPassive }">
            <div class="container flex column">
                <div class="close flex ">
                    <div class="flex middle" @click="isPassive = !isPassive" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                </div>
              <div class="mobile-links flex center column">
                  <nuxt-link to="/" class="logo"> 
                        <img @click="isPassive = !isPassive" src="@/assets/images/logo.svg" alt="shoptetak.cz logo">
                    </nuxt-link>
                  <ul>
                    <li 
                      @click="isPassive = !isPassive"
                      v-for="item in items" 
                      :key="item.link"
                    >
                      <nuxt-link 
                        :to="item.link">
                        {{item.title}}
                      </nuxt-link>
                    </li>
                  </ul>
              </div>
            </div>
        </div> 
      </transition>
      </div>
    </div>
</template>

<script>

import items from '@/assets/data/navigation.js'
const OFFSET = 10
    export default {
        name: 'sideBar',
        data () {
            return {
                isPassive: true,
                items: items,
                showNavbar: true,
                scrolledNav: true,
                lastScrollPosition: 0,
                scrollValue: 0,
                transparent: false
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
                this.transparent = window.pageYOffset > 100
                this.lastScrollPosition = window.pageYOffset
            },
        }
    }
</script>



<style lang="scss">

.mobile-nav {
  height: 80px;
  z-index: 100;
  position: fixed;
  transition: .4s ease-in-out;
  background-color: white;
  @media only screen and (min-width: 960px) {
    display: none;
  }
  .container {
    height: 100%;
    justify-content: center;
    align-items: center;
    .logo {
      img {
        height: 40px;
      }
    }
    .open {
      width: 100%;
      height: 100%;
      float: right;
      z-index: 100 !important;
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  }
  .nav-container {
    position: fixed;
    height: 130vh;
    top: 0 !important;
    left: 100%;
    width: 100% !important;
    background-color: white;
    z-index: 100;
    transition: .4s ease-in;
    transform: translateX(-100%);
    z-index: 200;
    .container {
      max-height: 100vh;
      .close {
        position: fixed;
        top: 28px;
        height: 56px;
        width: 40px;
        justify-content: flex-end;
        align-self: flex-end;
      }
      .mobile-links {
        display: flex; 
        justify-content: center;
        text-align: center;
        padding: 0;
        text-align: center;
        margin-top: -40px;
        width: 100%;
        .logo {
            svg {
                height: 64px;
                @media only screen and (max-width: 560px) {
                  
                }
              }
          }
          ul {
              margin-top: 32px;
              padding-left: 0;
              list-style-type: none;
          a {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            text-decoration: none;
            font-size: 24px;
          }
        }
      }

    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

.passive {
  opacity: 0;
  z-index: -1000;
  height: 0vh;
  transform: translateX(100%) !important;
  position: absolute;
}

.nuxt-link-exact-active {
  color: black ;
  font-weight: 800;
}


@media only screen and (max-width: 960px) {
    .mobile-nav {
        display: block;
    }
}

.colour {
    background-color: transparent;
}

.navigation.hidden-navbar {
  transform: translate3d(0, -80px, 0);
}

</style>
