<script setup>
  import NavBarResponsiveZh from "@/components/chinese/NavBarResponsiveZh.vue";
  import FooterZh from "@/components/chinese/FooterZh.vue";
</script>

<template>
  <NavBarResponsiveZh></NavBarResponsiveZh>
  <div class="contact-screen flex justify-center items-center">
    <p>
      請隨時與我聯繫:<br /><span class="email text-xl md:text-5xl"
        >spencer.sv20<span class="gmail">@gmail.com</span></span
      >
    </p>
  </div>
  <FooterZh></FooterZh>
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
