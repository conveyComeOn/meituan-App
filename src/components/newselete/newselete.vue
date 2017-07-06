<template>
  <div class="selectedrting">
    <div class="allmeaths">
      <span class="positive block" :class="{'active':myselectType == 2}" @click="select(2)">{{ desc.all }}<span class="count">{{ ratings.length }}</span></span>
      <span class="positive block" :class="{'active':myselectType == 0}" @click="select(0)">{{ desc.positive }}<span class="count">{{ positives.length }}</span></span>
      <span class="negative block" :class="{'active':myselectType == 1}" @click="select(1)">{{ desc.negative }}<span class="count">{{ negatives.length }}</span></span>
    </div>
    <div class="duihao" :class="{'on':myonlyContent}" @click="onlyClick($event)">
      <span class="icon-check_circle"></span>
      <span class="onlyread">只看有内容的评价</span>
    </div>
    <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings"  class="rating-item" v-show="needshow(rating,myonlyContent)">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content1">
              <span class="name">{{ rating.username }}</span>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{ rating.deliveryTime }}分钟送达</span>
              </div>
              <p class="text">{{ rating.text }}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend">{{ item }}</span>
              </div>
              <div class="time">
                {{ rating.rateTime | formatDate }}
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {formatDate} from '../../common/date.js'
import star from '../star/star'
const ALL = 2
export default {
  name: 'newselete',
  data() {
      return {
        myselectType: this.selectType,
        myonlyContent: this.onlyContent
      }
  },
  props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    components: {
      star
    },
    methods: {
      select: function(seletype){
       this.myselectType = seletype
      },
      onlyClick: function(){
        if (!event._constructed) {
          return
        }
        this.myonlyContent = !this.myonlyContent
      },
      needshow: function(rating, only){
        if (this.myselectType === 2){
            if (only) {
              if (rating.text) {
                return true
              } else {
                return false
              }
            } else {
              return true
            }
        } else {
           if (only) {
              if (rating.text) {
                return rating.rateType === this.myselectType
              } else {
                return false
              }
            } else {
              return rating.rateType === this.myselectType
            }
        }
    }
  },
  filters: {
   formatDate(time) {
   let date = new Date(time)
   return formatDate(date, 'yyyy-MM-dd hh:mm')
   }
  },
  computed: {
    positives: function(){
      var positivesArr=[]
      this.ratings.forEach((rating) => {
          if (rating.rateType === 0) {
            positivesArr.push(rating)
          }
      })
      return positivesArr
    },
    negatives: function(){
      var negativesArr=[]
      this.ratings.forEach((rating) => {
          if (rating.rateType === 1) {
            negativesArr.push(rating)
          }
      })
      return negativesArr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectedrting{
  padding: 12px 0 18px 0;

}
.selectedrting .allmeaths{
 flex-direction:row;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  padding-bottom: 18px;
  margin-left: 18px;
  margin-right: 18px;
}
.selectedrting .duihao{
  padding: 12px 0 12px 0;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  padding-left: 18px;
  box-sizing: border-box;
}
.selectedrting .allmeaths .block{
  display: inline-block;
  margin-right: 8px;
  font-size: 12px;
  line-height: 16px;
  padding: 12px;
  text-align: center;
  border-radius: 2px;
}
.selectedrting .allmeaths .positive{
  color: rgb(77,85,93);
  background-color: rgba(0,160,220,0.2);
}
.selectedrting .allmeaths .negative{
   background-color: rgba(77,85,93,0.2);
}
.selectedrting .allmeaths .count{
  margin-left: 2px;
  font-size: 8px;
}
.selectedrting .allmeaths .active{
  background-color: rgb(0,160,220);
  color: #fff;
}
.selectedrting .duihao .icon-check_circle{
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
}
.selectedrting .duihao .onlyread{
  color: rgb(147,153,169);
  line-height: 24px;
  font-size: 12px;
}
.rating-wrapper{
padding: 0 18px;
}
.rating-wrapper .rating-item{
display: flex;
padding: 18px 0;
}
.rating-wrapper .rating-item .avatar{
flex: 0 0 28px;
width: 28px;
margin-right: 12px;
}
.rating-wrapper .rating-item .avatar img{
border-radius: 50%;
background: #eee;
}
.rating-wrapper .rating-item .content1{
position: relative;
flex:1;
}
.rating-wrapper .rating-item .content1 .name{
margin-bottom: 4px;
line-height: 12px;
font-size: 10px;
color: rgb(7,17,27);
}
.rating-wrapper .rating-item .content1 .star-wrapper{
margin-bottom: 6px;
font-size: 0;
}
.rating-wrapper .rating-item .content .star-wrapper .star-main{
display: inline-block;
vertical-align: top;
margin-right: 6px;
}
.rating-wrapper .rating-item .content .star-wrapper .star-time span{
  display: inline-block;
  vertical-align: top;
}
.rating-wrapper .rating-item .content1 .star-wrapper .delivery{
display: inline-block;
vertical-align: top;
font-size: 10px;
line-height: 12px;
color: rgb(147,153,159);
}
.rating-wrapper .rating-item .text{
line-height: 18px;
color: rgb(7,17,27);
font-size: 12px;
margin-bottom: 8px;
}
.rating-wrapper .rating-item .recommend{
line-height: 16px;
font-size: 0;
}
.icon-thumb_up, .item{
display: inline-block;
vertical-align: top;
margin: 0 8px 4px 0;
font-size: 9px;
}
.rating-wrapper .rating-item .icon-thumb_up{
padding-top: 2px;
color: rgb(0,160,220);
font-size: 12px;
}
.rating-wrapper .rating-item .item{
padding: 0 6px;
border: 1px solid rgba(7,17,27,.1);
border-radius: 1px;
color: rgb(147,153,159);
background: #fff;
}
.rating-wrapper .rating-item .time{
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147,153,159);
}
.selectedrting .on .icon-check_circle{
  color: #00c850;
}

</style>
