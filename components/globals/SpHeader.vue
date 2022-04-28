<template>
  <div class="header">
    <div>
      <button class="menu-bars">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <ul>
      <li><nuxt-link to=""> Concept</nuxt-link></li>
      <li><nuxt-link to=""> Bisiness</nuxt-link></li>
      <li><nuxt-link to=""> Product</nuxt-link></li>
      <li><nuxt-link to=""> Company</nuxt-link></li>
      <li>
        <nuxt-link to="https://www.instagram.com/anoano_plants/">
          <i class="fab fa-instagram"></i
        ></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
// header全体
.header {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: $green;
  opacity: 0.7;
  font-size: 1.8rem;
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
    align-items: center;

    li {
      margin-right: 7%;
      text-transform: uppercase;

      a {
        color: black;
        opacity: 1;
        font-weight: 900;
      }
    }
    li:last-child {
      margin: 0;
      font-size: 3rem;
    }
  }
}
</style>
