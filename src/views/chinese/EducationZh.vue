<script setup>
  import NavBarResponsiveZh from "@/components/chinese/NavBarResponsiveZh.vue";
  import FooterZh from "@/components/chinese/FooterZh.vue";
  // Importing download button
  import DownloadButton from "@/components/downloadButton.vue";

  const downloadPdf = () => {
    // Specify the correct path to your PDF file using the local server URL
    const pdfFilePath =
      "https://node-download.azurewebsites.net/spencer-resume.pdf";

    // Use window.location.href to trigger the download
    window.open(pdfFilePath, "_blank");
  };
</script>

<template>
  <NavBarResponsiveZh></NavBarResponsiveZh>
  <div class="resume flex justify-center items-center mt-16 mb-16">
    <div class="resumePage md:border-2 ml-32 mr-32 pt-16 shadow-md">
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-semibold lg:text-4xl">SPENCER SEDANO VELASCO</h1>
        <div
          class="emailAndNumber flex flex-col justify-center items-center sm:flex-row md:flex-row"
        >
          <p class="font-semibold">spencer.sv20@gmail.com &nbsp</p>
          <span class="hidden md:block font-semibold"> - </span>
          <p class="font-semibold">&nbsp 0960907466</p>
        </div>
        <br />
        <hr class="hrLine" />
      </div>
      <!-- Starts Resume Main Information -->
      <div class="md:pl-24 md:pr-24 md:pt-16 md:pb-16">
        <h2 class="font-bold">學歷</h2>
        <!-- PU -->
        <div class="puContainer lg:flex justify-between">
          <div class="educationSec">
            <h3 class="font-bold">靜宜大學</h3>
            <p>國際資訊學士學位學程</p>
          </div>
          <div class="educationSecDate">
            <h3 class="font-bold">2022 - 至今</h3>
            <p>台中, 台灣</p>
          </div>
        </div>
        <!-- PU finish -->
        <br />
        <hr class="hrLine" />
        <h2 class="font-bold">就業經驗</h2>
        <br />
        <!-- care.coach -->
        <div
          class="careCoachContainer bg-gray-100 lg:flex justify-between lg:bg-transparent"
        >
          <div class="careCoachInfo">
            <h3 class="font-bold">care.coach</h3>
            <p>Health Advocate</p>
            <ul class="list-disc hidden lg:block">
              <li>照顧客戶並提供他們社會的心理支持、陪伴和同理心</li>
              <li>幫助他們改善接受醫療保健和整體生活的體驗</li>
              <li>以上皆是透過care.coach公司的平板來與顧客做互動的技術</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="careCoachDate">
            <h3 class="font-bold">2021.12 - 2022.08</h3>
            <p>利馬, 祕魯</p>
          </div>
        </div>
        <!-- care.coach finish -->

        <!-- VA Callers -->
        <div class="vaCallersContainer lg:flex justify-between">
          <div class="vaCallersInfo">
            <h3 class="font-bold">VA Callers</h3>
            <p>雙語代理人</p>
            <ul class="list-disc hidden lg:block">
              <li>和想要出售房產的客戶溝通</li>
              <li>收集房產的資訊</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="vaCallersDate">
            <h3 class="font-bold">2021.04 - 2021.11</h3>
            <p>利馬, 祕魯</p>
          </div>
        </div>
        <!-- VA Callers finish -->

        <!-- GLACOR -->
        <div
          class="glacorContainer bg-gray-100 lg:flex justify-between lg:bg-transparent"
        >
          <div class="glacorInfo">
            <h3 class="font-bold">GLACOR</h3>
            <p>物流助理</p>
            <ul class="list-disc hidden lg:block">
              <li>貨運、倉儲、資產和維護等支援服務的綜合管理</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="glacorDate">
            <h3 class="font-bold">2020.11 - 2021.04</h3>
            <p>利馬, 祕魯</p>
          </div>
        </div>
        <!-- GLACOR finish -->

        <!-- Vithali Nutricion -->
        <div class="vithaliNutricionContainer lg:flex justify-between">
          <div class="vithaliNutricionInfo">
            <h3 class="font-bold">Vithali Nutricion Peru</h3>
            <p>Web Developer</p>
            <ul class="list-disc hidden lg:block">
              <li>開發Vithali Nutricion的網站</li>
              <li>使用了 HTML, CSS, JavaScript, 和前端框架為Bootstrap</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="vithaliNutricionDate">
            <h3 class="font-bold">2020.09 - 2020.11</h3>
            <p>利馬, 祕魯</p>
          </div>
        </div>
        <!-- Vithali Nutricion finish -->

        <!-- Church -->
        <div
          class="churchContainer bg-gray-100 lg:flex justify-between lg:bg-transparent"
        >
          <div class="churchInfo">
            <h3 class="font-bold">
              The Church of Jesus Christ of Latter-day Saints
            </h3>
            <p>財務秘書兼傳教士</p>
            <ul class="list-disc hidden lg:block">
              <li>解決在祕魯持有美國銀行信用卡之不便問題</li>
              <li>幫助管理所有傳教士的旅行、食物和住宿等費用</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="churchDate">
            <h3 class="font-bold">2018.08 - 2020.08</h3>
            <p>萬卡約, 祕魯</p>
          </div>
        </div>
        <!--  <br />
        <hr class="hrLine" />
        <h2 class="font-bold">專案</h2>
        <br /> -->
        <!-- All Taiwan Project -->
        <!-- <div class="allTaiwanContainer">
          <h3 class="font-bold">All Taiwan</h3>
          <p class="">
            這個專案是我因申請駐秘魯代表處的台灣獎學金計畫的學習計畫內容而創建的。
            使用語言: HTML, CSS, JavaScript
          </p>
          <span>https://personalprojecttw.glitch.me</span>
        </div> -->
        <!-- All Taiwan Project Finish -->

        <br />
        <hr class="hrLine" />
        <h2 class="font-bold">技能</h2>
        <br />
        <div class="skillsContainer">
          <ul class="sm:list-none md:list-disc">
            <li>程式語言: HTML, CSS, JavaScript, Python</li>
            <li>框架、函式庫: Node.js, Vue.js, React</li>
            <li>語言: 英文、中文、西班牙文</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="downloadResume flex justify-center">
    <DownloadButton @click="downloadPdf()">Download Resume</DownloadButton>
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
  .hrLine {
    border: 0;
    display: block;
    width: 96%;
    background-color: #000000;
    height: 1.5px;
  }
</style>
