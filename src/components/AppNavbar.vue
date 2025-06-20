<script setup>
import { useDisplay } from 'vuetify'

// Utilize pre-defined Vue functions
const { mobile } = useDisplay()

const links = [
  { icon: 'mdi-home', title: 'Home', to: '/' },
  { icon: 'mdi-school', title: 'About', to: '/about' },
  { icon: 'mdi-briefcase', title: 'Portfolio', to: '/portfolio' },
]
</script>

<template>
  <nav :class="mobile ? 'mobile-nav' : ''">
    <v-toolbar color="transparent" :class="mobile ? 'fixed-bottom' : ''">
      <div class="links d-flex justify-center align-center" :class="mobile ? 'mobile-links' : ''">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          :icon="mobile ? link.icon : false"
          :text="!mobile ? link.title : ''"
          :class="!mobile ? 'text-white' : 'mobile-btn'"
          :rounded="mobile ? 'circle' : '0'"
          variant="text"
        ></v-btn>
        <v-btn
          class="s-btn font-weight-black"
          to="/contact"
          :text="!mobile ? 'Hire me!' : ''"
          :icon="mobile ? 'mdi-email' : false"
          :rounded="mobile ? 'circle' : '0'"
          variant="text"
        ></v-btn>
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

.mobile-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}

.fixed-bottom {
  background-color: #1f4529 !important; /* Dark green background for mobile */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.mobile-links {
  gap: 16px; /* Space between buttons on mobile */
}

.mobile-btn {
  background-color: #2a6f47; /* Green background for buttons */
  color: white !important;
  padding: 12px !important; /* Rounded padding for mobile */
  min-width: 48px !important; /* Ensure buttons are large enough for touch */
}
</style>
