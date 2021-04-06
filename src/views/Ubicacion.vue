<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="px-6 py-6" color="#f2f2f2" rounded="xl">
          <v-card-title>Tienda Principal</v-card-title>
          <v-card-text> Ubicada en barquisimeto </v-card-text>
          <p>Numero de contacto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo vel deleniti eos? Omnis rem ad non odio quam, placeat reiciendis fugiat culpa quibusdam facere perspiciatis corrupti cumque ipsa commodi officiis deserunt nam optio nostrum.</p>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-6 py-6" color="#f2f2f2" rounded="xl">
          <v-card-title> Tienda en linea </v-card-title>
          <v-card-text>
              Nos puedes encontrar en cualquier lugar del pais
          </v-card-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa. porque es bueno comprar en linea</p>
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
        <v-col>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.51909882578!2d-69.43288923389996!3d10.061858985443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8766bc9c4998e1%3A0x9410c7a23558427f!2zMTDCsDAzJzEyLjYiTiA2OcKwMjInMDkuMiJX!5e0!3m2!1ses!2sve!4v1617206519860!5m2!1ses!2sve"
                    width="700" height="300" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-xl">
            </iframe>
            
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>