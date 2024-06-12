<template>
    <main class="section">
        <div class="container">
            <h2 class="title-1">Projects</h2>
            <ul class="projects">
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/1.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Github finder</h3>
                </li>
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/2.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Cinephile</h3>
                </li>
                <li class="project">
                    <a href="https://github.com/Ynus243"><img src="../assets/img/3.png" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">todo-list</h3>
                </li>
                <li class="project">
                    <a href="https://oqot.uz/ru"><img src="https://www.afisha.uz/uploads/media/2023/08/0b3042f9c3cdf7a01ec576c2a30f31e5_l.jpg" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">OQ-OT</h3>
                </li>
                <li class="project">
                    <a href="https://www.islom.uz/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3KnTH-q93Qe_7vIqF1m24ERmQT7CNqdNFQ&s" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Islom.uz</h3>
                </li>
                <li class="project">
                    <a href="https://rasta.uz/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdSr9kozxoEKiORI_RetY-Bo0s-U_DYJdA&s" alt="project img" class="project_img" style="width: 370px; height: 278px;"></a>
                    <h3 class="project__title">Rasta</h3>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Projects',
    mounted() {
        document.querySelectorAll('.project').forEach((project) => {
            project.addEventListener('mousemove', (e) => {
                const rect = project.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                project.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.05)`;
            });

            project.addEventListener('mouseleave', () => {
                project.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
            });
        });
    }
}
</script>

<style>
.section {
    padding: 70px 0;
}

.title-1 {
    margin-bottom: 60px;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
    color: #5C62EC;
}

.projects {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
    perspective: 1000px;
}

.project {
    max-width: 370px;
    background-color: white;
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: transform 0.3s ease;
    transform-style: preserve-3d;
}

.project_img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    backface-visibility: hidden;
}

.project__title {
    padding: 15px 20px 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
    color: #171718;
}
</style>


