<script setup>
  import NavBarResponsive from "@/components/NavBarResponsive.vue";
  import Footer from "@/components/Footer.vue";
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
  <NavBarResponsive></NavBarResponsive>
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
        <h2 class="font-bold">EDUCATION</h2>
        <!-- PU -->
        <div class="puContainer lg:flex justify-between">
          <div class="educationSec">
            <h3 class="font-bold">Providence University</h3>
            <p>Computer Science and Information Engineering</p>
          </div>
          <div class="educationSecDate">
            <h3 class="font-bold">Sep 2022 - Present</h3>
            <p>Taichung, Taiwan</p>
          </div>
        </div>
        <!-- PU finish -->
        <br />
        <hr class="hrLine" />
        <h2 class="font-bold">EMPLOYMENT</h2>
        <br />
        <!-- care.coach -->
        <div
          class="careCoachContainer bg-gray-100 lg:flex justify-between lg:bg-transparent"
        >
          <div class="careCoachInfo">
            <h3 class="font-bold">care.coach</h3>
            <p>Health Advocate</p>
            <ul class="list-disc hidden lg:block">
              <li>
                Looked after clients and provided them with psychosocial
                support, companionship, empathy.
              </li>
              <li>
                Helped them to improve their experience receiving health care
                and living life in general.
              </li>
              <li>
                All of this was possible through technology using a tablet-based
                health tool.
              </li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="careCoachDate">
            <h3 class="font-bold">Dec 2021 - Aug 2022</h3>
            <p>Lima, Peru</p>
          </div>
        </div>
        <!-- care.coach finish -->

        <!-- VA Callers -->
        <div class="vaCallersContainer lg:flex justify-between">
          <div class="vaCallersInfo">
            <h3 class="font-bold">VA Callers</h3>
            <p>Bilingual Agent</p>
            <ul class="list-disc hidden lg:block">
              <li>
                Communicated with clients who wanted to sell their property.
              </li>
              <li>Gathered property information.</li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="vaCallersDate">
            <h3 class="font-bold">Apr 2021 - Nov 2021</h3>
            <p>Lima, Peru</p>
          </div>
        </div>
        <!-- VA Callers finish -->

        <!-- GLACOR -->
        <div
          class="glacorContainer bg-gray-100 lg:flex justify-between lg:bg-transparent"
        >
          <div class="glacorInfo">
            <h3 class="font-bold">GLACOR</h3>
            <p>Logistics Assistant</p>
            <ul class="list-disc hidden lg:block">
              <li>
                General management of the supporting services of freight
                transport, storage, assets, and maintenance.
              </li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="glacorDate">
            <h3 class="font-bold">Nov 2020 - Apr 2021</h3>
            <p>Lima, Peru</p>
          </div>
        </div>
        <!-- GLACOR finish -->

        <!-- Vithali Nutricion -->
        <div class="vithaliNutricionContainer lg:flex justify-between">
          <div class="vithaliNutricionInfo">
            <h3 class="font-bold">Vithali Nutricion Peru</h3>
            <p>Web Developer</p>
            <ul class="list-disc hidden lg:block">
              <li>Made Vithali Nutricion's website.</li>
              <li>
                Used HTML, CSS, JavaScript, and a front-end framework called
                Bootstrap.
              </li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="vithaliNutricionDate">
            <h3 class="font-bold">Sep 2020 - Apr 2021</h3>
            <p>Lima, Peru</p>
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
            <p>Finance Secretary and Preacher</p>
            <ul class="list-disc hidden lg:block">
              <li>
                Solved any inconvenience with the Bank of America's cardholders.
              </li>
              <li>
                Helped in the administration of expensessuch astrips, food, and
                housing of all missionaries.
              </li>
            </ul>
            <br class="hidden lg:block" />
          </div>
          <div class="churchDate">
            <h3 class="font-bold">Aug 2018 - Aug 2020</h3>
            <p>Huancayo, Peru</p>
          </div>
        </div>
        <!-- <br />
        <hr class="hrLine" />
        <h2 class="font-bold">PROJECTS</h2>
        <br /> -->
        <!-- All Taiwan Project -->
        <!--   <div class="allTaiwanContainer">
          <h3 class="font-bold">All Taiwan</h3>
          <p class="">
            Project created as part of my study plan document for applying to
            the Taiwan Scholarship Program at the Taipei Economic and Cultural
            Office in Peru. The tools used for this project include HTML, CSS,
            and JavaScript.
          </p>
          <span>https://personalprojecttw.glitch.me</span>
        </div> -->
        <!-- All Taiwan Project Finish -->

        <br />
        <hr class="hrLine" />
        <h2 class="font-bold">SKILLS</h2>
        <br />
        <div class="skillsContainer">
          <ul class="sm:list-none md:list-disc">
            <li>Programming Languages: HTML, CSS, JavaScript, Python</li>
            <li>Frameworks and Libraries: Node.js, Vue.js, React</li>
            <li>Languages: English, Chinese, Spanish</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="downloadResume flex justify-center">
    <DownloadButton @click="downloadPdf()">Download Resume</DownloadButton>
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
  .hrLine {
    border: 0;
    display: block;
    width: 96%;
    background-color: #000000;
    height: 1.5px;
  }
</style>
