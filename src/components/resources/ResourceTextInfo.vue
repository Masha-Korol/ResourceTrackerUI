<template>
  <div class="resource-block" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
    <div>{{resource.resourceName}}</div>
    <div class="resource-type-block"><i>{{resource.resourceType}}</i></div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.resource-block {
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: rgba(28, 28, 28, 0.5);
}

.resource-type-block {
  font-size: x-large;
}
</style>
