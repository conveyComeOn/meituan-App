<template>
<div class="seller-all"  ref="sellermain">
  <div class="seller-main">
    <div class="seller-top">
      <div class="seller-top-top">
        <div class="left">
          <span class="name">{{ seller.name}}</span>
          <div>
            <star :size="36" :score="seller.score" class="star"></star>
            <span class="ratingCount">({{ seller.ratingCount }})</span>
            <span class="sellCount">{{ seller.sellCount }}</span>
          </div>
        </div>
        <div class="right" :class="{'stared':choosed}">
          <span class="icon-favorite" @click="changed"></span>
          <div class="starn">{{ starorno }}</div>
        </div>
      </div>
      <div class="seller-top-bottom">
        <ul>
          <li>
            <div class="need">起送价</div>
            <div><span class="mon">10</span><span class="yuan">元</span></div>
          </li>
          <li>
            <div class="need">商家配送</div>
            <div><span class="mon">{{ seller.deliveryPrice }}</span class="yuan"><span>元</span></div>
          </li>
          <li>
            <div class="need">平均配送时间</div>
            <div><span class="mon">{{ seller.deliveryTime }}</span><span class="yuan">分钟</span></div>
          </li>
        </ul>
      </div>
    </div>
    <split></split>
    <div class="active">
      <div class="gonggao">公告与活动</div>
      <div class="bulletin">{{ seller.bulletin }}</div>
    </div>
    <div class="youhui-wrapper">
       <div class="youhui" v-for="(item,index) of seller.supports">
        <span class="icon deciration" v-bind:class="sell[index]"></span>
        <span class="dir">{{item.description}}</span>
       </div>
    </div>
    <split></split>
    <div class="active">
      <div class="gonggao">商家信息</div>
      <ul>
        <li v-for="item of seller.infos" class="info">{{ item }}</li>
        <li>小葱的酸奶</li>
        <li>小葱的酸奶</li>
      </ul>
    </div>
  </div>
  <shopcar :totalArray="selectfood"></shopcar>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import Star from '../star/star.vue'
import split from '../split/split'
import shopcar from '../shopcar/shopcar'
export default {
  name: 'seller',
  props: {
    seller: Object
  },
  data () {
    return {
      msg: '姜大葱再看欢乐颂',
      selectfood: [],
      choosed: false,
      sell: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  },
  components: {
    Star,
    split,
    shopcar
  },
  created() {
  },
  computed: {
    starorno(){
      return this.choosed? '收藏' : '未收藏'
    }
  },
  methods: {
    _initscroll: function(){
      this.leftScroll = new BScroll(this.$refs.sellermain, {
        scroll,
        click: true
      })
    },
    changed: function(){
      this.choosed = !this.choosed
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seller-all{
  position: absolute;
  top: 174px;
  left: 0;
  bottom: 40px;
  z-index: 30;
}
.seller-main{
  width: 100%;
  height: 100%;
}
.seller-top{
padding: 18px;

}
.seller-top .seller-top-top{
  padding: 0 18px 18px 0;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  position: relative;
}
.seller-top .seller-top-top .left .name{
  font-size: 14px;
  color: rgb(7,17,27);
  line-height: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  display: inline-block;
}
.seller-top .seller-top-top .right{
  text-align: center;
  position: absolute;
  right: 20px;
  top: 5px;
}
.seller-top .seller-top-top .right .starn{
  color: rgb(77,85,93);
  font-size: 10px;
  line-height: 10px;
}
.seller-top .seller-top-top .right .icon-favorite{
  color: rgb(147,153,159);
}
.seller-top .seller-top-top .stared .icon-favorite{
  color: rgb(240,20,20);
}
.seller-top .seller-top-top .left .star{
  vertical-align: top;
  display: inline-block;
}
.seller-top .seller-top-top .left .ratingCount{
  margin-left: 8px;
  display: inline-block;
  font-size: 10px;
  color: rgb(77,80,93);
  line-height: 18px;
}
.seller-top .seller-top-top .left .sellCount{
  margin-left: 12px;
  display: inline-block;
  font-size: 10px;
  color: rgb(77,80,93);
  line-height: 18px;
}
.seller-top .seller-top-bottom{
  padding-top: 18px;
}
.seller-top .seller-top-bottom ul{
  display: flex;
  flex-direction:row;
}
.seller-top .seller-top-bottom ul li{
  flex: 1;
  border-right: 1px solid rgba(7,17,27,0.1);
  text-align: center;
}
.seller-top .seller-top-bottom ul li:nth-child(3){
  border:none;
}
.seller-top .seller-top-bottom ul li .need{
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 10px;
  display: inline-block;
  margin-bottom: 8px;
}
.seller-top .seller-top-bottom ul li .mon{
  font-size: 24px;
  font-weight: 200;
  color: rgb(7,17,27);
  line-height: 24px;
}
.seller-top .seller-top-bottom ul li .yuan{
  font-size: 10px;
  font-weight: 200;
  color: rgb(7,17,27);
  line-height: 24px; 
}
.seller-main .active{
  margin: 18px 18px 0 18px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  box-sizing:border-box;
}
.seller-main .active .gonggao{
  font-size: 14px;
  color: rgb(7,17,27);
  line-height: 14px;
  margin-bottom: 8px;
}
.seller-main .active .bulletin{
  padding: 8px 12px 12px 12px;
  font-size: 12px;
  font-weight: 200;
  color: rgb(240,20,20);
  line-height: 24px;
}
.decription{
  font-size: 12px;
}
.support{
  margin-top: 6px;
}
.seller-main .youhui-wrapper{
  padding: 0 16px 0 16px;

}
.seller-main .youhui-wrapper .youhui{
  padding: 16px 12px 16px 12px;
  border-bottom:  1px solid rgba(7,17,27,0.1);
}
.youhui .icon{
  width: 16px;
  height: 16px;
  margin-right: 2px;
  display: inline-block;
  background-size:16px 16px;
  vertical-align: top;
}
.youhui .dir{
  font-size: 12px;
}
.decrease{
  background: url('decrease_1@3x.png') no-repeat left center;
}
.discount{
  background: url('discount_1@3x.png') no-repeat left center;
}
.guarantee{
  background: url('guarantee_1@3x.png') no-repeat left center;
}
.invoice{
  background: url('invoice_1@3x.png') no-repeat left center;
}
.special{
  background: url('special_1@3x.png') no-repeat left center;
}
.seller-main .active .info{
  padding: 8px 12px 12px 12px;
  font-size: 12px;
  font-weight: 200;
  line-height: 24px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
</style>
