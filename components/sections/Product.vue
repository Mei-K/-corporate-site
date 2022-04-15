<template>
  <div class="c-main">
    <div class="s-title">
      <Title name="Product" subTitle="製品紹介" />
    </div>

    <div class="c-content">
      <ul class="c-img">
        <li v-for="url of productImages" :key="url">
          <nuxt-link to="">
            <img :src="url" alt="" />
          </nuxt-link>
        </li>
      </ul>
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
      // Productsイメージ
      productImages: [
        require('~/assets/images/succulent.jpg'),
        require('~/assets/images/dry-flower.jpg'),
        require('~/assets/images/palm.jpg'),
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  li {
    width: 27%;
    margin: 0 auto;

    overflow: hidden;
    img {
      width: 100%;
      height: 25rem;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.2);
      transition-duration: 0.5s;
    }
  }
}
</style>
