<template>
    <a :href="href" class="box">
        <img :src="src" :alt="alt" class="image">
        <div class="description">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
        </div>
    </a>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>