<template>
  <div class="root">
    <p>{{msg}}</p>
    <p>
      <router-link to="/breadcrumb/second-level/third-level">Go To Third-level>>></router-link>
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
