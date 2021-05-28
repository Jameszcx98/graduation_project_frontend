<template>
  <div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">照片</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">视频</span>
          </li>
          <li @mouseenter="showDetail(3)" @mouseleave="hideDetail(3)">
            <span class="nav-side-item">音频</span>
          </li>
          <li @mouseenter="showDetail(4)" @mouseleave="hideDetail(4)">
            <span class="nav-side-item">pdf</span>
          </li>
        </ul>
        <div><img class="nav-imgu" src="static/img/nav/zan.jpeg" /></div>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop>
            <CarouselItem
              v-for="(item, index) in marketing.CarouselItems"
              :key="index"
            >
              <router-link to="/goodsList">
                <img class="slide-img" :src="item" />
              </router-link>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="nav-show">
          <div
            class="nav-show-img"
            v-for="(item, index) in marketing.activity"
            :key="index"
          >
            <router-link to="/goodsList">
              <img class="nav-img" :src="item" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 详细导航栏照片 -->
    <transition name="fade">
      <div
        class="detail-item-panel panel-1"
        :duration="{ enter: 100, leave: 100 }"
        v-show="panel1"
        @mouseenter="showDetail(1)"
        ref="itemPanel1"
        @mouseleave="hideDetail(1)"
      >
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index"
            >{{ item }} >
          </span>
        </div>
        <ul>
          <li
            v-for="(items, index) in panelData1.classNav"
            :key="index"
            class="detail-item-row"
          >
            <span class="detail-item-title"
              >{{ items.title }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link
              to="/goodsList"
              v-for="(item, subIndex) in items.tags"
              :key="subIndex"
            >
              <span class="detail-item">{{ item }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 详细导航栏视频 -->
    <transition name="fade">
      <div
        class="detail-item-panel panel-2"
        :duration="{ enter: 100, leave: 100 }"
        v-show="panel2"
        @mouseenter="showDetail(2)"
        ref="itemPanel2"
        @mouseleave="hideDetail(2)"
      >
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index"
            >{{ item }} >
          </span>
        </div>
        <ul>
          <li
            v-for="(items, index) in panelData2.classNav"
            :key="index"
            class="detail-item-row"
          >
            <span class="detail-item-title"
              >{{ items.title }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link
              to="/goodsList"
              v-for="(item, subIndex) in items.tags"
              :key="subIndex"
            >
              <span class="detail-item">{{ item }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 详细导航栏音频 -->
    <transition name="fade">
      <div
        class="detail-item-panel panel-3"
        :duration="{ enter: 100, leave: 100 }"
        v-show="panel3"
        @mouseenter="showDetail(3)"
        ref="itemPanel3"
        @mouseleave="hideDetail(3)"
      >
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData3.navTags" :key="index"
            >{{ item }} >
          </span>
        </div>
        <ul>
          <li
            v-for="(items, index) in panelData3.classNav"
            :key="index"
            class="detail-item-row"
          >
            <span class="detail-item-title"
              >{{ items.title }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link
              to="/goodsList"
              v-for="(item, subIndex) in items.tags"
              :key="subIndex"
            >
              <span class="detail-item">{{ item }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 详细导航栏pdf -->
    <transition name="fade">
      <div
        class="detail-item-panel panel-4"
        :duration="{ enter: 100, leave: 100 }"
        v-show="panel4"
        @mouseenter="showDetail(4)"
        ref="itemPanel4"
        @mouseleave="hideDetail(4)"
      >
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData4.navTags" :key="index"
            >{{ item }} >
          </span>
        </div>
        <ul>
          <li
            v-for="(items, index) in panelData4.classNav"
            :key="index"
            class="detail-item-row"
          >
            <span class="detail-item-title"
              >{{ items.title }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link
              to="/goodsList"
              v-for="(item, subIndex) in items.tags"
              :key="subIndex"
            >
              <span class="detail-item">{{ item }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState } from "vuex";
export default {
  name: "HomeNav",
  data() {
    return {
      panel1: false,
      panel2: false,
      panel3: false,
      panel4: false,
      panelData1: {
        navTags: ["照片"],
        classNav: [
          {
            title: "图片",
            tags: ["图片压缩", "图片转码"],
          },
        ],
      },
      panelData2: {
        navTags: ["视频"],
        classNav: [
          {
            title: "视频",
            tags: ["视频压缩", "视频转码"],
          },
        ],
      },
      panelData3: {
        navTags: ["音频"],
        classNav: [
          {
            title: "音频",
            tags: ["音频压缩", "音频转码"],
          },
        ],
      },
      panelData4: {
        navTags: ["pdf"],
        classNav: [
          {
            title: "pdf",
            tags: ["pdf压缩"],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["marketing"]),
  },
  methods: {
    showDetail(index) {
      switch (index) {
        case 1:
          this.panel1 = true;
          break;
        case 2:
          this.panel2 = true;
          break;
        case 3:
          this.panel3 = true;
          break;
        case 4:
          this.panel4 = true;
          break;
        default:
          break;
      }
    },
    hideDetail(index) {
      switch (index) {
        case 1:
          this.panel1 = false;
          break;
        case 2:
          this.panel2 = false;
          break;
        case 3:
          this.panel3 = false;
          break;
        case 4:
          this.panel4 = false;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel3.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel4.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel3.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel4.style.top = this.$refs.navSide.offsetTop + "px";
  },
  updated() {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel3.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel4.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + "px";
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel3.style.top = this.$refs.navSide.offsetTop + "px";
    this.$refs.itemPanel4.style.top = this.$refs.navSide.offsetTop + "px";
  },
  store,
};
</script>

<style scoped>
.nav-imgu {
  width: 100%;
  background-position: bottom;
}
.slide-img {
  width: 100%;
  height: 342px;
}
.nav-img {
  width: 390px;
  height: 130px;
}
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 485px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 342px;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #ed3f14db;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
  height: 100%;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #f90;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;

}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 485px;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #fcf7f7;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #f7f3f3;
}
.detail-item {
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
