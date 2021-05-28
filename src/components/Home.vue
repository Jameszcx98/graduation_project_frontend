<template>
  <div class="container">
    <Layout class="layout">
      <Sider
        class="side-bar"
        :style="{
          height: 'calc(100vh - 35px)',
          background: '#fff',
          overflow: 'auto',
        }"
        ref="side"
        :collapsed-width="78"
      >
        <Menu
          active-name="1-2"
          theme="light"
          width="auto"
          @on-select="onSelect"
        >
          <div class="user-icon">
            <div class="user-img">
              <img src="static/img/head.png" />
            </div>
            <p>{{ username }}</p>
          </div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="location"></Icon>
              <span>账户信息</span>
            </template>
            <MenuItem name="myAddress">我的账户信息</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="clipboard"></Icon>
              <span>历史订单</span>
            </template>
            <MenuItem name="myOrder">我的订单</MenuItem>
          </Submenu>
          <!-- <Submenu name="3">
            <template slot="title">
              <Icon type="ios-cart"></Icon>
              <span>购物车</span>
            </template>
            <MenuItem name="myShoppingCart">我的购物车</MenuItem>
          </Submenu> -->
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{ background: '#fff' }">
          <h2>{{ activeTitle }}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2021 &copy; {{ username }}</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: this.getCookie("username"),
      activeTitle: "我的账户信息",
      bar: {
        myAddress: "我的账户信息",
        addAddress: "添加收货地址",
        myOrder: "我的订单",
        myShoppingCart: "我的购物车",
      },
    };
  },
  created() {
    if (this.getCookie("token") == "") {
      this.$Message.error("请先登录！");
      this.$router.push("/login");
    }
  },
  methods: {
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return false;
      }
    },
    onSelect(name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/home/${name}`);
    },
  },
};
</script>

<style scoped>
.side-bar a {
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img {
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
