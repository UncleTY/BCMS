<template>
  <div>
    <div class="title">热门推荐</div>
    <ul class="menu">
      <li @click="menu1">手机</li>
      <li @click="menu2">电脑</li>
      <li @click="menu3">服饰</li>
      <li @click="menu4">鞋子</li>
      <li>手表</li>
      <li>电脑</li>
      <li>手机</li>
      <li>电脑</li>
      <li>手机</li>
      <li>电脑</li>
      <li>电脑</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import Msg from "./msg.js";
export default {
  methods: {
    menu1: function() {
      Msg.$emit("val", 1);
    },
    menu2: function() {
      Msg.$emit("val", 2);
    },
    menu3: function() {
      Msg.$emit("val", 3);
    },
    menu4: function() {
      Msg.$emit("val", 4);
    }
  }
};
</script>

<style type="text/css">
.title {
  width: 100px;
  color: red;
}

.menu li {
  list-style: none;
  height: 50px;
  margin-bottom: 2px;
  background-color: white;
  line-height: 50px;
  cursor: pointer;
}
</style>
