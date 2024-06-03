<template>
    <footer class="footer">
        <div class="container">
            <div class="footer_wrapper">
            <ul class="social">
                <li class="social__item"><a href="https://id.vk.com/account/#/main?recommendation=1"><img src="../assets/img/vk.svg" alt=""></a> </li>
                <li class="social__item"><a href="https://github.com/Ynus243"><img src="../assets/img/gitHub.svg" alt=""></a> </li>
                <li class="social__item"><a href="https://www.linkedin.com/in/%D1%8E%D0%BD%D1%83%D1%81-%D0%B8%D1%81%D0%BC%D0%B0%D0%B8%D0%BB%D0%BE%D0%B2-542334310/"><img src="../assets/img/linkedIn.svg" alt=""></a> </li>
            </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style >
.footer{
background-color: #171718;
padding: 60px 0 50px;
color: white;

}
.social{
display: flex;
column-gap: 30px;
align-items: center;
}


.footer_wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 27px;
}
</style>