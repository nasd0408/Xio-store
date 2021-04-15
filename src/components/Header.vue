<template>
  <v-container class="mt-5"  >
    <v-row justify="center" align-content="center">
      <v-col  cols="12" md="3"> 
        <v-card rounded="xl" height="100%" color="#f2f2f2"  >
          <v-card-title>
            Bienvenido a Ring'OStore 
          </v-card-title>
          <v-card-subtitle>
            La tienda malinda
          </v-card-subtitle>
          <v-card-text>En Ring'o Store estamos comprometidos con nuetros clientes para ofrecer 
            un servicio de calidad consistente a lo largo de nuestra increible seleccion de accesorios
            Nuestra prioridad es ofrecer siempre el producto con mas calidad y belleza en el mercado
           
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12">
        <v-card rounded="xl" color="#f2f2f2">
          <v-card-title>
            Contactos
          </v-card-title>
          <v-card-subtitle>
            Escribenos sin compromiso
          </v-card-subtitle>
          <v-card-text>El cliente es nuestra prioridad, en Ring'o Store queremos establecer una relacion 
            con nuestros clientes, para mantenerte al tanto de nuevos productos en el catalogo y ofertas que no te puedes perder.</v-card-text>
            <v-btn class="mx-3 my-3" color="#fe793d" dark href="https://wa.me/584145202186" target="__blank">
              WhatsApp
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn class="mx-3 my-4" color="#fb4c1f" dark href="https://instagram.com" target="__blanck">
              Instagram
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col sm="12" md="4" xs="12">
        
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