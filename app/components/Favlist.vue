<template> 
 <div class="testList" v-for="item in items">
   <p>hello {{item.name}} !</p>
 </div>  
</template> 

<script>
  export default {
    data () {
      return {
        items: [
          {name: 'liuyan'},
          {name: 'wanglihong'},
          {name: 'lizhongshuo'},
          {name: 'nanshen'}
        ]
      }
    }
  }
</script> 

<style lang="sass">
  html {
    background: #c1c1c1;
    .testList p{
      color: green;
      font-size: 36px;
    }
  }
</style> 