<template>
  <div id="invitation">
    <!-- 邀请函页面 -->
    <img src="@/assets/paper.png" alt="" class="paper" />
    <img src="@/assets/font.png" alt="" class="font" />
    <article>
      <img src="@/assets/SIPC_withoutText.png" alt="" class="logo" />
      <div class="line"></div>
      <div class="mainTitle">2020 学生创新实践中心</div>
      <div class="subTitle">十周年邀请函</div>
    </article>
    <p>亲爱的SIPCer:</p>
    <p>
      “十年一唤，怎能不来？”从2010到2020年，十年相伴，共同成长。我们云趋鹜赴，为了一句承诺，更为了纪念那段曾经共同拼搏的难忘时光。在十周年生日到来之际，期待您能参与SIPC的线上（线下）庆生，回归这个温暖的大家庭！
    </p>
    <p>
      本次我们准备了线上、线下两套庆生方案。若受疫情影响学校暂停对外开放，下面各环节将会以线上会议的形式开展。待学校做出综合评估后，我们会第一时间通知您10周年生日的具体举办方式，感谢您的理解！
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
  border: solid 1px yellow;
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
  text-indent: 35px;
}

p:nth-of-type(3) {
  top: 500px;
  text-indent: 35px;
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
    height: 100px;
  }
  p {
    width: 240px;
    left: 30px;
    top: 385px;
  }
  p:nth-of-type(2) {
    top: 410px;
  }
  p:nth-of-type(3) {
    top: 585px;
  }
}
</style>
