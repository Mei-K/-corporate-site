<template>
  <div>
    <section>
      <Top />
    </section>

    <section>
      <Consept />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '~/components/sections/Top.vue'
import Consept from '~/components/sections/Consept.vue'
export default Vue.extend({
  components: { Top, Consept },
})
</script>
