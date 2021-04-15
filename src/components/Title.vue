<template>
  <v-container class="mt-5" >
      <h1>Ring'O<span>Store</span></h1>
      <h3>Una tienda de importacion de accesorios para damas</h3>
  </v-container>
</template>

<script>

export default {
    name:"Title",
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
 h1{
     font-family: 'Poppins';
     font-size: 5em;
 }
 h1 span{
     color: #fbc6d0;
     background: black;
     border-radius: .6em;
 }
h3{
    font-size: 2.5em;
    font-weight: 200;
    
}
@media(max-width: 768px){
    h1 {
        font-size: 3rem;
    }
    h3{
        font-size: 2rem;
    }
}
</style>