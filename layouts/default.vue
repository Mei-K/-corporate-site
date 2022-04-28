<template>
  <div>
    <transition>
      <Header v-show="isShowHeader" />
    </transition>
    <SpHeader class="sp-header" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/globals/Header.vue'
import SpHeader from '~/components/globals/SpHeader.vue'
import Footer from '~/components/globals/Footer.vue'
export default Vue.extend({
  components: {
    Header,
    SpHeader,
    Footer,
  },

  data() {
    return {
      // スクロール位置
      scrollY: 0,
      // タイトル fadein表示
      isShowHeader: false,
    }
  },
  mounted() {
    // スクロール位置取得して表示切り替え
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    /**
     * スクロール位置でfadeinする.
     */
    handleScroll() {
      this.scrollY = window.scrollY

      //画面幅が429以上(スマホ以外)
      if (window.innerWidth > 428) {
        if (this.scrollY >= 900) {
          this.isShowHeader = true
        }
        if (this.scrollY < 900) {
          this.isShowHeader = false
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 100%;
}
.header {
  position: fixed;
  z-index: 100;
  transition: 1s;
}

@include tab {
  .sp-header {
    display: none;
  }
}
@include pc {
  .sp-header {
    display: none;
  }
}
/** transition CSS */
// コンテンツimg
.v-enter {
  opacity: 0;
  transform: translateY(10px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>
