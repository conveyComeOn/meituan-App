<template>
  <div class="goods">
    <div class="goods-left" ref="goodsLeft">
    	<ul v-if="seller">
    		<li v-for="(item,index) of seller" class="menu-table" :class="{active : calateClass === index}" @click="seletedMenu(index)">
    		    <span class="name"><span v-show="item.type>0" class="icon" v-bind:class="sell[item.type]"></span>
    		    {{item.name}}</span>
    		</li>
    	</ul>
    </div>
    <div class="goods-right" ref="goodsRight">
    	<ul>
        <li v-for="item of seller" class="list-hock">
          <div class="title">
            <h1>{{item.name}}</h1>
          </div>
          <ul>
            <li v-for="(it,index) of item.foods" @click="liClick(it)">
              <div class="icon">
                <img :src="it.icon" alt="">
              </div>
              <div class="right-content">
                <div class="right-name">{{it.name}}</div>
                <div class="description" v-if="it.description">{{it.description}}</div>
                <div class="sellCount"><span>月售{{it.sellCount}}</span><span>&nbsp&nbsp&nbsp好评率{{it.rating}}%</span></div>
                <div class="price"><span>￥</span><span>{{it.price}}</span><span v-if="it.oldPrice" class="old">￥{{it.oldPrice}}</span></div>
              </div>
              <div class="getnumber">
                <carcontrol :food="it"></carcontrol>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <food :seletedFood="selectedfood" ref="chooseFood" v-if="selectedfood"></food>
    <shopcar :totalArray="selectfood"></shopcar>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopcar from '../shopcar/shopcar'
