<template>
  <div class="c-main">
    <div class="s-title">
      <transition name="title">
        <Title name="Product" subTitle="製品紹介" v-show="isShowTitle" />
      </transition>
    </div>

    <!-- <div class="c-content"> -->
    <transition-group name="list" tag="div" class="c-content">
      <div
        v-for="(product, index) of productsList"
        :key="index"
        :class="`link-img link-img${index}`"
        v-show="isShowContent"
      >
        <nuxt-link :to="product.url">
          <img :src="product.imgPath" alt="" />
          <h4 class="link-name">{{ product.name }}</h4>
        </nuxt-link>
      </div>
    </transition-group>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/parts/TitleName.vue'

type Product = {
  name: string
  imgPath: any
  url: string
}
export default Vue.extend({
  components: { Title },

  data() {
    return {
      // Product一覧
      productsList: [
        {
          name: 'Plants',
          imgPath: require('~/assets/images/succulent.jpg'),
          url: '/',
        },
        {
          name: 'Dry Flower',
          imgPath: require('~/assets/images/dry-flower.jpg'),
          url: '/',
        },
        {
          name: 'Others',
          imgPath: require('~/assets/images/palm.jpg'),
          url: '/',
        },
      ] as Array<Product>,

      // スクロール位置
      scrollY: 0,
      // タイトル fadein表示
      isShowTitle: false,

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

      if (this.scrollY >= 3200) {
        this.isShowTitle = true
      }
      if (this.scrollY >= 3400) {
        this.isShowContent = true
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.c-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  .link-img {
    width: 32%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 30rem;
      transition-duration: 0.5s;
    }
    img:hover {
      transform: scale(1.2);
      transition-duration: 0.5s;
    }
    a {
      color: $white;
      &:hover {
        color: black;
        font-weight: 600;
      }
    }
    a:hover img {
      opacity: 0.7;
      filter: alpha(opacity=70);
      -ms-filter: 'alpha(opacity=70)';
    }

    h4 {
      font-size: 4rem;
    }
    .link-name {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      line-height: 0;
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
    &.link-img#{$i} {
      animation-delay: $i * 0.4s;
    }
  }
}
</style>
