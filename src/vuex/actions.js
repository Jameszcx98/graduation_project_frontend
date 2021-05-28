import axios from 'axios';
// 获取照片数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    var arr,
    reg = new RegExp("(^| )" + "token" + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    axios.get("goodss/"+2, { headers: { token: arr[2] } })
      .then((response) => {
        if (response.status == 200) {
          const data = [
            {
              intro: '照片压缩',
              img: 'static/img/index/seckill/photoy.jpg',
              price: 1,
              sellNumber: response.data.goodsNumber,
              url: "/goodsDetailPicture"
            },

          ];
          commit('SET_SECKILLS_INFO', data);

        }
      });
    
  });
};

export const loadSeckillsInfoV = ({ commit }) => {
  return new Promise((resolve, reject) => {
    var arr,
    reg = new RegExp("(^| )" + "token" + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    axios.get("goodss/", { headers: { token: arr[2] } })
      .then((response) => {
        if (response.status == 200) {
          const data = [

            {
              intro: '视频压缩',
              img: 'static/img/index/seckill/videoy.jpg',
              price: 4,
              sellNumber: response.data.list[5].goodsNumber,
              url: "/goodsDetailVideoY"

            },
            {
              intro: '视频格式转换',
              img: 'static/img/index/seckill/videoz.jpg',
              price: 1,
              sellNumber: response.data.list[6].goodsNumber,
              url: "/goodsDetailVideoZ"
            },

          ];
          commit('SET_SECKILLS_INFOV', data);

        }
      });

  });
    
};
export const loadSeckillsInfoA = ({ commit }) => {
  return new Promise((resolve, reject) => {
    var arr,
      reg = new RegExp("(^| )" + "token" + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    axios.get("goodss/", { headers: { token: arr[2] } })
      .then((response) => {
        if (response.status == 200) {
          const data = [
            {
              intro: '音频压缩',
              img: 'static/img/index/seckill/audioy.jpg',
              price: 3,
              sellNumber: response.data.list[3].goodsNumber,
              url: "/goodsDetailAudioY"
            },
            {
              intro: '音频格式转换',
              img: 'static/img/index/seckill/audioz.jpg',
              price: 1,
              sellNumber: response.data.list[4].goodsNumber,
              url: "/goodsDetailAudioZ"
            },

          ];
          commit('SET_SECKILLS_INFOA', data);

        }
      });

  });
};
export const loadSeckillsInfoPDF = ({ commit }) => {
  return new Promise((resolve, reject) => {
    var arr,
      reg = new RegExp("(^| )" + "token" + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    axios.get("goodss/" + 3, { headers: { token: arr[2] } })
      .then((response) => {
        if (response.status == 200) {
          const data = [
            {
              intro: 'pdf压缩',
              img: 'static/img/index/seckill/pdfy.jpg',
              price: 2,
              sellNumber: response.data.goodsNumber,
              url: "/goodsDetailPdf"
            }
          ];
          commit('SET_SECKILLS_INFOPDF', data);

        }
      });

  });
  
};


// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/11.jpg',
        'static/img/nav/22.jpg',
        // 'static/img/nav/3.jpg',

        // 'static/img/nav/4.jpg',
        // 'static/img/nav/5.jpg'
      ],
      activity: [
        // 'static/img/nav/22.jpg',
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/dacu.jpeg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};



// 请求获得PDF商品详细信息
export const loadGoodsInfoPdf = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/pdfY.jpg',

        ],
        title: 'pdf压缩',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '高压缩率',
              price: 2
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '中等压缩率',
              price: 2
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '低压缩率',
              price: 2
            }
          ],

        ],

      };
      commit('SET_GOODS_INFOPdf', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};
// 请求获得PICTURE商品详细信息
export const loadGoodsInfoPicture = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/pictureY.jpg',

        ],
        title: '图片压缩',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '高压缩率',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '中等压缩率',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '低压缩率',
              price: 1
            }
          ],

        ],
      };
      commit('SET_GOODS_INFOPicture', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 请求获得AudioY商品详细信息
export const loadGoodsInfoAudioY = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/audioY.jpg',

        ],
        title: '音频压缩',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '高压缩率',
              price: 3
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '中等压缩率',
              price: 3
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '低压缩率',
              price: 3
            }
          ],

        ],
      };
      commit('SET_GOODS_INFOAudioY', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};
// 请求获得AudioZ商品详细信息
export const loadGoodsInfoAudioZ = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/audioZ.jpg',

        ],
        title: '音频格式转换',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '输入任何音频文件然后转换成wav',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '输入任何音频文件转换成mp3',
              price: 1
            },
            // {
            //   img: 'static/img/goodsDetail/pack/low.jpg',
            //   intro: '低压缩率-0.75',
            //   price: 1
            // }
          ],

        ],
      };
      commit('SET_GOODS_INFOAudioZ', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};
// 请求获得Video商品详细信息
export const loadGoodsInfoVideoZ = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/videoZ.jpg',

        ],
        title: '视频格式转换',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '输入任何视频文件然后转换成avi',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '输入任何视频文件然后转换成mp4',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '输入任何视频文件然后转换成mov',
              price: 1
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '输入任何视频文件然后转换成3gp',
              price: 1
            }
          ],

        ],
      };
      commit('SET_GOODS_INFOVideoZ', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};
// 请求获得VideoY商品详细信息
export const loadGoodsInfoVideoY = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/videoY.jpg',

        ],
        title: '视频压缩',
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/high.jpg',
              intro: '高压缩率',
              price: 4
            },
            {
              img: 'static/img/goodsDetail/pack/medium.jpg',
              intro: '中等压缩率',
              price: 4
            },
            {
              img: 'static/img/goodsDetail/pack/low.jpg',
              intro: '低压缩率',
              price: 4
            }
          ],
        ],
      };
      commit('SET_GOODS_INFOVideoY', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};
// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 39.9,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 36.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'Gavin',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '510000'
      },
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '4.7英寸-深邃蓝',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// // 添加注册用户
// export const addSignUpUser = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     const userArr = localStorage.getItem('users');
//     let users = [];
//     if (userArr) {
//       users = JSON.parse(userArr);
//     }
//     users.push(data);
//     localStorage.setItem('users', JSON.stringify(users));
//   });
// };

// // 用户登录
// export const login = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     if (data.username === 'Gavin' && data.password === '123456') {
//       localStorage.setItem('loginInfo', JSON.stringify(data));
//       commit('SET_USER_LOGIN_INFO', data);
//       resolve(true);
//       return true;
//     }
//     const userArr = localStorage.getItem('users');
//     console.log(userArr);
//     if (userArr) {
//       const users = JSON.parse(userArr);
//       for (const item of users) {
//         if (item.username === data.username) {
//           localStorage.setItem('loginInfo', JSON.stringify(item));
//           commit('SET_USER_LOGIN_INFO', item);
//           resolve(true);
//           break;
//         }
//       }
//     } else {
//       resolve(false);
//     }
//   });
// };

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};



//action专门用来处理异步，实际修改依然是mutations
