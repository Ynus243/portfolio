<template>
    <main class="section">
      <div class="container">
        <h1 class="title-1">Contacts</h1>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Location</h2>
            <p>Uzbekistan, Tashkent</p>
          </li>
        </ul>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Telegram</h2>
            <p>+998(90)117-88-80</p>
          </li>
        </ul>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Email</h2>
            <p>iunus949@gmail.com</p>
          </li>
        </ul>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  }
  </script>
  
  <style>
  .section {
    margin-top: 10px;
  }
  
  .container {
    padding-top: 15px; 
  }
  
  .content-list {
    max-width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 20px;
    margin: 0 auto;
  }
  
  .title-2 {
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .title-1 {
    margin-bottom: 10px;
  }
  
  .content-list__item {
    font-size: 18px;
    line-height: 1.5;
  }
  </style>
  