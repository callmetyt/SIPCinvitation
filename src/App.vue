<template>
  <div id="app">
    <div class="container">
      <div class="warp">
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <img src="./assets/sky1.jpg" class="background" />
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
  mounted() {
    //BetterScroll
    const bs = new this.BScroll("#app", {
      scrollY: true,
      probeType: 2,
      mouseWheel: true,
      click: true,
      preventDefault: true,
    });
    const posCheck = (pos) => {
      if (pos.y < -250) {
        this.$store.commit("showBtn");
      } else if (pos.y > -250) {
        this.$store.commit("hideBtn");
      }
    };
    //touch滑动
    bs.on("scroll", (pos) => posCheck(pos));
    //滚轮滑动
    bs.on("mousewheelMove", (pos) => posCheck(pos));
    //切换路由的监听
    this.$bus.$on("changeRoute", () => {
      bs.scrollTo(0, 0, 750);
      this.$store.commit("hideBtn");
    });
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    display: flex;
    justify-content: center;
    height: 100vh;
    transform-style: preserve-3d;
    .background {
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
      object-fit: cover;
    }
    .container {
      height: 1400px;
      padding: 100px 0;
      .warp {
        height: max-content;
        width: 500px;
        flex-shrink: 0;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 5px 10px 0 rgb(61, 61, 61);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @media screen and (max-width: 550px) {
      .container {
        .warp {
          width: 300px;
        }
      }
    }
    #nextBtn {
      position: fixed;
      bottom: 30px;
      z-index: 9999;
      transform: translateZ(1px);
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
