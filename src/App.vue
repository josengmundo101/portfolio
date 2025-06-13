<script setup>
import '@/assets/main.css'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <v-app app class="app">
    <AppNavbar class="navbar" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  padding: 16px;
}

.app {
  font-family: 'Roboto', sans-serif;
  background-color: #0a0a0a;
}
</style>
