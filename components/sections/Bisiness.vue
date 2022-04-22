<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Bisiness" subTitle="事業紹介" v-show="isShowTitle" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/parts/TitleName.vue'
export default Vue.extend({
  components: { Title },
  data() {
    return {
      // スクロール位置
      scrollY: 0,
      // タイトル fadein表示
      isShowTitle: false,
      // コンテンツテキスト fadein表示
      // isShowText: false,
      // コンテンツimg fadein表示
      // isShowImg: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    /**
     * スクロール位置でfadeinする.
     */
    handleScroll() {
      this.scrollY = window.scrollY
      if (this.scrollY >= 1300) {
        this.isShowTitle = true
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
