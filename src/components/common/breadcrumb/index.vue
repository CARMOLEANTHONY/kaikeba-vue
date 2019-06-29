<template>
  <div class="root">
    <div class="container">
      <span v-for="(item, index) in breadcrumbData" :key="`item${index}`">
        <span v-if="needSeparatorAndLink(index)">
          <span class="item">
            <router-link :to="item.path">{{item.label}}</router-link>
          </span>
          <span>{{separator}}</span>
        </span>
        <span v-else class="item">{{item.label}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    separator: {
      type: String,
      default: '>>>'
    }
  },
  computed: {
    // get data from this.$route.matched
    breadcrumbData() {
      return this.$route.matched.map(item => {
        return {
          path: item.path,
          label: item.meta.breadcrumbLabel || item.name || item.path
        }
      })
    }
  },
  methods: {
    // The last item dose not need separator and link beacause it always be the current one.
    needSeparatorAndLink(index) {
      return index !== this.breadcrumbData.length - 1
    }
  }
}
</script>
<style scoped>
.root {
  text-align: left;
}
.container {
  line-height: 50px;
  text-align: left;
  display: inline-block;
  padding: 0 30px;
}

.item {
  display: inline-block;
  padding: 0 5px;
}
</style>
