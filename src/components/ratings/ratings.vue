<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">
            综合评分
          </div>
          <div class="rank">
            高于周边商家{{ seller.rankRate }}%
          </div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{ seller.serviceScore }}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{ seller.foodScore }}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{ seller.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <newselete :ratings="ratings" :selectType="selectType" :onlyContent="onlyContent"></newselete>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import star from '../star/star'
  import split from '../split/split'
  import newselete from '../newselete/newselete'
  import {formatDate} from '../../common/date'

  const ALL = 2
  export default {
    data () {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split,
      newselete
    },
    methods: {
      needShow (type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      }
    },
    created () {
          this.ratings = [
    {
      "username": "3******c",
      "rateTime": 1469281964000,
      "deliveryTime": 30,
      "score": 5,
      "rateType": 0,
      "text": "外卖员A好帅，我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": [
        "芝士叉烧肉",
        "AD钙奶"
      ]
    },
    {
      "username": "2******3",
      "rateTime": 1469271264000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "服务态度不错，外卖员A好帅",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": [
        "芝士黑椒牛肉"
      ]
    },
    {
      "username": "3******b",
      "rateTime": 1469261964000,
      "score": 3,
      "rateType": 1,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "1******c",
      "rateTime": 1469261864000,
      "deliveryTime": 20,
      "score": 5,
      "rateType": 0,
      "text": "良心店铺",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "2******d",
      "rateTime": 1469251264000,
      "deliveryTime": 10,
      "score": 4,
      "rateType": 0,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "9******0",
      "rateTime": 1469241964000,
      "deliveryTime": 70,
      "score": 1,
      "rateType": 1,
      "text": "送货速度蜗牛一样",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "d******c",
      "rateTime": 1469231964000,
      "deliveryTime": 30,
      "score": 5,
      "rateType": 0,
      "text": "很喜欢的焗饭店",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "2******3",
      "rateTime": 1469221264000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "量给的还可以",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "3******8",
      "rateTime": 1469211964000,
      "deliveryTime": "",
      "score": 3,
      "rateType": 1,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "a******a",
      "rateTime": 1469201964000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "孩子喜欢吃这家",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": [
        "巴西烤肉"
      ]
    },
    {
      "username": "3******3",
      "rateTime": 1469191264000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "焗饭挺好吃的",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "t******b",
      "rateTime": 1469181964000,
      "deliveryTime": "",
      "score": 3,
      "rateType": 1,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "f******c",
      "rateTime": 1469171964000,
      "deliveryTime": 15,
      "score": 5,
      "rateType": 0,
      "text": "送货速度很快",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "k******3",
      "rateTime": 1469161264000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "u******b",
      "rateTime": 1469151964000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "下雨天给快递小哥点个赞",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "s******c",
      "rateTime": 1469141964000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "好",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "z******3",
      "rateTime": 1469131264000,
      "deliveryTime": "",
      "score": 5,
      "rateType": 0,
      "text": "吃了还想再吃",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "n******b",
      "rateTime": 1469121964000,
      "deliveryTime": "",
      "score": 3,
      "rateType": 1,
      "text": "发票开的不对",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "m******c",
      "rateTime": 1469111964000,
      "deliveryTime": 30,
      "score": 5,
      "rateType": 0,
      "text": "好吃",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "l******3",
      "rateTime": 1469101264000,
      "deliveryTime": 40,
      "score": 5,
      "rateType": 0,
      "text": "还不错吧",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "3******o",
      "rateTime": 1469091964000,
      "deliveryTime": "",
      "score": 2,
      "rateType": 1,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "3******p",
      "rateTime": 1469081964000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "很喜欢的焗饭",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "o******k",
      "rateTime": 1469071264000,
      "deliveryTime": "",
      "score": 5,
      "rateType": 0,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    },
    {
      "username": "k******b",
      "rateTime": 1469061964000,
      "deliveryTime": "",
      "score": 4,
      "rateType": 0,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend": []
    }
  ]
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            })
          })
     this.selectType = ALL
     this.onlyContent = true
    }
  }

</script>

<style>
.ratings{
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.ratings .ratings-content .overview{
  display: flex;
  padding: 18px 0;
}
.ratings .ratings-content .overview .overview-left{
flex: 0 0 137px;
padding: 6px 0;
width: 137px;
border-right: 1px solid rgba(7,17,27,.1);
text-align: center;
}
@media only screen and (max-width: 320px){
  .overview-left{width: 320px;}
}
.ratings .ratings-content .overview .overview-left .score{
margin-bottom: 6px;
line-height: 28px;
font-size: 24px;
color: rgb(255,153,0);
}
.ratings .ratings-content .overview .overview-left .title{
margin-bottom: 8px;
line-height: 12px;
font-size: 12px;
color: rgb(7,17,27);
}
.ratings .ratings-content .overview .overview-left .rank{
line-height: 10px;
font-size: 10px;
color: rgb(147,153,159);
}

.ratings .overview-right{
flex: 1;
padding: 6px 0 6px 24px;
}
.score-wrapper{
margin-bottom: 8px;
font-size: 0;
}
.score-wrapper .title{
display: inline-block;
vertical-align: top;
line-height: 18px;
font-size: 12px;
color: rgb(7,17,27);
}
.score-wrapper .star{
display: inline-block;
vertical-align: top;
line-height: 18px;
margin: 0 12px;
}
.score-wrapper .score{
display: inline-block;
line-height: 18px;
font-size: 12px;
color: rgb(255,153,0);
}
.delivery-wrapper{
font-size: 0;
}
.delivery-wrapper .title{
line-height: 18px;
font-size: 12px;
color: rgb(7,17,27);
}
.delivery-wrapper .delivery{
margin-left: 12px;
line-height: 18px;
font-size: 12px;
color: rgb(147,153,159);
}
</style>
