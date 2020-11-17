<template>
  <div id="app">
    <img src="./assets/back.jpg" class="background" />
    <div class="warp">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
    <next-btn />
  </div>
</template>

<script>
import nextBtn from "./components/nextBtn";

export default {
  components: { nextBtn },
  component: {
    nextBtn,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    display: flex;
    justify-content: center;
    .background {
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
      object-fit: cover;
    }
    .warp {
      height: 800px;
      width: 500px;
      flex-shrink: 0;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 5px 10px 0 rgb(61, 61, 61);
      margin: 100px 0;
    }
    @media screen and (max-width: 550px) {
      .warp {
        width: 300px;
      }
    }
    #nextBtn {
      position: fixed;
      bottom: 0px;
    }
    .page-enter-active {
      animation-name: fadeIn;
      animation-duration: 0.3s;
    }
    .page-leave-active {
      animation-name: fadeOut;
      animation-duration: 0.3s;
    }
  }
}
</style>
