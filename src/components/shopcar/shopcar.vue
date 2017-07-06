<template>
<div class="main-content">
  <div class="shopcar">
    <div class="shop-left">
      <div class="logo-rapper" @click="logoClick">
        <div class="logo">
          <div class="litter" :class="{'highLigh':totalNumber>0}">
            <span class="icon-shopping_cart"></span>
          </div>
          <div class="count" v-show="totalCount > 0">{{ totalCount }}</div>
        </div>
      </div>
      <div class="price" :class="{'highLight':totalNumber>10}">￥{{ calePrice }}</div>
      <div class="content">另配送费￥1元</div>
    </div>
    <div class="shop-right" :class="playClass">
    {{ playCount }}
    </div>
  </div>
  <transition name="slidefade">
  <div class="shoplist" v-show="listShow">
    <div class="toplist">
      <span class="one">购物车</span>
      <span class="two" @click="empty">清除</span>
    </div>
    <div class="mainlist" ref="mainList">
      <ul>
        <li v-for="item of totalArray">
          <span class="name">{{ item.name }}</span>
          <span class="price">￥{{ item.price }}</span>
          <carcontrol :food="item"></carcontrol>
        </li>
      </ul>
    </div>
  </div>
  </transition>
<transition name="fade">
<div class="main-zhezhao" v-show="listShow" @click="logoClick1">
</div>
</transition>
</div> 
</template>

<script>
import carcontrol from '../carcontrol/carcontrol'
import Star from '../star/star.vue'
import BScroll from 'better-scroll'
export default {
  name: 'shopcar',
  props: {
    totalArray: {
     type: Array,
     default() {
      return [{
       price: 0,
       count: 0
      }]
     }
    }
  },
  computed: {
    playCount: function(){
      if (this.totalNumber === 0) {
        return '10元起送'
      } else if (this.totalNumber < 10) {
        var moreM=10 - this.totalNumber
        return `还差${moreM}起送`
      } else {
        return '去结算'
      }
    },
    playClass: function(){
      if (parseInt(this.totalNumber) < 10) {
        return 'no-enough'
      } else {
        return 'enough'
      }
    },
    calePrice: function(){
      var allMoney= 0
      this.totalCount= 0
      if (this.totalArray.length) {
      this.totalArray.forEach((item) => {
      allMoney+= item.price * item.count
      this.totalCount+=item.count
      this.totalNumber=allMoney
    })
      } else {
      this.totalNumber = 0
      allMoney = 0
      }
      if (this.totalNumber !== 0) {
        allMoney += 1
        this.totalNumber=allMoney
      }
      return allMoney
    }
  },
  data() {
    return {
      totalNumber: 0,
      totalCount: 0,
      listShow: false
    }
  },
  components: {
    carcontrol,
    Star
  },
  methods: {
    logoClick: function(){
      if (!this.totalCount) return
      this.listShow=!this.listShow
    },
    logoClick1: function(){
      this.listShow=false
    },
    _initscroll: function(){
      if (this.listShow) {
        if (!this.sscroll) {
        console.log(this.$refs.mainList)
       this.sscroll = new BScroll(this.$refs.mainList, {
        click: true,
        scroll
       })
        } else {
        this.sscroll.refresh()
       }
      }
    },
    empty: function(){
      this.logoClick()
      this.totalArray.forEach((item) => {
        item.count = 0
      })
    }
  },
  created(){
    this._initscroll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/style.css';
.shopcar{
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction:row;
  z-index: 56;
}
.shoplist .toplist{
  height: 40px;
  background-color: #f3f5f7;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  padding-right: 18px;
  padding-left: 18px;
  transition:all 0.3s;
}
.slidefade-enter-active {
      transition: all .2s;
    }
.slidefade-leave-active {
      transition: all .8s;
    }
.slidefade-enter {
      transform: translate(0, 100px);
    }
.slidefade-leave-active{
  transform: translate(0, 300px);
}   
.fade-enter-active {
      transition: all .3s;
    }
.fade-leave-active {
      transition: all .2s;
    }
.fade-enter, .fade-leave-active {
  opacity: 1;
      transform: all 0.3;
    }
.shoplist .toplist .one{
  font-size: 14px;
  line-height: 40px;
  font-weight: 200;
  color: rgb(7,17,27);
  vertical-align: top;
}
.shoplist .toplist .two{
  font-size: 12px;
  line-height: 40px;
  color: rgb(0,160,220);
  float: right;
}
.shoplist{
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  z-index: 55;
}
.shoplist .mainlist{
  overflow:scroll
}
.shoplist .mainlist li{
  height: 48px;
  padding: 12px 18px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.shoplist .mainlist li .name{
  font-size: 14px;
  color: rgb(7,17,27);
  line-height: 24px;
  font-weight: 700
}
.shoplist .mainlist li .price{
  font-size: 20px/28px;
  font-weight: normal;
  color: rgb(240,20,20);
  line-height: 24px;
  position: absolute;
  right: 75px;
}
.shoplist .mainlist li .carcontrol{
  display: inline-block;
  position: absolute;
  right: 18px;
  padding-top: 4px;
  height: 24px;
}
.shopcar .shop-left{
  flex:7;
  height: 100%;
  background-color: #141d27;
}
.shopcar .shop-left .logo-rapper{
  padding-left: 18px;
  padding-bottom: 8px;
  height: 36px;
  display: inline-block;
  vertical-align: top;
}
.shopcar .shop-left .logo-rapper .logo{
  width: 56px;
  height: 56px;
  box-sizing:border-box;
  background-color: #141d27;
  text-align: center;
  border-radius: 50%;
  position: relative;
  top: -10px;
}
.shopcar .shop-left .logo-rapper .logo .litter{
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 8px;
  background-color: rgb(43,51,59);
  padding-top: 8px;
  box-sizing:border-box;
}
.shopcar .shop-left .logo-rapper .logo .count{
  background-color: rgb(240,20,20);
  padding-left: 12px;
  padding-right: 20px;
  font-size: 9px;
  font-weight: 700;
  line-height: 22px;
  color: #fff;
  width: 18px;
  height: 22px;
  position: absolute;
  right: 0;
  bottom: 37px;
  z-index: 11;
  border-radius: 22px;
  box-sizing:border-box;
}
.shopcar .shop-left .logo-rapper .logo .highLigh{
  background-color: rgb(0,160,220);
}
.shopcar .shop-left .logo-rapper .logo .highLigh .icon-shopping_cart{
  color: #fff;
}
.shopcar .shop-left .logo-rapper .icon-shopping_cart{
  line-height: 24px;
  color: rgba(255,255,255,0.4);
  height: 24px;

}
.shopcar .shop-left .price{
  display: inline-block;
  line-height: 24px;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255,255,255,0.4);
  vertical-align: top;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-right: 12px;
  box-sizing:border-box;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.shopcar .shop-left .highLight{
  color: #fff;
}
.shopcar .shop-left .content{
 display: inline-block;
  line-height: 24px;
  height: 100%;
  font-size: 8px;
  color: rgba(255,255,255,0.4);
  padding-top: 12px;
}
.shopcar .shop-right{
  flex:3;
  height: 100%;
  background-color: rgb(43,51,59);
   display: inline-block;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(255,255,255,0.4);
  padding: 12px;
  text-align: center;
}
.shopcar .no-enough{
  background-color: rgb(43,51,59);
}
.shopcar .enough{
  background-color: #00b43c;
  color: #fff;
}
.main-zhezhao{
  background-color: rgba(7,17,27,0.6);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
  drop-filter:blur(10px);
}
</style>
