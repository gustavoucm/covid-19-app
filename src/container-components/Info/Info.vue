<template>
  <div class="bg-white">
     <v-parallax
      dark
      height="600"
      src="../../assets/img/hospital.jpg"
    >
      <v-row
        class="parallax-row"
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 mb-4">Informate</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="mt-5">
      <v-col offset-sm="1" sm="10">
        <h1 class="mb-2">¿Qué es un coronavirus?</h1>
        <p>Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales 
          como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias 
          que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio 
          de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). 
          El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="mb-2">¿Qué es la COVID-19?</h1>
        <p>Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales 
          como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias 
          que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio 
          de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). 
          El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="mb-2">¿Cuáles son los síntomas de la COVID-19?</h1>
        <p>Los síntomas más comunes de la COVID-19 son fiebre, cansancio y tos seca. Algunos pacientes pueden presentar dolores, 
           congestión nasal, rinorrea, dolor de garganta o diarrea. Estos síntomas suelen ser leves y aparecen de forma gradual.
           Algunas personas se infectan pero no desarrollan ningún síntoma y no se encuentran mal. La mayoría de las personas 
           (alrededor del 80%) se recupera de la enfermedad sin necesidad de realizar ningún tratamiento especial. Alrededor de 
           1 de cada 6 personas que contraen la COVID-19 desarrolla una enfermedad grave y tiene dificultad para respirar. Las 
           personas mayores y las que padecen afecciones médicas subyacentes, como hipertensión arterial, problemas cardiacos o 
           diabetes, tienen más probabilidades de desarrollar una enfermedad grave. En torno al 2% de las personas que han contraído 
           la enfermedad han muerto. Las personas que tengan fiebre, tos y dificultad para respirar deben buscar atención médica.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="mb-2">¿Cómo se propaga la COVID-19?</h1>
        <p>Una persona puede contraer la COVID-19 por contacto con otra que esté infectada por el virus. La enfermedad puede 
          propagarse de persona a persona a través de las gotículas procedentes de la nariz o la boca que salen despedidas cuando 
          una persona infectada tose o exhala. Estas gotículas caen sobre los objetos y superficies que rodean a la persona, de modo 
          que otras personas pueden contraer la COVID-19 si tocan estos objetos o superficies y luego se tocan los ojos, la nariz o 
          la boca. También pueden contagiarse si inhalan las gotículas que haya esparcido una persona con COVID-19 al toser o exhalar. 
          Por eso es importante mantenerse a más de 1 metro (3 pies) de distancia de una persona que se encuentre enferma.
          La OMS está estudiando las investigaciones en curso sobre las formas de propagación de la COVID-19 y seguirá informando sobre 
          los resultados actualizados
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="mb-2">¿Puede transmitirse a través del aire el virus causante de la COVID-19?</h1>
        <p>Los estudios realizados hasta la fecha apuntan a que el virus causante de la COVID-19 se transmite principalmente por contacto 
          con gotículas respiratorias, más que por el aire. Véase la respuesta anterior a la pregunta «¿Cómo se propaga la COVID-19?»
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'infoComponent'
}
</script>

<style scoped>
  .parallax-row {
    background-color: rgba(0,0,0,0.4) !important;
  }
  .bg-white {
    background-color: white;
  }
</style>