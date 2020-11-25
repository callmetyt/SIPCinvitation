<template>
  <div id="end">
    <header>您是否有时间参加本次线上庆⽣活动</header>
    <RadioGroup v-model="hasTime">
      <Radio label="有时间"></Radio>
      <Radio label="看情况"></Radio>
      <Radio label="没时间"></Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: "end",
  data() {
    return {
      hasTime: "",
    };
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#end {
  header {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 30px 0;
  }
  .ivu-radio-group {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
}
</style>
