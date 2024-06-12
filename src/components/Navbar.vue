<template>
    <header class="header">
    <div class="header__wrapper">
      <h1 class="header_title"><strong>Hi, my name is <em>Javohir</em></strong><br>an android developer </h1>
      <div class="header__text">
        <p>Hi there, I'm <em>Javohir</em>, an experienced Android Developer with 5+ years of experience in designing and building cutting-edge mobile applications. I specialize in developing scalable and robust Android applications using the latest tools and technologies. My expertise includes Java, Kotlin, Android Studio, and various third-party libraries. I am passionate about creating seamless user experiences and delivering high-quality code. Let's connect and discuss how I can contribute to your next project.</p>
      </div>
      <a href="./assets/img/doc.pdf" download="filename.pdf" class="btn">Download CV</a>

  </div>
  </header>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
.header {
  background-color: #171718;
  color: white;
  min-height: 730px;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('../assets/img/Abstract.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
}

.header__wrapper {
  max-width: 660px;
  padding: 0 15px;
}

.header_title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 20px;
}

.header_title strong {
  font-size: 60px;
  font-weight: 700;
}

.header_title em {
  font-style: normal;
  color: #5C62EC;
}

.header__text {
  font-size: 18px;
  line-height: 1.333;
  margin-bottom: 40px;
}

.btn {
  display: inline-block;
  height: 48px;
  padding: 12px 28px;
  border-radius: 5px;
  background-color: #5C62EC;
  color: white;
  letter-spacing: 0.15px;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s ease-in;
}

.btn:hover {
  opacity: 0.8;
}

.btn:active {
  position: relative;
  top: 1px;
}

em {
  font-style: normal;
  color: #5C62EC;
}

@media (max-width: 620px) {
  .header {
    padding: 100px 0; 
  }
  
  .header__wrapper {
    min-height: 530px;
    padding: 0 10px; 
  }

  .header_title {
    font-size: 32px;
    margin-bottom: 15px; 
  }



  .header__text {
    margin-bottom: 20px; 
    font-size: 16px; 
  }

  
}

</style>
