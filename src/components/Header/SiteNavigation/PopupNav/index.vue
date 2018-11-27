<template>
    <nav class="popup-nav">
        <div class="links-box">
            <a
                v-for="link in links"
                :key="link.name"
                :href="link.href"
                class="item"
            >
                <span class="name">{{ link.name }}</span>
                <span class="quantity" v-if="link.quantity">{{
                    link.quantity
                }}</span>
            </a>
        </div>

        <div class="login-box">
            <a href="#" class="join">Join</a>
            <a href="#" class="sign-in">Sign in</a>
        </div>
    </nav>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
