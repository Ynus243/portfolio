<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-row">
          <RouterLink to="/" class="logo"><strong>portfolio</strong></RouterLink>
          <ul class="nav-list">
            <li class="nav-list__item">
              <RouterLink to="/" class="nav-list__link">Projects</RouterLink>
            </li>
            <li class="nav-list__item">
              <RouterLink to="/skills" class="nav-list__link">Skills</RouterLink>
            </li>
            <li class="nav-list__item">
              <RouterLink to="/contacts" class="nav-list__link">Contacts</RouterLink>
            </li>
          </ul>
          <div class="burger">
            <span></span>
          </div>
        </div>
      </div>
    </nav>
    
    <Navbar />
  </div>
</template>

<script>
import Projects from '../components/Projects.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Contact from './Contact.vue';
import Skills from './Skills.vue';

export default {
  name: 'Menu',
  components: {
    Projects,
    Footer,
    Navbar,
    Skills,
    Contact
  },

  mounted() {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list__link');
    
    if (burger && navList) {
      burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('open');
      });
      
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          burger.classList.remove('active');
          navList.classList.remove('open');
        });
      });
    } else {
      console.error('Элементы с классами .burger или .nav-list не найдены.');
    }
  }
};
</script>

<style>
.nav {
  position: fixed; 
  top: 0;
  width: 100%;
  background-color: #17171879;
  backdrop-filter: blur(3px);
  color: white;
  padding: 20px 0;
  border-bottom: 1px solid #26292D;
  letter-spacing: normal;
  z-index: 1000; 
}
.nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
}
.logo {
  color: white;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
}
.nav-list {
  display: flex;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
.nav-list__link {
  color: white;
  transition: opacity 0.2s ease-in;
}
.nav-list__link:hover {
  opacity: 0.8;
}
.nav-list__link {
  position: relative;
  border-bottom: 2px solid #5c61ec00;
  transition: .3s;
}

main {
  margin-top: 80px; 
}
.router-link-exact-active {
  border-bottom: 2px solid #5C62EC;
  padding-bottom: 5px;
}
.logo.router-link-exact-active{
  border-bottom: none;
  padding-bottom: 0;
}
.burger{
  display: none;
  position: relative;
  z-index: 50;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 18px;
}
.burger span{
  height: 2px;
  width: 80%;
  transform: scale(1);
  background-color: #fff;
}
.burger::before, .burger::after{
 content: '';
 position: absolute;
 height: 2px;
 width: 100%;
 background-color: #fff;
 transition: all 0.3s ease 0s;
}
.burger::before {top: 0}
.burger::after {bottom: 0;}

.burger.active span {transform: scale(0)}
 
.burger.active::before {
  top: 50%;
  transform: rotate(-45deg) translate(0, -50%);
}
.burger.active::after {
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
}
.open{
  display: flex !important;
}

@media (max-width: 440px) {
  .burger {
    display: flex;
  }

  .nav-list {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav-list.open {
    display: flex;
  }
}
</style>



