<template>
 <div>
 <div class="left fl">
 </div>
 <div class="right fr">
     <span class="txt">{{msg}}</span>&emsp;或者
     &emsp;<router-link to="/">返回首页</router-link>
 </div>
 </div>
</template>

<script type="text/javascript">
export default {
  name: "fails",
  data() {
    return {
      msg: "抱歉您找的页面可能不存在了   或者   您输入的地址有误，请重新输入"
    };
  },
  methods: {},
  mounted() {},
  created() {}
};
</script>

<style lang="less" scoped>
.left {
    background: url('../assets/404.jpg') no-repeat center;
    background-size: 100%;
    width: 580px;
    height: 360px;
    float: left;
    margin: 100px 70px 0 100px;
}

.right {
    padding: 240px 10px 0 0;
    float: right;
    margin-right: 90px;
    width: 400px;
    height: 600px;
    line-height: 26px;
}

.txt {
    text-align: center;
    font-size: 18px;
    color: #ff0000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>


