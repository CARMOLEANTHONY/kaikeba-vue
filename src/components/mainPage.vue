<template>
  <div class="hello">
    <p>
      <router-link to="/form">To Form Sample>>></router-link>
    </p>
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
  line-height: 20px;
}
a {
  color: #42b983;
}
</style>
