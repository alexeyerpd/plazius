<template>
    <section class="question-section">
        <div v-for="data in datas" :key="data.length" class="box">
            <img :src="data.img" :alt="data.alt" class="image" />
            <button class="button">{{ data.title }}</button>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