import food from '../food/food'
import carcontrol from '../carcontrol/carcontrol'
export default {
  name: 'goods',
  data () {
    return {
      sell: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      seller: [],
      heightList: [],
      scrollY: 0,
      isActive: false,
      selectedfood: {}
    }
  },
  components: {
    shopcar,
    carcontrol,
    food
  },
  computed: {
    calateClass: function(){
      for (var i = 0; i < this.heightList.length; i++) {
        var hei1 = this.heightList[i]
        var hei2 = this.heightList[i + 1]
        if (!hei2 || this.scrollY >= hei1 && this.scrollY < hei2) {
          return i
        }
      }
    },
    selectfood: function(){
      var foosArray= []
      this.seller.forEach((goods) => {
        goods.foods.forEach((food) => {
          if (food.count) {
            foosArray.push(food)
          }
        })
      })
      return foosArray
    }
  },
  created(){
       this.seller = [
    {
      "name": "外卖员",
      "type": -1,
      "foods": [
        {
          "name": "外卖员A",
          "price": 10,
          "oldPrice": 15,
          "description": "帅哥",
          "sellCount": 229,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "很喜欢的帅哥好帅好帅",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://wx1.sinaimg.cn/mw1024/746f41aaly1fh3jhbidq9j20n40z7793.jpg",
          "image": "http://wx1.sinaimg.cn/mw690/746f41aaly1fh3jhbidq9j20n40z7793.jpg"
        },
        {
          "name": "外卖员B",
          "price": -10,
          "oldPrice": 15,
          "description": "丑男",
          "sellCount": 229,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "啊 好丑好丑",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://wx2.sinaimg.cn/mw1024/746f41aaly1fh3jhfho3dj20b00flq3u.jpg",
          "image": "http://wx2.sinaimg.cn/mw690/746f41aaly1fh3jhfho3dj20b00flq3u.jpg"
        }
      ]
    },
    {
      "name": "热销榜  ",
      "type": -1,
      "foods": [
        {
          "name": "芝士黑椒牛肉",
          "price": 15,
          "oldPrice": 16,
          "description": "肉肉",
          "sellCount": 229,
          "rating": 100,
          "info": "精制港式大叉烧，肉味香郁，汤汁鲜美～重点是肉肉好多好多啊，爱吃肉肉的亲们，走过路过，怎能错过？…",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "很喜欢的粥",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/3282b4bc6f6a3863a1c654d07751d686208896.jpg",
          "image": "http://p0.meituan.net/xianfu/3282b4bc6f6a3863a1c654d07751d686208896.jpg"
        },
        {
          "name": "芝士桑巴巴烤肉(大份)",
          "price": 16,
          "oldPrice": "",
          "description": "",
          "sellCount": 188,
          "rating": 96,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "info": "",
          "icon": "http://p0.meituan.net/70.0/wmproduct/8e8e23104c3727b636033df3099664e1123866.jpg",
          "image": "http://p0.meituan.net/wmproduct/8e8e23104c3727b636033df3099664e1123866.jpg"
        },
        {
          "name": "叉烧肉",
          "price": 15,
          "oldPrice": "",
          "description": "",
          "sellCount": 124,
          "rating": 85,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 1,
              "text": "没啥味道",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 1,
              "text": "很一般啊",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/wmproduct/0a3d16d73614061574239907ef087654213868.jpg",
          "image": "http://p0.meituan.net/wmproduct/0a3d16d73614061574239907ef087654213868.jpg"
        },
        {
          "name": "芝士酱爆鸡腿肉",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 114,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 1,
              "text": "难吃不推荐",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/wmproduct/e53a5472f60c687a13d3b01d73adf2be157054.jpg",
          "image": "http://p1.meituan.net/wmproduct/e53a5472f60c687a13d3b01d73adf2be157054.jpg"
        },
        {
          "name": "芝士巴西烤肉(大份)",
          "price": 16,
          "oldPrice": "",
          "description": "",
          "sellCount": 101,
          "rating": 78,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 1,
              "text": "不脆,不好吃",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/wmproduct/81ef58fc6e59a440e9c1e32255a316ab123792.jpg",
          "image": "http://p0.meituan.net/wmproduct/81ef58fc6e59a440e9c1e32255a316ab123792.jpg"
        },
        {
          "name": "芝士南亚咖喱鸡(大份)",
          "price": 15,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 91,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/wmproduct/cc9dae3e797cc31c6aba6cfd4f0ef37d149602.jpg",
          "image": "http://p1.meituan.net/wmproduct/cc9dae3e797cc31c6aba6cfd4f0ef37d149602.jpg"
        },
        {
          "name": "芝士香辣鸡肉",
          "price": 14,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 86,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/wmproduct/59f1626568b85f17a282f15457e320d9153372.jpg",
          "image": "http://p0.meituan.net/wmproduct/59f1626568b85f17a282f15457e320d9153372.jpg"
        },
        {
          "name": "芝士咖喱牛肉",
          "price": 16,
          "oldPrice": "",
          "description": "",
          "sellCount": 84,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/wmproduct/57678d78c011fa10b244f05980209ff1165430.jpg",
          "image": "http://p0.meituan.net/wmproduct/57678d78c011fa10b244f05980209ff1165430.jpg"
        },
        {
          "name": "芝士咖喱鸡",
          "price": 15,
          "oldPrice": "",
          "description": "",
          "sellCount": 81,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/bd81e13290dc579ebac7bdc1c1b108a5174080.jpg",
          "image": "http://p0.meituan.net/xianfu/bd81e13290dc579ebac7bdc1c1b108a5174080.jpg"
        },
        {
          "name": "芝士巴西烤肉",
          "price": 15,
          "oldPrice": "",
          "description": "",
          "sellCount": 80,
          "rating": 93,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/61ed05c068ac3ab9f49300eec72c151c57657.jpg",
          "image": "http://p0.meituan.net/xianfu/61ed05c068ac3ab9f49300eec72c151c57657.jpg"
        }
      ]
    },
    {
      "name": "单人精彩套餐",
      "type": 2,
      "foods": [
        {
          "name": "焗饭冷饮套餐",
          "price": 29,
          "oldPrice": 36,
          "description": "芝士焗饭，饮料，配菜可备注",
          "sellCount": 17,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/61ed05c068ac3ab9f49300eec72c151c57657.jpg",
          "image": "http://p0.meituan.net/xianfu/61ed05c068ac3ab9f49300eec72c151c57657.jpg"
        }
      ]
    },
    {
      "name": "冰爽饮品限时特惠",
      "type": 1,
      "foods": [
        {
          "name": "果汁",
          "price": 8,
          "oldPrice": 10,
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "芝士黄金板栗鸡",
      "type": -1,
      "foods": [
        {
          "name": "芝士黄金板栗鸡",
          "price": 17,
          "oldPrice": "",
          "description": "",
          "sellCount": 43,
          "rating": 92,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "菜量还可以,味道还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/xianfu/5210a00be0522504dfe54f8b60f63493152150.jpg",
          "image": "http://p1.meituan.net/xianfu/5210a00be0522504dfe54f8b60f63493152150.jpg"
        },
        {
          "name": "芝士宝岛卤肉",
          "price": 16,
          "oldPrice": "",
          "description": "",
          "sellCount": 29,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/wmproduct/bee0a5fce08864b1b50a3f0d8210d375113840.jpg",
          "image": "http://p1.meituan.net/wmproduct/bee0a5fce08864b1b50a3f0d8210d375113840.jpg"
        },
        {
          "name": "芝士鱼香肉丝",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/wmproduct/5632428fbca46a314d5c94907d2afe80141820.jpg",
          "image": "http://p0.meituan.net/wmproduct/5632428fbca46a314d5c94907d2afe80141820.jpg"
        }
      ]
    },
    {
      "name": "爽口凉菜",
      "type": -1,
      "foods": [
        {
          "name": "八宝酱菜",
          "price": 4,
          "oldPrice": "",
          "description": "",
          "sellCount": 84,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "拍黄瓜",
          "price": 9,
          "oldPrice": "",
          "description": "",
          "sellCount": 28,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "冷饮",
      "type": -1,
      "foods": [
        {
          "name": "娃哈哈AD钙奶",
          "price": 6,
          "oldPrice": "",
          "description": "",
          "sellCount": 7,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/wmproduct/a027734b4ad30c4ba20fc47ebf191abb56010.jpg",
          "image": "http://p1.meituan.net/wmproduct/a027734b4ad30c4ba20fc47ebf191abb56010.jpg"
        },
        {
          "name": "雪碧",
          "price": 3,
          "oldPrice": 10,
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/wmproduct/ab87d09cd5975269e43c3ffe84967df389067.jpg",
          "image": "http://p1.meituan.net/wmproduct/ab87d09cd5975269e43c3ffe84967df389067.jpg"
        }
      ]
    },
    {
      "name": "芝士山城辣子鸡",
      "type": -1,
      "foods": [
        {
          "name": "芝士山城辣子鸡",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 188,
          "rating": 96,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p1.meituan.net/70.0/xianfu/210b3d70d7adc2017838ec8d84f1a90b70118.jpg",
          "image": "http://p1.meituan.net/xianfu/210b3d70d7adc2017838ec8d84f1a90b70118.jpg"
        },
        {
          "name": "芝士宫保鸡丁",
          "price": 15,
          "oldPrice": "",
          "description": "",
          "sellCount": 124,
          "rating": 85,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 1,
              "text": "没啥味道",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 1,
              "text": "很一般啊",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/89b72cf838c52f7a69c0aa14c666ee82210944.jpg",
          "image": "http://p0.meituan.net/xianfu/89b72cf838c52f7a69c0aa14c666ee82210944.jpg"
        }
      ]
    },
    {
      "name": "芝士剁椒鸡腿肉",
      "type": -1,
      "foods": [
        {
          "name": "芝士剁椒鸡腿肉",
          "price": 10,
          "oldPrice": 15,
          "description": "鸡肉",
          "sellCount": 229,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1469281964000,
              "rateType": 0,
              "text": "很喜欢的鸡肉",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1469271264000,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1469261964000,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://p0.meituan.net/70.0/xianfu/d2a473a6b2877bd5a4fc96aa6c592869174080.jpg",
          "image": "http://p0.meituan.net/xianfu/d2a473a6b2877bd5a4fc96aa6c592869174080.jpg"
        }
      ]
    }
  ]
       this.$nextTick(() => {
        this._initscroll()
        this._initHeight()
       })
  },
  methods: {
    hehe: function(){
      alert('heh')
    },
    seletedMenu: function(index){
      let liArray = this.$refs.goodsRight.getElementsByClassName('list-hock')
      let el=liArray[index]
      this.rightScroll.scrollToElement(el, 300)
    },
    _initscroll: function(){
      this.leftScroll = new BScroll(this.$refs.goodsLeft, {
        scroll,
        click: true
      })
      this.rightScroll = new BScroll(this.$refs.goodsRight, {
        click: true,
        probeType: 3
      })
      this.rightScroll.on('scroll', (pros) => {
        this.scrollY=Math.abs(Math.round(pros.y))
      })
    },
    _initHeight: function(){
      let liArray = this.$refs.goodsRight.getElementsByClassName('list-hock')
      let height = 0
      this.heightList.push(height)
      for (var i = 0; i < liArray.length; i++) {
        var li = liArray[i]
        height+=li.clientHeight
        this.heightList.push(height)
      }
    },
    liClick: function(food){
      this.selectedfood = food
      this.$refs.chooseFood.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/style.css';
  .goods{
  	position: absolute;
  	top: 170px;
  	bottom: 46px;
  	width: 100%;
  	overflow: hidden;
  	display: flex;
  }
  .goods .goods-left{
  	flex: 0 0 80px;
  	width: 80px;
  	background-color: rgb(243,245,247);

  }
  .goods .goods-left li{
  	height: 54px;
    width: 56px;
  	padding: 0 12px;
  	border-bottom: 1px solid rgba(7,17,27,0.1);
  	display: table;
    position: relative;
  	line-height: 14px;
  }
  .goods .goods-left li button{
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    border:none;
    background-color: #f3f5f7;
    position:absolute;
    left: 0;
    top: 0;
  }
  .goods .goods-left li:last-child{
  	border-bottom: 0;
  }
  .goods .goods-left li .icon{
  	vertical-align: top;
	width: 12px;
	height: 12px;
	margin-right: 2px;
	display: inline-block;
	
}
.goods .goods-left li .decrease{
	background: url('img/decrease_3@3x.png') no-repeat left center;
	background-size:12px 12px;
}
.goods .goods-left li .discount{
	background: url('img/discount_3@3x.png') no-repeat left center;
	background-size:12px 12px;
}
.goods .goods-left li .guarantee{
	background: url('img/guarantee_3@3x.png') no-repeat left center;
	background-size:12px 12px;
}
.goods .goods-left .active{
  background-color: #fff;
  margin-top: -1px;
  z-index: 10;
  position: relative;
}
.goods .goods-left li .invoice{
	background: url('img/invoice_3@3x.png') no-repeat left center;
	background-size:12px 12px;
}
.goods .goods-left li .special{
	background: url('img/special_3@3x.png') no-repeat left center;
	background-size:12px 12px;
}
  .goods .goods-left .name{
  	line-height: 14px;
  	font-size: 12px;
  	font-weight: 200;
  	display: table-cell;
  	vertical-align: middle;
  }
  .goods .goods-right{
  	flex: 1;
  }
   .goods .goods-right li .title{
     border-left: 4px solid rgb(217,221,225);
     padding-left: 14px;
     background-color: #f3f5f7;
     line-height: 26px;
     font-size: 12px;
     color: rgb(147,153,159);
     height: 26px;

   }
   .goods .goods-right li ul li{
    margin: 18px;
    display: flex;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    position: relative;
   }
   .goods .goods-right li ul li:last-child{
    border-bottom: none;
   }
   .goods .goods-right li ul li .getnumber{
    position: absolute;
    right: 0;
    bottom: 2px;
    font-size: 24px;
    line-height: 24px;
   }
   .goods .goods-right li ul li .icon-remove_circle_outline,.goods .goods-right li ul li .icon-add_circle{
    color: rgb(0,160,220);
   }
   .goods .goods-right li ul li .icon{
    margin-right: 10px;
    width: 57px;
    height: 57px;
   }
   .goods .goods-right li ul li .icon img{
    width: 57px;
    height: 57px;
   }
   .goods .goods-right li ul li .right-name{
    font-size: 14px;
    color: rgb(7,17,27);
    line-height: 14px;
    margin-bottom: 8px;
    margin-top: 2px;
   }

   .goods .goods-right li ul li .description,.goods .goods-right li ul li .sellCount{
     font-size: 10px;
    color: rgb(147,153,159);
    line-height: 20px;
   }
   .goods .goods-right li ul li .price span{
     font-size: 10px;
     color: rgb(240,20,20);
     font-weight: normal;
     line-height: 24px;
   }
   .goods .goods-right li ul li .price span:nth-child(2){
    font-size: 18px;
   }
   .goods .goods-right li ul li .price .old{
    color: rgb(147,153,159);
    text-decoration: line-through;
    margin-left: 5px;
    display: inline-block;
    vertical-align: top;
   }
</style>
