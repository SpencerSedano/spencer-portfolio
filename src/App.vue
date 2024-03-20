<script setup>
  /* import NavbarResponsive from "./components/NavBarResponsive.vue"; */
  import Footer from "./components/Footer.vue";
</script>

<!-- class="flex flex-col h-screen" -->
<template>
  <div>
    <!-- <NavbarResponsive /> -->
    <router-view> </router-view>
    <!-- <Footer /> -->
  </div>
</template>

<style>
  @font-face {
    font-family: montserrat;
    src: url("@/assets/montserrat/Montserrat-VariableFont_wght.ttf");
  }
</style>
