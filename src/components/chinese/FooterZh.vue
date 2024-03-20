<script setup></script>

<template>
  <div>
    <footer class="bg-white rounded-lg shadow mt-auto">
      <div class="p-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >余青澔</span
            >
          </a>
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">關於我</a>
            </li>
            <li>
              <a
                href="https://github.com/SpencerSedano"
                target="_blank"
                class="hover:underline me-4 md:me-6"
                >Github</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/spencersedano/"
                target="_blank"
                class="hover:underline me-4 md:me-6"
                >Linkedin</a
              >
            </li>
            <li>
              <router-link to="/contact" class="hover:underline"
                >聯係</router-link
              >
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center"
          >© 113 <a href="#" class="hover:underline">青澔</a>.</span
        >
      </div>
    </footer>
  </div>
</template>
