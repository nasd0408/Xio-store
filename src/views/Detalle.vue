<template>
  <v-container>
    <v-row>
      <v-col>
       <v-img :src="src" contain width="500px" class="rounded-xl">

       </v-img>
      </v-col>

      <v-col>
        <v-card class="py-4 px-4" elevation="3" color="#f2f2f2" rounded="xl">
          <h1>{{ name }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            necessitatibus, culpa odit ratione fugiat modi porro quaerat sit
            omnis praesentium!
          </p>
          <h3>Precio: {{price}}$</h3>
          
          <h3>Pregunta acerca de este articulo en:</h3>
          <v-btn class="mx-3 my-3" color="#fe793d" dark href="https://wa.me/584145202186" target="__blank">
              WhatsApp
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn class="mx-3 my-4" color="#fb4c1f" dark href="https://instagram.com" target="__blanck">
              Instagram
              <v-icon>mdi-instagram</v-icon>
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
      <Form/>
    </v-row>
    <v-row>
      <showcase />
    </v-row>
  </v-container>
</template>

<script>
import Form from '../components/form.vue';
import Showcase from "../components/Showcase.vue";
export default {
  components: { Showcase,Form },
  
    data() {
    return this.$store.getters.getById(this.id);
  },
  props: {
    id: Number,
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