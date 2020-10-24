import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projet from '../views/Projet.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/projet/womenplease',
    name: 'Projet',
    component: Projet,
    meta: { 
      title: 'Women, Please', 
      titleProjet: "La place de la femme dans l’espace public, une invitation à un temps de pose*.",
      texteProjet:"En 1920, Chanel répondait à la question suivante : « Quelle est la partie la plus difficile de votre profession ? - Permettre aux femmes de se déplacer aisément ». Un siècle plus tard, la question de la place de la femme est à son apogée. Grâce à une invitation scénographique, j’invite des artistes féminines à communiquer leurs œuvres sur deux places emblématiques. En procédant à la manière d’un échange, ces installations incarnent le partage, la (re)découverte et la nouveauté. « Women, Please » utilise l'espace méditerranéen comme toile d'expression et interroge sans imposer l’acte prosélyte.",
      imgPath: 'womenplease', 
      imgNumber: 18,
    }
  },
  {
    path: '/projet/photo',
    name: 'Projet',
    component: Projet,
    meta: { 
      title: 'Photo', 
      titleProjet: "La place de la femme dans l’espace public, une invitation à un temps de pose*.",
      texteProjet:"En 1920, Chanel répondait à la question suivante : « Quelle est la partie la plus difficile de votre profession ? - Permettre aux femmes de se déplacer aisément ». Un siècle plus tard, la question de la place de la femme est à son apogée. Grâce à une invitation scénographique, j’invite des artistes féminines à communiquer leurs œuvres sur deux places emblématiques. En procédant à la manière d’un échange, ces installations incarnent le partage, la (re)découverte et la nouveauté. « Women, Please » utilise l'espace méditerranéen comme toile d'expression et interroge sans imposer l’acte prosélyte.",
      imgPath: 'photo', 
      imgNumber: 15,
    }
  },
  {
    path: '/projet/lampe',
    name: 'Projet',
    component: Projet,
    meta: { 
      title: 'Lampe', 
      titleProjet: "La place de la femme dans l’espace public, une invitation à un temps de pose*.",
      texteProjet:"En 1920, Chanel répondait à la question suivante : « Quelle est la partie la plus difficile de votre profession ? - Permettre aux femmes de se déplacer aisément ». Un siècle plus tard, la question de la place de la femme est à son apogée. Grâce à une invitation scénographique, j’invite des artistes féminines à communiquer leurs œuvres sur deux places emblématiques. En procédant à la manière d’un échange, ces installations incarnent le partage, la (re)découverte et la nouveauté. « Women, Please » utilise l'espace méditerranéen comme toile d'expression et interroge sans imposer l’acte prosélyte.",
      imgPath: 'lampe', 
      imgNumber: 4,
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
