<template>
    <main class="section">
      <div class="container">
        <h1 class="title-1">Skills</h1>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Frontend</h2>
            <p>Javascript, CSS, HTML, SASS, Vue.js, Vuex, Pug, Api, Git</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Work Experience</h2>
            <ul class="work-list">
              <li class="work-list__item">
                <h3 class="title-3">Wind Lace</h3>
                <p>Project: OQ-OT</p>
                <p>Role: Android Developer</p>
                <p>Description: OQ-OT is a food delivery application that aims to provide timely delivery within 45 minutes throughout Tashkent. As a new startup, I undertook a complete overhaul of the project, rewriting it entirely due to issues such as sluggish performance and frequent crashes in the previous version. The application follows the MVVM pattern and incorporates various technologies including RxJava3, Koin, Room, Retrofit, Glide, Firebase, and custom UI views. Through these enhancements, the application's speed significantly improved by a factor of 1.8-2.2 times.</p>
              </li>
              <li class="work-list__item">
                <h3 class="title-3">Egov</h3>
                <p>Project: OneIdMobile</p>
                <p>Role: Team Lead</p>
                <p>OneIdMobile is a feature-rich mobile application that encompasses various functionalities catering to the needs of citizens of the Republic of Uzbekistan. It allows users to store their official documents, including passports, birth certificates, driver's licenses, student IDs, employment records, and other legal documents securely within the app.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  </template>
  
  <script>
    export default {
      name: 'Skills'
    }
  </script>
  
  <style>
  .content-list {
    max-width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 40px;
    margin: 0 auto;
  }
  .title-2 {
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .title-3 {
    font-size: 30px;
    line-height: 1.3;
    margin-bottom: 15px;
    font-weight: 600;
  }
  .content-list__item {
    font-size: 16px;
    line-height: 1.5;
  }
  .work-list {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  .work-list__item {
    margin-bottom: 20px;
  }
  p {
    flex-wrap: wrap;
    margin: 5px 0;
  }
  </style>
  