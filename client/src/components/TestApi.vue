﻿<template>
    <div>
        <label>
            Unesite ime:
            <input placeholder="Your name" v-model="txtName" />
        </label>
        <h3>{{ result }}</h3>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop, Watch } from 'vue-property-decorator';
  import { client } from '@/shared';
  import { Hello } from '@/shared';

  @Component
  export default class extends Vue {
    @Prop() public name: string;
    public txtName: string = this.name;
    public result: string = '';

    public mounted() {
      this.nameChanged(this.name);
    }

    @Watch('txtName')
    public onNameChanged(value: string, oldValue: string) {
      this.nameChanged(value);
    }

    public async nameChanged(name: string) {
      if (name) {
        const r = await client.get(new Hello({ name }));
        this.result = r.result;
      } else {
        this.result = '';
      }
    }
  }
</script>
