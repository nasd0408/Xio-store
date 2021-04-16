<template>
  <v-container  >
    <v-row justify="center" class="ma-2 pa-2" style="width:100%">
      <v-card rounded="lg" elevation="4">
        
      <v-tabs
        v-model="tab"
        background-color="#f2f2f2"
        color="#fb4c1f"
        icons-and-text
        
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab to="/">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab to="/catalogo">
          Catalogo
          <v-icon>mdi-shopping</v-icon>
        </v-tab>

        <v-tab to="/ubicacion">
          Ubicacion
          <v-icon>mdi-map</v-icon>
        </v-tab>
        <v-tab to="/cart">
          Carrito 
          <v-icon>mdi-cart-outline</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
    name:"Navegacion",
    data () {
      return {
      }
    }
}
</script>

<style>

</style>