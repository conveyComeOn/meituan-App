<template>
  <div class="app">
    <vheader :seller="seller"></vheader>
    <div class="content">
        <div><router-link to="/goods">商品</router-link></div>
        <div><router-link to="/ratings">评论</router-link></div>
        <div><router-link to="/seller">商家</router-link></div>
    </div>
    <keep-alive> 
    <router-view :seller='seller'></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Vheader from './components/header/header.vue'
export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created(){
      this.seller = {
    "name": "姗姗来吃(湖美店)",
    "description": "自配",
    "deliveryTime": 38,
    "score": 4.2,
    "serviceScore": 4.1,
    "foodScore": 4.3,
    "rankRate": 69.2,
    "minPrice": 20,
    "deliveryPrice": 4,
    "ratingCount": 24,
    "sellCount": 90,
    "bulletin": "一大波～一大波芝士将要来袭！！姗姗来吃近期一大波新品推出，欢迎新老盆友们，让我们美食约会吧！",
    "supports": [
      {
        "type": 0,
        "description": "在线支付满多少也不减"
      },
      {
        "type": 1,
        "description": "焗饭加冷饮"
      },
      {
        "type": 2,
        "description": "单人精彩套餐"
      },
      {
        "type": 3,
        "description": "该商家支持发票,请下单写好发票抬头"
      },
      {
        "type": 4,
        "description": "已加入“外卖保”计划,食品安全保障"
      }
    ],
    "avatar": "http://wx1.sinaimg.cn/mw690/746f41aagy1fgeb7ab297j20b408cdg5.jpg",
    "pics": [
      "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
    ],
    "infos": [
      "该商家支持发票,请下单写好发票抬头",
      "品类:芝士焗饭，蛋挞，奶茶，冷饮",
      "湖北省武汉市江夏区藏龙岛栗庙新村D028",
      "营业时间:10:00-20:30"
    ]
  }
  },
  components: {
    Vheader
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  display:flex;
  border-bottom:1px solid rgba(7,17,27,0.1);
}
.content div{
  flex:1;
  height:40px;
  line-height:40px;
  text-align:center;
}

.content div a{
  display:block;
  font-size:14px;
  color:rgb(77,85,93)
}
.content div a.router-link-active{
  color:rgb(240,20,20)
}
</style>
