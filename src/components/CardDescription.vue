<script>
  export default {
    props: {
      card_description_title: String,
      card_description_description: String,
    },
  };
</script>

<template>
  <div>
    <a
      href="#"
      class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ card_description_title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ card_description_description }}
      </p>
    </a>
  </div>
</template>

<style scoped>
  * {
    font-family: "Montserrat", sans-serif;
  }
</style>
