<!--
 * @Description: tyll
 * @Autor: czp
 * @Date: 2022-09-02 16:06:39
 * @LastEditors: czp
 * @LastEditTime: 2022-09-02 17:11:15
-->
<style lang="less" scoped></style>
<template>
    <h3>app</h3>
    <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
    </van-steps>
</template>
<script setup lang="ts">
import { ref } from "vue";

const active = ref(1);
</script>
