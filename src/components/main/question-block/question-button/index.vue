<template>
    <div class="box">
        <img :src="img" alt="Field" class="image">
        <button class="button">{{ title }}</button>
    </div>
</template>

<script>
export default {
  name: "question-button",
  props: ["img", "title", "alt"]
};
</script>

<style src="./style.less" lang="less"></style>


