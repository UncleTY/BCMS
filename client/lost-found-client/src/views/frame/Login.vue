<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
        >
          <template slot="prepend"
            ><span
              class="fa fa-user fa-lg"
              style="width: 13px"
            ></span></template
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
        >
          <template slot="prepend"
            ><span class="fa fa-lock fa-lg" style="width: 13px"></span
          ></template>
          <template slot="suffix"
            ><span
              class="password-eye"
              @click="showPassword"
              :class="eyeType"
            ></span
          ></template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="handleSubmit"
          :loading="logining"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      remember: false,
      ruleForm2: {
        username: "admin",
        password: "123456"
      },
      pwdType: "password",
      eyeType: "fa fa-eye-slash fa-lg",
      rules2: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "enter your password", trigger: "blur" }
        ]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.logining = true;
          if (
            this.ruleForm2.username === "admin" &&
            this.ruleForm2.password === "123456"
          ) {
            this.logining = false;
            sessionStorage.setItem("user", this.ruleForm2.username);
            this.$router.push({ path: "/" });
            // 登陆成功 保存帐号密码
            if (this.remember) {
              this.setCookie(
                this.ruleForm2.username,
                this.ruleForm2.password,
                7
              );
            } else {
              this.deleteCookie();
            }
          } else {
            this.logining = false;
            this.$alert("username or password wrong!", "info", {
              confirmButtonText: "ok"
            });
          }
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    showPassword() {
      if (this.pwdType === "password") {
        this.pwdType = "";
        this.eyeType = "fa fa-eye fa-lg";
      } else {
        this.pwdType = "password";
        this.eyeType = "fa fa-eye-slash fa-lg";
      }
    },
    setCookie(name, pass, days) {
      let expire = new Date();
      expire.setDate(expire.getDate() + days);
      document.cookie = `C-username=${name};expires=${expire}`;
      document.cookie = `C-password=${pass};expires=${expire}`;
    },
    getCookie() {
      if (document.cookie.length) {
        let arr = document.cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("=");
          if (arr2[0] === "C-username") {
            this.ruleForm2.username = arr2[1];
          } else if (arr2[0] === "C-password") {
            this.ruleForm2.password = arr2[1];
            this.remember = true;
          }
        }
      }
    },
    // 修改为空，天数为-1
    deleteCookie() {
      this.setCookie("", "", -1);
    }
  },

  // 页面载入后读取cookie
  mounted() {
    this.getCookie();
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.remember {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
