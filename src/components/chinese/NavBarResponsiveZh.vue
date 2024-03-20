<script>
  import { ref } from "vue";
  export default {
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      const closeMenu = () => (showMenu.value = false);

      /* Make the World Icon Reactive */
      let changeLang = ref(false);

      return { showMenu, toggleNav, closeMenu, changeLang };
    },
  };
</script>

<template>
  <div class="nav-color">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/zh"
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-amber-400"
          >余青澔
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/zh" @click="closeMenu">主頁</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/skills-zh" @click="closeMenu">技能</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/projects-zh" @click="closeMenu">專案</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/education-zh" @click="closeMenu">學歷</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/contact-zh" @click="closeMenu">聯係</router-link>
        </li>
        <!-- TODO: Blog Option -->
        <!--  <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog-zh" @click="closeMenu">部落格</router-link>
        </li> -->
        <!-- [x]: Click the WorldIcon will take me to /zh, when I click it again, it should take me to / -->
        <!--  WorldIcon to go to the Chinese translated website-->
        <li class="list-none">
          <router-link :to="changeLang ? '/zh' : '/'" @click="closeMenu">
            <img
              class="h-9"
              src="@/assets/worldicon.svg"
              alt="Translate Language"
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  .nav-color {
    background: #1b263b;
    font-family: montserrat;
  }
</style>
