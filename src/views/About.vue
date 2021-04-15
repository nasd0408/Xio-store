<template>
  <v-container>
    
    <v-container class="mx-auto">
      <h1>Catalogo</h1>
      <p class="cat-text">Aprovecha las ofertas de nuestra nueva coleccion unicamente disponible hasta que se agote la existencia</p>
      <v-container class="pa-1">
        <v-item-group>
          <v-row>
            <v-col v-for="(producto, i) in Productos" :key="i" cols="12" md="6"
            >
              <!--Producto -->
              <v-card flat color="transparent" :to="{name:'detalle', params:{ id : producto.id } }">
                <producto
                  :key="producto.id"
                  :producto="producto" 
                >
                </producto>
              </v-card>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-container>
    <showcase />
  </v-container>
</template>

<script>
import Producto from "../components/Producto.vue";

import Showcase from "../components/Showcase.vue";

import {mapState} from 'vuex'
export default {
  name: "about",
  components: { Showcase, Producto },
  data: () => {
    return {
     
    };
  },
  computed: mapState({
    Productos:'Productos',
  })
};
</script>

<style >
.cat-text{
  font-size: 24px;
  color: rgb(54, 54, 54);
}
</style>