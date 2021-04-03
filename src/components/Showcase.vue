<template>
    <v-container class="mt-4">
        <h1>Novedades</h1>
        <v-carousel :show-arrows="false" height="350" cycle interval="3000">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
  export default {
    name:"Showcase",
    data () {
      return {
        items: [
          {
            src: require('@/assets/showcase1.jpg'),
          },
          {
            src: require('@/assets/showcase2.jpg'),
          },
          {
            src: require('@/assets/showcase3.jpg'),
          },
          {
            src: require('@/assets/showcase4.jpg'),
          },
        ],
      }
    },
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
 h1{
     font-family: 'Poppins';
     font-size: 3.5em;
 }
h3{
    font-size: 1em;
    font-weight: 200;
    
}
</style>