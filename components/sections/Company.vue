<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Company" subTitle="会社概要" v-show="isShowTitle" />
      </transition>
    </div>

    <div class="c-content c-company">
      <transition name="link">
        <nuxt-link to="/" v-show="isShowContent">
          <img src="~/assets/images/monstera.jpg" alt="" />
          <div class="img-cover">
            <h4>anoano.Inc</h4>
            <p>- Since 2021 -</p>
            <!-- <span>CEO:</span> -->
          </div>
        </nuxt-link>
      </transition>
      <transition name="background">
        <div class="square" v-show="isShowBackGround"></div>
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
      // link-img fadein表示
      isShowContent: false,
      // 背景 fadein表示
      isShowBackGround: false,
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
        if (this.scrollY >= 2150) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 2200) {
          this.isShowBackGround = true
        }
        if (this.scrollY >= 2220) {
          this.isShowContent = true
        }
        // 画面幅429px以上の時
      } else if (window.innerWidth > 428) {
        if (this.scrollY >= 4100) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 4350) {
          this.isShowBackGround = true
        }
        if (this.scrollY >= 4450) {
          this.isShowContent = true
        }
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

  .square {
    position: absolute;
    width: 28rem;
    height: 28rem;
    background-color: $light-green;
    top: -20%;
    right: 80%;
    z-index: -1;
  }
}

/** スマホ画面 CSS */

@include sp {
  .c-company {
    width: 90%;
    height: 20rem;
    margin: 4rem 0 0 auto;
    // margin-right: auto;

    a {
      img {
        height: 100%;
      }
      .img-cover {
        padding: 6rem 0;
        top: -655%;

        h4 {
          font-size: 3.2rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
    }

    .square {
      width: 16rem;
      height: 16rem;
      top: -10%;
      right: 55%;
    }
  }
}

.link-enter {
  opacity: 0;
  transform: translateY(60px);
}
.link-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.background-enter {
  opacity: 0;
  transform: translateY(55px);
}
.background-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>
