<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Company" subTitle="会社概要" v-show="isShowTitle" />
      </transition>
    </div>

    <transition name="link">
      <div class="c-content c-company" v-show="isShowContent">
        <nuxt-link to="/">
          <img src="~/assets/images/monstera.jpg" alt="" />
          <div class="img-cover">
            <h4>Smple Company</h4>
            <p>- Since 2021 -</p>
          </div>
        </nuxt-link>
        <div class="square"></div>
      </div>
    </transition>
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
      // link-img fadein表示
      isShowContent: false,
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
      if (this.scrollY >= 2800) {
        this.isShowTitle = true
      }
      if (this.scrollY >= 3200) {
        this.isShowContent = true
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.c-company {
  width: 75%;
  margin-left: 20rem;
  background-color: $white;
  box-sizing: border-box;
  position: relative;

  a {
    position: relative;

    .img-cover {
      width: 95%;
      padding: 10rem 0;
      border: 2px solid $white;
      text-align: center;
      position: absolute;
      top: -1475%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $white;

      h4 {
        line-height: 1;
        font-size: 10rem;
      }
      p {
        font-size: 4.8rem;
      }
    }
  }

  img {
    width: 100%;
    height: 42rem;
    background-color: black;
    box-sizing: border-box;
    transition: 0.8s;
  }
  a:hover img {
    opacity: 0.7;
    transition: 0.8s;
    filter: alpha(opacity=70);
    -ms-filter: 'alpha(opacity=70)';
  }
  // a:hover .c-company

  .square {
    position: absolute;
    width: 28rem;
    height: 28rem;
    background-color: $green;
    top: -20%;
    right: 80%;
    z-index: -1;
  }
}

.link-enter {
  opacity: 0;
  transform: translateY(55px);
}
.link-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>
