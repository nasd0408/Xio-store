<template>
  <v-container>
    <showcase/>
    <catalogo/>
  </v-container>  
</template>

<script>
import Catalogo from '../components/Catalogo.vue'
import Showcase from '../components/Showcase.vue'
export default {
  name:"about",
  components: { Showcase, Catalogo },

}
</script>

<style>

</style>