<template>
  <div id="info">
    <div class="base">
      <p class="head">亲爱的学长学姐：</p>
      <p class="content">
        我们正在完善115成员信息系统，现需要收集大家的个人信息。下方的“扩展信息”为选填项，我们会在SIPC十周年生日之际，以推文的形式在学院公众号推送历届115成员的风采展示。推文需要您上传一张近期工作照或最能代表您的一张图片。“扩展信息”中的部分选项可能会涉及到您的个人隐私，您可以选择性填写，感谢学长学姐的配合！
      </p>
      <header>基本信息</header>
      <Input v-model="infos.name" placeholder="姓名" />
      <Select v-model="infos.grade" placeholder="年级">
        <Option v-for="item in gradeList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Select v-model="infos.sex" placeholder="性别">
        <Option v-for="item in sexList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Select v-model="infos.duty" placeholder="中心职务">
        <Option v-for="item in dutyList" :value="item" :key="item">{{
          item
        }}</Option>
      </Select>
      <Input v-model="infos.phone" placeholder="电话号码" />
      <Input v-model="infos.email" placeholder="邮箱" />
      <Input v-model="infos.classes" placeholder="专业班级" />
    </div>
    <div class="more">
      <header>扩展信息</header>
      <Input v-model="infos.company" placeholder="就职公司" />
      <Input v-model="infos.workplace" placeholder="工作地点" />
      <Input v-model="infos.careerDirection" placeholder="职业方向" />
      <Input v-model="infos.jobTitle" placeholder="工作职位" />
      <Input
        v-model="infos.message"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 3 }"
        placeholder="对中心寄语"
      />
      <Input
        v-model="infos.achievement"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 3 }"
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
    <Button type="success" @click="submit">提交</Button>
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
      },
      file: [],
      sexList: ["男", "女"],
      gradeList: [
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
    };
  },
  mounted() {},
  methods: {
    submit() {
      let data = new FormData();
      for (const key in this.infos) {
        if (this.infos.hasOwnProperty(key)) {
          if (this.infos[key] === "" || this.infos[key] == undefined) {
            this.$Message.warning({
              content: "有未填项！",
            });
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
      letter-spacing: 1px;
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
}
</style>
