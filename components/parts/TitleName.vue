<template>
  <div class="c-title">
    <h2>{{ name }}</h2>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    // タイトル名を受け取る
    name: { type: String, required: true },
    subTitle: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
.c-title {
  width: 50%;
  height: auto;
  border-left: 3px solid $gray;
  padding-left: 10px;

  h2 {
    margin: 0;
    line-height: 1;
    font-size: 7.2rem;
    color: $gray;
    text-transform: uppercase;
    font-family: 'calibri', sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  p {
    margin: 0;
    font-size: 1.6rem;
  }
}
</style>
