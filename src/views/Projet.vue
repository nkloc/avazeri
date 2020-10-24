<template>
  <div class="page-projet">
    <h1>{{ $route.meta.title }}<button @click.prevent="displayText">+</button> </h1>
    <div class="container-images" v-for="n in number" :key="n.id">
      <img :src="require(`@/assets/${path}${n}.jpg`)" alt="">
    </div>
    <div class="hidden" v-if="showText" @click.prevent="displayText" >
      <p class="title">{{ $route.meta.titleProjet }}</p>
      <p class="content">{{ $route.meta.texteProjet }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showText: false,
            number: this.$route.meta.imgNumber,
            path: this.$route.meta.imgPath,
        }
    },
    methods: {
        displayText(){
            this.showText = !this.showText;
        },  
    },
}
</script>