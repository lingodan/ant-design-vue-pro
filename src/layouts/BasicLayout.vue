<template>
  <div>
    <Header></Header>
    <SiderMenu></SiderMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// <!--    引入组件-->
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  name: "BasicLayout",
  //注册组件
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style scoped></style>
