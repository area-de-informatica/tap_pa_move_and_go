export default defineEventHandler((event) => {
  return [
    { id: 1, question: '¿Cuál es el principal músculo que se trabaja al hacer sentadillas?', options: ['Cuádriceps', 'Bíceps', 'Tríceps', 'Deltoides'], answer: 'Cuádriceps' },
    { id: 2, question: '¿Qué tipo de ejercicio mejora la resistencia cardiovascular?', options: ['Correr', 'Levantamiento de pesas', 'Estiramientos', 'Yoga'], answer: 'Correr' },
    { id: 3, question: '¿Qué componente de la aptitud física se desarrolla con el yoga?', options: ['Flexibilidad', 'Velocidad', 'Fuerza', 'Resistencia'], answer: 'Flexibilidad' },
    { id: 4, question: '¿Qué es el IMC?', options: ['Índice de Masa Corporal', 'Índice Muscular Corporal', 'Intensidad Máxima de Carga', 'Intervalo Metabólico de Consumo'], answer: 'Índice de Masa Corporal' },
    { id: 5, question: '¿Cuál es el beneficio principal del calentamiento antes del ejercicio?', options: ['Evitar lesiones', 'Aumentar el estrés', 'Dormir mejor', 'Perder peso al instante'], answer: 'Evitar lesiones' },
    { id: 6, question: '¿Qué deporte se juega con una raqueta y un volante?', options: ['Bádminton', 'Tenis', 'Squash', 'Ping-pong'], answer: 'Bádminton' }
  ];
});
