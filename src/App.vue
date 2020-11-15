<template>
  <div id="app">
    <img src="./assets/back.jpg" class="background" />
    <div class="warp">
      <router-view />
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
  methods: {
    scrollCheck() {
      console.log(1);
    },
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
    }
    .warp {
      height: 800px;
      width: 500px;
      flex-shrink: 0;
      border-radius: 20px;
      background-color: #fff;
      box-shadow: 0 5px 10px 0 rgb(61, 61, 61);
      margin: 100px 0;
      padding: 30px;
    }
    #nextBtn {
      position: fixed;
      bottom: 0px;
    }
  }
}
</style>
