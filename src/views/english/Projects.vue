<script setup>
  import whatTimeLogo from "@/assets/projects_logos/what_time.png";
  import GithubLogo from "@/assets/projects_logos/github.svg";

  import NavBarResponsive from "@/components/NavBarResponsive.vue";
  import Footer from "@/components/Footer.vue";

  import Card from "@/components/Card.vue";
  import CardDescription from "@/components/CardDescription.vue";

  const linkwhattime = "https://github.com/SpencerSedano/what-time";
  const linkGithubBlog = "https://github.com/SpencerSedano/dcard-homework";

  import { ref } from "vue";

  const whatTimeText = ref({
    CardDescriptionTitle: "Hi",
    CardDescriptionDescription:
      "whatTime was created to rapidly check what is the time between two different countries. I created for personal use but if someone can benefit from this Chrome Extension, welcome to install it. It's simple to use and change the country that you'd like. I'm living abroad and I often want to check if my family's time zone allows me to give them a call. Sometimes when I'm awake, they are sleeping, so I don't want to bother and this helps me rapidly check it out.",
  });

  const GithubBlogText = ref({
    CardDescriptionTitle: "Hi",
    CardDescriptionDescription:
      "This project fecthes issues from Github API and renders it. The user needs to be authenticated with a Github account to create and update an issue. If the user is not authenticated, the user can browse through posts. Project was made using React and Next.js",
  });

  /* ref: .value is not neccesary to use it with template, but with script, it is neccesary */
</script>

<template>
  <NavBarResponsive></NavBarResponsive>

  <div class="md:grid grid-cols-2 gap-y-10 m-14 justify-items-center">
    <Card
      :img_src="whatTimeLogo"
      :link="linkwhattime"
      class="cursor-pointer"
    ></Card>
    <CardDescription
      :card_description_title="whatTimeText.CardDescriptionTitle"
      :card_description_description="whatTimeText.CardDescriptionDescription"
    >
    </CardDescription>
  </div>
  <div class="md:grid grid-cols-2 gap-y-10 m-14 justify-items-center">
    <Card
      :img_src="GithubLogo"
      :link="linkGithubBlog"
      class="cursor-pointer"
    ></Card>
    <CardDescription
      :card_description_title="GithubBlogText.CardDescriptionTitle"
      :card_description_description="GithubBlogText.CardDescriptionDescription"
    >
    </CardDescription>
  </div>

  <Footer></Footer>
</template>
