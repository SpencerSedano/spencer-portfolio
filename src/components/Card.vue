<script>
  import { ref, onMounted } from "vue";
  import anime from "animejs";

  export default {
    props: {
      skill: String,
      img_src: String,
      link: String,
    },

    setup() {
      const programmingLanguage = ref(null);

      const scaleMouseOver = () => {
        anime({
          targets: programmingLanguage.value,
          scale: 1.2,
        });
      };

      const scaleMouseOut = () => {
        anime({
          targets: programmingLanguage.value,
          scale: 1,
        });
      };

      onMounted(() => {
        programmingLanguage.value.addEventListener("mouseover", scaleMouseOver);
        programmingLanguage.value.addEventListener("mouseout", scaleMouseOut);
      });

      return {
        programmingLanguage,
      };
    },
  };
</script>

<template>
  <div
    class="flex justify-items items-center mx-auto my-auto rounded shadow-lg w-48 h-48 p-6"
  >
    <!-- Image -->
    <a :href="link" target="_blank">
      <img :src="img_src" alt="Card" ref="programmingLanguage" />
    </a>
  </div>
</template>
