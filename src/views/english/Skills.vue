<script setup>
  import NavBarResponsive from "@/components/NavBarResponsive.vue";
  import Footer from "@/components/Footer.vue";

  import Card from "@/components/Card.vue";
  import JavaScriptImg from "@/assets/programminglanguages/javascript.svg";
  import PythonImg from "@/assets/programminglanguages/python.svg";
  import NodejsImg from "@/assets/programminglanguages/nodejs.svg";
  import VuejsImg from "@/assets/programminglanguages/vue.svg";
  import ReactImg from "@/assets/programminglanguages/react.svg";
  import HTMLImg from "@/assets/programminglanguages/html.svg";
  import CSSImg from "@/assets/programminglanguages/css.svg";
  import GitImg from "@/assets/programminglanguages/git.svg";
  import PHPImg from "@/assets/programminglanguages/php.svg";
  import LaravelImg from "@/assets/programminglanguages/laravel.svg";
  import CsharpImg from "@/assets/programminglanguages/csharp.svg";
  import DockerImg from "@/assets/programminglanguages/docker.svg";
  import KubernetsImg from "@/assets/programminglanguages/kubernets.svg";

  const mySkills = [
    { id: "JavaScript", src: JavaScriptImg },
    { id: "Python", src: PythonImg },
    { id: "Node.js", src: NodejsImg },
    { id: "Vue.js", src: VuejsImg },
    { id: "React", src: ReactImg },
    { id: "HTML", src: HTMLImg },
    { id: "CSS", src: CSSImg },
    { id: "Git", src: GitImg },
    /*  { id: "PHP", src: PHPImg },
      { id: "Laravel", src: LaravelImg },
      { id: "C#", src: CsharpImg },
      { id: "Docker", src: DockerImg },
      { id: "Kubernets", src: KubernetsImg }, */
  ];
</script>

<template>
  <NavBarResponsive></NavBarResponsive>
  <div
    class="flex gap-y-8 md:flex flex-wrap justify-center items-center gap-x-14 m-14"
  >
    <Card
      v-for="(mySkill, index) in mySkills"
      :key="index"
      :img_src="mySkill.src"
      :skill="mySkill.id"
    ></Card>
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
</style>
