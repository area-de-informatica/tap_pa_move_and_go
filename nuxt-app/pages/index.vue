<template>
  <v-app>
    <v-container>

      <NuxtPage />
      <Bienvenida
  :titulo="titulo"
  v-model="mensaje"
  @saludo="handleSaludo"
/>
<v-expansion-panels class="my-6">
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon start color="primary">mdi-book-open-variant</v-icon>
      Historia de la Educación Física
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <v-sheet elevation="1" class="pa-6 rounded-lg">
        <h2 class="text-h5 font-weight-bold mb-4">Historia de la Educación Física en las Escuelas</h2>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">1. Orígenes antiguos de la actividad física educativa</h3>
        <p>
          La práctica de la actividad física con fines educativos tiene sus raíces en las civilizaciones antiguas:
        </p>
        <ul>
          <li><strong>Grecia Antigua:</strong> La educación física era fundamental para formar ciudadanos fuertes, sanos y preparados para la guerra. Se promovía el desarrollo físico junto al mental y moral, siguiendo el ideal del <em>kalokagathía</em> (belleza y bondad).</li>
          <li><strong>Roma:</strong> Si bien los romanos valoraban la actividad física, esta se enfocaba más en el entrenamiento militar y el entretenimiento público (como los juegos del circo).</li>
        </ul>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">2. Edad Media: Decadencia del ejercicio físico</h3>
        <p>
          Durante la Edad Media, la educación física perdió protagonismo. La Iglesia predominó en la vida educativa, y el cuerpo era visto como fuente de pecado. La actividad física era escasa y no se consideraba parte del proceso formativo.
        </p>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">3. Renacimiento: Renacer del cuerpo y el movimiento</h3>
        <p>
          El Renacimiento revalorizó el cuerpo humano. Los ideales clásicos volvieron a tener peso y se fomentó nuevamente el equilibrio entre cuerpo y mente. Filósofos y educadores como <strong>Vittorino da Feltre</strong> incorporaron juegos y ejercicio físico en sus métodos educativos.
        </p>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">4. Siglos XVIII y XIX: Formalización de la Educación Física</h3>
        <p>Durante estos siglos surgieron las primeras propuestas sistemáticas de Educación Física:</p>
        <ul>
          <li><strong>Johann Basedow (Alemania):</strong> Incluyó ejercicios físicos en su escuela filantrópica como parte de la formación integral.</li>
          <li><strong>Guts Muths (considerado el padre de la Educación Física escolar):</strong> Publicó manuales con ejercicios estructurados que podían aplicarse en la escuela.</li>
          <li><strong>Per Henrik Ling (Suecia):</strong> Fundó el sistema sueco de gimnasia, con un enfoque terapéutico, ordenado y metódico.</li>
          <li><strong>Francia e Inglaterra:</strong> Desarrollaron programas con orientación militar, deportiva y de salud.</li>
        </ul>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">5. Siglo XX: Inclusión formal en los sistemas educativos</h3>
        <p>
          La Educación Física se integró en los planes de estudio en muchos países como una asignatura obligatoria. Su enfoque varió según las regiones:
        </p>
        <ul>
          <li>En <strong>América Latina</strong>, se impulsó principalmente como parte del civismo y la salud pública.</li>
          <li>En <strong>Estados Unidos</strong>, se combinaron elementos militares, deportivos y recreativos.</li>
          <li>En <strong>Europa</strong>, se consolidaron diferentes escuelas: sueca, alemana y francesa.</li>
        </ul>
        <p>
          Durante este siglo también se desarrollaron competencias deportivas escolares, la enseñanza del deporte como medio educativo y la profesionalización del docente de Educación Física.
        </p>

        <h3 class="text-subtitle-1 font-weight-bold mt-4">6. Siglo XXI: Una visión integral y transversal</h3>
        <p>
          Actualmente, la Educación Física ha evolucionado hacia un modelo <strong>integral, inclusivo y activo</strong>, donde se promueve no solo el ejercicio físico, sino también:
        </p>
        <ul>
          <li><strong>Valores humanos y habilidades socioemocionales:</strong> trabajo en equipo, respeto, disciplina, empatía.</li>
          <li><strong>Salud integral:</strong> prevención de enfermedades, hábitos alimenticios saludables, cuidado emocional.</li>
          <li><strong>Aprendizaje activo:</strong> se articula con otras áreas del conocimiento, fomentando el aprendizaje a través del movimiento.</li>
        </ul>
        <p>
          Se han incorporado <strong>nuevas metodologías</strong> como el uso de TICs, gamificación, desafíos físicos y aprendizaje basado en proyectos, como se observa en el proyecto <em>Muévete y Aprende</em>.
        </p>

        <v-divider class="my-4"></v-divider>

        <h3 class="text-h6 font-weight-bold">Conclusión</h3>
        <p>
          La historia de la Educación Física en las escuelas muestra cómo esta disciplina ha pasado de ser una preparación militar o un entretenimiento a convertirse en una herramienta educativa fundamental para el desarrollo integral del ser humano. En el siglo XXI, se consolida como una vía para mejorar el bienestar físico, emocional y cognitivo de los estudiantes, integrando cuerpo y mente en el proceso educativo.
        </p>
      </v-sheet>
    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>


