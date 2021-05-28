<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="goodsInfoPicture.goodsImg[imgIndex]" alt="" />
        </div>
        <!-- <div class="item-detail-img-row">
          <div
            class="item-detail-img-small"
            v-for="(item, index) in goodsInfo.goodsImg"
            :key="index"
            @mouseover="showBigImg(index)"
          >
            <img :src="item" alt="" />
          </div>
        </div> -->
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <!-- <span class="item-detail-express">校园配送</span> -->
            {{ goodsInfoPicture.title }}
          </p>
        </div>
        <!-- <div class="item-detail-tag">
          <p>
            <span v-for="(item, index) in goodsInfo.tags" :key="index"
              >【{{ item }}】</span
            >
          </p>
        </div> -->
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">金额</span>
                <span class="item-price">￥{{ price.toFixed(2) }}</span>
              </p>
            </div>
            <!-- <div class="item-price-row">
              <p>
                <span class="item-price-title">优 惠 价</span>
                <span
                  class="item-price-full-cut"
                  v-for="(item, index) in goodsInfo.discount"
                  :key="index"
                  >{{ item }}</span
                >
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title"
                  >促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span
                >
                <span
                  class="item-price-full-cut"
                  v-for="(item, index) in goodsInfo.promotion"
                  :key="index"
                  >{{ item }}</span
                >
              </p>
            </div> -->
          </div>
          <!-- <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num"
                  >{{ goodsInfo.remarksNum }} 条</span
                >
              </p>
            </div>
          </div> -->
        </div>
        <!-- 选择颜色 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>选择压缩率</p>
          </div>
          <div class="item-select-column">
            <div
              class="item-select-row"
              v-for="(items, index) in goodsInfoPicture.setMeal"
              :key="index"
            >
              <div
                class="item-select-box"
                v-for="(item, index1) in items"
                :key="index1"
                @click="select(index, index1)"
                :class="{
                  'item-select-box-active': index1 === selectBoxIndex,
                }"
              >
                <div class="item-select-img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="item-select-intro">
                  <p>{{ item.intro }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 白条分期 -->
        <!-- <div class="item-select">
          <div class="item-select-title">
            <p>白条分期</p>
          </div>
          <div class="item-select-row">
            <div
              class="item-select-class"
              v-for="(item, index) in hirePurchase"
              :key="index"
            >
              <Tooltip :content="item.tooltip" placement="top-start">
                <span>{{ item.type }}</span>
              </Tooltip>
            </div>
          </div>
        </div> -->
        <br />
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <Upload
              ref="upload"
              :before-upload="onBefore"
              :on-success="handleSuccess"
              action="http://47.116.142.93:81/upload"
              :headers="{
                //请求头
                token: token,
              }"
            >
              <Button icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
            <Button type="error" size="large" @click="addShoppingCartBtn()"
              >付款</Button
            >
            <Button type="error" size="large" @click="toDownload()"
              >下载</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "pdfY",
  created() {
    this.loadGoodsInfoPicture();
  },
  data() {
    return {
      token: "",
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
      file: "",
      rate: 0.5,
    };
  },
  computed: {
    ...mapState(["goodsInfoPicture"]),
    ...mapGetters(["cookies"]),
  },

  methods: {
    ...mapActions(["addShoppingCart", "loadGoodsInfoPicture"]),

    select(index1, index2) {
      this.selectBoxIndex=index2
      console.log(index1);
      console.log(index2);
      if (index2 == 0) {
        this.rate = 0.5;
      } else if (index2 == 1) {
        this.rate = 0.7;
      } else if (index2 == 2) {
        this.rate = 0.85;
      }
    
    },
    showBigImg(index) {
      this.imgIndex = index;
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
    addShoppingCartBtn() {
      let order = {
        email: this.getCookie("email"),
        goodsId: 2,
        file: this.file.message,
        rate: this.rate,
      };
      this.$http
        .post("orders", order, { headers: { token: this.getCookie("token") } })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            // console.log("response.data");
            // this.$router.push("/pay");
          setTimeout(() => {
            this.$Message.success("文件转换成功");
          }, 3000);   

          } else if (response.status == 401) {
          }
        });
    },
    onBefore(file) {
      if (this.getCookie("token") == "") {
        this.$Message.error("请先登录！");
        this.$router.push("/login");
      }
    },

    handleSuccess(response, file, fileList) {
      this.file = response;
      console.log(response.message);
      console.log(file);
      console.log(fileList);
    },
    toDownload() {
      this.$http
        .get(
          "download?file=" +
            this.file.message.substring(0, this.file.message.lastIndexOf(".")) +
            "_operated" +
            this.rate +
            ".jpg",
          { headers: { token: this.getCookie("token") }, responseType: "blob" }
        )
        .then((res) => {
          console.log(res);
          this.download(res.data);
          setTimeout(() => {
            this.$router.go(0)
            
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 400) {
            this.$Message.error("下载出错，文件可能不存在！！");
          }
        });
    },
    download(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(
        new Blob([data], { type: `application/pdf;charset-UTF-8` })
      );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute(
        "download",
        this.file.message.substring(0, this.file.message.lastIndexOf(".")) +
          "_operated" +
          this.rate +
          ".jpg"
      );

      document.body.appendChild(link);
      link.click();
      this.$Message.info("下载完成！");
    },
  },
  mounted() {
    const father = this;
    setTimeout(() => {
      father.price = father.goodsInfoPicture.setMeal[0][0].price || 0;
    }, 300);
    var arr,
      reg = new RegExp("(^| )" + "token" + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      father.token = arr[2];
    }
  },
  store,
};
</script>

<style scoped>
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
</style>

