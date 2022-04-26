<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Bisiness" subTitle="事業紹介" v-show="isShowTitle" />
      </transition>
    </div>
    <div class="c-content">
      <!-- <transition-group name="list" tag="ul" class="c-img"> -->
      <ul class="content-block">
        <transition name="list">
          <li class="content" v-show="isShowContent">
            <div class="c-img div-0">
              <img src="~/assets/images/online-store.jpg" alt="" />
            </div>
            <div class="c-text div-1">
              <h4>Shop</h4>
              <p>植物の販売事業</p>
              <span class="span-text">
                オンラインショップにて <br />
                南国の植物や多肉植物、輸入植物など <br />
                観葉植物の販売とドライフラワーで作った<br />
                スワッグやブーケなどの雑貨を販売しております
              </span>
              <nuxt-link to="/" class="btn bgleft">
                <span>ONLINE SHOP</span>
              </nuxt-link>
            </div>
          </li>
        </transition>
        <li class="content">
          <div class="c-img">
            <img src="~/assets/images/import.jpg" alt="" />
          </div>
          <div class="c-text">
            <h4>Import</h4>
            <p>海外輸入事業</p>
            <span class="span-text">
              日本では珍しい品種の植物を <br />
              バイヤーが見定めて海外から輸入し <br />
              植物を日本の気候に適応してから販売しております
            </span>
          </div>
        </li>
        <li class="content">
          <div class="c-img">
            <img src="~/assets/images/grow-plants.jpg" alt="" />
          </div>
          <div class="c-text">
            <h4>Green Coordination</h4>
            <p>空間緑化コーディネイト事業</p>
            <span class="span-text">
              大手商業施設や某水族館、オフィス内緑化など <br />
              多数の施設を手がけた経験を経てコーディネーターとして独立。<br />
              オフィスや商業施設から個人邸の庭園など <br />
              空間緑化のコーディネイトを行っております。<br />
              お気軽にご相談ください。
            </span>
            <nuxt-link to="/" class="btn bgleft">
              <span>VIEW MORE</span>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <!-- </transition-group> -->
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

      isShowContent: false,
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
        this.isShowContent = true
      }
      // if (this.scrollY >= 1300) {
      //   this.isShowContent = true
      // }
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
      p {
        font-size: 1.2rem;
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

/**  transition CSS        */

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

.list-enter {
  width: 100%;
  opacity: 0;
}
.list-enter-active {
  width: 100%;
  opacity: 0;
  animation: fade-in 1s, opacity 1s ease-out;
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
  margin: 10% 0 0 34%;
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
</style>