<v-card elevation="2" class="pa-6 my-6 rounded-lg" color="blue-grey-lighten-5">
  <v-row align="center">
    <v-col cols="auto">
      <v-icon size="48" color="primary">mdi-run-fast</v-icon>
    </v-col>

    <v-col>
      <h2 class="text-h6 font-weight-bold mb-2">
        Educación Física: clave para tu bienestar integral
      </h2>
      <p class="mb-2 text-justify">
        La educación física es fundamental para el desarrollo integral del ser humano. A través de la actividad física,
        mejoramos nuestra salud, fortalecemos nuestros músculos y fomentamos hábitos saludables.
      </p>
      <p class="text-justify">
        En este sitio encontrarás información sobre los beneficios del ejercicio, rutinas efectivas y consejos de alimentación
        para mejorar tu rendimiento.
      </p>
    </v-col>
  </v-row>
</v-card>

      
<v-card elevation="2" class="pa-6 my-6 rounded-lg" color="light-green-lighten-5">
  <h2 class="text-h6 font-weight-bold mb-4 text-center">
    ¿Por qué es importante la educación física?
  </h2>

  <v-list lines="one" density="compact">
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="success">mdi-heart-pulse</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Mejora la salud cardiovascular.</v-list-item-title>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">mdi-dumbbell</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Aumenta la fuerza y la resistencia.</v-list-item-title>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="deep-purple">mdi-emoticon-happy-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Reduce el estrés y mejora el estado de ánimo.</v-list-item-title>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="orange">mdi-account-group</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Fomenta la disciplina y el trabajo en equipo.</v-list-item-title>
    </v-list-item>
  </v-list>
</v-card>

      
<v-card elevation="2" class="pa-6 my-8 rounded-lg" color="indigo-lighten-5">
  <v-row align="center" class="mb-4">
    <v-col cols="auto">
      <v-icon size="40" color="indigo-darken-2">mdi-book-open-page-variant</v-icon>
    </v-col>
    <v-col>
      <h2 class="text-h5 font-weight-bold mb-1">Historia de la Educación Física</h2>
      <p class="text-subtitle-2">
        Descubre cómo ha evolucionado la educación física desde la antigüedad hasta nuestros días, adaptándose a contextos sociales, culturales y científicos.
      </p>
    </v-col>
  </v-row>

  <!-- Contenedor centrado con tamaño ideal -->
  <div class="mx-auto" style="max-width: 960px;">
    <v-responsive aspect-ratio="16/9" class="rounded-lg">
      <iframe
        src="https://www.youtube.com/embed/CBq_GbmrXLg"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="300px"
      ></iframe>
    </v-responsive>
  </div>

  <v-divider class="my-6"></v-divider>

  <div class="text-center">
    <h3 class="text-subtitle-1 font-weight-bold mb-1">Explora nuestros contenidos</h3>
    <p class="text-body-2">
      Descubre más sobre cómo llevar una vida activa y saludable en las siguientes secciones:
    </p>
  </div>
