<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-6">Tipos de Alimentación Saludable</h1>

    <v-expansion-panels multiple>
      <!-- Carnívora -->
      <v-expansion-panel>
        <v-expansion-panel-title>🥩 Dieta Carnívora</v-expansion-panel-title>
        <v-expansion-panel-text>
          <!-- Imagen -->
    <v-img
      src="/carnivora.jpg"
      width="100%"
      height="300px"
      
      class="mb-4 rounded-lg"
    ></v-img>

    <!-- Video -->
    <v-responsive aspect-ratio="16/9" class="mb-4">
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/vt-q6EqfL_s"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-responsive>
          <p>Basada casi exclusivamente en productos animales: carne, órganos, huevos y grasa animal.</p>
          <ul>
            <li>Alta en proteínas y grasas.</li>
            <li>Libre de carbohidratos.</li>
            <li>Utilizada para control de inflamación y salud digestiva en casos específicos.</li>
          </ul>
          <p><strong>Ideal para:</strong> personas con sensibilidad a carbohidratos o enfermedades autoinmunes (si está supervisada).</p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Vegana -->
      <v-expansion-panel>
        <v-expansion-panel-title>🌱 Dieta Vegana</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-img
      src="/vegana.jpg"
      width="100%"
      height="300px"
      
      class="mb-4 rounded-lg"
    ></v-img>

    <!-- Video -->
    <v-responsive aspect-ratio="16/9" class="mb-4">
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/1_Xe5OEoyzM"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-responsive>
          <p>Elimina todo producto de origen animal. Se basa en frutas, vegetales, legumbres, cereales, semillas y frutos secos.</p>
          <ul>
            <li>Alta en fibra y antioxidantes.</li>
            <li>Reduce el colesterol y riesgo cardiovascular.</li>
            <li>Debe complementarse con vitamina B12 y omega 3.</li>
          </ul>
          <p><strong>Ideal para:</strong> quienes buscan una alimentación ética, sostenible o con bajo impacto ambiental.</p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Mediterránea -->
      <v-expansion-panel>
        <v-expansion-panel-title>🍅 Dieta Mediterránea</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-img
      src="/mediterranea.jpg"
      width="100%"
      height="300px"
      
      class="mb-4 rounded-lg"
    ></v-img>

    <!-- Video -->
    <v-responsive aspect-ratio="16/9" class="mb-4">
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/-vuM29_7zho"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-responsive>
          <p>Equilibrada, variada y rica en alimentos frescos: verduras, frutas, pescado, aceite de oliva y legumbres.</p>
          <ul>
            <li>Alta en grasas buenas y antioxidantes.</li>
            <li>Baja en alimentos ultraprocesados.</li>
            <li>Considerada una de las más saludables del mundo.</li>
          </ul>
          <p><strong>Ideal para:</strong> mantener salud cardiovascular y longevidad.</p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Mediterránea verde -->
      <v-expansion-panel>
        <v-expansion-panel-title>🫒 Dieta Mediterránea Verde</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-img
      src="/mediterraneaverde.webp"
      width="100%"
      height="300px"
      
      class="mb-4 rounded-lg"
    ></v-img>

    <!-- Video -->
    <v-responsive aspect-ratio="16/9" class="mb-4">
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/9tGrlFxp-pc"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-responsive>
          <p>Versión moderna sin carne roja. Enfatiza plantas, legumbres, granos integrales, aceite de oliva, té verde y nueces.</p>
          <ul>
            <li>Reduce aún más el riesgo metabólico.</li>
            <li>Incluye suplementos naturales como polifenoles.</li>
            <li>Favorece salud intestinal, cerebral y cardíaca.</li>
          </ul>
          <p><strong>Ideal para:</strong> quienes buscan maximizar los beneficios de la dieta mediterránea sin proteína animal terrestre.</p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Longeva adaptada -->
      <v-expansion-panel>
        <v-expansion-panel-title>🧬 Dieta Longeva Adaptada</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-img
      src="/longeva.png"
      width="100%"
      height="300px"
      
      class="mb-4 rounded-lg"
    ></v-img>

    <!-- Video -->
    <v-responsive aspect-ratio="16/9" class="mb-4">
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/iIuXQebhFGc"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-responsive>
          <p>Basada en principios de longevidad: baja en calorías, rica en alimentos naturales y adaptada al estilo de vida y salud personal.</p>
          <ul>
            <li>Incluye fermentados, grasas saludables, carbohidratos lentos y proteínas vegetales o pescados.</li>
            <li>Evita picos de insulina y promueve autofagia.</li>
            <li>Se ajusta según edad, nivel de actividad y necesidades médicas.</li>
          </ul>
          <p><strong>Ideal para:</strong> personas que buscan prevenir el envejecimiento celular y enfermedades crónicas.</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
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
        </NuxtLink>
        <NuxtLink to="/creditos">
          <v-btn color="red"> Creditos</v-btn>
        </NuxtLink>
      </v-card-actions>
</template>
