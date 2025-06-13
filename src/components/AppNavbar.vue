<script setup>
const links = [
  { icon: 'mdi-home', title: 'Home', to: '/' },
  { icon: 'mdi-school', title: 'About', to: '/about' },
  { icon: 'mdi-briefcase', title: 'Portfolio', to: '/portfolio' },
]
</script>

<template>
  <nav>
    <v-toolbar color="transparent">
      <div class="links d-flex justify-center">
        <v-btn v-for="link in links" :key="link.title" :to="link.to" text class="text-white">
          {{ link.title }}
        </v-btn>
        <v-btn class="s-btn font-weight-black" to="/contact">Hire me!</v-btn>
      </div>
    </v-toolbar>
  </nav>
</template>

<style scoped>
.links {
  width: 100%;
}

.s-btn {
  color: #48955c;
}
</style>
