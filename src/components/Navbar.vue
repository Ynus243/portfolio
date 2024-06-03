<template>
    <header class="header">
    <div class="header__wrapper">
      <h1 class="header_title"><strong>Hi, my name is <em>Yunus</em></strong><br>a frontend developer </h1>
      <div class="header__text">
        <p>with passion for learning and creating.</p>
      </div>
      <a href="" class="btn">Download CV</a>
  </div>
  </header>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
.header{
  background-color: #171718;
  color: white;
  min-height: 695px;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('../assets/img/Abstract.png');
  background-repeat:no-repeat ;
  background-size: auto;
  background-position:center center ;
}
.header__wrapper{
  max-width: 660px;
  padding: 0 15px;
}
.header_title{
font-size: 40px;
font-weight: 700;
line-height: 1,4;
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
.header__text{
font-size: 18px;
line-height: 1.333;
margin-bottom: 40px;
}
.btn{
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
.btn:hover{
  opacity: 0.8;
}
.btn:active{
  position: relative;
  top: 1px;
}
</style>
