<template>
  <div id="app">
    <!-- Utilisation de router-view pour afficher les composants dynamiquement en fonction de l'URL -->
    <router-view />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import router from './router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
