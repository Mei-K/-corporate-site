<template>
  <div class="c-main">
    <div class="s-title">
      <Title name="Company" subTitle="会社概要" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/parts/TitleName.vue'
export default Vue.extend({
  components: { Title },
})
</script>

<style></style>
