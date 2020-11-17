<template>
  <div id="info">
    <div class="base">
      <header>基本信息</header>
      <Input v-model="infos.name" placeholder="姓名" />
      <Input v-model="infos.grade" placeholder="年级" />
      <Input v-model="infos.sex" placeholder="性别" />
      <Input v-model="infos.duty" placeholder="中心职务" />
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
  .base {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    header {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 5px;
    }
    .ivu-input-wrapper {
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
