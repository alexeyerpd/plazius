<template>
    <div class="box">
        <select :name="name">
            <item v-for="item in list" :key="item.value" :value="item.value" :text="item.text" :selected="item.isSelect"/>
        </select>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>