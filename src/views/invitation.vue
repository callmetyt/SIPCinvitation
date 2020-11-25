<template>
  <div id="invitation">
    <!-- 邀请函页面 -->
    <img src="@/assets/paper.png" alt="" class="paper" />
    <img src="@/assets/font.png" alt="" class="font" />
    <article>
      <img src="@/assets/SIPC_withoutText.png" alt="" class="logo" />
      <div class="line"></div>
      <div class="mainTitle">2020 学生创新实践中心</div>
      <div class="subTitle">十周年生日</div>
    </article>
    <p>亲爱的SIPCer:</p>
    <p>
      ⼗年相伴，共同成⻓。我们云趋鹜赴，为了⼀句承诺，更为了纪念那段曾经共同拼搏的难忘时光。在⼗周年⽣⽇到来之际，期待您能参与SIPC的线上交流分享会，回归这个温暖的⼤家庭!
    </p>
    <p>
      受⽬前疫情形势影响，线下活动⽆法展开，我们计划在明年春季举⾏线下的、盛⼤的、完整的10周年庆典，届时定邀请所有学⻓于家中⼀聚！故本次仅进⾏SIPC线上⽣⽇庆典，欢迎各位学⻓欢聚云端进⾏交流，感谢您的理解！
    </p>
  </div>
</template>

<script>
export default {
  name: "invitation",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
#invitation {
  // display: flex;
  // border: solid 1px yellow;
  height: 800px;
  position: relative;
}

.paper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  // border: solid 2px royalblue;
  width: 500px;
  //contain 是保持原有比例，作缩放
  //cover 是保持原有比例，作裁切
  //none 原始大小
  //fill 拉伸 填充满
  object-fit: cover;
  border-radius: 20px;
}
.font {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: absolute;
  width: 130px;
  height: 280px;
  object-fit: contain;
  // border: solid 2px royalblue;
  left: 50px;
  top: 100px;
}
article {
  // border: solid 2px purple;
  width: 260px;
  position: absolute;
  top: 180px;
  left: 190px;
  height: 100px;
  margin-left: 20px;
}
.logo {
  height: 100px;
  width: 100px;
  object-fit: contain;
  position: absolute;
  bottom: 115px;
}

.line {
  position: absolute;
  height: 8px;
  width: 50px;
  background: white;
  bottom: 105px;
}
.mainTitle {
  text-align: justify;
  color: white;
  font-size: 22px;
  font-weight: 500;
  // border: solid 2px white;
  // width: 350px;
  // margin-top: 100px;
  height: 40px;
}

.subTitle {
  text-align: justify;
  color: white;
  font-size: 30px;
  font-weight: 900;
  // border: solid 2px white;
  // width: 350px;
  height: 50px;
}

.mainTitle:after {
  content: " ";
  display: inline-block;
  width: 100%;
}

.subTitle:after {
  content: " ";
  display: inline-block;
  width: 100%;
}

p {
  text-align: left;
  width: 280px;
  position: absolute;
  color: white;
  top: 300px;
  left: 200px;
  line-height: 25px;
  letter-spacing: 1px;
}

p:nth-of-type(2) {
  top: 325px;
  text-indent: 2em;
}

p:nth-of-type(3) {
  top: 480px;
  text-indent: 2em;
}

@media screen and (max-width: 550px) {
  .paper {
    width: 300px;
    object-fit: cover;
  }
  article {
    width: 110px;
    left: 160px;
  }
  .font {
    left: 30px;
  }
  .mainTitle {
    font-size: 18px;
    height: 70px;
  }
  p {
    width: 240px;
    left: 30px;
    top: 400px;
  }
  p:nth-of-type(2) {
    top: 425px;
  }
  p:nth-of-type(3) {
    top: 600px;
  }
}
</style>
