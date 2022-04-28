<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Bisiness" subTitle="事業紹介" v-show="isShowTitle" />
      </transition>
    </div>
    <div class="c-content">
      <ul class="content-block">
        <transition-group name="list">
          <li
            v-for="(content, index) of contentList"
            :key="index"
            :class="`content li-${index}`"
            v-show="isShowContent"
          >
            <div class="c-img">
              <img :src="content.imgPath" :alt="content.altText" />
            </div>
            <div class="c-text">
              <h4>{{ content.title }}</h4>
              <h5>{{ content.subTitle }}</h5>
              <span class="span-text" v-html="content.text"> </span>
              <nuxt-link
                :to="content.url"
                class="btn bgleft"
                v-show="content.btnFlag"
              >
                <span> {{ content.btnName }} </span>
              </nuxt-link>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/parts/TitleName.vue'

type Content = {
  title: string
  subTitle: string
  text: string
  imgPath: any
  altText: string
  btnFlag: boolean
  btnName: string
  url: string
}

export default Vue.extend({
  components: { Title },
  data() {
    return {
      contentList: [
        {
          title: 'Shop',
          subTitle: '植物の販売事業',
          text: 'オンラインショップにて<br />南国の植物や多肉植物、輸入植物など<br />観葉植物の販売とドライフラワーで作った<br />スワッグやブーケなどの雑貨を販売しております',
          imgPath: require('~/assets/images/online-store.jpg'),
          altText: '',
          btnFlag: true,
          btnName: 'ONLINE SHOP',
          url: '/',
        },
        {
          title: 'Import',
          subTitle: '植物の海外輸入事業',
          text: '日本では珍しい品種の植物を<br />バイヤーが見定めて海外から輸入し<br />植物を日本の気候に適応してから販売しております',
          imgPath: require('~/assets/images/import.jpg'),
          altText: '',
          btnFlag: false,
          btnName: '',
          url: '',
        },
        {
          title: 'Green Coordination',
          subTitle: '空間緑化コーディネイト事業',
          text: '大手商業施設や某水族館、オフィス内緑化など <br />多数の施設を手がけた経験を経てコーディネーターとして独立。<br />オフィスや商業施設から個人邸の庭園など <br />空間緑化のコーディネイトを行っております。<br />お気軽にご相談ください。',
          imgPath: require('~/assets/images/grow-plants.jpg'),
          altText: '',
          btnFlag: true,
          btnName: 'VIEW MORE',
          url: '/',
        },
      ] as Array<Content>,

      // スクロール位置
      scrollY: 0,
      // タイトル fadein表示
      isShowTitle: false,
      // コンテンツ fadein
      isShowContent: false,
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
        if (this.scrollY >= 400) {
          this.isShowContent = true
        }
      } else if (window.innerWidth > 428) {
        if (this.scrollY >= 1300) {
          this.isShowTitle = true
        }
        if (this.scrollY >= 1550) {
          this.isShowContent = true
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  li {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .c-text {
      width: 45%;
      color: $gray;
      padding: 5% 0 0 3%;
      box-sizing: border-box;
      h4 {
        font-size: 5.6rem;
        line-height: 1;
      }
      h5 {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1;
        margin-top: 0.8rem;
      }
      .span-text {
        display: inline-block;
        font-size: 1.8rem;
      }
    }

    /** SHOP事業 */
    &:nth-child(1) {
      .c-img {
        width: 50%;
        img {
          width: 95%;
          height: 55rem;
        }
      }

      .c-text {
        padding-top: 10%;
        .span-text {
          padding: 12% 0 0 12%;
        }
      }
    }

    /** Import事業 */
    &:nth-child(2) {
      flex-direction: row-reverse;
      position: relative;
      margin-top: 8%;
      .c-img {
        width: 45%;
        img {
          width: 45%;
          height: 40rem;
          position: absolute;
          top: -40%;
        }
      }
      .c-text {
        width: 53%;
        height: 30rem;
        padding: 0 8% 0 0;
        box-sizing: border-box;
        text-align: right;

        .span-text {
          padding: 12% 9% 0 0;
          text-align: left;
        }
      }
    }
    /** Green Coordinate事業 */
    &:nth-child(3) {
      .c-img {
        width: 60%;
        img {
          width: 100%;
          height: 42rem;
        }
      }

      .c-text {
        width: 39%;
        padding-top: 8%;
        .span-text {
          padding: 12% 0 0 12%;
        }
      }
    }
  }
}

/** transition CSS */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(55px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@for $i from 0 through 2 {
  .list-enter {
    width: 100%;
    opacity: 0;
  }
  .list-enter-active {
    width: 100%;
    opacity: 0;
    animation: fade-in 1s, opacity 1s ease-out;
    &.li-#{$i} {
      animation-delay: $i * 1.2s;
    }
  }
}

/**  MORE ボタンCSS */
.btn {
  /*アニメーションの起点とするためrelativeを指定*/
  position: relative;
  overflow: hidden;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  border: 1px solid $light-green; /* ボーダーの色と太さ */
  padding: 1.2rem 6rem;
  margin: 10% 0 0 32%;
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
  font-size: 2rem;
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

/** スマホcss */

@include sp {
  ul {
    margin: 8rem 0 0 0;
    li:nth-child(-n + 3) {
      display: block;
      position: relative;
      margin: 0;
      .c-text {
        position: absolute;
        top: 15%;
        width: 100%;
        padding: 0;
        text-align: center;

        h4 {
          font-size: 3.8rem;
          font-weight: 600;
        }

        .span-text {
          font-size: 1.5rem;
          padding: 0;
          text-align: center;
        }

        .btn {
          margin: 3rem auto;
          border: 1px solid black;
          span {
            color: black;
            font-weight: 900;
          }
        }
      }
      .c-img {
        width: 100%;
        height: 36rem;
        img {
          width: 100%;
          height: 36rem;
          opacity: 0.4;
          top: 0;
        }
      }

      &:nth-child(2) {
        .span-text {
          padding: 2rem 0;
        }
      }
    }
  }
}
</style>
