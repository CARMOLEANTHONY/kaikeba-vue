<template>
  <div class="hello">
    <p>
      <router-link to="/form">Go To Form Sample>>></router-link>
    </p>
    <p>
      <router-link to="/tree">Go To Tree Sample>>></router-link>
    </p>
    <p>
      <router-link to="/breadcrumb">Go To breadcrumb Sample>>></router-link>
    </p>
    <p>
      <router-link to="/testStore">Go To Test Store Sample>>></router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
p {
  text-align: center;
  line-height: 25px;
}
</style>
