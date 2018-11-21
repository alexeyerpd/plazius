<template>
    <div class="list-block">
        <strong>{{ title }}</strong>
        <div class="list">
            <item v-for="(item, index) in links" :key="index" :href="item.href" :text="item.text"/>
        </div>
    </div>
</template>


<script src="./script"></script>

<style src="./style.less" lang="less"></style>