<template>
  <div>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="text-center">Agregar informe para el dia {{new Date().toLocaleDateString() }}</h1>
      </v-col>
    </v-row>
    <v-form
      ref="form"
      v-model="valid"
      >
      <v-row>
        <v-col offset-sm="1" sm="10">
          <v-row v-for="state in items" :key="state.code">
            <v-col
              sm="2"
              class="d-flex align-content-center flex-wrap">
              <h3>{{state.name}}</h3>
            </v-col>
            <v-col sm="2">
              <v-text-field
                label="Positivos"
                type="number"
                v-model.number="state.positives"
                :rules="required">
              </v-text-field>
            </v-col>
            <v-col sm="2">
              <v-text-field
                label="Negativos"
                type="number"
                v-model.number="state.negatives"
                :rules="required">
              </v-text-field>
            </v-col>
            <v-col sm="2">
              <v-text-field
                label="Sospechosos"
                type="number"
                v-model.number="state.suspect"
                :rules="required">
              </v-text-field>
            </v-col>
            <v-col sm="2">
              <v-text-field
                label="Defunciones"
                type="number"
                v-model.number="state.deaths"
                :rules="required">
              </v-text-field>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            @click="save()">
            Guardar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-snackbar
      v-model="snackbar"
      :right="true"
      :top="true"
      color="success"
    >
      Reporte creado con exito
      <v-btn
        :color="color"
        text
        @click="snackbar = false"
      >
        {{message}}
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import {states} from '../../data/states'
export default {
  name: 'addCases',
  data () {
    return {
      itemsSates: [],
      color: 'success',
      message: '',
      snackbar: false,
      items: [],
      valid: true,
      required: [
        v => !!v || '* Este campo es requerido',
      ]
    }
  },
  methods: {
    get () {
      this.itemsSates = states
      this.itemsSates.forEach(state => {
        let newSt = {
          positives: null,
          deaths: null,
          suspect: null,
          negatives: null,
          code: state.code,
          name: state.name
        }
        this.items.push(newSt)
      })
    },
    save () {
      if (this.$refs.form.validate()) {
         this.$store.dispatch('coronavirus/postReport',
          {
            event: {
              context: this,
              data: {
                date: new Date(),
                states: this.items
              }
            }
          })
      }
    },
    showSnackbar (color, message) {
      this.color = color
      this.message = message
      this.snackbar = true
    },
    reset () {
      this.$refs.form.reset()
    }
  },
  created () {
    this.get()
  }
}
</script>