<template> 
  <div class="lzs-box">
    <h1>{{name}}</h1>
    <img v-bind:src="$data.picture" alt="">
  </div>
</template> 

<script>
  export default {
    data () {
      return {
        name: '王力宏欧巴',
        picture: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1664358473,4064168340&fm=58'
      }
    }
  }
</script> 

<style lang="sass">
  .lzs-box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 24px;
      color: red;
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
</style> 