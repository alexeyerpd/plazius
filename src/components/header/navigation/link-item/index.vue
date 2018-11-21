<template>
    <a :href="link" class="item">
        <span class="name">{{ name }}</span>
        <span class="quantity" v-if="quantity">{{ quantity }}</span>
    </a>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>