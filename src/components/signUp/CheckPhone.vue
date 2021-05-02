<template>
  <div class="info-form">
    <Form
      ref="formValidate"
      :model="formValidate"
      :label-width="80"
      :rules="ruleValidate"
    >
      <FormItem label="邮箱地址" prop="email">
        <i-input
          v-model="formValidate.email"
          clearable
          size="large"
          placeholder="请输入邮箱地址"
        ></i-input>
      </FormItem>
      <Button
        type="error"
        size="large"
        long
        @click="confirmEmail('formValidate')"
        >验证邮箱</Button
      >
    </Form>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapMutations } from "vuex";
export default {
  name: "CheckPhone",
  data() {
    return {
      formValidate: {
        email: "",
      },
      ruleValidate: {
        phone: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          // {
          //   type: "string",
          //   pattern: /^1[3|4|5|7|8][0-9]{9}$/,
          //   message: "手机号格式出错",
          //   trigger: "blur",
          // },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["SET_SIGN_UP_SETP"]),
    ...mapMutations(["SET_USER_LOGIN_INFO"]),

    // getcheckNum() {
    //   if (this.formValidate.phone.length === 11) {
    //     this.$Message.success({
    //       content: "验证码为: 1234",
    //       duration: 6,
    //       closable: true,
    //     });
    //   } else {
    //     this.$Message.error({
    //       content: "请输入正确的手机号",
    //       duration: 6,
    //       closable: true,
    //     });
    //   }
    // },
    // handleSubmit(name) {
    //   // 提交验证
    //   this.$refs[name].validate((valid) => {
    //     if (valid) {
    //       this.$router.push({
    //         path: "/SignUp/inputInfo",
    //         query: { phone: this.formValidate.phone },
    //       });
    //       this.SET_SIGN_UP_SETP(1);
    //     } else {
    //       this.$Message.error({
    //         content: "请填写正确的信息",
    //         duration: 6,
    //         closable: true,
    //       });
    //     }
    //   });
    // },
    confirmEmail(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$http
            .post("email", { email: this.formValidate })
            .then((response) => {
              console.log(response);
              if (response.status == 200) {
                this.$Message.success("已发送");
                // var email = { email: this.formValidate.email };
                this.$store.commit("SET_USER_LOGIN_INFO", this.formValidate);
                this.$router.push("/SignUp/inputInfo");
              } else if (response.status == 500) {
                this.$Message.error("发送失败");
              }
            });
        } else {
          this.$Message.error({
            content: "请填写正确的信息",
            duration: 6,
            closable: true,
          });
        }
      });
    },
  },
  store,
};
</script>

<style scoped>
.info-form {
  width: 90% !important;
}
</style>
