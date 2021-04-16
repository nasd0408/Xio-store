<template>
  <v-container>
      <v-row class="mb-4">
          <h1>Tu carrito de compras</h1>
      </v-row>
       <v-container class="pa-1 ma-4">
        <v-item-group>
          <v-row>
            <v-col v-for="(producto, i) in Productos" :key="i" cols="12" md="4"
            >
              <!--Producto -->
              <v-card class="ma-2" flat color="rgb(255,255,255,0.5)" :to="{name:'detalle', params:{ id : producto.id } }">
                <producto
                  :key="producto.id"
                  :producto="producto" 
                  
                >
                </producto>
              
                
              </v-card>
                <v-row  justify="space-around">
                    <v-btn color="success">Añadir
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn color="error">Eliminar
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                </v-row>
            </v-col>
           
          </v-row>
        </v-item-group>
         
      </v-container>
      <v-btn color="success" class="ma-5">Enviar pedido 
          <v-icon>mdi-check</v-icon>
      </v-btn>
  </v-container>
</template>

<script>
import Producto from '../components/Producto.vue'
export default {
  components: { Producto },
name:"cart",

data(){
    return {
        Productos: this.$store.getters.getCart,
    }
}
}

</script>

<style>

</style>