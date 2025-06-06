export default defineEventHandler(() => {
  return [
    {
      id: 1,
      question: '¿Cuál es uno de los beneficios principales de la educación física?',
      options: ['Reduce el estrés', 'Aumenta la presión arterial', 'Disminuye la densidad ósea'],
      answer: 'Reduce el estrés',
    },
    {
      id: 2,
      question: '¿Qué beneficio tiene en la infancia?',
      options: ['Desarrolla habilidades motoras', 'Causa cansancio excesivo', 'Incrementa el sedentarismo'],
      answer: 'Desarrolla habilidades motoras',
    },
    {
      id: 3,
      question: '¿Cómo ayuda en la adultez?',
      options: ['Aumenta el riesgo de enfermedades', 'Mantiene un peso saludable', 'Reduce el equilibrio'],
      answer: 'Mantiene un peso saludable',
    },
    {
      id: 4,
      question: '¿Qué beneficio brinda a los adultos mayores?',
      options: ['Empeora la movilidad', 'Previene la pérdida muscular', 'Disminuye el equilibrio'],
      answer: 'Previene la pérdida muscular',
    },
    {
      id: 5,
      question: '¿Qué contribuye a una mayor longevidad?',
      options: ['Ejercicio regular', 'Ver televisión', 'Sedentarismo'],
      answer: 'Ejercicio regular',
    },
  ]
});
