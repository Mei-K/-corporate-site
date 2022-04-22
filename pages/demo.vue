<template>
  <div id="app">
    <div>
      <button @click="isShown = !isShown">表示切り替え</button>
    </div>

    <transition name="vshow">
      <p v-show="isShown">v-show="isShown"</p>
    </transition>

    <transition name="vif">
      <p v-if="isShown">v-if="isShown"</p>
    </transition>

    <br />
    <hr />
    <p>isShownプロパティの値:{{ isShown }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isShown: false,
    }
  },
})
</script>

<style>
.vshow-enter-active,
.vshow-leave-active {
  transition: opacity 1s;
}

.vshow-enter,
vshow-leave-to {
  opacity: 0;
}

.vif-enter-active,
.vif-leave-active {
  transition: opacity 2s;
}

.vif-enter,
vif-leave-to {
  opacity: 0;
}
</style>
