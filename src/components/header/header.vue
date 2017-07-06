<template>
  <div class="header">
	 <div class="header-content">
	    <div class="left">
	    	<img height="64" width="64" v-bind:src="seller.avatar" alt="">
	    </div>
	 	<div class="right">
	 	    <div class="title">
	 	        <span class="brand"></span>
	 	    	<span class="name">{{seller.name}}</span>
	 	    </div>
	 		<div class="decription">
	 			{{seller.description}}/{{seller.deliveryTime}}分钟送达
	 		</div>
	 		<div class="support" v-if="seller.supports">
	 			<span class="icon deciration" v-bind:class="sell[seller.supports[num].type]"></span>
	 			<span class="dir">{{seller.supports[num].description}}</span>
	 		</div>
	 		<div class="support-count" @click="detailClick"  v-if="seller.supports">
	 			<span class="count">{{seller.supports.length}}个</span>
	 			<i class="icon-keyboard_arrow_right"></i>
	 		</div>
	 	</div>
	 </div>	
	 <div class="bulletin-warpper">
	 			<span class="bulletion-title"></span><span class="bulletin-count">{{seller.bulletin}}</span>
	 			<i class="icon-keyboard_arrow_right arrow2"></i>
	 </div>
	 <div class="bac">
	 	<img height="100%" width="100%" v-bind:src="seller.avatar" alt="">
	 </div>
	 <transition name="fade" v-show="detailShow">
		 <div class="detail" v-show="detailShow" transition="fade">
		 	<div class="detail-wrapper clearfix">
		 		<div class="detail-main">
		 		   <div class="detail-name">{{seller.name}}</div>
		 		   <div class="star-wrapper">
		 		   	 <star :size="48" :score="seller.score"></star>
		 		   </div>
		 		   <message :msg="msg"></message>
		 		   <div class="youhui-wrapper">
		 		   	 <div class="youhui" v-for="(item,index) of seller.supports">
		 		   	 	<span class="icon deciration" v-bind:class="sell[index]"></span>
		 			    <span class="dir">{{item.description}}</span>
		 		   	 </div>
		 		   </div>
		 		   <message :msg="sellmsg"></message>
		 		   <div class="seller-msg">{{seller.bulletin}}</div>
		 		</div>
		 	</div>
		 	<div class="close-icon" @click="detailShow=false">
		 		<i class="icon-close"></i>
		 	</div>
		 </div>
	 </transition>
  </div>
</template>
<script>
import Star from '../star/star.vue'
import Message from './messge/message.vue'
export default {
  name: 'header',
  props: {seller: Object},
  data() {
    return {
      sell: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      detailShow: false,
      msg: '优惠信息',
      sellmsg: '商家信息',
      num: 0
    }
  },
  components: {
   'Message': Message,
   'Star': Star
  },
  methods: {
    detailClick: function(){
      this.detailShow=true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/style.css';
.header{
	position: relative;
	background-color: rgba(7,17,27,0.5);
	color: #fff;
	overflow: hidden;
}
.header-content{
	padding: 24px 18px 12px 24px;
/*	color: #fff;*/
font-size: 0;
position: relative;

}
.left{
	display: inline-block;
	vertical-align:top;
}
.left img{
	border-radius: 10px;
}
.right{
	display: inline-block;
	margin-left: 16px;
	font-size: 14px;
}
.title{
  margin:2px 0 8px 0;

}
.header-content .title .brand{
    height: 18px;
    vertical-align:top;
    width: 30px;
    display: inline-block;
    background: url('brand@2x.png') no-repeat left center;
    background-size:30px 18px;
}
.title .name{
	display: inline-block;
	font-size: 16px;
	line-height: 18px;
	font-weight: bold;
}
.decription{
	font-size: 12px;
}
.support{
	margin-top: 6px;
}
.support .icon{
	width: 16px;
	height: 16px;
	margin-right: 2px;
	display: inline-block;
	background-size:16px 16px;
	vertical-align: top;
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
.dir{
	font-size: 10px;

}
.support-count{
  position: absolute;
  right: 12px;
  bottom: 14px;
  padding: 0 8px;
  line-height: 24px;
  height: 24px;
  border-radius: 14px;
  background-color: rgba(0,0,0,0.2);
  text-align: center;
}
.support-count span{
	display: inline-block;
	vertical-align: top;
	float: left;
	font-size: 10px;
}
.support-count i{
	line-height: 24px;
	font-size: 10px;
	margin-left: 2px;
}
.bulletin-warpper{
	position: relative;
	height: 28px;
	line-height: 28px;
	padding: 0 22px 0 12px;
	overflow: hidden; 
	white-space: nowrap; 
-o-text-overflow: ellipsis; /* for Opera */ 
text-overflow: ellipsis; /* for IE */ 
background-color: rgba(7,17,27,0.2);
}
.bulletion-title{
	background: url('bulletin@3x.png') no-repeat left center;
	width: 22px;
	height: 12px;
	background-size: 22px 12px;
	display: inline-block;
	margin-top: 10px;
	vertical-align: top;

}
.bulletin-count{
	vertical-align: top;
	font-size: 10px;
	margin: 0 4px;
}
.arrow2{
	font-size: 10px;
	position: absolute;
	right: 12px;
	top: 12px;

}
.bac{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter:blur(10px);
}
.bac img{

}
.detail{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	overflow: auto;
	transition:all 0.5s;
	background-color: rgba(7,17,27,0.8);
	backdrop-filter:blur(10px);
}
.fade-enter,.fade-leave-active{
	background-color: rgba(7,17,27,0);
	opacity: 0;
}
.fade-enter-active,.fade-leave{
  background-color: rgba(7,17,27,0.8);
  opacity: 1;
}
.detail-wrapper{
	min-height: 100%;
}
.detail-main{
	margin-top: 64px;
	padding-bottom: 64px;
}
.detail-name{
	line-height: 16px;
	font-size: 16px;
	font-weight: 700;
	text-align: center;
}
.close-icon{
	margin: -64px auto 0 auto;
	width: 32px;
	height: 32px;
	position: relative;
	font-size: 32px;
    clear: both;

}
.star-wrapper{
	 text-align: center;
     margin-top: 32px;
     padding: 2px 0;
}
.youhui{
	width: 80%;
	margin:12px 12px;
	padding-left: 10%;
}
.youhui .icon{
	width: 16px;
	height: 16px;
	display: inline-block;
	background-size: 16px 16px;
	display: inline-block;
}
.youhui .dir{
	margin-left: 6px;
	line-height: 12px;
	margin-top: 2px;
	font-size: 12px;
	font-weight: 200;
	display: inline-block;
    vertical-align: top;
}
.seller-msg{
	width: 80%;
	margin: 24px auto 48px auto;
	line-height: 24px;
	font-size: 12px;
	font-weight: 200;
	padding-left: 12px;
	padding-right: 12px;
}
</style>
