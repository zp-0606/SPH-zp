<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("categoryList");
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>