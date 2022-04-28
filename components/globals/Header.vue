<template>
  <div class="header">
    <div class="logo">
      <nuxt-link to="/"> anoano plants</nuxt-link>
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
    a {
      font-size: 4rem;
      font-weight: 700;
      color: $white;
    }
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

.menu-bars {
  position: relative;
  width: 24px;
  height: 16px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
</style>
