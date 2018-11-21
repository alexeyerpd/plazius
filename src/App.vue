<template>
    <div id="app">
        <div class="page">
            <hdr/>     
            <main-content/>
            <ftr/>
        </div>
    </div>
</template>

<script>
import hdr from "./components/header/index";
import mainContent from "./components/main/index";
import ftr from "./components/footer/index";

export default {
  name: "app",
  components: {
    hdr,
    mainContent,
    ftr
  }
};
</script>

<style src="./less/main.less" lang="less"></style>
