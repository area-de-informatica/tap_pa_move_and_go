<template>
  <v-app>
    <v-container>
      <v-card class="mx-auto pa-4 elevation-5" max-width="1000" style="background-color: #f9f9f9;">
        <v-img src="/dfb.png" height="200px" cover class="mb-4"></v-img>

        <v-card-title class="text-h5 text-center mb-2">Beneficios de la Educación Física</v-card-title>

        <v-card-text class="text-body-1 text-justify">
          <p>
            La educación física aporta múltiples beneficios para la salud y el bienestar en todas las etapas de la vida. Aquí te presentamos algunos de los más importantes:
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">Beneficios Generales</h3>
          <v-list density="compact">
            <v-list-item>
              <v-list-item-icon><v-icon color="green">mdi-heart</v-icon></v-list-item-icon>
              <v-list-item-content>Mejora la salud cardiovascular y el VO2 max, aumentando la resistencia aeróbica.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="blue">mdi-weight-lifter</v-icon></v-list-item-icon>
              <v-list-item-content>Fortalece los músculos, mejorando la fuerza y la resistencia física.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="purple">mdi-brain</v-icon></v-list-item-icon>
              <v-list-item-content>Mejora la mentalidad y reduce el estrés, favoreciendo la salud mental.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="orange">mdi-bone</v-icon></v-list-item-icon>
              <v-list-item-content>Aumenta la densidad ósea, reduciendo el riesgo de osteoporosis.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="yellow">mdi-human-male-board</v-icon></v-list-item-icon>
              <v-list-item-content>Mejora la coordinación y el equilibrio, reduciendo el riesgo de caídas.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="teal">mdi-timer-sand</v-icon></v-list-item-icon>
              <v-list-item-content>Contribuye a una mayor longevidad y calidad de vida.</v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">Beneficios en Diferentes Etapas de la Vida</h3>
          <ul>
            <li><strong>Infancia:</strong> Desarrolla habilidades motoras y refuerza hábitos saludables.</li>
            <li><strong>Adolescencia:</strong> Favorece el crecimiento óseo y muscular, previene el sedentarismo.</li>
            <li><strong>Edad adulta:</strong> Mantiene un peso saludable y reduce el riesgo de enfermedades crónicas.</li>
            <li><strong>Adultos mayores:</strong> Previene la pérdida muscular y mejora la movilidad y el equilibrio.</li>
          </ul>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">Consejos para una vida activa</h3>
          <p class="mb-2">Para aprovechar al máximo estos beneficios, intenta mantener una rutina de ejercicio regular y una alimentación saludable.</p>

          <!-- Dividir el texto largo en bloques -->
          <div v-for="(consejo, i) in consejos" :key="i" class="mb-4">
            <h4 class="text-subtitle-1 font-weight-medium"> {{ i + 1 }}. {{ consejo.titulo }} </h4>
            <p class="text-body-2 text-justify">{{ consejo.texto }}</p>
          </div>
        </v-card-text>

        <v-card-actions class="justify-center mt-4">
          <v-btn color="primary" to="/">Volver al inicio</v-btn>
          <v-btn color="secondary" to="/ejercicios">Ejercicios</v-btn>
          <v-btn color="success" to="/alimentacion">Alimentación</v-btn>
          <v-btn color="info" to="/creditos">Créditos</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    
  </v-app>
</template>

<script>
export default {
  name: 'BeneficiosPage',
  data() {
    return {
      consejos: [
        {
          titulo: 'Mejora la salud cardiovascular y el VO2 máx',
          texto: 'La práctica regular de actividades físicas como correr, nadar o montar bicicleta estimula el sistema cardiovascular...',
        },
        {
          titulo: 'Fortalece los músculos',
          texto: 'Los ejercicios de tipo anaeróbico como pesas o flexiones mejoran la fuerza y la resistencia local muscular...',
        },
        {
          titulo: 'Mejora la mentalidad y reduce el estrés',
          texto: 'La actividad física libera endorfinas, reduce el cortisol y mejora la autoestima y el rendimiento cognitivo...',
        },
        {
          titulo: 'Aumenta la densidad ósea',
          texto: 'El ejercicio con impacto como correr estimula la formación ósea y previene la osteoporosis...',
        },
        {
          titulo: 'Mejora la coordinación y el equilibrio',
          texto: 'Ejercicios y juegos motrices favorecen la agilidad, precisión y previenen caídas, especialmente en la vejez...',
        },
        {
          titulo: 'Contribuye a una mayor longevidad y calidad de vida',
          texto: 'El ejercicio reduce el riesgo de enfermedades, mantiene la autonomía y promueve el envejecimiento saludable...',
        },
      ]
    }
  }
}
</script>

<style scoped>
ul {
  text-align: left;
  margin-left: 20px;
}
</style>
