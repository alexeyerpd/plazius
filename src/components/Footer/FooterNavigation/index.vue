<template>
    <div class="footer-navigation">
        <div
            v-for="(block, index) in blockList"
            :key="index"
            class="list-block"
        >
            <strong>{{ block.title }}</strong>
            <div class="list">
                <div
                    v-for="(link, index) in block.links"
                    :key="index"
                    class="link"
                >
                    <a :href="link.href">{{ link.text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
