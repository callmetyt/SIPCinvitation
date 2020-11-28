<template>
  <div id="info">
    <div class="base">
      <p class="head">亲爱的学长学姐：</p>
      <p class="content">
        我们正在完善115成员信息系统，现需要收集确认⼤家的个⼈信息，麻烦各位学⻓进⾏填写。
        下⽅“基本信息”部分为必填项，⽤于中⼼以后联系学⻓们使⽤。“扩展信息”为选填项，我们会在明年线下补办⽣⽇之
        际，以推⽂等形式在学院公众号推送历届115成员的⻛采展示。推⽂需要您上传⼀张近期⼯作照或最能代表您的⼀张图
        ⽚（可以是常⽤头像哦）。“扩展信息”中的部分选项可能会涉及到您的个⼈隐私，您可以选择性填写，感谢学⻓学姐的
        配合！
      </p>
      <header>基本信息（必填）</header>
      <Input v-model="infos.name" placeholder="姓名" />
      <Select v-model="infos.grade" placeholder="年级">
        <Option v-for="item in gradeList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Input v-model="infos.classes" placeholder="专业班级" />
      <Select v-model="infos.sex" placeholder="性别">
        <Option v-for="item in sexList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Input
        v-model="infos.phone"
        placeholder="电话号码"
        @on-blur="phoneCheck(infos.phone)"
      />
      <Input
        v-model="infos.email"
        placeholder="邮箱"
        @on-blur="emailCheck(infos.email)"
      />
      <Select v-model="infos.duty" placeholder="中心职务">
        <Option v-for="item in dutyList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
    </div>
    <div class="more">
      <header>扩展信息（选填）</header>
      <Input v-model="infos.company" placeholder="就职公司" />
      <Input v-model="infos.workplace" placeholder="工作地点" />
      <Select v-model="infos.careerDirection" placeholder="职业方向">
        <Option v-for="item in careerList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Input v-model="infos.jobTitle" placeholder="工作职位" />
      <Input
        v-model="infos.message"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 3 }"
        placeholder="对中心寄语"
      />
      <Input
        v-model="infos.achievement"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 3 }"
        placeholder="科研成果介绍"
      />
    </div>
    <Upload
      action="#"
      :before-upload="takeFile"
      :show-upload-list="true"
      :default-file-list="file"
      :on-remove="removeFile"
    >
      <Button>照片上传</Button>
    </Upload>
    <header class="que">您是否有时间参加本次线上庆⽣活动</header>
    <RadioGroup v-model="infos.hasTime">
      <Radio label="有时间"></Radio>
      <Radio label="看情况"></Radio>
      <Radio label="没时间"></Radio>
    </RadioGroup>
    <img src="../../public/code.jpg" alt="文件丢失" />
    <Button type="success" @click.prevent="submit">提交</Button>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config/config.json";

export default {
  name: "info",
  data() {
    return {
      infos: {
        name: "",
        grade: "",
        sex: "",
        duty: "",
        phone: "",
        email: "",
        classes: "",
        company: "",
        workplace: "",
        careerDirection: "",
        jobTitle: "",
        message: "",
        achievement: "",
        hasTime: "",
      },
      file: [],
      sexList: ["男", "女"],
      gradeList: [
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      dutyList: ["主任", "副主任", "部长", "干事"],
      careerList: ["前端", "后端", "安卓", "IOS", "安全", "算法", "其他"],
    };
  },
  mounted() {},
  methods: {
    submit() {
      let data = new FormData();
      //简单的数据检查
      for (const key in this.infos) {
        //必填项
        let required = [
          "name",
          "grade",
          "sex",
          "duty",
          "phone",
          "email",
          "classes",
          "hasTime",
        ];
        if (this.infos.hasOwnProperty(key)) {
          if (
            required.includes(key) &&
            (this.infos[key] === "" || this.infos[key] == undefined)
          ) {
            this.$Message.warning({
              content: "有未填项！",
            });
            return;
          } else if (key == "phone" && this.phoneCheck(this.infos[key])) {
            this.$Message.warning("手机号格式错误");
            return;
          } else if (key == "email" && this.emailCheck(this.infos[key])) {
            this.$Message.warning("邮箱格式错误");
            return;
          }
          data.append(key, this.infos[key]);
        }
      }
      if (this.file.length == 0) {
        this.$Message.warning({
          content: "未上传照片",
        });
        return;
      }
      data.append("file", this.file[0]);
      //发送请求
      axios
        .post(`${config.serverAddress}/info`, data)
        .then((res) => {
          if (res.data.status) {
            this.$Message.success({
              content: res.data.msg,
            });
            for (const key in this.infos) {
              if (this.infos.hasOwnProperty(key)) {
                this.infos[key] = "";
              }
            }
            this.removeFile();
          } else {
            this.$Message.error({
              content: res.data.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    takeFile(file) {
      this.file = [];
      this.file.push(file);
      return false;
    },
    removeFile() {
      this.file = [];
    },
    phoneCheck(phone) {
      if (!/^1[0-9]{10}$/.test(phone)) {
        this.$Message.warning("手机号格式错误");
        return true;
      }
      return false;
    },
    emailCheck(email) {
      if (
        !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
          email
        )
      ) {
        this.$Message.warning("邮箱格式错误");
        return true;
      }
      return false;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
#info {
  padding: 30px;
  width: 80%;
  .base {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .head {
      align-self: flex-start;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 5px;
    }
    .content {
      text-indent: 2em;
      margin: 20px 0;
      // letter-spacing: 1px;
    }
    header {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 5px;
    }
    .ivu-input-wrapper {
      margin-top: 10px;
      width: 80%;
    }
    .ivu-select {
      margin-top: 10px;
      width: 80%;
    }
  }
  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    header {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 5px;
    }
    .ivu-input-wrapper {
      margin-top: 10px;
      width: 80%;
    }
    .ivu-select {
      margin-top: 10px;
      width: 80%;
    }
  }
  .ivu-upload {
    display: flex;
    justify-content: center;
    /deep/ .ivu-upload-list {
      margin-top: 20px;
    }
  }
  .ivu-btn {
    margin: 20px auto 0 auto;
    display: block;
  }
  .que {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  }
  .ivu-radio-group {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  img {
    height: 200px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
  /deep/ .ivu-select-dropdown {
    max-height: none;
  }
}
</style>
