<template>
  <div id="arrange">
    <header>时间</header>
    <div class="content">2020年12月5日</div>
    <header>地点</header>
    <div class="content">天津理工大学 7-115（线上会议）</div>
    <header>流程安排</header>
    <Steps :current="stepCurrent" direction="vertical">
      <Step title="流程一" content="年度总结大会"></Step>
      <Step title="流程二" content="中心揭牌仪式"></Step>
      <Step title="流程三" content="学长代表经验分享会"></Step>
      <Step title="流程四" content="切蛋糕庆生"></Step>
      <Step title="流程五" content="历届中心前辈与现任成员的方向分享会"></Step>
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
      if (this.stepCurrent == 4) {
        this.stepCurrent = 0;
      } else {
        this.stepCurrent++;
      }
    }, 2000);
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
}
</style>
