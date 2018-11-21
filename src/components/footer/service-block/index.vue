<template>
    <div class="service-block">
        <div class="list">
            <item v-for="(link, index) in linkList" :key="index" :href="link.href" :text="link.text"/>
        </div>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>