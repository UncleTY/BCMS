<template>
  <div>
    <div v-if="kk === 1">
      <GoodList :goodId="1"></GoodList>
    </div>
    <div v-else-if="kk === 2">
      <GoodList :goodId="2"></GoodList>
    </div>
    <div v-else>
      <GoodList :goodId="1"></GoodList>
    </div>
  </div>
</template>

<script type="text/javascript">
import Msg from "./msg.js";
import GoodList from "./Good.vue";

export default {
  data() {
    return {
      kk: 0
    };
  },
  mounted() {
    var _this = this;
    Msg.$on("val", function(val) {
      _this.kk = val;
    });
  },
  components: {
    GoodList
  }
};
</script>
