<template>
  <div class="menu-container">
    <div class="header-item-text">
      <router-link to="/">Ресурсы</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'resources-header-item'
}
</script>

<style scoped>

</style>
