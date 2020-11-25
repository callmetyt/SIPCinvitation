<template>
  <div id="arrange">
    <header class="main">SIPC十周年生日庆典</header>
    <header>时间</header>
    <div class="content">2020年12月13日</div>
    <header>方式</header>
    <div class="content">线上会议</div>
    <header>流程安排</header>
    <Steps :current="stepCurrent" direction="vertical">
      <Step title="流程一" content="总结大会"></Step>
      <Step title="流程二" content="学长代表经验分享会"></Step>
      <Step title="流程三" content="重温115&天理校园"></Step>
      <Step
        title="流程四"
        content="历届中心前辈与现任115成员的方向分享会"
      ></Step>
    </Steps>
  </div>
</template>

<script>
export default {
  name: "arrange",
  data() {
    return {
      stepCurrent: 0,
      timer: undefined,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.stepCurrent == 3) {
        this.stepCurrent = 0;
      } else {
        this.stepCurrent++;
      }
    }, 1500);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#arrange {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  .main {
    font-size: 26px;
    text-align: center;
  }
  header {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 5px;
  }
  .content {
    margin-bottom: 20px;
    letter-spacing: 2px;
  }
  .ivu-steps {
    margin-top: 50px;
  }
}
</style>
