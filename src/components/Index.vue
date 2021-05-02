<template>
  <div class="container">
    <!-- <Search></Search> -->
    <div class="headline">线上压缩平台</div>
    <HomeNav></HomeNav>
    <!-- 商品显示区域 -->
    <div class="content">
      <!-- 照片 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png" />
          </div>
          <div class="seckill-text">
            <span class="seckill-title">照片</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="seckill-content">
          <div
            class="seckill-item"
            v-for="(item, index) in seckills.goodsList"
            :key="index"
          >
            <div class="seckill-item-img">
              <router-link to="/goodsDetail"
                ><img :src="item.img"
              /></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{ item.intro }}</p>
              <p>
                <span class="seckill-price text-danger"
                  ><Icon type="social-yen"></Icon>{{ item.price }}</span
                >
                <span class="seckill-old-price"
                  ><s>{{ item.realPrice }}</s></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 视频 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png" />
          </div>
          <div class="seckill-text">
            <span class="seckill-title">视频</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="seckill-content">
          <div
            class="seckill-item"
            v-for="(item, index) in seckills.goodsList"
            :key="index"
          >
            <div class="seckill-item-img">
              <router-link to="/goodsList"><img :src="item.img" /></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{ item.intro }}</p>
              <p>
                <span class="seckill-price text-danger"
                  ><Icon type="social-yen"></Icon>{{ item.price }}</span
                >
                <span class="seckill-old-price"
                  ><s>{{ item.realPrice }}</s></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 音频 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png" />
          </div>
          <div class="seckill-text">
            <span class="seckill-title">音频</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="seckill-content">
          <div
            class="seckill-item"
            v-for="(item, index) in seckills.goodsList"
            :key="index"
          >
            <div class="seckill-item-img">
              <router-link to="/goodsList"><img :src="item.img" /></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{ item.intro }}</p>
              <p>
                <span class="seckill-price text-danger"
                  ><Icon type="social-yen"></Icon>{{ item.price }}</span
                >
                <span class="seckill-old-price"
                  ><s>{{ item.realPrice }}</s></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- pdf -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png" />
          </div>
          <div class="seckill-text">
            <span class="seckill-title">pdf</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="seckill-content">
          <div
            class="seckill-item"
            v-for="(item, index) in seckills.goodsList"
            :key="index"
          >
            <div class="seckill-item-img">
              <router-link to="/goodsList"><img :src="item.img" /></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{ item.intro }}</p>
              <p>
                <span class="seckill-price text-danger"
                  ><Icon type="social-yen"></Icon>{{ item.price }}</span
                >
                <span class="seckill-old-price"
                  ><s>{{ item.realPrice }}</s></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 电脑专场 -->
      <!-- <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title}}</span>
          <ul>
            <li v-for="(item, index) in computer.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in computer.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
                <img :src="item.bigImg" alt="">
              </router-link>
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 爱吃专场 -->
      <!-- <div class="item-class"> -->
      <!-- <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{eat.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div> -->
      <!-- <div class="item-class-content" v-for="(item, index) in eat.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div> -->
      <!-- <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import HomeNav from "@/components/nav/HomeNav";
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Index",
  created() {
    this.loadSeckillsInfo();
    this.loadCarouselItems();
    this.loadComputer();
    this.loadEat();
    this.loadShoppingCart();
  },
  mounted() {
    const father = this;
    this.setIntervalObj = setInterval(function () {
      father.REDUCE_SECKILLS_TIME();
    }, 1000);
  },
  data() {
    return {
      setIntervalObj: null,
    };
  },
  methods: {
    ...mapActions([
      "loadSeckillsInfo",
      "loadCarouselItems",
      "loadComputer",
      "loadEat",
      "loadShoppingCart",
    ]),
    ...mapMutations(["REDUCE_SECKILLS_TIME"]),
  },
  computed: {
    ...mapState(["seckills", "computer", "eat"]),
    ...mapGetters(["seckillsHours", "seckillsMinutes", "seckillsSeconds"]),
  },
  components: {
    Search,
    HomeNav,
  },
  destroyed() {
    clearInterval(this.setIntervalObj);
  },
  store,
};
</script>

<style scoped>
.headline {
  text-align: center;
}
.container {
  background-color: #f6f6f6;
}
.content {
  width: 1008px;
  margin: 0px auto;
}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 330px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {
  width: 100%;
  height: 50px;
  background-color: #e01222;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 22px;
  line-height: 50px;
  color: #fff;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 183px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/
</style>
