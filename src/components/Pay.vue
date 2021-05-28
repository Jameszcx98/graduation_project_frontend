<template>
  <div>
    <div class="pay-container">
      <Alert show-icon>
        扫码支付 请输入充值金额
        <Icon type="qr-scanner" slot="icon"></Icon>
        <template slot="desc">请扫描右边二维码进行支付</template>
        <Input
          v-model="money"
          icon="logo-usd"
          placeholder="Enter money..."
          style="width: 200px"
        />
      </Alert>
      <div class="pay-box">
        <div class="pay-demo">
          <img src="static/img/pay/pay-demo.png" />
        </div>
        <div class="pay-qr-scan">
          <img src="static/img/pay/pay-qrscan.png" />
          <div class="pay-tips" >
            <p @click="pay">点击我, 完成支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      money,
    };
  },
  created() {
    if (this.getCookie("token") == "") {
      this.$Message.error("请先登录！");
      this.$router.push("/login");
    }
  },
  methods: {
    pay() {
      let order = {
        email: this.getCookie("email"),
        money: this.money,
      };
      this.$http
        .post("userOperationLogs", order, {
          headers: { token: this.getCookie("token") },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            // console.log("response.data");
            this.$router.push("/payDone");
          } else if (response.status == 401) {
          }
        });
    },
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.pay-container {
  margin: 15px auto;
  width: 80%;
  min-width: 1000px;
}
.pay-box {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pay-demo {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay-demo img {
  height: 80%;
}
.pay-qr-scan {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pay-tips {
  width: 50%;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
.pay-tips a {
  color: #999999;
}
</style>
