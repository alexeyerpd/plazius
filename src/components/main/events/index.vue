<template>
    <section class="main-block events">
        <title-section  :href="title.href" :title="title.title" :total="title.total"/>

        <div class="block clearfix">
            <events-item v-for="(content, index) in contents" :key="index" :href="content.href" :src="content.src" :alt="content.alt" :title="content.title" :date="content.date" :text="content.text"/>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
