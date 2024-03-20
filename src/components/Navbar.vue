<script setup>
  import Skills from "../views/Skills.vue";
</script>

<template>
  <!-- before color nav is bg-slate-950 -->
  <nav class="p-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="text-white text-xl font-semibold">
          <router-link to="/">Spencer Sedano</router-link>
        </div>
        <ul class="flex space-x-4 text-white">
          <li class="font-bold">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="font-bold">
            <router-link to="/skills">SKILLS</router-link>
          </li>
          <li class="font-bold">
            <router-link to="/projects">PROJECTS</router-link>
          </li>
          <li class="font-bold">
            <router-link to="/education">EDUCATION</router-link>
          </li>
          <li class="font-bold">
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    background: #1b263b;
    font-family: montserrat;
  }
</style>
