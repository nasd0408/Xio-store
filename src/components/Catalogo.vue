<template>
  <v-container
  class="mx-auto"
  >
    <h1>Catalogo</h1>
    <v-container class="pa-1">
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
          >
            <v-card rounded="lg" color="#f2f2f2" to="/detail/id">
              <v-card-title style="background-color:red;">{{im.name}}</v-card-title>
              <v-item >
                <v-img
                  :src="item.src"
                  height="150"
                  class=" "
                  
                >
                </v-img>
              </v-item>
            </v-card>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name:"Catalogo",
    data: () => ({
      items: this.$store.getters.getItems,
      selected: [],
    }),
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