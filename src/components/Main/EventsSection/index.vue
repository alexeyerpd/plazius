<template>
    <section class="main-block events">
        <title-section
            :href="title.href"
            :title="title.title"
            :total="title.total"
        />

        <div class="block clearfix">
            <a
                v-for="(content, index) in contents"
                :key="index"
                class="box"
                :href="content.href"
            >
                <div class="wrap">
                    <div class="image-wrap">
                        <img
                            class="image"
                            :src="content.src"
                            :alt="content.alt"
                        />
                    </div>
                    <div class="description">
                        <h3 class="title">{{ content.title }}</h3>
                        <p class="date">{{ content.date }}</p>
                        <p class="text">{{ content.text }}</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