</v-card>


        <v-card-actions>
          <NuxtLink to="/beneficios">
            <v-btn color="primary">Beneficios</v-btn>
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
    
    <v-container>
      <v-card class="mb-6" elevation="2" color="blue-lighten-5">
  <v-card-title class="text-h6 font-weight-bold">
    🌟 Frase del Día
  </v-card-title>
  <v-card-text>
    {{ frase }}
  </v-card-text>

  <v-divider class="my-2"></v-divider>

  <v-card-title class="text-h6 font-weight-bold">
    💪 Reto Activo del Día
  </v-card-title>
  <v-card-text>
    {{ reto }}
  </v-card-text>
  <v-card-actions>
    <v-btn color="primary" @click="cambiarReto">Otro Reto</v-btn>
  </v-card-actions>
</v-card>

    
    
      </v-container>



      <!-- Cuestionario -->
      <v-container class="mt-6">
        <h1>Cuestionario</h1>

        <v-btn
          color="primary"
          @click="loadQuestions"
          v-if="quiz.questions.length === 0"
          class="mb-4"
        >
          Cargar Preguntas
        </v-btn>

        <div v-if="quiz.questions.length > 0">
          <v-card class="mb-4" outlined>
            <v-card-title>{{ currentQuestion.question }}</v-card-title>
            <v-card-actions>
              <v-btn
                v-for="option in currentQuestion.options"
                :key="option"
                @click="submitAnswer(currentQuestion.id, option)"
                :class="{
                  'bg-blue-500 text-white': quiz.userAnswers[currentQuestion.id] === option,
                }"
              >
                {{ option }}
              </v-btn>
            </v-card-actions>
          </v-card>

          <div class="flex justify-between mb-4">
            <v-btn
              color="secondary"
              @click="prevQuestion"
              :disabled="quiz.currentQuestionIndex === 0"
            >
              Anterior
            </v-btn>
            <v-btn
              color="secondary"
              @click="nextQuestion"
              :disabled="quiz.currentQuestionIndex === quiz.questions.length - 1"
            >
              Siguiente
            </v-btn>
          </div>

          <div>
            <v-btn color="success" @click="showScore">Calcular Puntaje</v-btn>
            <v-btn color="error" class="ml-2" @click="resetQuiz">Reiniciar Quiz</v-btn>

            <div v-if="score !== null" class="mt-4">
              <h3>Puntaje: {{ score }}%</h3>

              <div v-if="incorrectQuestions.length">
                <h4>Preguntas que respondiste incorrectamente:</h4>
                <ul>
                  <li v-for="q in incorrectQuestions" :key="q.id">
                    <strong>Pregunta:</strong> {{ q.question }}<br />
                    <strong>Respuesta correcta:</strong> {{ q.answer }}
                  </li>
                </ul>
              </div>
              <div v-else>
                <p>¡Todas las respuestas son correctas! 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </v-container>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuizStore } from '~/store/index.get.ts'
import Bienvenida from '~/components/Bienvenida.vue'

const titulo = 'Bienvenido a Educación Física'
const mensaje = ref('Escribe lo que sientes') // v-model conectado

const quiz = useQuizStore()
const score = ref(null)

