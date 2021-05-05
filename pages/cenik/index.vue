<template>
    <div class="hero price-list">
        <div class="container">
            <h1>Ceník</h1>
            <div class="content">
                <ul>
                    <li><p class="price">10 fotek <span>4000 Kč</span></p></li>
                    <li><p class="price">15 fotek <span>6000 Kč</span></p></li>
                    <li><p class="price">20 fotek <span>8000 Kč</span></p></li>
                </ul>
                <p>V ceně focení jsou 2 fotografie vytisklé na formát A4.</p>
                <p class="warning">Je pro mě důležité, dát si před samotným focením čas. Chvíli si společně v klidu popovídat. Poznat se. Nikam nespěchat.</p>
                <div class="contact">
                    <p>V případě zájmu <nuxt-link to="/kontakt">mě kontaktujte<div class="underline"></div></nuxt-link> a domluvíme se.</p>
                </div>
                <p class="warning">Uvedené ceny se nevztahují na focení svateb. </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.price-list {
    display: flex;
    align-items: center;
    ul {
        padding-left: 0px;
        list-style: none;
        margin: 40px 0;
        li {
            margin: 8px 0;
            p {
                font-size: 20px;
                span {
                    font-weight: 800;
                }
            }
        }
    }
    .contact {
        a {
            font-weight: 600;
            position: relative;
            .underline {
                position: absolute;
                height: 2px;
                width: 0%;
                background-color: black;
                left: 0;
                bottom: -4px;
                transition: .3s ease-in-out;
            }
            &:hover {
                .underline {
                    width: 100%;
                }
            }
        }
    }
    .warning {
        margin: 16px 0;
    }
    @media (max-width: 800px) {
        margin-top: 40px;
    }
}

</style>