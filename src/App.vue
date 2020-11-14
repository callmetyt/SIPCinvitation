<template>
  <div id="app">
    <router-view />
    <button @click="next">下一个</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: ["invitation", "arrange", "question", "info"],
      step: 0,
    };
  },
  methods: {
    next() {
      this.$router.push({ name: this.route[this.step++] });
    },
  },
  mounted() {
    this.step = 0;
    this.next();
  },
};
</script>

<style lang="scss"></style>
