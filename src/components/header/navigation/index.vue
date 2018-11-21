<template>
    <div class="navigation-wrap">
        <menu class="navigation">
            <div class="logo">Arthome</div>

            <div class="navigation-block">
                <div class="burger">
                    <button class="button"></button>
                </div>
                
                <nav class="popup-nav">
                    <div class="links-box">
                        <link-item v-for="link in links" :key="link.name" :name="link.name" :quantity="link.quantity" :link="link.src"/>
                    </div>
                    <div class="login-box">
                        <a href="#" class="join">Join</a> 
                        <a href="#" class="sign-in">Sign in</a>
                    </div>
                </nav>
            </div>
        </menu>
    </div>
</template>

<script src="./script.js"></script>

<style src="./style.less" lang="less"></style>