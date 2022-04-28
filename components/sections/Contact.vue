<template>
  <div class="c-main">
    <!-- <div class="s-title">
      <transition name="title">
        <Title name="Contact" subTitle="お問い合わせ" v-show="isShowTitle" />
      </transition>
    </div> -->

    <div class="c-content">
      <transition name="title">
        <div class="c-block" v-show="isShowTitle">
          <h5>
            <a href="https://www.instagram.com/anoano_plants/">
              <i class="fab fa-instagram"></i> INSTAGRAM
            </a>
          </h5>
        </div>
      </transition>

      <transition name="img">
        <div class="c-block" v-show="isShowImg">
          <!-- SnapWidget -->
          <script src="https://snapwidget.com/js/snapwidget.js"></script>
          <iframe
            src="https://snapwidget.com/embed/994577"
            class="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            style="border: none; overflow: hidden; width: 100%"
          ></iframe>
        </div>
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
      // コンテンツimg fadein表示
      isShowImg: false,
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

      //画面幅が428px以下 (スマホサイズの時)
      if (window.innerWidth <= 428) {
        if (this.scrollY >= 3000) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 3100) {
          this.isShowImg = true
        }
      } else if (window.innerWidth > 428) {
        if (this.scrollY >= 5000) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 5100) {
          this.isShowImg = true
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.c-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0;

  .c-block {
    width: 48%;

    &:nth-child(1) {
      display: inline-block;
      padding: 21.5% 0;
      font-size: 6.8rem;
      font-weight: 700;
      h5 {
        margin: 0;
        line-height: 0;
      }
      a {
        color: $gray;
        border-bottom: 1px solid;
      }
    }
  }
}

/** スマホ画面css */

@include sp {
  .c-main {
    padding: 4rem 4% 10rem;
  }
  .c-content {
    flex-direction: column;

    .c-block {
      width: 100%;

      &:nth-child(1) {
        padding: 0 0 5rem 0;
        text-align: center;
        a {
          font-size: 3.2rem;
        }
      }
    }
  }
}
/** transition CSS */
// コンテンツimg
.img-enter {
  opacity: 0;
  transform: translateY(55px);
}
.img-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>
