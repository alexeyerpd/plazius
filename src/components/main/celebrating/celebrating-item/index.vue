<template>
    <a :href="href" class="box">
        <div class="image-block">
            <image-item v-for="(img, index) in imgs" :key="index" :src="img.src" :alt="img.alt"/>
        </div>

        <div class="author-box">
            <img :src="src" :alt="alt" class="image">
            <div class="about-author">
                <h3>{{ authorName }}</h3>
                <p>{{ from }}</p>
            </div>
        </div>
    </a>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>