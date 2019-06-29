<template>
  <div class="root">
    <p>{{msg}}</p>
    <p>
      <router-link to="/breadcrumb/second-level/third-level-one">Go To Third-level One>>></router-link>
    </p>
    <p>
      <router-link to="/breadcrumb/second-level/third-level-two">Go To Third-level Two>>></router-link>
    </p>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'SecondLevelBreadcrumbSample',
  data() {
    return {
      msg: ` I am second-level breadcurmb!!!`
    }
  }
}
</script>
