<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Concept" subTitle="コンセプト" v-show="isShowTitle" />
      </transition>
    </div>

    <div class="consept-content c-content">
      <transition name="text">
        <div class="content-text" v-show="isShowText">
          conceptの内容が入ります。 conceptの内容が入ります。
          conceptの内容が入ります。 conceptの内容が入ります。
          conceptの内容が入ります。 conceptの内容が入ります。
          <br />
          <nuxt-link to="/" class="btn bgleft">
            <span>VIEW MORE</span>
          </nuxt-link>
        </div>
      </transition>

      <transition name="img">
        <div class="content-img" v-show="isShowImg">
          <img src="~/assets/images/plant-heart.jpg" alt="" />
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
      // コンテンツテキスト fadein表示
      isShowText: false,
      // コンテンツimg fadein表示
      isShowImg: false,
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

      //画面幅が428px以下 (スマホサイズの時)
      if (window.innerWidth <= 428) {
        if (this.scrollY >= 380) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 480) {
          this.isShowImg = true
        }

        if (this.scrollY >= 500) {
          this.isShowText = true
        }
      } else if (window.innerWidth > 428) {
        if (this.scrollY >= 580) {
          this.isShowTitle = true
        }

        if (this.scrollY >= 680) {
          this.isShowText = true
        }

        if (this.scrollY >= 700) {
          this.isShowImg = true
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.consept-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}

.content-text {
  width: 50%;
  padding: 0 8rem;
  font-size: 2.1rem;
  box-sizing: border-box;
  text-align: center;

  a {
    display: block;
    margin: 8rem auto 0;
    width: 50%;
    padding: 1rem;
    box-sizing: border-box;
  }

  // MORE ボタンCSS
  .btn {
    /*アニメーションの起点とするためrelativeを指定*/
    position: relative;
    overflow: hidden;
    /*ボタンの形状*/
    text-decoration: none;
    display: inline-block;
    border: 1px solid $light-green; /* ボーダーの色と太さ */
    padding: 1rem 3rem;
    text-align: center;
    outline: none;
    /*アニメーションの指定*/
    transition: ease 0.2s;
  }
  /*ボタン内spanの形状*/
  .btn span {
    position: relative;
    z-index: 3; /*z-indexの数値をあげて文字を背景よりも手前に表示*/
    color: $green;
  }
  .btn:hover span {
    color: $white;
  }
  /*== 背景が流れる（左から右） */
  .bgleft:before {
    content: '';
    /*絶対配置で位置を指定*/
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    /*色や形状*/
    background: $light-green; /*背景色*/
    width: 100%;
    height: 100%;
    /*アニメーション*/
    transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
    transform: scale(0, 1);
    transform-origin: right top;
  }
  /*hoverした際の形状*/
  .bgleft:hover:before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}

// コンセプトイメージ画像css
.content-img {
  width: 50%;
  // position: relative;
  text-align: center;
  position: relative;

  img {
    // position: absolute;
    width: 90%;
    height: auto;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }
}

/** transition CSS */

// コンテンツテキスト
.text-enter {
  opacity: 0;
  transform: translateY(55px);
}
.text-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}

// コンテンツimg
.img-enter {
  opacity: 0;
  transform: translateY(55px);
}
.img-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}

/** スマホcss */

@include sp {
  // flex-direction: column-reverse;
  .consept-content {
    position: relative;
    margin-top: 2rem;

    .content-text {
      width: 100%;
      padding: 10rem 2rem 0;
      font-size: 1.5rem;
      text-align: center;
      z-index: 1;

      a {
        margin: 7rem auto 0;
      }
    }
    .bgleft:before {
      display: none;
    }
    .content-img {
      width: 100%;
      position: absolute;
      margin: 0;
      top: 47%;
      left: 0;

      img {
        width: 80%;
        height: auto;
        opacity: 0.5;
      }
    }
  }
}
</style>
