<template>
  <div>
    <nav class="nav">
      <div class="container">
        <nav class="nav-row">
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
        </nav>
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
</style>

