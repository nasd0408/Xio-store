<template>
  <v-container>
    <h1>Has tu pedido</h1>
    <v-row>
      <v-card class="py-3 px-6 my-6" rounded="xl" color="#f2f2f2">
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="Nombre"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Apellido"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Numero de telefono"
                  prepend-inner-icon="mdi-cellphone"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-text-field
                label="Direccion"
                prepend-inner-icon="mdi-map-marker-outline"
                append-icon="mdi-whatsapp"
              ></v-text-field>
            </v-row>
            <v-row>
                   <v-switch
      label="Delivery"
    ></v-switch>
            </v-row>
            <v-spacer></v-spacer>
            <v-row>
              <v-btn
                class="mx-3 my-4"
                color="#fb4c1f"
                dark
                @click="dialog = true"
                >Enviar
                <v-icon>mdi-email-outline</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card rounded="xl">
          <v-container>
            <v-row justify="center">
              <v-card-title>
                Estas seguro de confirmar tu compra?
              </v-card-title>
            </v-row>
            <v-row>
              <v-col align-self="start">
                <v-btn
                  color="success"
                  @click="(snackbar = true), (dialog = false)"
                  >Confirmar</v-btn
                >
              </v-col>

              <v-col align-self="end">
                <v-btn color="error" @click="dialog = false">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="#fb4c1f" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      snackbar: false,
      text: `Pedido enviado`,
    };
  },
};
</script>

<style>
</style>