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
              <v-card-title>{{item.name}}</v-card-title>
              <v-item v-slot="{ active, toggle }">
                <v-img
                  :src="item.src"
                  height="150"
                  class="text-right pa-2"
                  @click="toggle"
                >
                  <v-btn
                    icon
                    dark
                  >
                    <v-icon>
                      {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                    </v-icon>
                  </v-btn>
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
      items:  [
          {
            src: require('@/assets/showcase1.jpg'),
            name: "Collares gold 1",
            price: 100,
          },
          {
            src: require('@/assets/showcase2.jpg'),
            name:"Anillos gold 1",
            price: 100
          },
          {
            src: require('@/assets/showcase3.jpg'),
            name:"Gold collection 1",
            price: 100
          },
          {
            src: require('@/assets/showcase4.jpg'),
            name:"Pink collection 1",
            price: 100
          },
          {
            src: require('@/assets/Anillo1.jpg'),
            name:"Rose gold ring",
            price: 100
          },
          {
            src: require('@/assets/Anillo2.jpg'),
            name:"Crown gold ring",
            price: 100
          },
          {
            src: require('@/assets/Anillo3.jpg'),
            name:"Diamond gold ring",
            price: 100
          },
          {
            src: require('@/assets/Anillo4.jpg'),
            name:"Diamond multi ring",
            price: 100
          },
        ],
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