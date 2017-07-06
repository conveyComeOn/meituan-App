<template>
  <div class="star-main" :class="makeClass">
  <span v-for="starItem in starArrays" class="item" :class="starItem"></span>

  </div>
</template>

<script>
 const LEN = 5
 const STAR_ON = 'on'
 const STAR_HARF = 'half'
 const STAR_OFF = 'off'
export default {
  props: {
    size: Number,
    score: Number
  },
  computed: {
    makeClass: function(){
      return 'star-'+this.size
    },
    starArrays: function(){
      let starArray=[]
      let sc=this.score
      let woStar=Math.floor(sc*2)/2
      let interge=Math.floor(woStar)
      for (var i = 0; i < interge; i++) {
        starArray.push(STAR_ON)
      }
      if (woStar%1 !== 0) {
        starArray.push(STAR_HARF)
      }
      while (starArray.length< LEN){
        starArray.push(STAR_OFF)
      }
      return starArray
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star-main{
  font-size: 20px;
 
}
.itemClass{
  display: inline-block;
}
.star-24 .item{
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
  display: inline-block;
  
}
.star-36 .item{
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
  display: inline-block;
}
.star-48 .item{
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
  display: inline-block;
}
.star-36 .item:last-child,.star-224 .item:last-child,.star-48 .item:last-child{
  margin-right: 0
}
.star-24 .half{
  background-image: url('star24_half@2x.png') no-repeat center center;
  background-size: 10px 10px;
}
.star-36 .half{
  background: url('star36_half@2x.png') no-repeat center center;
  background-size: 15px 15px;
}
.star-48 .half{
  background-image: url('star48_half@2x.png') no-repeat center center;
  background-size: 20px 20px;
}
.star-24 .on{
  background: url('star24_on@2x.png') no-repeat center center;
   background-size: 10px 10px;
}
.star-36 .on{
  background: url('star36_on@2x.png') no-repeat center center;
  background-size: 15px 15px;
}
.star-48 .on{
  background: url('star48_on@2x.png') no-repeat center center;
  background-size: 20px 20px;
}
.star-24 .off{
  background: url('star24_off@2x.png') no-repeat center center;
   background-size: 10px 10px;
}
.star-36 .off{
  background: url('star36_off@2x.png') no-repeat center center;
  background-size: 15px 15px;
}
.star-48 .off{
  background: url('star48_off@2x.png') no-repeat center center;
  background-size: 20px 20px;
}


 
</style>
