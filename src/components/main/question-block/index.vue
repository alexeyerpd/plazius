<template>
    <section class="question-block">
        <question-button v-for="data in datas" :key="data.length" :img="data.img" :alt="data.alt" :title="data.title"/>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>