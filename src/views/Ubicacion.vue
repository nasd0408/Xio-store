<template>
  <v-container>
    <v-row align-content="center" justify="center">
      <v-col cols="12" md="6" >
        <v-card class="px-6 py-6" color="#f2f2f2" rounded="xl" height="100%" >
          <v-card-title>Tienda Principal</v-card-title>
          <v-card-text> Ubicada en barquisimeto </v-card-text>
          <p>Ubicanos en la urbanizacion pueblo nuevo, donde te esperamos con ansias, aqui tendras la posibilidad
            de detallar todos nuestros productos y probartelos, nuestro personal siempre estará feliz de atenderte.</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="px-6 py-6" color="#f2f2f2" rounded="xl">
          <v-card-title> Tienda en linea </v-card-title>
          <v-card-text>
              Nos puedes contactar desde  cualquier lugar del pais
          </v-card-text>
          <p>Nuestro catalogo en linea esta diseñado para darte la mejor experiencia posible, llegando a ti a traves de compañias de envio nacion e internacional</p>
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
    </v-row>
    <v-row>
        <h1 class="mx-6">Encuentranos en el mapa!</h1>
        <v-col md="12" sm="12">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.51909882578!2d-69.43288923389996!3d10.061858985443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8766bc9c4998e1%3A0x9410c7a23558427f!2zMTDCsDAzJzEyLjYiTiA2OcKwMjInMDkuMiJX!5e0!3m2!1ses!2sve!4v1617206519860!5m2!1ses!2sve"
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-xl">
            </iframe>
            
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>

  
</style>