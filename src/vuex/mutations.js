// 设置注册步骤
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step;
};

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
  state.userInfo = data;
};

// 设置加载状态
export const SET_LOAD_STATUS = (state, status) => {
  state.isLoading = status;
};

// 设置秒杀商品
export const SET_SECKILLS_INFO = (state, seckills) => {
  state.seckills.goodsList = seckills;
};
// 设置秒杀商品
export const SET_SECKILLS_INFOA = (state, seckills) => {
  state.seckillsA.goodsList = seckills;
};
// 设置秒杀商品
export const SET_SECKILLS_INFOV = (state, seckills) => {
  state.seckillsV.goodsList = seckills;
};
// 设置秒杀商品
export const SET_SECKILLS_INFOPDF = (state, seckills) => {
  state.seckillsPDF.goodsList = seckills;
};

// 设置轮播(营销)图
export const SET_CAROUSELITEMS_INFO = (state, { carouselItems, activity }) => {
  state.marketing.CarouselItems = carouselItems;
  state.marketing.activity = activity;
};

// 设置电脑专栏数据
export const SET_COMPUTER_INFO = (state, computer) => {
  state.computer = computer;
};



// 设置商品列表(搜索)
export const SET_GOODS_LIST = (state, data) => {
  state.goodsList = data.goodsList;
  state.asItems = data.asItems;
};

// 设置商品列表排序
export const SET_GOODS_ORDER_BY = (state, data) => {
  state.orderBy = data;
};

// 设置商品详细信息
export const SET_GOODS_INFOPdf = (state, data) => {
  state.goodsInfoPdf = data;
};
export const SET_GOODS_INFOPicture = (state, data) => {
  state.goodsInfoPicture = data;
};
export const SET_GOODS_INFOAudioZ = (state, data) => {
  state.goodsInfoAudioZ = data;
};
export const SET_GOODS_INFOAudioY = (state, data) => {
  state.goodsInfoAudioY = data;
};
export const SET_GOODS_INFOVideoY = (state, data) => {
  state.goodsInfoVideoY = data;
};
export const SET_GOODS_INFOVideoZ = (state, data) => {
  state.goodsInfoVideoZ = data;
};
// 添加购物车
export const ADD_SHOPPING_CART = (state, data) => {
  const item = {
    goods_id: data.goods_id,
    count: data.count,
    img: data.package.img,
    package: data.package.intro,
    price: data.package.price,
    title: data.title
  };
  state.shoppingCart.push(item);
  state.newShoppingCart = data;
};

// 设置购物车信息
export const SET_SHOPPING_CART = (state, data) => {
  state.shoppingCart = data;
};

// 设置推荐信息
export const SET_RECOMMEND_INFO = (state, data) => {
  state.recommend = data;
};

// 设置收获地址
export const SET_USER_ADDRESS = (state, data) => {
  state.address = data;
};
//相当于组建中的方法，但是他不能使用异步的方法（定时器、axios），参数state是store中的参数
// this.$store.xxx('方法名'，参数)

