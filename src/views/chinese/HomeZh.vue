<script setup>
  // SpencerFoto is directly imported through the src=""
  //import SpencerFotoNoBackground from "../assets/spencerfotonobackground.png";
  import NavBarResponsiveZh from "@/components/chinese/NavBarResponsiveZh.vue";
  import FooterZh from "@/components/chinese/FooterZh.vue";

  import anime from "animejs";
  import { ref, onMounted } from "vue";

  const githubLink = "https://github.com/SpencerSedano";
  const linkedinLink = "https://www.linkedin.com/in/spencersedano/";

  const mediaIconGithub = ref(null);
  const mediaIconLinkedin = ref(null);

  onMounted(() => {
    anime({
      targets: [mediaIconGithub.value, mediaIconLinkedin.value],
      translateY: -10,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  });
</script>

<template>
  <NavBarResponsiveZh></NavBarResponsiveZh>
  <main class="home sm:grid grid-cols-2 h-full content-center p-10">
    <div class="flex flex-col justify-center items-center">
      <h2 class="font-bold text-sm sm:text-2xl xl:text-4xl">
        我是<span>余青澔</span> Spencer
      </h2>
      <h1 class="text-xl sm:text-3xl xl:text-5xl">軟體開發<span>.</span></h1>
    </div>
    <div class="flex justify-center items-center">
      <img
        class="h-72 m-9 sm:h-auto sm:w-80"
        src="@/assets/spencerfotonobackgroundcropped.png"
        alt="Spencer Sedano"
      />
    </div>

    <div class="media flex justify-center gap-x-5">
      <!-- Github Icon -->
      <span class="contact-icon cursor-pointer">
        <a :href="githubLink" target="_blank">
          <img
            ref="mediaIconGithub"
            class="h-10 bg-white rounded-full"
            src="@/assets/github1.svg"
            alt="github"
          />
        </a>
      </span>
      <!-- Linkedin Icon -->
      <span class="contact-icon cursor-pointer">
        <a :href="linkedinLink" target="_blank">
          <img
            ref="mediaIconLinkedin"
            class="h-10"
            src="@/assets/linkedin.svg"
            alt="linkedin"
          />
        </a>
      </span>
      <!-- <span class="rounded-full h-24 w-24 bg-white">Dark/Light</span> -->
    </div>
  </main>
  <div class="hireButtonContainer flex justify-center items-center h-24">
    <router-link to="/contactZh">
      <button
        class="hireButton relative -top-1 -left-1 text-white bg-gray-800 py-2.5 px-5 font-medium uppercase transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
      >
        僱用我
      </button>
    </router-link>
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

  main {
    background-color: #1b263b;
    color: #ffffff;
  }

  span {
    color: #fca311;
  }
  .hireButtonContainer {
    background: #d8d8d8;
  }
  .hireButton {
    background: #1b263b;
  }
</style>
