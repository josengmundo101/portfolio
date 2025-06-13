<script setup>
import HeroImg from '@/assets/hero.jpg'
</script>

<template>
  <v-container fluid class="hero-section">
    <div class="green-overlay"></div>
    <v-row no-gutters align="center">
      <!-- Left Column: Image -->
      <v-col cols="6" class="d-flex justify-center">
        <v-img
          :src="HeroImg"
          alt="Joseph Lucio Quinte"
          max-width="400"
          class="profile-img"
          :style="{ maxHeight: '80vh', objectFit: 'cover' }"
        />
      </v-col>
      <!-- Right Column: Text -->
      <v-col cols="6" class="right-column text-center text-md-left pa-4 text-white">
        <h1 class="hero-name text-h3 mb-5">I'M JOSEPH LUCILO QUINTE.</h1>
        <h2 class="text-h2 mb-5 white--text text-uppercase">FRONT-END DEVELOPER</h2>
        <p class="mt-4 grey--text text-wrap">
          I'm a web designer & front-end developer focused on crafting clean & user-friendly
          experiences. I am passionate about building excellent software that improves the lives of
          those around me.
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

.green-overlay {
  position: absolute;
  top: -100px;
  /* left: 0; */
  width: 100%;
  min-height: 100vh;
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

.profile-img {
  border-radius: 20px;
  z-index: 1;
  max-width: 90%;
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

@media (max-width: 960px) {
  .profile-img {
    max-width: 70%;
  }
  .text-h4 {
    font-size: 1.5rem !important;
  }
  .text-h6 {
    font-size: 1rem !important;
  }
  .text-body-1 {
    font-size: 0.9rem !important;
  }
}
</style>
