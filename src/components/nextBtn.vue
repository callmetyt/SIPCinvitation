<template>
  <div id="nextBtn">
    <transition name="btn">
      <button class="btn" @click="next" v-if="step < 3 && show">下一个</button>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "nextBtn",
  data() {
    return {
      route: ["invitation", "arrange", "question", "info"],
      show: false,
    };
  },
  methods: {
    next() {
      this.$router.push({
        name: this.route[this.step + 1],
      });
    },
  },
  computed: {
    step() {
      return this.route.indexOf(this.$route.name);
    },
    check() {
      return _.throttle(() => {
        //浏览器兼容
        //firefox chrome
        let docu = document.documentElement;
        if (
          (docu.scrollTop || window.pageYOffset || document.body.scrollTop) +
            docu.clientHeight ===
          docu.scrollHeight
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
  beforeDestroy() {
    window.removeEventListener("scroll", this.check);
  },
};
</script>

<style scoped lang="scss">
#nextBtn {
  .btn {
  }
  .btn-enter-active {
    animation-name: fadeInUp;
    animation-duration: 0.5s;
  }
  .btn-leave-active {
    animation-name: fadeOutUp;
    animation-duration: 0.5s;
  }
}
</style>
