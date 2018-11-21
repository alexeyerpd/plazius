<template>
    <section class="main-block celebrating">
        <title-section  :href="title.href" :title="title.title" :total="title.total"/>

        <div class="block">
            <celebrating-item v-for="(content, index) in contents" :key="index" :href="content.href" :imgs="content.imgs" :src="content.src" :alt="content.alt" :authorName="content.authorName" :from="content.from"/>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>