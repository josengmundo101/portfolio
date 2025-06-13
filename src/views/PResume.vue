<script setup>
import html from '@/assets/html-logo.png'
import css from '@/assets/css3-logo-png-transparent.png'
import js from '@/assets/js.png'
import supabase from '@/assets/supabase.png'
import react from '@/assets/react.png'
import bootstrap from '@/assets/bootstrap.png'
import vue from '@/assets/vue.png'
import vuetify from '@/assets/vuetify.png'
import laravel from '@/assets/laravel.png'
import sql from '@/assets/sql.png'
import posgres from '@/assets/posgres.png'
import github from '@/assets/github.png'
import git from '@/assets/git.png'
import postman from '@/assets/postman.png'

const person = {
  firstName: 'Joseph Lucilo',
  lastName: 'Quinte',
  age: 24,
  nationality: 'Filipino',
  freelance: 'Available',
  address: 'Lumbocan, Butuan City, Agusan del Norte, Philippines',
  phone: '+63 909 283 8350',
  email: 'jlquinte1901@gmail.com',
  languages: ['English', 'Cebuano', 'Tagalog'],
}
</script>

<template>
  <v-container fluid>
    <h1 class="header text-h3 text-center mt-5">ABOUT ME</h1>
    <p class="text-h6 text-center text-white mt-3 font-italic font-weight-medium text-uppercase">
      Resume
    </p>

    <v-row no-gutters align="center" class="mt-5">
      <!-- Personal Information Column -->
      <v-col cols="6" class="text-white pa-5">
        <v-row>
          <v-col cols="1" class="vertical-line" color="primary"></v-col>
          <v-col cols="11">
            <h2 class="text-h5 mb-5">PERSONAL INFORMATION</h2>
            <v-row>
              <v-col cols="6" class="info-label">
                <p class="text-h6 text-grey mb-5">
                  First Name: <span class="text-white">{{ person.firstName }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Age: <span class="text-white">{{ person.age }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Freelance: <span class="text-white">{{ person.freelance }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Phone: <span class="text-white">{{ person.phone }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Languages: <span class="text-white">{{ person.languages.join(', ') }}</span>
                </p>
              </v-col>
              <v-col cols="6" class="info-value">
                <p class="text-h6 text-grey mb-5">
                  Last Name: <span class="text-white">{{ person.lastName }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Nationality: <span class="text-white">{{ person.nationality }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Address: <span class="text-white">{{ person.address }}</span>
                </p>
                <p class="text-h6 text-grey mb-5">
                  Email: <span class="text-white">{{ person.email }}</span>
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row justify="center" class="mt-5">
          <v-col cols="5">
            <v-card rounded="lg" color="transparent" width="100%" class="e-card pa-5">
              <v-card-text>
                <span class="text-h3 text-green">8</span>
                <div class="d-flex flex-row align-items-center">
                  <v-divider width="50" class="my-2 mr-2" color="white"></v-divider>
                  <span class="text-subtitle-1 text-white">Months of Experience</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card rounded="lg" color="transparent" width="100%" class="e-card pa-5">
              <v-card-text>
                <span class="text-h3 text-green">4</span>
                <div class="d-flex flex-row align-items-center">
                  <v-divider width="50" class="my-2 mr-2" color="white"></v-divider>
                  <span class="text-subtitle-1 text-white">Project Completed</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5">
            <v-card rounded="lg" color="transparent" width="100%" class="e-card pa-5">
              <v-card-text>
                <span class="text-h3 text-green">5</span>
                <div class="d-flex flex-row align-items-center">
                  <v-divider width="50" class="my-2 mr-2" color="white"></v-divider>
                  <span class="text-subtitle-1 text-white">Certified Certificates</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider width="25%" class="mt-12 mb-15 mx-auto" color="white"></v-divider>

    <!-- Stack Section -->
    <p class="text-h6 text-center text-white mt-3 font-italic font-weight-medium text-uppercase">
      My Stack
    </p>
    <!-- first row of stack -->
    <v-row no-gutters class="mt-5 ga-10" justify="center">
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5">
          <v-img :src="html" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="css" max-width="100" class="profile-img mt-3"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="js" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- second row of stack -->
    <v-row no-gutters class="mt-5 ga-10" justify="center">
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="react" max-width="100" class="profile-img mt-2"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="bootstrap" max-width="100" class="profile-img mt-3"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="vuetify" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="vue" max-width="100" class="profile-img mt-3"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="laravel" max-width="100" class="profile-img mt-2"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- third row of stack -->
    <v-row no-gutters class="mt-5 ga-10" justify="center">
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="supabase" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="sql" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="posgres" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="github" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="git" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-white">
        <v-card rounded="lg" color="transparent" class="s-card pa-5" height="100%">
          <v-img :src="postman" max-width="100" class="profile-img"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-divider width="25%" class="mt-12 mb-15 mx-auto" color="white"></v-divider>

    <!-- Experience & Education Section -->
    <p
      class="text-h6 text-center text-white mt-5 mb-5 font-italic font-weight-medium text-uppercase"
    >
      Experience & Education
    </p>
    <!-- Main Content Row -->
    <v-row no-gutters align="stretch" class="mt-5">
      <!-- Experience Column (Left) -->
      <v-col cols="6" class="pa-5">
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center mb-3 position-relative">
              <v-avatar size="50" class="avatar mr-3">
                <v-icon icon="mdi-briefcase" size="25" color="white"></v-icon>
              </v-avatar>
              <div class="y-container">Jan - April 2025</div>
            </div>
            <div class="ml-15">
              <span class="text-h6 text-white">ICT STAFF - OJT</span>
              <p class="text-body-1 text-white word-break">
                Maintaning the system of the agency, computers and other IT equipment, assisting in
                troubleshooting technical issues, and providing support to staff in offices.
              </p>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="d-flex align-center mb-3 position-relative">
              <v-avatar size="50" class="avatar mr-3">
                <v-icon icon="mdi-briefcase" size="25" color="white"></v-icon>
              </v-avatar>
              <div class="y-container">Aug - Oct 2024</div>
            </div>
            <div class="ml-15">
              <span class="text-h6 text-white">Video Edit/UI Designer - Freelance</span>
              <p class="text-body-1 text-white word-break">
                Editing video for youtube, reels, short video to a content creator. At the same time
                designing website for his small business
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <!-- Education Column (Right) -->
      <v-col cols="6" class="pa-5">
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center mb-3 position-relative">
              <v-avatar size="50" class="avatar mr-3">
                <v-icon icon="mdi-briefcase" size="25" color="white"></v-icon>
              </v-avatar>
              <div class="y-container">2025</div>
            </div>
            <div class="ml-15">
              <span class="text-h6 text-white">IT Degree - Caraga State University</span>
              <p class="text-body-1 text-white word-break">
                Pursuing an IT Degree with a focus on software development and UI/UX design.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.header {
  font-weight: bold;
  color: #234d2e; /* Green color */
}

.e-card {
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    border 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.e-card:hover {
  transform: rotate(2deg);
  border: 1px solid #2a6f47; /* Green border on hover */
  box-shadow: 0 4px 8px rgba(1, 255, 6, 0.2);
}

.s-card {
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    border 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.s-card:hover {
  transform: rotateY(360deg);
  border: 1px solid #2a6f47; /* Green border on hover */
  box-shadow: 0 4px 8px rgba(1, 255, 6, 0.2);
}

.vertical-line {
  border-left: 4px solid #1f4529;
  height: 100%;
}

.position-relative {
  position: relative;
}

.avatar {
  background-color: #2a6f47; /* Green background for the avatar */
}

.y-container {
  color: #b5b5b5;
  background-color: #313131;
  padding: 5px;
  border-radius: 5px;
}
</style>
