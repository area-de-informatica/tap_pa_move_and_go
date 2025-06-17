<template>
    <v-card class="pa-4 mb-4">
        <v-img src="/df.jpg" height="200px" cover></v-img>
      <v-card-title>{{ titulo }}</v-card-title>
  
      <v-card-text>
        <v-text-field
          label="Como te sientes"
          v-model="modeloInterno"
        />
        <v-btn color="primary" @click="emitirSaludo">
          Saludar
        </v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, watch, ref } from 'vue'
  
  const props = defineProps({
    titulo: String,
    modelValue: String
  })
  
  const emit = defineEmits(['update:modelValue', 'saludo'])
  
  const modeloInterno = ref(props.modelValue)
  
  watch(() => props.modelValue, (nuevoValor) => {
    modeloInterno.value = nuevoValor
  })
  
  watch(modeloInterno, (nuevoValor) => {
    emit('update:modelValue', nuevoValor)
  })
  
  const emitirSaludo = () => {
    emit('saludo', modeloInterno.value)
  }
  </script>
  