// ✅ Manejador del evento saludo con mensaje dinámico
const handleSaludo = (texto) => {
  const mensaje = texto.toLowerCase()
  let respuesta = ''

  if (/\bdesmotivad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Estás desmotivado. Empieza con solo 2 minutos de movimiento. A veces eso es suficiente para arrancar.'
  } else if (/\bestresad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Haz respiraciones profundas o movimientos suaves como estiramientos o una caminata ligera.'
  } else if (/\btrist(e|é)\b/.test(mensaje)) {
    respuesta = 'La actividad física puede mejorar tu estado de ánimo. Haz algo suave y que disfrutes.'
  } else if (/\banimad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Aprovecha esa energía. Prueba una rutina dinámica o un deporte que te guste.'
  } else if (/\bcansad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Escucha a tu cuerpo. Un descanso activo o una sesión suave puede ayudarte a recuperarte.'
  } else if (/\bfeliz\b/.test(mensaje)) {
    respuesta = 'Comparte tu alegría en movimiento: baila, corre o haz una rutina divertida.'
  } else if (/\baburrid(o|ó)\b/.test(mensaje)) {
    respuesta = 'Prueba una actividad nueva o diferente: juegos, deportes, música o retos físicos.'
  } else if (/\bsin\s+energ(i|í)a\b/.test(mensaje)) {
    respuesta = 'Empieza con movimientos lentos. A veces el movimiento trae la energía que necesitas.'
  } else if (/\bpreocupad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Moverte puede ayudarte a aclarar la mente. Camina o estira mientras respiras profundo.'
  } else if (/\bcon\s+energ(i|í)a\b/.test(mensaje)) {
    respuesta = '¡Esa actitud es perfecta! Haz una sesión de entrenamiento funcional y aprovecha tu entusiasmo.'
  } else if (/\bcontent(o|ó)\b/.test(mensaje)) {
    respuesta = 'Genial. Mantén esa vibra activa con algo que disfrutes como bailar, saltar o jugar.'
  } else if (/\bnervios(o|ó)\b/.test(mensaje)) {
    respuesta = 'Haz una pausa activa con respiraciones y movimientos suaves. Te sentirás más tranquilo.'
  } else if (/\bmotivad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Aprovecha tu motivación para aprender una nueva habilidad física o mejorar tu rendimiento.'
  } else if (/\brelajad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Perfecto para una caminata tranquila o una sesión de estiramientos.'
  } else if (/\bpesad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Empieza con ejercicios suaves. A veces el cuerpo solo necesita activarse poco a poco.'
  } else if (/\bagotad(o|ó)|rendid(o|ó)\b/.test(mensaje)) {
    respuesta = 'Si estás agotado, intenta una pausa activa muy suave o simplemente una respiración consciente.'
  } else if (/\beufóric(o|a)|emocionad(o|ó)\b/.test(mensaje)) {
    respuesta = '¡Genial! Usa esa energía para bailar, correr o iniciar un nuevo reto.'
  } else if (/\bconfundid(o|ó)|perdid(o|ó)\b/.test(mensaje)) {
    respuesta = 'Moverte puede ayudarte a aclarar ideas. Camina un poco o haz estiramientos mientras respiras.'
  } else if (/\benojad(o|ó)|molest(o|ó)\b/.test(mensaje)) {
    respuesta = 'Descarga esa tensión con movimientos intensos como saltos, boxeo de sombra o una caminata rápida.'
  } else if (/\bsueñ(o|o)|dormid(o|ó)\b/.test(mensaje)) {
    respuesta = 'Activa tu cuerpo con movimientos suaves. Un poco de movimiento puede despejar el sueño.'
  } else if (/\bsatisfech(o|ó)|plen(o|a)\b/.test(mensaje)) {
    respuesta = '¡Qué bueno! Aprovecha ese estado para compartir una actividad con otros.'
  } else if (/\bhiperactiv(o|a)|acelerad(o|ó)\b/.test(mensaje)) {
    respuesta = 'Descarga energía con una rutina intensa y corta como saltos, sentadillas o cuerda.'
  } else if (/\bnostálgic(o|a)|melancólic(o|a)\b/.test(mensaje)) {
    respuesta = 'Un paseo en silencio o una actividad que te guste puede ayudarte a reconectarte contigo.'
  }
  if (/\bmal\b/.test(mensaje)) {
    respuesta = 'Lamento que te sientas mal. Intenta moverte un poco, incluso caminar puede ayudarte a mejorar.'
  } else if (/\bbien\b/.test(mensaje)) {
    respuesta = '¡Excelente! Aprovecha ese bienestar para seguir cuidando tu cuerpo con una actividad que disfrutes.'
  } else if (/\bgenial\b/.test(mensaje)) {
    respuesta = '¡Eso suena genial! Comparte esa buena energía haciendo ejercicio con alguien más.'
  } else if (/\bfuert(e|e)\b/.test(mensaje)) {
    respuesta = '¡Te sientes fuerte! Es un gran momento para retarte con una rutina intensa.'
  } else if (/\bdébil\b/.test(mensaje)) {
    respuesta = 'Todos tenemos días difíciles. Prueba con estiramientos suaves y respira profundo, eso también es cuidarte.'
  } else if (/\bentretenid(o|a)\b/.test(mensaje)) {
    respuesta = '¡Qué bueno que te diviertes! Recuerda que moverse también puede ser parte de la diversión.'
  } else if (/\basombr(o|ado|ada)\b/.test(mensaje)) {
    respuesta = 'Sentir asombro es el inicio del aprendizaje. Muévete con curiosidad y explora lo que tu cuerpo puede hacer.'
  } else if (/\bganador\b/.test(mensaje)) {
    respuesta = '¡Esa mentalidad ganadora te lleva lejos! Sigue moviéndote con decisión y actitud positiva.'
  } else if (/\bperdedor\b/.test(mensaje)) {
    respuesta = 'Perder también es parte del crecimiento. Lo importante es que sigas adelante. Muévete y mejora cada día.'
  } else if (/\bvalient(e|e)\b/.test(mensaje)) {
    respuesta = 'Ser valiente también es moverse incluso cuando no es fácil. ¡Eso es admirable!'
  }
  else {
    respuesta = 'Gracias por compartir cómo te sientes. El movimiento siempre puede ayudarte.'
  }
  alert(respuesta)
}

