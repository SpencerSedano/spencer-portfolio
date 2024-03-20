<script>
  import { ref } from "vue";
  export default {
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      const closeMenu = () => (showMenu.value = false);

      return { showMenu, toggleNav, closeMenu };
    },
  };
</script>

<template>
  <div class="nav-color">
    <nav
      class="container px-6 py-8 mx-auto flex flex-col justify-items items-center"
    >
      <div class="">
        <router-link
          to="/blog"
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-amber-400"
          >BLOG
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
          <router-link to="/blog/javascript" @click="closeMenu"
            >JavaScript</router-link
          >
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog/vue" @click="closeMenu">Vue.js</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog/node" @click="closeMenu">Node.js</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog/csharp" @click="closeMenu">C#</router-link>
        </li>
        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog/sql" @click="closeMenu">SQL</router-link>
        </li>

        <li class="text-gray-100 font-bold hover:text-amber-400">
          <router-link to="/blog/math" @click="closeMenu">Math</router-link>
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
