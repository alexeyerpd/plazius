<template>
    <div class="footer-menu">
        <div class="list">
            <div v-for="(link, index) in linkList" :key="index" class="link">
                <a :href="link.href">{{ link.text }}</a>
            </div>
        </div>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
