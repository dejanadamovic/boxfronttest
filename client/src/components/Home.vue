﻿<template>
    <div class="frame">
        <div class="frame-part">
            <img src="assets/KurirK1Tekst.png">
            <button class="btn">IZLOGUJ SE</button>
        </div>
        <div>
            <img src="assets/kurir jos.png">
        </div>
        <div class="frame-part">
            <img src="assets/tekst_preuzimanje.png">
            <div class="package-number"></div>
            <img src="assets/scannerK2.gif" class="arrow">
            <button class="btn">PREUZMI PAKET</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
}
</script>

<style>

html::-webkit-scrollbar {
    width: 0px;
}

body {    
    overflow: hidden; /* Hide scrollbars */
    background-color: #43515A;    
}



.frame {
    display: flex;
    justify-content: space-around;
}

.frame-part {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 327px;
    height: 138px;
    background-color: white;
    color: #A03338;
    font-size: x-large;
    font-weight: 700;
    border-radius: 15px;
}

.package-number {
    width: 175px;
    height: 115px;
    background-color: #A03338;
}

.arrow {
    width: 200px;
    height: 250px;
}
</style>
