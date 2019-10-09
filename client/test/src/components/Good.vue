<template>
  <div name="show">
    <ul class="goodList">
      <li v-for="good in goodList">
        <img :src="good.img" />
        <p>{{ good.goodName }}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "show",
  data() {
    const _this = this;
    let url = "";
    if (_this.goodId === 1) {
      url = "json/shouji.json";
    } else if (_this.goodId === 2) {
      url = "json/bjb.json";
    }
    this.$http.get(url).then(function(result) {
      _this.goodList = result.data;
    });
    return {
      goodList: []
    };
  },
  props: {
    goodId: Number
  },
  watch: {
    goodId() {
      const _this = this;
      let url = "";
      if (_this.goodId === 1) {
        url = "json/shouji.json";
      } else if (_this.goodId === 2) {
        url = "json/bjb.json";
      }
      this.$http.get(url).then(function(result) {
        _this.goodList = result.data;
      });
      return {
        goodList: []
      };
    }
  }
};
</script>

<style type="text/css">
.goodList li {
  width: 200px;
  height: 200px;
  float: left;
  list-style: none;
  font-size: 9px;
  color: red;
  margin-bottom: 30px;
}

.goodList img {
  width: 180px;
  height: 180px;
}
</style>
