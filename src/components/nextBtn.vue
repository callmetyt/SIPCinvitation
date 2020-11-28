<template>
  <div id="nextBtn">
    <transition name="btn2">
      <div class="btnWarp" @click="prev" v-if="step > 0 && step <= 2 && show">
        <styleBtn :text="'上一页'" :leftDir="true"></styleBtn>
      </div>
    </transition>
    <transition name="btn">
      <div class="btnWarp" @click="next" v-if="step < 2 && show">
        <styleBtn :text="'下一页'" :leftDir="false"></styleBtn>
      </div>
    </transition>
  </div>
</template>

<script>
import styleBtn from "./styleBtn";

export default {
  name: "nextBtn",
  data() {
    return {
      route: ["invitation", "arrange", "info"],
    };
  },
  methods: {
    next() {
      this.$bus.$emit("changeRoute");
      this.$router.push({
        name: this.route[this.step + 1],
      });
    },
    prev() {
      this.$bus.$emit("changeRoute");
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
    show() {
      return this.$store.state.show;
    },
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
      cursor: pointer;
    }
  }
}
</style>
