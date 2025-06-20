<script setup>
import '@/assets/main.css'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <v-app app class="app">
    <div class="green-overlay"></div>
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
  overflow: hidden;
}

.green-overlay {
  position: absolute;
  /* left: 0; */
  width: 100%;
  min-height: 100%;
  background:
    linear-gradient(45deg, #0f2c1a 0%, #0a0a0a 25%, #0a0a0a 50%, #0a0a0a 75%, transparent 100%),
    radial-gradient(circle at 0% 0, rgba(0, 0, 0, 0.4) 0%, transparent 0%),
    radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.4) 0%, transparent 0%);
  background-blend-mode: overlay;
  z-index: 0;
  opacity: 0.9;
  /* Wavy lines and dots effect */
}
.green-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 50 Q 25 75, 50 50 T 100 50" fill="none" stroke="%231A3C23" stroke-width="3" opacity="0.8"/><circle cx="30" cy="50" r="6" fill="%232A4F36" opacity="0.9"/><circle cx="70" cy="50" r="6" fill="%231F4529" opacity="0.9"/></svg>'),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="3" fill="%232A4F36" opacity="0.9"/></svg>');
  background-size:
    60px 60px,
    20px 20px;
  background-repeat: repeat, repeat;
  animation:
    wave 8s infinite ease-in-out,
    pulse 3s infinite alternate;
  overflow: hidden;
}
@keyframes wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes pulse {
  0% {
    background-size:
      20px 20px,
      60px 60px;
  }
  100% {
    background-size:
      25px 25px,
      70px 70px;
  }
}
</style>
