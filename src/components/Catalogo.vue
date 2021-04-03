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
          },
          {
            src: require('@/assets/showcase2.jpg'),
          },
          {
            src: require('@/assets/showcase3.jpg'),
          },
          {
            src: require('@/assets/showcase4.jpg'),
          },
          {
            src: require('@/assets/Anillo1.jpg'),
          },
          {
            src: require('@/assets/Anillo2.jpg'),
          },
          {
            src: require('@/assets/Anillo3.jpg'),
          },
          {
            src: require('@/assets/Anillo4.jpg'),
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