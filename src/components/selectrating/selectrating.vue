<template>
  <div class="selectedrting">
    <div class="allmeaths">
      <span class="positive block" :class="{'active':myselectType == 2}" @click="select(2,$event)">{{ desc.all }}<span class="count">{{ ratings.length }}</span></span>
      <span class="positive block" :class="{'active':myselectType == 0}" @click="select(0,$event)">{{ desc.positive }}<span class="count">{{ positives.length }}</span></span>
      <span class="negative block" :class="{'active':myselectType == 1}" @click="select(1,$event)">{{ desc.negative }}<span class="count">{{ negatives.length }}</span></span>
    </div>
    <div class="duihao" :class="{'on':myonlyContent}" @click="onlyClick">
      <span class="icon-check_circle"></span>
      <span class="onlyread">只看有内容的评价</span>
    </div>
    <div class="rating-wrapper">
          <ul v-show="ratings && ratings.length">
            <li  v-for="rating in ratings" class="rating-item border-1px" v-show="needshow(rating,myonlyContent)">
              <div class="user">
                <span class="name">{{ rating.username }}</span>
                <img class="avatar" width="12" height="12" :src="rating.avatar">
              </div>
              <div class="time">
                {{ rating.rateTime | formatDate}}
              </div>
              <p class="text">
                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>
                {{ rating.text }}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!ratings || !ratings.length">
            暂无评价
          </div>
      </div>
  </div>
</template>

<script>
import star from '../star/star'
import {formatDate} from '../../common/date.js'
const ALL = 2
export default {
  name: 'selectedrting',
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
    methods: {
      select: function(seletype){
       if (!event._constructed) {
          return
        }
       this.myselectType = seletype
      },
      onlyClick: function(){
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
    },
    components: {
      star
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
.selectedrting .on .icon-check_circle{
  color: #00c850;
}

.rating-wrapper{
  padding: 0 18px;
}
.rating-wrapper .rating-item{
          position: relative;
          padding: 16px 0;
}
.rating-wrapper .rating-item .user{
            position: absolute;
            right: 0;
            top: 16px;
            font-size: 0;
            line-height: 12px;
            color: rgb(147,153,159);
          }
.rating-wrapper .rating-item .user .name{
              display: inline-block;
              vertical-align: top;
              margin-right: 6px;
              font-size: 10px;
            }
.rating-wrapper .rating-item .user .name .avatar{
              border-radius: 50%;
            }
.rating-wrapper .rating-item .time{
            margin-bottom: 6px;
            color: rgb(147,153,159);
            line-height: 12px;
            font-size: 10px;
          }
.rating-wrapper .rating-item .text{
            line-height: 16px;
            font-size: 12px;
            color: rgb(7,17,27);
          }
            .icon-thumb_up, .icon-thumb_down{
              margin-right: 4px;
              line-height: 16px;
            }
.rating-wrapper .rating-item .text .icon-thumb_up{
              color: rgb(0,160,220);
            }
.rating-wrapper .rating-item .text .icon-thumb_down{
              color: rgb(147,153,159);
            }
        .no-rating{
          padding: 16px 0;
          font-size: 12px;
          color: rgb(147,153,159);
        }

</style>
