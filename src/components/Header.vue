<template>
    <header>
        <h1>mathilde avazeri</h1>
        <div class="menu">
            <a @click.prevent="displayWork">WORK</a>
            <a @click.prevent="displayAbout">ABOUT</a>
            <a @click.prevent="displayContact">CONTACT</a>
        </div>
        <div v-if="showWork" class="work">
            <ul>
                <li><a href="">projet 1</a></li>
                <li><a href="">projet 1</a></li>
                <li><a href="">projet 1</a></li>
                <li><a href="">projet 1</a></li>
                <li><a href="">projet 1</a></li>
                <li><a href="">projet 1</a></li>
            </ul>
        </div>
        <div v-if="showAbout" class="about">
            <p>Profondément touchée par l'architecture et le design, particulièrement par la couleur, point commun de ces deux disciplines qui donne tout de suite une ambiance appropriée à l'espace. De même pour les matériaux nobles et les objets contemporains qui sont une rencontre entre modernité et traditions. Après un trimestre éclaire à Paris-Val de Seine en architecture, j'entame une prépa d’Arts Appliqués à Penninghen, je suis reçue en architecture d’intérieur et design en deuxième année. Aujourd’hui diplômée de Penninghen en architecture d'intérieure, je suis en perpétuelle recherche de nouvelles cultures, nouvelles architectures, nouveaux designs.</p>
        </div>
        <div v-if="showContact" class="contact">
            <div class="container-contact">
                <a href="mailto:mathilde.avazeri@gmail.com">mathilde.avazeri@gmail.com</a>
                <a href="tel:+33625410572">+ 33 6 25 41 05 72</a>
            </div>
            <div class="container-rs">
                <a href="https://www.instagram.com/mathildeavazeri/?hl=fr)%3Cbr">Instagram</a>
                <a href="https://www.linkedin.com/in/mathilde-avazeri-4ba696100/?originalSubdomain=fr)%3Cbr">Linkedin</a>
            </div>
            <a class="cv-text" @click.prevent="displayCV">Curriculum vitæ</a>
            <div class="container-cv" @click.prevent="displayCV" v-if="showCV">
                <img class="img-cv" src="../../src/assets/CV_FR.jpg" alt="cv">
            </div>
        </div>
    </header>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

header 
    display flex
    box-sizing border-box
    align-items center
    justify-content space-between
    padding 0 30px
    height 60px
    width 100%
    h1
        font-size 32px
        font-weight 500
        font-style normal
        font-family SangBleuEmpire
        position fixed
    .menu 
        position fixed
        right 30px
        top 30px
        display flex
        align-items flex-end
        justify-content center
        a
            color black 
            font-family MaisonNeue
            text-decoration none
            width 80px
            cursor pointer
            &:hover
                font-family SangBleuEmpire
                text-transform lowercase
.about
    position fixed
    box-sizing border-box
    padding 10px 30px
    font-size 32px
    width 100%
    font-family MaisonNeue
    line-height 45px
    top 75px
    left 0
.contact
    position fixed
    box-sizing border-box
    padding 10px 30px
    font-size 25px
    width 100%
    font-family MaisonNeue
    line-height 30px
    top 75px
    left 0
    display flex
    height 30vh
    flex-direction column
    justify-content space-between
    .container-contact
        display flex
        flex-direction column
        a
            color black
            text-decoration none
            font-family MaisonNeue
            &:hover
                font-family SangBleuEmpire
    .container-rs
        display flex
        a
            margin-right 10px
            color black
            text-decoration none
            font-family MaisonNeue
            &:hover
                font-family SangBleuEmpire
    .cv-text
        color black
        text-decoration none
        font-family MaisonNeue
        cursor pointer
        &:hover
            font-family SangBleuEmpire

.work
    position fixed
    box-sizing border-box
    padding 10px 30px
    font-size 12px
    width 100%
    font-family MaisonNeue
    line-height 30px
    top 45px
    left 0
    display flex
    flex-direction column
    align-items flex-end
    ul
        width 240px
        li
            max-width 240px
            list-style none
            &:hover
                font-family SangBleuEmpire
                text-transform lowercase
            a
                text-decoration none
                color black
                &:visited
                    color black 
.container-cv
    position fixed
    height 100vh
    top 0
    width 100%
    display flex
    align-items center
    justify-content center


@keyframes pulse {
  0% {
    height: 10%;
  }
  100% {
    height: 90%;
  }
}

.img-cv
    animation pulse 0.4s ease
    height 90%

</style>

<script>
export default {
    data() {
        return {
            showAbout: false,
            showWork: false,
            showContact: false,
            showCV: false,
        }
    },

    mounted() {
    },

    methods: {
        displayAbout(){
            this.showWork = false;
            this.showContact = false;
            this.showAbout = !this.showAbout;
        },
        displayWork(){
            this.showAbout = false;
            this.showContact = false;
            this.showWork = !this.showWork;
        },
        displayContact(){
            this.showWork = false;
            this.showAbout = false;
            this.showContact = !this.showContact;
        },
        displayCV(){
            this.showCV = !this.showCV;
        },
        
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
    }
}
</script>