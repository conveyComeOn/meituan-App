<template>
  <div class="detail-title">
     <div class="line"></div>
     <div class="message">{{msg}}</div>
     <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-title{
  display: flex;
  width: 80%;
  margin:28px auto 24px auto; 
}
.detail-title .line{
    margin-bottom: 7px;
    height: 1px;
    background-color: rgba(255,255,255,0.2);
    margin-top: 7px;
    flex:1;
}
.detail-title .message{
  line-height: 14px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  padding: 0 12px;
}
</style>
