<template>
  <v-container>
    <v-card class="pa-6 my-6" elevation="3" color="blue-grey-lighten-5" rounded="lg">
      <v-row align="center">
        <v-col cols="12" md="2" class="text-center">
          <v-icon color="indigo" size="48">mdi-information-outline</v-icon>
        </v-col>
        <v-col>
          <h1 class="text-h5 font-weight-bold mb-2">Créditos del Proyecto</h1>
          <p class="text-subtitle-2">
            Este sitio fue desarrollado con fines educativos para promover la educación física, la alimentación saludable y la actividad consciente en jóvenes.
          </p>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <!-- Equipo -->
      <h2 class="text-subtitle-1 font-weight-medium mb-3">Equipo de desarrollo</h2>
      <ul>
        <li><strong>Nombre de los estudiantes:</strong> 
          <br>
          Josue Daniel Ballesta Vargas
        <br>
        Emanuel Mestra Toscano
        <br>
        Ivan Ramos Petro
      </li>
        <li><strong>Curso:</strong> Técnicas Avanzadas de Programación</li>
        <li><strong>Institución:</strong> Universidad de Córdoba</li>
        <li><strong>Año:</strong> 2025</li>
      </ul>

      <v-divider class="my-6" />

      <!-- Recursos -->
      <h2 class="text-subtitle-1 font-weight-medium mb-3">Recursos utilizados</h2>
      <ul>
        <li><strong>Framework:</strong> Nuxt 3 + Vuetify 3</li>
        <li><strong>Gestión de estado:</strong> Pinia</li>
        <li><strong>Imágenes:</strong>
          <br>
          Imágenes elejidas de: 
          <br>
          <a href="https://fabianesilverio.com/dieta-carnivora-cardapio-7-dias/" target="_blank">Carnívora</a>
        <br>
          <a href="https://www.ohga.it/dieta-vegana-come-funziona-e-cosa-prevede-lalimentazione-100-vegetale/" target="_blank">Vegana</a> 
        <br>
          <a href="https://www.diaridetarragona.com/economia/60289/dieta-mediterranea-modelo-de-dieta-de-proximidad-y-sostenible-20191031-0035-csdt201910310035.html" target="_blank">Mediterránea </a>
        <br>
          <a href="https://www.elpais.com.uy/bienestar/nutricion/conoce-la-dieta-mediterranea-verde-en-que-se-diferencia-de-la-clasica-y-cual-es-su-impacto-en-la-salud" target="_blank">Mediterránea verde</a> 
        <br>
          <a href="https://www.katiaribeiro.com.br/impacto-dos-vegetais-na-longevidade-segundo-especialistas-de-harvard/" target="_blank">Longeva</a> 
        <br>
          <a href="https://mejorconsalud.as.com/entrenamiento-funcional-consiste/" target="_blank">Funcional</a>
        <br>
          <a href="https://mundoentrenamiento.com/remo-con-mancuerna/" target="_blank">Unilateral</a> 
        <br>
          <a href="https://mundoentrenamiento.com/remo-con-mancuerna/" target="_blank">Fuerza</a>
        <br>
          <a href="https://unsplash.com" target="_blank">Unsplash</a> y <a href="https://www.pexels.com" target="_blank">Pexels</a>
        </li>
        <li><strong>Videos:</strong> YouTube videos sobre ejercicios y alimentación</li>
        <li><strong>Íconos:</strong> Material Design Icons (mdi)</li>
      </ul>

      <v-divider class="my-6" />

      <!-- Agradecimientos -->
      <h2 class="text-subtitle-1 font-weight-medium mb-3">Agradecimientos</h2>
      <p>Gracias al docente por su guía y acompañamiento durante el proceso de desarrollo del proyecto. A la institución por fomentar el aprendizaje práctico, y a mis compañeros por su colaboración e inspiración.</p>
    </v-card>
  </v-container>
    <!-- Botón para volver -->
    <!-- Botones de Navegación -->
    <v-card-actions class="justify-center mt-5">
        <NuxtLink to="/">
          <v-btn color="primary">Ver inicio</v-btn>
        </NuxtLink>
        <NuxtLink to="/beneficios">
          <v-btn color="primary"> Beneficios</v-btn>
        </NuxtLink>
        <NuxtLink to="/ejercicios">
          <v-btn color="secondary">Ejercicios</v-btn>
        </NuxtLink>
        <NuxtLink to="/alimentacion">
          <v-btn color="success">Alimentación</v-btn>
        </NuxtLink>
      </v-card-actions>
</template>

  
      


  
  <style scoped>
  /* Estilos generales de imágenes */
  .main-image, .history-image, .sports-image, .motivation-image, .age-exercise-image {
    width: 100%;
    max-height: 40vh;
    object-fit: contain;
  }
  
  .v-card {
    text-align: center;
  }
  </style>
  