<template>
    <section class="main-block editors-picks">
        <title-section
            :href="title.href"
            :title="title.title"
            :total="title.total"
        />

        <div class="block">
            <a
                v-for="(content, index) in contents"
                :key="index"
                class="box"
                :href="content.href"
            >
                <img :src="content.src" :alt="content.alt" class="image" />
                <div class="description">
                    <h3>{{ content.title }}</h3>
                    <p>{{ content.text }}</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
