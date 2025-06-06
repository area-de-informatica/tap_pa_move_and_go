<template>
  <div class="quiz">
    <h1>Cuestionario de Educación Física</h1>
    <div v-if="!quizFinished" class="question-container">
      <v-card>
        <v-card-title>{{ currentQuestion.question }}</v-card-title>
        <v-card-text>
          <div class="options">
            <v-btn
              v-for="option in currentQuestion.options"
              :key="option"
              @click="selectAnswer(option)"
              class="option-btn"
            >
              {{ option }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <div class="navigation">
        <v-btn @click="previousQuestion" :disabled="currentQuestionIndex === 0">Anterior</v-btn>
        <v-btn @click="nextQuestion" :disabled="currentQuestionIndex >= totalQuestions - 1">Siguiente</v-btn>
      </div>
      <p>Pregunta {{ currentQuestionIndex + 1 }} de {{ totalQuestions }}</p>
    </div>
    <div v-else>
      <h2>¡Cuestionario finalizado!</h2>
      <p>Respuestas correctas: {{ correctAnswers }} de {{ totalQuestions }}</p>
      <p>Puntaje: {{ scorePercentage }}%</p>
      <v-btn @click="restartQuiz">Reiniciar Cuestionario</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useQuizStore } from '~/store/quiz'

const quiz = useQuizStore()
const score = ref(null)

const loadQuestions = async () => {
  await quiz.fetchQuestions('beneficios') // si usas un endpoint diferente
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
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.option-btn {
  width: 100%;
}
.navigation {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}
</style>
