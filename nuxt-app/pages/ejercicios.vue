<template>
    <v-container>
  <h1 class="text-h5 font-weight-bold mb-6">Planes de Ejercicio por Objetivo</h1>

  <v-expansion-panels multiple>
    <!-- 🏋️ Masa Muscular -->
<v-expansion-panel>
  <v-expansion-panel-title>🏋️ Aumento de Masa Muscular</v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/musculo.jpg"
          height="300px"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>

      <!-- Video (puedes dejar src vacío si aún no lo tienes) -->
      <v-col cols="12" md="6">
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/sC2Hd-v2o5c"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <ul>
      <li>
        <strong>Sentadillas con mochila:</strong> activan cuádriceps, glúteos y core. Al usar peso adicional (como una mochila), se estimula la hipertrofia muscular.
      </li>
      <li>
        <strong>Flexiones de pecho:</strong> fortalecen el pecho, los tríceps y los hombros. Puedes adaptarlas para progresar desde rodillas.
      </li>
      <li>
        <strong>Fondos de tríceps en banco:</strong> desarrollan los músculos del brazo posterior y ayudan a mejorar el empuje vertical y horizontal.
      </li>
      <li>
        <strong>Remo con toalla o mochila:</strong> fortalece la espalda (dorsales, romboides) y mejora la postura.
      </li>
    </ul>
    <p>
      <strong>Frecuencia:</strong> 3–4 veces por semana. <strong>Rango de repeticiones:</strong> 8–12 para estimular crecimiento muscular. <strong>Descanso:</strong> 60–90 segundos.
    </p>
  </v-expansion-panel-text>
</v-expansion-panel>


    <!-- 🦾 Fuerza -->
    <v-expansion-panel>
  <v-expansion-panel-title>💪 Mejora de la Fuerza</v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/fuerza.png"
          height="300px"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>

      <!-- Video (puedes dejar src vacío si aún no lo tienes) -->
      <v-col cols="12" md="6">
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/ISK0w6tx2l8"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <ul>
      <li><strong>Planchas con palmada:</strong> aumentan la fuerza del core y la estabilidad del tronco. Al perder apoyo por un segundo, trabajas estabilidad rotacional.</li>
      <li><strong>Peso muerto con mochila:</strong> activa glúteos, isquiotibiales y zona lumbar. Fortalece la cadena posterior.</li>
      <li><strong>Sentadilla isométrica contra la pared:</strong> desarrolla fuerza en cuádriceps y resistencia muscular sin impacto.</li>
      <li><strong>Flexiones excéntricas lentas:</strong> favorecen el desarrollo muscular mediante control del descenso, clave en fuerza y control neuromuscular.</li>
    </ul>
    <p><strong>Objetivo:</strong> Realizar de 4–6 repeticiones lentas por ejercicio, con descansos largos (90–120s) para máxima recuperación.</p>
  </v-expansion-panel-text>
</v-expansion-panel>


    <!-- 🧠 Funcionalidad -->
    <v-expansion-panel>
  <v-expansion-panel-title>🔄 Ejercicio Funcional</v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/funcional.jpg"
          height="300px"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>

      <!-- Video (puedes dejar src vacío si aún no lo tienes) -->
      <v-col cols="12" md="6">
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Kd0ht1Hzco0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <ul>
      <li><strong>Subidas a escalón:</strong> simulan movimientos cotidianos. Mejoran fuerza de piernas y equilibrio.</li>
      <li><strong>Caminata con peso unilateral:</strong> activa el core y estabilizadores al compensar una carga desigual. Ideal para transferencias funcionales.</li>
      <li><strong>Sentadilla + empuje con banda:</strong> combina fuerza de tren inferior y superior en un solo movimiento. Aumenta coordinación global.</li>
      <li><strong>Rotaciones de tronco controladas:</strong> mejora movilidad espinal y control de la musculatura oblicua.</li>
    </ul>
    <p><strong>Ideal para:</strong> preparar el cuerpo para actividades diarias, deportivas o de trabajo físico general.</p>
  </v-expansion-panel-text>
</v-expansion-panel>


    <!-- 🦵 Ejercicios Unilaterales -->
    <v-expansion-panel>
  <v-expansion-panel-title>🦵 Ejercicios Unilaterales</v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/unilateral.jpg"
          height="300px"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>

      <!-- Video (puedes dejar src vacío si aún no lo tienes) -->
      <v-col cols="12" md="6">
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Mv4-sYh0tYY"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <ul>
      <li><strong>Sentadilla a una pierna:</strong> activa glúteo medio, cuádriceps y mejora equilibrio. Excelente para prevenir descompensaciones.</li>
      <li><strong>Plancha con un apoyo:</strong> exige mayor estabilidad del core. Se fortalece abdomen profundo y musculatura postural.</li>
      <li><strong>Elevación lateral de pierna:</strong> activa glúteo medio y mejora la alineación de cadera, útil en caminata y carrera.</li>
      <li><strong>Puente de glúteo con una pierna:</strong> mejora la fuerza del glúteo mayor y la estabilidad lumbopélvica.</li>
    </ul>
    <p><strong>Recomendado para:</strong> corregir asimetrías, fortalecer cadenas musculares específicas y mejorar control corporal.</p>
  </v-expansion-panel-text>
</v-expansion-panel>


    <!-- 🧬 Longevidad corporal -->
    <v-expansion-panel>
  <v-expansion-panel-title>🧬 Longevidad y Estabilización Articular</v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/longevidad.jpg"
          height="300px"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>

      <!-- Video (puedes dejar src vacío si aún no lo tienes) -->
      <v-col cols="12" md="6">
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/N6YmTiwmVOc"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <ul>
      <li><strong>Movilidad cervical:</strong> mejora el rango de movimiento del cuello, aliviando tensiones y mejorando postura.</li>
      <li><strong>Flexión-extensión de dedos y tobillos:</strong> estimula articulaciones pequeñas, fundamentales para equilibrio y motricidad fina.</li>
      <li><strong>Fortalecimiento del arco plantar:</strong> caminar descalzo o usar los dedos fortalece los pies y reduce riesgo de lesiones.</li>
      <li><strong>Equilibrio con un solo apoyo:</strong> trabaja estabilizadores del tobillo, cadera y core. Ideal para prevención de caídas.</li>
      <li><strong>Estiramientos lentos:</strong> previenen rigidez articular y ayudan a mantener la movilidad a largo plazo.</li>
    </ul>
    <p><strong>Recomendación:</strong> realizar todos los días o interdiario, especialmente si estás mucho tiempo sentado.</p>
  </v-expansion-panel-text>
</v-expansion-panel>

  </v-expansion-panels>
  
      <!-- Botones de Navegación -->
      <v-card-actions class="justify-center mt-5">
        <NuxtLink to="/">
          <v-btn color="yellow">inicio</v-btn>
        </NuxtLink>
        <NuxtLink to="/beneficios">
          <v-btn color="primary">Ver Beneficios</v-btn>
        </NuxtLink>
        <NuxtLink to="/ejercicios">
          <v-btn color="secondary">Ejercicios</v-btn>
        </NuxtLink>
        <NuxtLink to="/alimentacion">
          <v-btn color="success">Alimentación</v-btn>
        </NuxtLink>
        <NuxtLink to="/creditos">
          <v-btn color="red">Creditos</v-btn>
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
  