<template>
  <div class="root">
    <breadcrumb separator="/"></breadcrumb>
    <p>{{msg}}</p>
    <p>
      <router-link to="/breadcrumb/second-level">Go To Second-level>>></router-link>
    </p>
    <router-view/>
  </div>
</template>
<script>
import Breadcrumb from '@/components/common/breadcrumb'
export default {
  name: 'FirstLevelBreadcrumbSample',
  components: { Breadcrumb },
  data() {
    return {
      msg: ` I am first-level breadcurmb!!!`
    }
  }
}
</script>

