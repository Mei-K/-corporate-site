<template>
  <div class="c-header">
    <div class="logo">Header logo</div>
    <ul>
      <li><nuxt-link to=""> Consept</nuxt-link></li>
      <li><nuxt-link to=""> Service</nuxt-link></li>
      <li><nuxt-link to=""> Conpany</nuxt-link></li>
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
  padding: 2% 10%;
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
