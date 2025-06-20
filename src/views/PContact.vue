<script setup>
import contact from '@/assets/contact.png'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <v-responsive :class="mobile ? 'mb-10' : ''">
    <v-container fluid>
      <h1 class="header text-h3 text-center mt-2 text-uppercase">
        Are you in need of my services?
      </h1>
      <p class="text-h6 text-center text-white mt-3 font-italic font-weight-medium text-uppercase">
        Contact
      </p>
      <v-row no-gutters align="center" class="mt-5">
        <v-col cols="12" md="6" class="d-flex justify-center align-center mt-5">
          <v-img
            :src="contact"
            max-width="500"
            class="profile-img"
            :style="{ maxHeight: '80vh', objectFit: 'cover' }"
          />
        </v-col>
        <v-col cols="12" md="6" class="mt-10">
          <v-row justify="center">
            <v-col cols="10" class="container mb-5">
              <div class="d-flex">
                <v-icon class="icon">mdi-map-marker</v-icon>
                <h3 class="text-h6">My Address</h3>
              </div>
              <div class="d-flex ml-10">
                <v-icon>mdi-map</v-icon>
                <a href="https://maps.app.goo.gl/mM9may7DLSy8jz3h9" target="_blank">
                  <p>Butuan City, Philippines</p>
                </a>
              </div>
            </v-col>
            <v-col cols="10" class="container mb-5">
              <div class="d-flex">
                <v-icon class="icon">mdi-share-variant</v-icon>
                <h3 class="text-h6">Social Profile</h3>
              </div>
              <div class="d-flex ml-10">
                <a href="https://www.facebook.com/share/1AUXRYifxj/" target="_blank">
                  <v-icon class="mr-2">mdi-facebook</v-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-lucilo-quinte-320018366/"
                  target="_blank"
                >
                  <v-icon class="mr-2">mdi-linkedin</v-icon>
                </a>
                <a href="https://github.com/josengmundo101">
                  <v-icon>mdi-github</v-icon>
                </a>
              </div>
            </v-col>
            <v-col cols="10" class="container mb-5">
              <div class="d-flex">
                <v-icon class="icon">mdi-email</v-icon>
                <h3 class="text-h6">Personal Email</h3>
              </div>
              <div class="d-flex ml-10">
                <v-icon>mdi-google</v-icon>
                <p class="ml-2">jlquinte1901@gmail.com</p>
              </div>
            </v-col>
            <v-col cols="10" class="container mb-5">
              <div class="d-flex">
                <v-icon class="icon">mdi-phone-in-talk</v-icon>
                <h3 class="text-h6">WhatsApp Number</h3>
              </div>
              <div class="d-flex ml-10">
                <v-icon>mdi-whatsapp</v-icon>
                <p class="ml-2">+63 909 283 8350</p>
              </div>
            </v-col>
            <v-col cols="10" class="container mb-5">
              <div class="d-flex">
                <v-icon class="icon">mdi-link</v-icon>
                <h3 class="text-h6">Curriculum Vitae</h3>
              </div>
              <div class="d-flex ml-10">
                <v-icon>mdi-dropbox</v-icon>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<style scoped>
.contact-section {
  min-height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.header {
  font-weight: bold;
  color: #234d2e;
}

.profile-img {
  border-radius: 20px;
  z-index: 2;
  max-width: 90%;
}

.container {
  color: #959595;
  padding: 20px;
  width: 100px;
  background: rgba(255, 255, 255, 0.08);
}

.icon {
  font-size: 24px;
  color: #39794b;
  border-radius: 50%;
  padding: 20px;
  margin-right: 10px;
  float: left;
  background: rgba(255, 255, 255, 0.1);
}

a {
  color: #eaeaea;
  text-decoration: none;
}
</style>
