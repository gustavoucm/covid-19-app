<template>
  <div>
    <div class="bg-white">
      <v-row>
        <v-col offset-sm="1" sm="10">
          <h1>Contacto</h1>
        </v-col>
      </v-row>
      <v-row >
        <v-col
          class="mt-1"
          offset-sm="1"
          sm="10" md="5">
          <v-card>
            <v-card-text>
              <h3 class="title-comment mb-5">ENVIAR COMENTARIOS</h3>
              <v-form
              ref="form"
                v-model="valid">
                <v-text-field
                  label="Información de contacto"
                  v-model="contact"
                  hint="Correo electrónico, número de telefono, Facebook, etc">
                </v-text-field>
                <v-textarea
                  label="Descripción"
                  v-model="description"
                  hint="Sugerencias, comentarios, reportar un problema"
                  :rules="required">
                </v-textarea>
                <v-btn
                  @click="postComment"
                  color="primary">
                  Enviar
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="mt-1"
          offset-sm="1"
          sm="10"
          md="5">
          <h4 class="title-comment mb-5 mt-4">
            INFORMACIÓN DE CONTACTO
          </h4>
          <v-icon small class="mr-2">mdi-mail </v-icon>
          <a href="mailto:gustavoucm@hotmail.com" class="media-link"> 
            gustavoucm@hotmail.com
          </a>
          <br><br>
          <v-icon small class="mr-2">mdi-phone </v-icon>
          <a href="tel:+51 922 138 34 18" class="media-link mb-3">
            + 51 922 138 34 18
          </a>
          <h4 class="mt-5 mb-3">SITIO WEB DESARROLLADO POR</h4>
          <v-avatar size="62" class="mr-5">
            <img class="profile-img" src="../../assets/img/profile.png" alt="profile">
          </v-avatar>
          <span >Gustavo Uriel Caixba Morales</span>
        </v-col>
      </v-row>
    </div>
    <v-snackbar
      v-model="snackbar"
      :right="true"
      :top="true"
      color="success"
    >
      Comentario enviado con exito
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        Cerrar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'contactComponent',
  data () {
    return {
      valid: true,
      contact: '',
      snackbar: false,
      description: '',
      required: [
        v => !!v || '* Este campo es requerido',
      ]
    }
  },
  methods: {
    postComment () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('coronavirus/postComment',
          {
            event: {
              context: this,
              data: {
                contact: this.contact,
                description: this.description
              }
            }
          })
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
  .title-comment {
    color: black !important;
  }
  .bg-white {
    background-color: white;
    min-height: 100vh;
  }
  .media-link {
    text-decoration: none;
    color: black;
  }
  .v-avatar {
    border: 1px solid grey;
  }
</style>