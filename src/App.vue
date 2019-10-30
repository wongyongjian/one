<template>
<div>
<router-view></router-view>
<mtabbar></mtabbar>
</div>
</template>

<script>
import mtabbar from 'components/tabbar/maintabbar.vue'
export default {
  name: 'app',
  components: {
    mtabbar

  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
