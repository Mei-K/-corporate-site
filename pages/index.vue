<template>
  <div>
    <section>
      <Top />
    </section>
    <section>
      {{ scrollY }}
      <Concept />
    </section>
    <section>
      {{ scrollY }}
      <Bisiness />
    </section>
    <section>
      {{ scrollY }}
      <Product />
    </section>
    <section>
      {{ scrollY }}
      <Company />
    </section>
    <section>
      {{ scrollY }}
      <Contact />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '~/components/sections/Top.vue'
import Concept from '~/components/sections/Concept.vue'
import Bisiness from '~/components/sections/Bisiness.vue'
import Product from '~/components/sections/Product.vue'
import Company from '~/components/sections/Company.vue'
import Contact from '~/components/sections/Contact.vue'
export default Vue.extend({
  components: { Top, Concept, Bisiness, Product, Company, Contact },

  data() {
    return {
      // スクロール位置
      scrollY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    /**
     * スクロール位置を確認する.
     */
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
})
</script>

<style lang="scss" scoped></style>
