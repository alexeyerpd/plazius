<template>
    <a :href="href" class="box">
        <div class="wrap">
            <div class="image-wrap">
                <img :src="src" :alt="alt" class="image">
            </div>
            <div class="description">
                <h3 class="title">{{ title }}</h3>
                <p class="date">{{ date }}</p>
                <p class="text">{{ text }}</p>
            </div>
        </div>
    </a>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>