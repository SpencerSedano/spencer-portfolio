<script>
  export default {
    props: {
      project_image: String,
      link: String,
    },
  };
</script>

<template>
  <div
    class="flex justify-content items-center rounded shadow-lg h-48 p-4 md:w-48"
  >
    <a :href="link" target="_blank">
      <img :src="project_image" alt="Card" />
    </a>
  </div>
</template>
