<template>
<transition name="goLeft"> 
  <div class="seleted-food" v-show="cardShow" ref="food">
   <div class="main-content">
     <div class="top-arrow">
       <i class=" icon-arrow_lift" @click="getback"></i>
     </div>
     <div class="img-wrapper">
       <img :src="seletedFood.image" alt="">
     </div>
     <div class="whole-content">
       <div class="name">{{ seletedFood.name }}</div>
       <div class="month">
         <span>月售{{ seletedFood.sellCount }}</span>
         <span>&nbsp&nbsp&nbsp好评率{{ seletedFood.rating }}%</span>
       </div>
       <div class="price"><span>￥</span><span class="new">{{ seletedFood.price }}</span><span v-if="seletedFood.oldPrice" class="old">￥{{ seletedFood.oldPrice }}</span>
       <span class="shop car" v-show="!seletedFood.count" @click="comeon">加入购物车</span>
       <carcontrol class="shop control" :food="seletedFood" v-show="seletedFood.count>=1"></carcontrol>
       </div>
     </div>
     <split></split>
     <div class="infor">
       <div class="title">商品评价</div>
       <div class="text">{{ seletedFood.info }}</div>
     </div>
     <split></split>
     <div class="all-rating">
       <div class="title">商品评价</div>
       <selectrating :ratings="seletedFood.ratings" :selectType="selectType" :onlyContent="onlyContent"></selectrating>
     </div>
   </div>
  </div>
</transition>  
</template>

<script>
import carcontrol from '../carcontrol/carcontrol'
import selectrating from '../selectrating/selectrating'
import split from '../split/split'
import BScroll from 'better-scroll'
import Vue from 'vue'
export default {
  name: 'chooseFood',
  data () {
    return {
      cardShow: false,
      carshow: true,
      onlyContent: false,
      selectType: 0
    }
  },
  props: {
    seletedFood: Object
  },
  components: {
    carcontrol,
    split,
    selectrating
  },
  methods: {
    show: function(){
      this.cardShow= true
      this.selectType = 2
      this.onlyContent = false
      this.$nextTick(() => {
        if (this.leftScroll) {
          this.leftScroll.refresh()
        } else {
          this.leftScroll = new BScroll(this.$refs.food, {
            scroll,
            click: true
          })
        }
      })
    },
    getback: function(){
      this.cardShow= false
    },
    comeon: function(){
      Vue.set(this.seletedFood, 'count', 1)
      this.carshow=false
    },
    _initscroll: function(){
      console.log('jjj')
      this.leftScroll = new BScroll(this.$refs.food, {
        scroll,
        click: true
      })
    }
  },
  created(){
       this.$nextTick(() => {
        this._initscroll()
       })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seleted-food{
 position: fixed;
 left: 0;
 bottom: 44px;
 top: 0;
 width: 100%;
 height: auto;
 z-index: 30;
 background-color: #fff;
 transition:all 0.2s linear;
 overflow: hidden;
}
.goLeft-enter-active{
 transform:translate3d(100%,0,0);
}
.goLeft-leave-active{
  transform:translate3d(100%,0,0);
}
.seleted-food .main-content .img-wrapper{
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%
}
.seleted-food .main-content .img-wrapper img{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.seleted-food .main-content .top-arrow{
  position: absolute;
  left: 0;
  top: 0;
  padding:16px;
  height: 40px;
  z-index: 32;
  width: 100%;
}
.seleted-food .main-content .top-arrow i{
  color: #fff;
}
.main-content .whole-content{
  padding: 18px;
}
.main-content .whole-content .name{
  font-size: 14px;
  font-weight: 700;
  color: rgb(7,17,27);
  line-height: 14px;
  margin-bottom: 8px;
}
.main-content .whole-content{
  position: relative;
}
.main-content .whole-content .month{
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 10px;
  margin-bottom: 18px;
}
.main-content .whole-content .price span:nth-child(1){
  line-height: 24px;
}
.main-content .whole-content .new{
  font: 10px/14px;
  line-height: 24px;
  font-weight: normal;
  color: rgb(240,20,20);
  display: inline-block;
  vertical-align: top;
}
.main-content .whole-content .old{
  color: rgb(147,153,159);
  padding: 4px;
  text-decoration: line-through;
  margin-left: 5px;
  display: inline-block;
  vertical-align: top;
}
.main-content .whole-content .car .totalnumber{
  font-size: 13px;
}
.main-content .whole-content .car{
   font-size: 10px;
  color: #fff;
  line-height: 12px;
  height: 24px;
  width: 74px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: rgb(0,160,220);
  text-align: center;
  z-index: 25;
}
.main-content .whole-content .shop{
  position: absolute;
  right: 18px;
}
.main-content .whole-content .control{
  z-index: 20;
  bottom: 24px;
}
.main-content .infor{
  padding: 18px
}
.main-content .infor .title{
  line-height: 14px;
  margin-bottom: 6px;
  font-size: 14px;
  color: rgb(7,17,27);
}
.main-content .infor .text{
  line-height: 24px;
  margin-top: 12px;
  font-size: 12px;
  color: rgb(77,85,93);
}
.all-rating{
  padding-top: 18px;
}
.all-rating .title{
  margin-right: 18px;
  line-height: 14px;
  padding-left: 18px;
  margin-bottom: 6px;
  font-size: 14px;
  color: rgb(7,17,27);
}
</style>
