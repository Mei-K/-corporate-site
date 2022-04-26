<template>
  <div>
    <!-- <Header /> -->
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/globals/Header.vue'
import Footer from '~/components/globals/Footer.vue'
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 100%;
}
</style>
