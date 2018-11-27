<template>
    <div class="regional-settings">
        <h2 class="title">{{ title }}</h2>
        <div class="select-block">
            <div v-for="select in selectList" :key="select.name" class="box">
                <select v-model="select.selected" :name="select.name">
                    <option
                        v-for="option in select.optionList"
                        :key="option.text"
                        :value="option.value"
                    >
                        {{ option.text }}
                    </option>
                </select>
            </div>
        </div>
        <h2 class="copirate">{{ copirate }}</h2>
        <div class="social-block">
            <a href="#" class="item facebook"></a>
            <a href="#" class="item gplus"></a>
            <a href="#" class="item instagram"></a>
            <a href="#" class="item pinterest"></a>
            <a href="#" class="item twitter"></a>
            <a href="#" class="item youtube"></a>
        </div>
    </div>
</template>

<script src="./script"></script>

<style src="./style.less" lang="less"></style>
