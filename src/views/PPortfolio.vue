<script setup>
import { ref, computed } from 'vue'
import carRental from '@/assets/CarRental.jpg'
import marv from '@/assets/Marv.jpg'
import cottageCoast from '@/assets/CottageCoast.png'
import pharmaSpot from '@/assets/pharmaspot.png'
import bh from '@/assets/Dashboard.png'
import calculator from '@/assets/calculator - Copy.png'
import etchASketch from '@/assets/etchsketch - Copy.png'
import RockPaperScissors from '@/assets/rock.png'
import weather from '@/assets/weather.png'
import todolist from '@/assets/todolist.png'

// Portfolio Data
const portfolioItems = ref([
  {
    id: 1,
    img: carRental,
    title: 'Car Rental',
    category: 'App',
    filter: 'filter-app',
    description:
      'A comprehensive car rental management system that allows users to book, manage, and track rentals efficiently.',
  },
  {
    id: 2,
    img: bh,
    title: 'Web Boarding House Payment System',
    category: 'App',
    filter: 'filter-app',
    description:
      'A web-based boarding house payment system that simplifies the payment process for tenants and landlords.',
  },
  {
    id: 3,
    img: marv,
    title: 'Marv The Sarcastic Chatbot',
    category: 'App',
    filter: 'filter-app',
    description:
      'An AI-powered chatbot that provides sarcastic responses, enhancing user interaction with humor and wit.',
  },
  {
    id: 4,
    img: cottageCoast,
    title: 'Cottage Coast',
    category: 'App',
    filter: 'filter-app',
    description:
      'A web application for managing and booking coastal cottages, providing users with a seamless booking experience.',
  },
  {
    id: 5,
    img: pharmaSpot,
    title: 'PharmaSpot',
    category: 'App',
    filter: 'filter-app',
    description:
      'A mobile application that connects users with nearby pharmacies, allowing them to order medications and health products conveniently.',
  },
  {
    id: 6,
    img: calculator,
    title: 'Calculator',
    category: 'Simple Projects',
    filter: 'filter-card',
    description:
      'A simple calculator application that performs basic arithmetic operations, designed for quick calculations on the go.',
  },
  {
    id: 7,
    img: etchASketch,
    title: 'Etch A Sketch',
    category: 'Simple Projects',
    filter: 'filter-card',
    description:
      'A digital version of the classic Etch A Sketch toy, allowing users to create drawings by turning knobs on a virtual interface.',
  },
  {
    id: 8,
    img: RockPaperScissors,
    title: 'Rock Paper Scissors Game',
    category: 'Simple Projects',
    filter: 'filter-card',
    description:
      'A fun and interactive game of Rock Paper Scissors, where users can play against the computer or a friend.',
  },
  {
    id: 9,
    img: weather,
    title: 'Weather App',
    category: 'Simple Projects',
    filter: 'filter-card',
    description:
      'A weather application that provides real-time weather updates and forecasts based on user location.',
  },
  {
    id: 10,
    img: todolist,
    title: 'Todo List',
    category: 'Simple Projects',
    filter: 'filter-card',
    description:
      'A simple todo list application that helps users manage their tasks efficiently, with features for adding, editing, and deleting tasks.',
  },
])

// Filters
const filters = ref([
  { label: 'All', value: '*' },
  { label: 'App', value: '.filter-app' },
  { label: 'Simple Projects', value: '.filter-card' },
])

// Selected Filter
const selectedFilter = ref('*')

// Hover State
const hover = ref({})

// Computed Filtered Items
const filteredItems = computed(() => {
  if (selectedFilter.value === '*') return portfolioItems.value
  return portfolioItems.value.filter(
    (item) => item.filter === selectedFilter.value.replace('.', ''),
  )
})

// Filter Items Function
const filterItems = (value) => {
  selectedFilter.value = value
}
</script>

<template>
  <v-container fluid class="">
    <!-- Section Title -->
    <h1 class="header text-h3 text-center mt-5 text-uppercase">Portfolio</h1>
    <p
      class="text-h6 text-center text-white font-italic font-weight-medium text-uppercase mt-3 mb-5"
    >
      Work
    </p>

    <!-- Portfolio Filters -->
    <v-row>
      <v-col cols="12" class="d-flex justify-center mb-6">
        <v-chip-group
          v-model="selectedFilter"
          active-class="filter-active"
          class="portfolio-filters bg-body rounded-pill px-2 py-1"
          mandatory
        >
          <v-chip
            v-for="filter in filters"
            :key="filter.value"
            :value="filter.value"
            filter
            class="text-capitalize text-body-1 font-weight-medium"
            @click="filterItems(filter.value)"
          >
            {{ filter.label }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <!-- Portfolio Items -->
    <v-row no-gutters class="portfolio-container">
      <v-col v-for="item in filteredItems" :key="item.id" cols="12" md="6" sm="3" class="pa-3">
        <v-card
          class="portfolio-wrap"
          :class="{ 'portfolio-hover': hover[item.id] }"
          @mouseover="hover[item.id] = true"
          @mouseleave="hover[item.id] = false"
        >
          <v-img :src="item.img"></v-img>
          <v-card-text
            class="portfolio-info d-flex flex-column justify-center align-center pa-6"
            :class="{ 'portfolio-info-active': hover[item.id] }"
          >
            <v-card-title class="text-h6 font-weight-regular text-white">{{
              item.title
            }}</v-card-title>
            <v-card-subtitle class="display-1 text-uppercase text-white">{{
              item.category
            }}</v-card-subtitle>
          </v-card-text>
        </v-card>
        <p class="text-white text-center mt-5">{{ item.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.header {
  font-weight: bold;
  color: #234d2e; /* Green color */
}

.portfolio-filters {
  background-color: var(--color-body, #1a1a1a);
  border-radius: 50px;
  padding: 2px 15px;
}

.v-chip {
  cursor: pointer;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #234d2e;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.v-chip.filter-active,
.v-chip:hover {
  color: var(--color-brand, #2a6f47); /* Adjust brand color as needed */
}

.portfolio-wrap {
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--color-body, #1a1a1a);
  transition: 0.3s;
}

.portfolio-wrap::before {
  content: '';
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  z-index: 2;
  opacity: 0;
  transition: all ease-in-out 0.3s;
}

.portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
}

.portfolio-info-active {
  opacity: 1;
}

.portfolio-wrap.portfolio-hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio-info::before,
.portfolio-info::after {
  content: '';
  width: 48px;
  height: 48px;
  position: absolute;
  border: 3px solid #d7dce1;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio-info::before {
  top: 35px;
  left: 35px;
  border-top: 3px solid #d7dce1;
  border-left: 3px solid #d7dce1;
}

.portfolio-info::after {
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid #d7dce1;
  border-right: 3px solid #d7dce1;
}

.portfolio-hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio-hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}

.v-btn.text-grey-darken-1:hover {
  color: var(--color-brand, #2a6f47) !important;
}
</style>
