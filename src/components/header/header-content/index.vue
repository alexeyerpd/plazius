<template>
     <div class="header-content">
            <div class="site-title">
                <h1>The World’s Leading Online Art Gallery</h1>
                <p>Discover new works by emerging artists from around the world</p>
            </div>

            <div class="menu">
                <menu-item v-for="item in menuItems" :key="item.title" :src="item.src" :href="item.href" :title="item.title" :alt="item.alt"/>
            </div>
        </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>