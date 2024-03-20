<script setup>
  import whatTimeLogo from "@/assets/projects_logos/what_time.png";
  import GithubLogo from "@/assets/projects_logos/github.svg";

  import NavBarResponsiveZh from "@/components/chinese/NavBarResponsiveZh.vue";
  import FooterZh from "@/components/chinese/FooterZh.vue";

  import Card from "@/components/chinese/CardZh.vue";
  import CardDescription from "@/components/CardDescription.vue";

  import { ref } from "vue";

  const linkwhattime = "https://github.com/SpencerSedano/what-time";
  const linkGithubBlog = "https://github.com/SpencerSedano/dcard-homework";

  const whatTimeText = ref({
    CardDescriptionTitle: "WhatTime",
    CardDescriptionDescription:
      "的創建是為了快速檢查兩個不同國家之間的時間。 我創建的是供個人使用的，但如果有人可以從此 Chrome 擴充功能中受益，歡迎安裝它。 使用和更改您想要的國家/地區非常簡單。 我住在國外，常常想檢查一下我家人的時區是否允許我打電話給他們。 有時當我醒著時，他們正在睡覺，所以我不想打擾，這有助於我快速檢查。",
  });

  const GithubBlogText = ref({
    CardDescriptionTitle: "Github API Blog",
    CardDescriptionDescription:
      "該專案從 Github API 獲取問題並進行渲染。 使用者需要透過 Github 帳戶進行身份驗證才能建立和更新問題。 如果用戶未經過身份驗證，則用戶可以瀏覽貼文。 專案是使用 React 和 Next.js 製作的",
  });
</script>

<template>
  <NavBarResponsiveZh></NavBarResponsiveZh>
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
  <FooterZh></FooterZh>
</template>
