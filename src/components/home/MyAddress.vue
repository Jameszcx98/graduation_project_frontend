<template>
  <div>
    <div class="address-box" v-for="(item, index) in userInfo" :key="index">
      <div class="address-header">
        <span>{{ item.username }}</span>
        <div class="address-action">
          <span @click="edit(index)"><Icon type="edit"></Icon> 修改</span>
          <!-- <span @click="del(index)"><Icon type="trash-a"></Icon> 删除</span> -->
        </div>
      </div>
      <div class="address-content">
        <p>
          <span class="address-content-title"> 用户名 :</span> {{ item.username }}
        </p>
        <p>
          <span class="address-content-title">邮箱:</span> {{ item.userEmail }}
          <!-- {{ item.city }} {{ item.area }} -->
        </p>
        <p>
          <span class="address-content-title">电话:</span> {{ item.userMobile }}
        </p>
        <p>
          <span class="address-content-title">余额:</span> {{ item.userMoney }}
        </p>
        <p>
          <!-- <span class="address-content-title">密码:</span> {{ item.postalcode }} -->
        </p>
        <p>
          <span class="address-content-title">注册时间:</span>
          {{ item.createDate }}
        </p>
      </div>
    </div>
    <Modal v-model="modal" width="530">
      <p slot="header">
        <Icon type="edit"></Icon>
        <span>修改用户信息</span>
      </p>
      <div>
        <Form
          :model="formData"
          label-position="left"
          :label-width="100"
          :rules="ruleInline"
        >
          <FormItem label="用户名" prop="name">
            <i-input v-model="formData.name" size="large"></i-input>
          </FormItem>
          <!-- <FormItem label="收件地区" prop="address">
                <Distpicker :province="formData.province" :city="formData.city" :area="formData.area" @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
              </FormItem> -->
          <FormItem label="密码" prop="password">
            <i-input v-model="formData.password" size="large"></i-input>
          </FormItem>
          <FormItem label="手机号码" prop="phone">
            <i-input v-model="formData.phone" size="large"></i-input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="editAction"
          >修改</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapActions } from "vuex";
import Distpicker from "v-distpicker";
export default {
  name: "MyAddress",
  data() {
    return {
      modal: false,
      hiu:999,
      formData: {
        name: "",
        password: "",
        phone: "",
      },
      ruleInline: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        phone: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
      },
      userInfo: [],
    };
  },
  
  mounted() {
    // this.loadAddress();
    const email=this.getCookie("email")
    console.log(email);
    this.hh(email);
    

  },
  computed: {
    // ...mapState(["address"]),
  },
  methods: {
    // ...mapActions(["loadAddress"]),
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return false;
      }
    },
    hh(email){
          console.log("11111")
      
      this.$http
          .post("userInfo", { email: email }, {
            headers: { token: this.getCookie("token") },
          })
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              this.userInfo[0] = response.data;
              this.$forceUpdate() 
              // console.log("response.data");
              // this.$router.push("/pay");
            } else if (response.status == 401) {
            }
          });

    },
    edit(index) {
      this.modal = true;
      this.formData.province = this.address[index].province;
      this.formData.city = this.address[index].city;
      this.formData.area = this.address[index].area;
      this.formData.address = this.address[index].address;
      this.formData.name = this.address[index].name;
      this.formData.phone = this.address[index].phone;
      this.formData.postalcode = this.address[index].postalcode;
    },
    editAction() {
        let newUserInfo = {
        email: this.getCookie("email"),
        username: this.formData.name,
        password: this.formData.password,
        phone:this.formData.phone
      };
      this.$http
          .put("editUserInfo", newUserInfo, {
            headers: { token: this.getCookie("token") },
          })
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              this.$Message.success("修改成功");
              this.hh(this.getCookie("email"));
              // console.log("response.data");
              // this.$router.push("/pay");
            }
          });
      this.modal = false;

    },
    del(index) {
      this.$Modal.confirm({
        title: "信息提醒",
        content: "你确定删除这个收货地址",
        onOk: () => {
          this.$Message.success("删除成功");
        },
        onCancel: () => {
          this.$Message.info("取消删除");
        },
      });
    },
  },
  components: {
    Distpicker,
  },
  store,
};
</script>

<style scoped>
.address-box {
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
}
.address-header {
  height: 35px;
  display: flex;
  justify-content: space-between;
  color: #232323;
  font-size: 18px;
}
.address-content {
  font-size: 14px;
}
.address-content-title {
  color: #999;
}
.address-action span {
  margin-left: 15px;
  font-size: 14px;
  color: #2d8cf0;
  cursor: pointer;
}
</style>
