import { defineStore } from 'pinia'
import { useFetch } from '#imports'

interface Question {
  id: string
  texto: string
  opciones: string[]
  answer: string
}

interface QuizState {
  questions: Question[]
  currentQuestionIndex: number
  userAnswers: Record<string, string>
}

export const useQuizStore = defineStore('quiz', {
  state: (): QuizState => ({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {},
  }),

  actions: {
    async fetchQuestions() {
      try {
        const { data } = await useFetch<Question[]>('/api/quiz')
        if (data.value) this.questions = data.value
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    },

    submitAnswer(questionId: string, answer: string) {
      this.userAnswers[questionId] = answer
    },

    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
      }
    },

    calculateScore(): number {
      const correctCount = this.questions.filter(
        (q) => this.userAnswers[q.id] === q.answer
      ).length

      return Math.round((correctCount / this.questions.length) * 100)
    },
  },

  getters: {
    currentQuestion(state): Question | null {
      return state.questions[state.currentQuestionIndex] || null
    },
  },
})
