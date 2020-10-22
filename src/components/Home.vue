<template>
    <section>
        <div class="container-project">
            <div class="projets gauche">
                <div class="projet women">
                </div>
            </div>
            <div class="projets droite">
                <div class="projet lampe">
                </div>
            </div>
        </div>
        <div class="container-project">
            <div class="projets gauche">
                <div class="projet projet-4">
                </div>
            </div>
            <div class="projets droite">
                <div class="projet photo">
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="stylus" scoped>
@import '../css/variables'

.container-project
    display flex
    height 100vh
    justify-content space-between
    .gauche
        width 65%
        height 100% 
    .droite
        width 34%
        height 100%
    .projets
        display flex
        flex-direction column
        .projet
            cursor pointer
            background-repeat no-repeat
            background-size cover
            background-position top center
            margin-bottom 1vw
            width 100%
            height 100%
        .women
            height calc(100vh - 75px)
            background-image url("../../src/assets/womenplease_00.jpg")
            &:hover 
                background-image url("../../src/assets/womenplease.gif")
        .lampe
            height calc(90vh - 75px)
            background-image url("../../src/assets/lampe_01.jpg")
            &:hover 
                background-image url("../../src/assets/lampe.gif")
        .photo
            height calc(100vh - 75px)
            width 75%
            margin-top -17vh
            background-image url("../../src/assets/photo_01.jpg")
            &:hover 
                background-image url("../../src/assets/photo.gif")
        .projet-4
            height calc(100vh - 75px)
            width 75%
            margin-left 25%
            margin-top -7vh
            background-image url("../../src/assets/womenplease_06.jpg")
            &:hover 
                background-image url("../../src/assets/womenplease.gif")
        




</style>