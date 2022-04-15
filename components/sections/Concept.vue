<template>
  <div class="c-main">
    <div class="s-title">
      <Title name="Concept" subTitle="コンセプト" />
    </div>

    <div class="consept-content c-content">
      <div class="content-text">
        conceptの内容が入ります。 conceptの内容が入ります。
        conceptの内容が入ります。 conceptの内容が入ります。
        conceptの内容が入ります。 conceptの内容が入ります。
      </div>
      <div class="content-img">
        <img src="~/assets/images/plant-heart.jpg" alt="" />
        <!-- <div class="square"></div> -->
      </div>
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

<style lang="scss" scoped>
.consept-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  .content-text {
    width: 50%;
    padding: 12rem 8rem;
    font-size: 2.1rem;
    box-sizing: border-box;
  }
  .content-img {
    width: 50%;
    // position: relative;
    text-align: center;
    position: relative;

    img {
      // position: absolute;
      width: 90%;
      height: auto;
      left: 50%;
      position: absolute;
      top: 50%;
      // top: 20%;
      // right: 30%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
    }
    // .square {
    //   width: 18rem;
    //   height: 18rem;
    //   background-color: $gray;
    // }
  }
}
</style>
