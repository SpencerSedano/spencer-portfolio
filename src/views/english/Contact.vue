<script setup>
  import NavBarResponsive from "@/components/NavBarResponsive.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBarResponsive></NavBarResponsive>
  <div class="contact-screen flex justify-center items-center">
    <p>
      Please feel free to email me at:<br /><span
        class="email text-xl md:text-5xl"
        >spencer.sv20<span class="gmail">@gmail.com</span></span
      >
    </p>
  </div>
  <Footer></Footer>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  .contact-screen {
    height: calc(100vh - 96px);
    background-color: #1b263b;
    color: #ffffff;
  }
  .gmail {
    color: #fca311;
  }
</style>
