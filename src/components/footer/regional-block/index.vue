<template>
    <div class="regional-block">
        <h2 class="title">{{ title }}</h2>
        <div class="select-block">
           <select-item v-for="item in selectList" :key="item.name" :name="item.name" :list="item.list"/>
        </div>
        <h2 class="copirate">{{ copirate }}</h2>
        <div class="social-block">
            <a href="#" class="item icon1"></a> 
            <a href="#" class="item icon2"></a>
            <a href="#" class="item icon3"></a> 
            <a href="#" class="item icon4"></a>
            <a href="#" class="item icon5"></a> 
            <a href="#" class="item icon6"></a>
        </div>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>