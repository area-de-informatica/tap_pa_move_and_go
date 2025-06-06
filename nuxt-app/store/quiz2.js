import { defineStore } from 'pinia';
import { useFetch } from '#imports';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {},
  }),
  
  actions: {
    async fetchQuestions() {
      try {
        const { data } = await useFetch('/api/quiz');
        this.questions = data.value;
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    },

    submitAnswer(questionId, answer) {
      this.userAnswers[questionId] = answer;
    },

    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    calculateScore() {
      let correctCount = 0;

      this.questions.forEach((question) => {
        if (this.userAnswers[question.id] === question.answer) {
          correctCount++;
        }
      });

      return Math.round((correctCount / this.questions.length) * 100);
    },
  },

  getters: {
    currentQuestion(state) {
      return state.questions[state.currentQuestionIndex];
    },
  },
});
