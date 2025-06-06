<template>
    <v-container>
      <!-- Imagen Principal -->
      <v-img src="public/df.jpg" class="main-image" contain></v-img>
  
      <!-- Sección de Introducción -->
      <v-card class="pa-5 mt-5 text-center">
        <v-card-title class="text-h4 font-weight-bold">Bienvenido a Educación Física</v-card-title>
        <v-card-subtitle class="text-h6">
          Descubre la importancia de la actividad física para la salud y el bienestar.
        </v-card-subtitle>
        <v-card-text>
          La educación física es clave en todas las etapas de la vida. Mejora la salud, fortalece los músculos y promueve hábitos saludables.
        </v-card-text>
      </v-card>
  
      <!-- Sección 1: Historia de la Educación Física -->
      <v-card class="pa-5 mt-5">
        <v-card-title class="text-h5 font-weight-bold">Historia de la Educación Física</v-card-title>
        <v-card-text>
          La educación física ha evolucionado desde los antiguos Juegos Olímpicos en Grecia hasta los modernos programas de ejercicio y salud.
          En la actualidad, el ejercicio es fundamental para prevenir enfermedades y mejorar la calidad de vida.
        </v-card-text>
       <!-- <v-img src="/img/historia-educacion-fisica.jpg" class="history-image mt-3" contain></v-img>-->
      </v-card>
  
      <!-- Sección 2: Importancia en Diferentes Etapas de la Vida -->
      <v-card class="pa-5 mt-5">
        <v-card-title class="text-h5 font-weight-bold">Importancia de la Actividad Física en Diferentes Edades</v-card-title>
        <v-card-text>
          <ul>
            <li><strong>Infancia:</strong> Desarrollo motor, fortalecimiento óseo y prevención de obesidad infantil.</li>
            <li><strong>Adolescencia:</strong> Mejora la autoestima, la coordinación y la socialización.</li>
            <li><strong>Adultos:</strong> Prevención de enfermedades cardiovasculares y control del peso.</li>
            <li><strong>Adultos Mayores:</strong> Mantiene la movilidad, la independencia y reduce el riesgo de caídas.</li>
          </ul>
        </v-card-text>
       <!-- <v-img src="/img/edades-ejercicio.jpg" class="age-exercise-image mt-3" contain></v-img>-->
      </v-card>
  
      <!-- Sección 3: Deportes Más Populares -->
      <v-card class="pa-5 mt-5">
        <v-card-title class="text-h5 font-weight-bold">Deportes y Actividades Físicas Más Populares</v-card-title>
        <v-card-text>
          La educación física incluye diversos deportes como atletismo, fútbol, natación, gimnasia, ciclismo y yoga. 
          Cada disciplina ofrece distintos beneficios, como mejorar la resistencia cardiovascular, fortalecer los músculos y aumentar la flexibilidad.
        </v-card-text>
       <!-- <v-img src="/img/deportes.jpg" class="sports-image mt-3" contain></v-img>-->
      </v-card>
  
      <!-- Sección 4: Videos Recomendados -->
      <v-card class="pa-5 mt-5">
        <v-card-title class="text-h5 font-weight-bold">Videos Recomendados</v-card-title>
        <v-card-text>
          Aquí tienes algunos videos sobre educación física y bienestar:
        </v-card-text>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          frameborder="0"
          allowfullscreen
          class="mt-3"
        ></iframe>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/VIDEO_ID_2"
          frameborder="0"
          allowfullscreen
          class="mt-3"
        ></iframe>
      </v-card>
  
      <!-- Sección 5: Frases Motivacionales -->
      <v-card class="pa-5 mt-5 text-center">
        <v-card-title class="text-h5 font-weight-bold">Frases Motivacionales</v-card-title>
        <v-card-text>
          <em>"El movimiento es vida."</em><br />
          <em>"Cuerpo sano, mente sana."</em><br />
          <em>"El ejercicio no solo cambia tu cuerpo, cambia tu mente, tu actitud y tu humor."</em>
        </v-card-text>
       <!-- <v-img src="/img/motivacion.jpg" class="motivation-image mt-3" contain></v-img>-->
      </v-card>
  
      <!-- Botones de Navegación -->
      <v-card-actions class="justify-center mt-5">
        <NuxtLink to="/beneficios">
          <v-btn color="primary">Ver Beneficios</v-btn>
        </NuxtLink>
        <NuxtLink to="/ejercicios">
          <v-btn color="secondary">Ejercicios</v-btn>
        </NuxtLink>
        <NuxtLink to="/alimentacion">
          <v-btn color="success">Alimentación</v-btn>
        </NuxtLink>
      </v-card-actions>
    </v-container>
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
  