<template>
  <v-container>
    <v-row>
      <v-col>
       <v-img :src="detalles.src" contain width="500px" class="rounded-xl">

       </v-img>
      </v-col>

      <v-col>
        <v-card class="py-4 px-4" elevation="3" color="#f2f2f2" rounded="xl">
          <h1>{{ detalles.name }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            necessitatibus, culpa odit ratione fugiat modi porro quaerat sit
            omnis praesentium!
          </p>
          <h3>Precio: {{detalles.price}}$</h3>
            <v-btn v-on:click="addToCart" color="#fb4c1f" dark class="mt-4" @click="(snackbar=true)">
              Añade al carrito 
              <v-icon class="ml-3">mdi-cart-plus</v-icon>
              </v-btn>
          <v-card-actions class="pa-4">
            <h5>Califica este producto</h5>
            <v-spacer></v-spacer>

            <v-rating
              v-model="rating"
              background-color="black"
              color="yellow accent-4"
              hover
              size="28"
            ></v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-1">
  
    </v-row>
    <v-row>
      <showcase />
    </v-row>

        <v-snackbar v-model="snackbar">
      {{ detalles.name }} añadido al carrito

      <template v-slot:action="{ attrs }">
        <v-btn color="#fb4c1f" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
  
</template>

<script>

import Showcase from "../components/Showcase.vue";
export default {
  components: { Showcase, },
  
    data() {
    return{
      detalles: this.$store.getters.getById(this.id),
      rating:0,
      snackbar: false,
    } 
  },
  props: {
    id: Number,
  },
  methods:{
    addToCart(){
     this.$store.dispatch("addToCart",this.detalles)
    }
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
h1 {
  font-family: "Poppins";
  font-size: 3.5em;
}
h3 {
  font-size: 1.2em;
  font-weight: 600;
}
h5 {
  font-size: 1.2em;
  font-weight: 400;
}
</style>