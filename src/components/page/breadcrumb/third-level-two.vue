<template>
  <div class="root">
    <p>{{msg}}</p>
    <p>
      <router-link to="/breadcrumb/second-level/third-level-two/fourth-level">Go To Fourth-level>>></router-link>
    </p>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'ThirdLevelBreadcrumbSampleTwo',
  data() {
    return {
      msg: ` I am third-level 2 breadcurmb!!!`
    }
  }
}
</script>
