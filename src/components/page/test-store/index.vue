<template>
  <div class="root">
    <p>{{$store.state.bomb}}</p>
    <p>{{$store.getters.bombCount}}</p>
    <button @click="throwHandler">throw!!!</button>
    <button @click="AsyncthrowHandler">Async throw!!!</button>
  </div>
</template>
<script>
export default {
  name: 'TestStore',
  methods: {
    throwHandler() {
      this.$store.commit('throwBomb', 4, 'i love you')
    },
    AsyncthrowHandler() {
      this.$store.dispatch('asyncThrow', 2, 'do you love me?')

    }
  }
}
</script>
<style scoped>
p {
  line-height: 50px;
}
</style>


