<template>
  <v-container>
      <v-row class="mb-4">
          <h1>Tu carrito de compras</h1>
      </v-row>
       <v-container>
        <v-item-group>
          <v-row>
            <v-col v-for="(producto, i) in Productos" :key="i" cols="12" md="4"
            >
              <!--Producto -->
              <v-card  flat color="rgb(255,255,255,0.5)" :to="{name:'detalle', params:{ id : producto.id } }">
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
        <Form></Form>
  </v-container>
</template>

<script>
import Producto from '../components/Producto.vue'
import Form from '../components/form.vue'
export default {
  components: { Producto, Form },
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