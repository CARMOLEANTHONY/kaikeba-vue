<template>
  <div class="root">
    <div @click="toggleExpand" class="item">
      <div v-if="!isFolder && model.link">
        <a :href="model.link">{{model.title}}</a>
      </div>
      <div v-else>
        {{model.title}}
        <span v-if="isFolder">{{ isExpand ? '-' : '+'}}</span>
      </div>
    </div>
    <div v-if="isFolder" class="children">
      <div v-show="isExpand">
        <div v-for="(item, index) in model.children" :key="`children${index}`">
          <r-tree :model="item"></r-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RTree',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFolder() {
      return this.model.children && Array.isArray(this.model.children) && this.model.children.length
    }
  },
  data() {
    return {
      isExpand: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>
<style scoped>
.item {
  cursor: pointer;
}

.root {
  text-align: left;
}

.children {
  padding-left: 2em;
}
</style>



