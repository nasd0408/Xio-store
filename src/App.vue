<template>
  <v-app>
    <v-app-bar app color="#f2f2f2">
      <v-btn icon>
        <img class="mr-3" :src="require('@/assets/logo.png')" height="40px" color="transparent"/>
      </v-btn>
      <v-toolbar-title>Xio Store</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list  class="px-5">
          <v-list-item
            v-for="link in links"
            :key="link"
            @click="() => {}"
          >
            <v-btn text :href="link.url" target="_blank">
            <v-list-item-title>{{link.name}}</v-list-item-title></v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main style="background-color:#fbc6d0"> 
      <Navegacion/>
      <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
import Navegacion from './components/Navegacion.vue';


export default {
  name: 'App',

  components: {
    Navegacion
  },

  data: () => ({
    //
    links:[
      {name:"whatsapp",
      url:"https://wa.me/584145202186"},
      {name:"instagram",
      url:"https://instagram.com"},
      {name:"correo",
      url:"https://gmail.com"},
    ]
  }),
};
</script>
