<template>
    <v-card rounded="lg" color="#f2f2f2" >
      
      <v-item >
        <v-img
          :src="producto.src"
          height="150"
          class="text-right pa-2"
        >
          <v-card color="transparent" flat >
            <v-card-title style="font-size:30px; background:rgb(255,255,255,0.5); " >{{producto.cantidad}} {{producto.name}}</v-card-title>
          </v-card>
        </v-img>
      </v-item>
    </v-card>

</template>

<script>
export default {
  name: "Producto",
  props: {
    producto: Object,
  },
 
};
</script>

<style>
</style>