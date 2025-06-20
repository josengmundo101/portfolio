<script setup>
import HeroImg from '@/assets/hero.jpg'
import { useDisplay } from 'vuetify'

// Utilize pre-defined Vue functions
const { mobile } = useDisplay()
</script>

<template>
  <v-responsive :class="mobile ? 'hero-section mb-10' : ''">
    <v-container fluid>
      <v-row no-gutters align="center">
        <!-- Left Column: Image -->
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-img
            :src="HeroImg"
            alt="Joseph Lucio Quinte"
            :max-width="mobile ? '90%' : '400px'"
            class="profile-img"
            :style="{
              maxHeight: '80vh',
              objectFit: 'cover',
              borderRadius: mobile ? '90%' : '20px',
            }"
          />
        </v-col>
        <!-- Right Column: Text -->
        <v-col cols="12" md="6" class="right-column text-center text-md-left pa-4 text-white">
          <h1 class="hero-name text-h3 mb-5" :class="mobile ? 'text-h4' : ''">
            I'M JOSEPH LUCILO QUINTE.
          </h1>
          <h2 class="text-h2 mb-5 white--text text-uppercase" :class="mobile ? 'text-h3' : ''">
            FRONT-END DEVELOPER
          </h2>
          <p class="mt-4 grey--text text-wrap">
            I'm a web designer & front-end developer focused on crafting clean & user-friendly
            experiences. I am passionate about building excellent software that improves the lives
            of those around me.
          </p>
          <v-btn color="transparent" class="more-btn mt-5 white--text" outlined to="/about">
            <p>More About me</p>
            <div class="circle">
              <v-icon>mdi-arrow-right</v-icon>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<style scoped>
.hero-section {
  min-height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.right-column {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.profile-img {
  z-index: 1;
  transition:
    transform 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.profile-img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(14, 255, 6, 0.465);
}

.text-wrap {
  word-break: break-word;
  font-size: 1rem;
}

.hero-name {
  color: #234d2e;
  font-weight: bold;
}

.more-btn {
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  border: 1px solid #2a6f47;
  border-radius: 50px;
  padding-right: 48px;
}

.more-btn p {
  z-index: 2;
}

/* Circle on the right */
.circle {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 38px;
  border-radius: 50%;
  background-color: #2a6f47;
  z-index: 3;
}

/* Icon inside the circle */
.circle .v-icon {
  font-size: 18px;
  color: white !important;
}

/* Pseudo-element for the background transition */
.more-btn::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background-color: #2a6f47;
  z-index: 1;
  transition: width 0.3s ease;
}

/* On hover, expand the background from right to left */
.more-btn:hover::before {
  width: 100%;
  right: 0;
  left: auto;
}

/* Ensure text and border remain white on hover */
.more-btn:hover {
  color: white !important;
  border-color: #2a6f47 !important;
}

/* Ensure the text and circle remain visible */
.more-btn .v-btn__content {
  position: relative;
  z-index: 2;
  color: white !important;
}

/* Ensure the button text remains white even during transition */
.more-btn:hover .v-btn__content {
  color: white !important;
}
</style>
