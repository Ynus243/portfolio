<template>
    <main class="section">
        <div class="container">
            <h2 class="title-1">Projects</h2>
            <ul class="projects">
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/1.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Github finder</h3>
                    <p class="skills">Skills: Vue.js,API,Javascript</p>
                </li>
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/2.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Cinephile</h3>
                    <p class="skills">Skills: Vue.js,API,Javascript,Vuex</p>
                </li>
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/3.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">todo-list</h3>
                    <p class="skills">Skills: Vue.js,API,Javascript</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Projects'
    
    }
</script>

<style>
.section{
padding: 70px 0;
}
.title-1{
margin-bottom: 60px;
font-size: 60px;
font-weight: 700;
text-align: center;
line-height: 1.3;
color: #5C62EC;
}
.projects{
display: flex;
flex-wrap: wrap;
column-gap: 30px;
row-gap: 30px;
justify-content: center;
}
.project{
max-width: 370px;
background-color: white;
box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
.project_img{
    border-radius: 10px;
}
.project__title{
padding: 15px 20px 25px;
font-weight: 700;
font-size: 24px;
line-height: 1.3;
color: #171718;
}
.skills{
    padding: 20px 20px 20px;
font-weight: 700;
font-size: 20px;
line-height: 1.3;
color: #171718;  
}
</style>