<template>
  <div class="c-header">
    <div class="top-title"><h1>Sample Company</h1></div>
    <!-- <div class="top-title"><h1>anoano plants</h1></div> -->
    <swiper :options="swiperOption" class="top-img">
      <swiper-slide v-for="url of topImages" :key="url">
        <img :src="url" />
      </swiper-slide>

      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-black"
      ></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        speed: 2500,
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      // Topイメージのカルーセル画像
      topImages: [
        require('~/assets/images/monstera.jpg'),
        require('~/assets/images/succulent.jpg'),
        require('~/assets/images/palm.jpg'),
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.c-header {
  position: relative;
  width: 100%;

  .top-title {
    position: absolute;
    font-family: 'marigny', sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 8rem;
    z-index: 5;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: $white;
  }
  img {
    width: 100%;
    height: 100vh;
  }
}
</style>