// dentro del <script setup>
const frases = [
  "El movimiento es medicina para el cuerpo y la mente.",
  "Cada paso cuenta. ¡Muévete un poco más hoy!",
  "La constancia supera la perfección.",
  "Hazlo por ti. Tu cuerpo te lo agradecerá.",
  "Moverse es celebrar que estás vivo.",
  "Tu cuerpo está hecho para moverse, ¡dale la oportunidad!",
  "Un poco de actividad hoy es progreso mañana.",
  "Tu energía aumenta cuando te mueves.",
  "El esfuerzo de hoy es tu bienestar de mañana.",
  "Tu mejor versión comienza con un pequeño paso.",
  "No tienes que ser perfecto, solo constante.",
  "Cada vez que te mueves, estás invirtiendo en ti.",
  "Moverse es una forma de agradecer a tu cuerpo.",
  "Incluso 5 minutos de movimiento hacen la diferencia.",
  "Cuando te mueves, tu mente también se libera.",
  "Un cuerpo activo es un cuerpo feliz.",
  "Sudar también es una forma de sanar.",
  "La disciplina en movimiento crea confianza en ti mismo.",
  "Moverse es cuidarse con amor.",
]


const retos = [
  "Haz 10 sentadillas durante el recreo.",
  "Estira tus brazos por 1 minuto.",
  "Baila tu canción favorita por 2 minutos.",
  "Haz 15 segundos de plancha ahora.",
  "Haz 20 saltos en tu lugar.",
  "Camina por 3 minutos sin parar.",
  "Toca tus pies 15 veces seguidas.",
  "Realiza 10 abdominales o intentos.",
  "Sube y baja escaleras durante 1 minuto.",
  "Haz 5 respiraciones profundas mientras te estiras.",
  "Mueve tus hombros en círculos durante 30 segundos.",
  "Haz equilibrio con una pierna por 15 segundos y cambia.",
  "Patea al aire 10 veces con cada pierna.",
  "Haz 8 lagartijas o intenta al menos 3.",
  "Camina hacia atrás durante 20 pasos.",
  "Reta a alguien a una carrera de 20 metros.",
  "Haz 10 pasos grandes como si marcharas.",
  "Imita a un animal caminando por 30 segundos.",
]

const frase = ref(frases[Math.floor(Math.random() * frases.length)])
const reto = ref(retos[Math.floor(Math.random() * retos.length)])

const cambiarReto = () => {
  reto.value = retos[Math.floor(Math.random() * retos.length)]
}






// Funciones del cuestionario
const loadQuestions = async () => {
  await quiz.fetchQuestions()
  score.value = null
}

const submitAnswer = (questionId, answer) => {
  quiz.submitAnswer(questionId, answer)
}

const nextQuestion = () => {
  quiz.nextQuestion()
}

const prevQuestion = () => {
  quiz.prevQuestion()
}

const showScore = () => {
  score.value = quiz.calculateScore()
}

const resetQuiz = () => {
  quiz.resetQuiz()
  score.value = null
}

const currentQuestion = computed(() => quiz.currentQuestion)

const incorrectQuestions = computed(() =>
  quiz.questions.filter(q => quiz.userAnswers[q.id] !== q.answer)
)
</script>



<style scoped>
.v-card {
  margin-top: 20px;
  text-align: center;
}

ul {
  text-align: left;
  margin-left: 20px;
}

.bg-primary {
  background-color: #1976d2;
  color: #fff;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.text-white {
  color: white;
}
</style>
