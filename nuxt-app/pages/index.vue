<template>
  <v-app>
    <v-container>

      <NuxtPage />
      <Bienvenida
  :titulo="titulo"
  v-model="mensaje"
  @saludo="handleSaludo"
/>


<v-card class="pa-4 mb-4">
<v-card-text>
      <p>La educación física es fundamental para el desarrollo integral del ser humano. A través de la actividad física, mejoramos nuestra salud, fortalecemos nuestros músculos y fomentamos hábitos saludables.</p>
      <p>En este sitio encontrarás información sobre los beneficios del ejercicio, rutinas efectivas y consejos de alimentación para mejorar tu rendimiento.</p>
      <v-divider class="my-4"></v-divider>
      <h3>¿Por qué es importante la educación física?</h3>
      <ul>
        <li>Mejora la salud cardiovascular.</li>
        <li>Aumenta la fuerza y la resistencia.</li>
        <li>Reduce el estrés y mejora el estado de ánimo.</li>
        <li>Fomenta la disciplina y el trabajo en equipo.</li>
      </ul>
      <v-divider class="my-4"></v-divider>
      <h3>Historia</h3>
      <p>La educación física ha evolucionado a lo largo de los siglos, adaptándose a las necesidades sociales, culturales y científicas de cada época.</p>

      <p><strong>1. Antigüedad</strong></p>
      <p>- Grecia Antigua: La educación física era fundamental para formar ciudadanos fuertes y saludables. Se practicaban deportes como la lucha, el boxeo y el pentatlón. Se integraba en la educación filosófica y militar.</p>
      <p>- Roma: Se enfocaba más en la preparación militar. Aunque se practicaban actividades físicas, el entrenamiento era más pragmático y orientado al combate.</p>

      <p><strong>2. Edad Media</strong></p>
      <p>- El enfoque físico decayó con el auge del pensamiento religioso. El cuerpo era considerado menos importante que el alma.</p>
      <p>- Sin embargo, la caballería mantenía cierta actividad física a través del entrenamiento ecuestre y militar.</p>

      <p><strong>3. Renacimiento</strong></p>
      <p>- Renace el interés por el cuerpo humano, impulsado por el humanismo. Se vuelve a valorar el ejercicio como parte del desarrollo integral del ser humano.</p>

      <p><strong>4. Siglos XVIII - XIX</strong></p>
      <p>- Se institucionaliza la educación física en Europa. Destacan sistemas como:</p>
      <ul>
        <li>Sistema sueco (Per Henrik Ling): gimnasia terapéutica y estructurada.</li>
        <li>Sistema alemán (Friedrich Jahn): gimnasia con aparatos, centrado en la disciplina nacionalista.</li>
      </ul>
      <p>- Se comienzan a incluir estas prácticas en los programas escolares.</p>

      <p><strong>5. Siglo XX</strong></p>
      <p>- Se expande a nivel mundial, integrándose a los sistemas educativos formales.</p>
      <p>- Se desarrollan teorías del entrenamiento, el deporte competitivo y la recreación.</p>
      <p>- Surgen carreras universitarias especializadas y estudios científicos sobre el ejercicio.</p>

      <p><strong>6. Actualidad</strong></p>
      <p>- Enfocada en el desarrollo integral: físico, emocional y social.</p>
      <p>- Abarca temas como la salud, el bienestar, la inclusión, la psicomotricidad y la prevención de enfermedades.</p>
      <p>- Se adapta a nuevas tecnologías y enfoques pedagógicos modernos.</p>

      <v-divider class="my-4"></v-divider>

      <quiz />

      <h3>Explora nuestros contenidos</h3>
      <p>Descubre más sobre cómo llevar una vida activa y saludable en las siguientes secciones:</p>
    </v-card-text>
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
  const mensaje = texto.toLowerCase().trim()
  let respuesta = ''

  if (mensaje.includes('desmotivado') || mensaje.includes('pereza')) {
    respuesta = 'Empieza con 2 minutos de movimiento. Muchas veces el cuerpo se activa solo al comenzar.'
  } else if (mensaje.includes('cansado') || mensaje.includes('agotado')) {
    respuesta = 'Tu cuerpo pide descanso activo. Prueba una caminata suave o estiramientos para recuperar energía.'
  } else if (mensaje.includes('estresado') || mensaje.includes('ansioso')) {
    respuesta = 'Respira profundo. Un poco de yoga o una caminata puede ayudarte a liberar esa tensión.'
  } else if (mensaje.includes('triste') || mensaje.includes('deprimido')) {
    respuesta = 'El movimiento mejora el ánimo. Prueba con música y ejercicios suaves como baile libre.'
  } else if (mensaje.includes('hambre')) {
    respuesta = 'Recuerda alimentarte bien antes y después de moverte. Un snack saludable como fruta o nueces te ayudará.'
  } else if (mensaje.includes('sed')) {
    respuesta = 'Hidrátate bien antes de cualquier actividad. El agua es esencial para un buen rendimiento.'
  } else if (mensaje.includes('aburrido')) {
    respuesta = 'Cambia la rutina. Intenta un nuevo deporte o juego físico que no hayas probado antes.'
  } else if (mensaje.includes('dolor') || mensaje.includes('lastimado')) {
    respuesta = 'Escucha a tu cuerpo. Si sientes dolor, descansa y realiza movimientos suaves como movilidad articular.'
  } else if (mensaje.includes('solo') || mensaje.includes('abandonado')) {
    respuesta = 'Invita a un amigo a entrenar o únete a una actividad grupal. ¡Moverse acompañado es más divertido!'
  } else if (mensaje.includes('débil')) {
    respuesta = 'Empieza con ejercicios suaves. La constancia te hará sentir más fuerte cada día.'
  } else if (mensaje.includes('listo') || mensaje.includes('preparado')) {
    respuesta = '¡Perfecto! Realiza un calentamiento de 3 minutos y luego una rutina de cuerpo completo.'
  } else if (mensaje.includes('fuerte')) {
    respuesta = 'Entrena tu fuerza de forma segura. ¿Qué tal unas sentadillas o flexiones hoy?'
  } else if (mensaje.includes('feliz') || mensaje.includes('motivado')) {
    respuesta = '¡Esa actitud es perfecta! Haz una sesión de entrenamiento funcional y aprovecha tu entusiasmo.'
  } else if (mensaje.includes('energía') || mensaje.includes('activo')) {
    respuesta = 'Canaliza esa energía con un circuito de ejercicios de 5 minutos. ¡Hazlo divertido!'
  } else if (mensaje.includes('felicidad') || mensaje.includes('contento')) {
    respuesta = '¡La felicidad se contagia! Haz una pequeña rutina física y comparte tu energía con los demás.'
  } else {
    respuesta = 'Gracias por compartir. Recuerda: moverte a diario mejora tu cuerpo y tu mente. ¡Vamos por ello!'
  }

  alert(respuesta)
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
