<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <div class="app-side-logo">
          <img
            src="@/assets/logo.png"
            :width="isCollapse ? '60' : '60'"
            height="60"
          />
        </div>
        <el-menu
          :default-active="defaultActive"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          :collapse="isCollapse"
        >
          <template v-for="route in $router.options.routes">
            <template v-for="item in route.children">
              <el-menu-item
                :key="route.path + '/' + item.path"
                :index="item.path"
              >
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <el-menu
            default-active="/"
            router
            class="el-menu-demo tab-page"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#409EFF"
          >
            <el-menu-item index="/">首页</el-menu-item>
          </el-menu>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view />
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      username: "",
      isCollapse: false
    };
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  }
};
</script>

<style></style>
