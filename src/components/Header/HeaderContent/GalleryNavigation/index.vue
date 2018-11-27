<template>
    <div class="menu-gallery">
        <a 
            class="menu-gallery-box" 
            v-for="item in menuItems" 
            :key="item.title" 
            :href="href"
        >
            <img class="image" :src="item.src" :alt="item.alt">
            <span class="title">{{ item.title }}</span>
        </a> 
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>