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
        name: '李钟硕欧巴',
        picture: 'http://b.hiphotos.baidu.com/baike/s%3D220/sign=b6881b3fde33c895a27e9f79e1127397/267f9e2f07082838a69cb0bcbf99a9014d08f181.jpg'
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