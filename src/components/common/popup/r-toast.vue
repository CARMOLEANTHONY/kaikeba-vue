<template>
  <div class="container" v-if="!isHide">
    <h3>{{title}}</h3>
    <p class="message">{{message}}</p>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isHide: true,
      myTimeout: null
    }
  },
  methods: {
    showToast() {
      this.isHide = false
      this.myTimeout = setTimeout(this.hideToast, this.duration)
    },
    hideToast() {
      this.isHide = true
      clearTimeout(this.myTimeout)
      this.remove()
    }
  },
  destroyed() {
    clearTimeout(this.myTimeout)
  }
}
</script>
<style scoped>
.container {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid #999;
  box-shadow: 0 0 3px 3px #aaa;
  text-align: center;
  padding: 20px 30px;
  min-width: 200px;
  background: #fcfcfc;
}

h3 {
  margin-bottom: 10px;
}
</style>


