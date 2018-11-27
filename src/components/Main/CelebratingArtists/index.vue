<template>
    <section class="main-block celebrating">
        <title-section
            :href="title.href"
            :title="title.title"
            :total="title.total"
        />

        <div class="block">
            <a
                v-for="(content, index) in contents"
                :key="index"
                :href="content.href"
                class="box"
            >
                <div class="image-block">
                    <div class="box">
                        <img
                            class="image"
                            :src="content.imgs[0].src"
                            :alt="content.imgs[0].alt"
                        />
                    </div>
                    <div class="box">
                        <img
                            class="image"
                            :src="content.imgs[1].src"
                            :alt="content.imgs[1].alt"
                        />
                    </div>
                    <div class="box">
                        <img
                            class="image"
                            :src="content.imgs[2].src"
                            :alt="content.imgs[2].alt"
                        />
                    </div>
                    <div class="box">
                        <img
                            class="image"
                            :src="content.imgs[3].src"
                            :alt="content.imgs[3].alt"
                        />
                    </div>
                </div>

                <div class="author-box">
                    <img :src="content.src" :alt="content.alt" class="image" />
                    <div class="about-author">
                        <h3>{{ content.authorName }}</h3>
                        <p>{{ content.from }}</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
