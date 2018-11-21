<template>
    <div class="lists-block">
        <block v-for="(item, index) in blockList" :key="index" :title="item.title" :links="item.links"/>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>