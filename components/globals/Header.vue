<template>
  <div class="c-header">
    <div class="logo">
      <nuxt-link to="/"> Header logo</nuxt-link>
    </div>
    <ul>
      <li><nuxt-link to=""> Concept</nuxt-link></li>
      <li><nuxt-link to=""> Bisiness</nuxt-link></li>
      <li><nuxt-link to=""> Product</nuxt-link></li>
      <li><nuxt-link to=""> Company</nuxt-link></li>
      <li><nuxt-link to=""> Contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
// header全体
.c-header {
  width: 100%;
  padding: 1% 10%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  // 会社ロゴ 右寄せ
  .logo {
    width: 30%;
  }
  // リンクメニュー
  ul {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    list-style: none;
    padding: 0;

    li {
      margin-right: 5%;
    }
    li:last-child {
      margin: 0;
    }
  }
}
</style>
