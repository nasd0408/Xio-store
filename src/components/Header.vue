<template>
  <v-container class="mt-5"  tile >
    <v-row >
      <v-col cols="12" sm="4">
        <v-card rounded="xl" height="250px" color="#f2f2f2" >
          <v-card-title>
            Bienvenido a Xio Store 
          </v-card-title>
          <v-card-subtitle>
            La tienda malinda
          </v-card-subtitle>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere voluptatibus iste doloremque asperiores modi molestiae maiores, 
            deleniti et error necessitatibus.</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card rounded="xl" color="#f2f2f2">
          <v-card-title>
            Contactos
          </v-card-title>
          <v-card-subtitle>
            Escribenos sin compromiso
          </v-card-subtitle>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere voluptatibus iste doloremque asperiores modi molestiae maiores, 
            deleniti et error necessitatibus.</v-card-text>
            <v-btn class="mx-3 my-3" color="#fe793d" dark>
              WhatsApp
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn class="mx-3 my-4" color="#fb4c1f" dark>
              Instagram
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col>
        
        <v-carousel height="250" style="width:400px" >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            style="width:400px;height:400px;"
          ></v-carousel-item>
        </v-carousel>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:"Header",
  data () {
      return {
        items: [
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
      }
  }
}
</script>

<style>

</style>