<template>
  <div>
    <span class="menu_trigger"> <span></span><span></span><span></span> </span>
  </div>
</template>

<style lang="scss" scoped>
.menu_btn {
  width: 3rem;
  height: 4rem;
  padding: 0;
  cursor: pointer;

  .menu_trigger {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    span {
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: $white;
      border-radius: 2px;
      transition: all 0.4s;

      &:nth-of-type(1) {
        top: 8px;
      }
      &:nth-of-type(2) {
        top: calc(50% - 1px);
      }
      &:nth-of-type(3) {
        bottom: 8px;
      }
    }
  }
  //メニュー開いたとき
  &.open_ {
    .menu_trigger span:nth-of-type(1) {
      top: calc(50% - 1px);
      transform: rotate(-45deg);
    }
    .menu_trigger span:nth-of-type(2) {
      opacity: 0;
    }
    .menu_trigger span:nth-of-type(3) {
      bottom: calc(50% - 1px);
      transform: rotate(45deg);
    }
  }
}
</style>
