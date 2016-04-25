<template> 
  <!-- <div id="app"> -->
    <div class="title" v-for="item in items">
      <h1>Hello!{{item.name}}</h1>
    </div>
    <ul class="testList">
      <li>
        <a v-link="{ name: 'lizhongshuo' }">lizhongshuo</a>
      </li>
      <li>
        <a v-link="{ name: 'wanglihong' }">wanglihong</a>
      </li>
    </ul>
    <button @click="goWanglihong">看王力宏吧</button>
    <!-- 路由外链 -->
    <!-- <router-view></router-view> -->
  <!-- </div> -->
</template> 

<script>
  export default {
    data () {
      return {
        items: [
          {name: 'wanglihong'},
          {name: 'lizhongshuo'}
        ]
      }
    },
    methods: {
      goWanglihong () {
        this.$route.router.go({ name: 'wanglihong' })
      }
    }
  }
</script> 

<style lang="sass">
  html {
    background: #c1c1c1;
    .title {
      font-size: 24px;
      color: green;
    }
    .testList a{
      color: green;
      font-size: 36px;
    }
  }
</style> 