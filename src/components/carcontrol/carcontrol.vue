<template>
  <div class="carcontrol">
    <transition name="move">
    <span v-show="food.count" class="icon-remove_circle_outline left" @click.stop.prevent="minusNum"></span></transition>
   <span class="totalnumber" v-show="food.count">{{ food.count }}</span>
   <span class="icon-add_circle" v-on:click.stop.prevent="addnumber"></span> 
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'carcontrol',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    food: Object
  },
  methods: {
    addnumber: function(){
      if (typeof(this.food.count) === 'undefined') {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
   },
   minusNum: function(){
      this.food.count--
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carcontrol .icon-remove_circle_outline,.carcontrol .icon-add_circle{
    color: rgb(0,160,220);
    display: inline-block;
    vertical-align: top;
   }
.carcontrol .totalnumber{
  vertical-align: top;
  font-size: 10px;
  width: 24px;
  color: rgb(147,153,159);
}
.carcontrol .left{
  display: inline-block;
  transition:all 0.3s linear;
}
.move-enter{
  transform:translate3D(0, 0, 0); 
  opacity: 0;
}
.move-leave-active{
  transform:translate3D(24px, 0, 0); 
  opacity: 0;
}

</style>
