<template>
  <div id="nextBtn">
    <transition name="btn2">
      <div class="btnWarp" @click="prev" v-if="step > 0 && step <= 2 && show">
        <styleBtn :text="'上一页'"></styleBtn>
      </div>
    </transition>
    <transition name="btn">
      <div class="btnWarp" @click="next" v-if="step < 2 && show">
        <styleBtn :text="'下一页'"></styleBtn>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
import styleBtn from "./styleBtn";

export default {
  name: "nextBtn",
  data() {
    return {
      route: ["invitation", "arrange", "info"],
      show: false,
    };
  },
  methods: {
    next() {
      this.$router.push({
        name: this.route[this.step + 1],
      });
    },
    prev() {
      this.$router.push({
        name: this.route[this.step - 1],
      });
    },
  },
  components: {
    styleBtn,
  },
  computed: {
    step() {
      return this.route.indexOf(this.$route.name);
    },
    check() {
      return _.throttle(() => {
        let docu = document.documentElement;
        // console.log(
        //   docu.scrollTop.toFixed(2),
        //   docu.clientHeight,
        //   docu.scrollHeight,
        //   Math.abs(docu.scrollTop + docu.clientHeight - docu.scrollHeight) < 1
        // );
        if (
          Math.abs(
            (docu.scrollTop || window.pageYOffset || document.body.scrollTop) +
              docu.clientHeight -
              docu.scrollHeight
          ) < 1
        ) {
          this.show = true;
        } else {
          this.show = false;
        }
      }, 250);
    },
  },
  created() {
    window.addEventListener("scroll", this.check);
  },
  updated() {
    this.check();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.check);
  },
};
</script>

<style scoped lang="scss">
#nextBtn {
  display: flex;
  justify-content: space-around;
  .btn-enter-active,
  .btn2-enter-active {
    animation-name: fadeInUp;
    animation-duration: 0.5s;
  }
  .btn-leave-active {
    animation-name: fadeOutRight;
    animation-duration: 0.5s;
  }
  .btn2-leave-active {
    animation-name: fadeOutLeft;
    animation-duration: 0.5s;
  }
}
@media screen and (max-width: 550px) {
  #nextBtn {
    display: block;
    .btnWarp {
      margin-bottom: 10px;
    }
  }
}
</style>
