import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

//全局状态管理
export default new Vuex.Store({
  state: {
    isLoading: false, // 是否展示loading动画
    orderBy: 'sale', // 根据什么字段排序
    goodsInfoPdf: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    goodsInfoAudioZ: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    goodsInfoAudioY: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    goodsInfoVideoY: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    goodsInfoVideoZ: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    goodsInfoPicture: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    userInfo: { // 用户信息
      username: '',
      email: ''
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [], // 轮播图
      activity: [] // 活动
    },
    seckills: { // 秒杀
      goodsList: []
    },
    seckillsV: { // 秒杀
      goodsList: []
    },
    seckillsA: { // 秒杀
      goodsList: []
    },
    seckillsPDF: { // 秒杀
      goodsList: []
    },
    computer: {}, // 电脑专栏
    eat: {}, // 爱吃专栏
    asItems: [], // 广告
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [], // 刚加入的购物车，作为展示
    recommend: [], // 推荐购买
    address:{}
  },
  getters,
  actions,
  mutations
});
//state相当于组建中的data，专门用来存放全局的数据
//更改vuex中数据的唯一方式就是使用mutation
