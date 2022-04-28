<template>
  <div>
    <header id="header">
      <div class="h-logo">
        <nuxt-link to="/"> anoano plants</nuxt-link>
      </div>
      <!-- <div class="h-logo"> -->
      <menuBtnComp
        :class="{ menu_btn: true, open_: menuFlag }"
        @click.native="menuToggle"
      >
      </menuBtnComp>
      <!-- </div> -->
    </header>
    <transition>
      <!-- <div id="sp_menu" v-show="menuFlag" :style="{ marginTop: headH }"> -->
      <div id="sp_menu" v-show="menuFlag">
        <ul class="menu_wrap">
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
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import menuBtnComp from '~/components/parts/MenuBtnComp.vue'
export default Vue.extend({
  components: {
    menuBtnComp,
  },
  data() {
    return {
      menuFlag: false,
      headH: '0px',
    }
  },
  methods: {
    menuToggle() {
      //menuFlag切り替え
      this.menuFlag = !this.menuFlag
    },

    // getH() {
    //   let h = document.getElementById('header').offsetHeight
    //   this.headH = h + 'px'
    // },
  },
  mounted() {
    //headerの高さ取得
    // window.addEventListener('scroll', this.getH)
  },
})
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: $green;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .h-logo {
    width: 50%;
    font-size: 2rem;
    a {
      color: $white;
    }
  }
}

#sp_menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  padding: 15rem 0;
  background: rgba(84, 145, 127, 1);
  transition: all 0.5s;
  color: #fff;
  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }
}

ul {
  width: 100%;
  list-style: none;
  padding-left: 0;
  margin: 0;

  li {
    font-size: 3.2rem;
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
    a {
      color: $white;
    }
  }
}
</style>
