<template>
<main class="section">
    <div class="container">
        <h1 class="title-1">Skills</h1>
       <ul class="content-list">
        <li class="content-list__item">
            <h2 class="title-2">Frontend</h2>
        <p>Javascript,CSS,HTML,SASS,Vue.js,Vuex,Pug,Api,Git</p>
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
.content-list{
    max-width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 40px;
    margin: 0 auto;
}
.title-2{
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 20px;
    font-weight: 700;
}
.content-list__item{
    font-size: 16px;
    line-height: 1.5;
}
p{
    flex-wrap: wrap;
}
</style>