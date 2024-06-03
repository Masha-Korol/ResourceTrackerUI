<template>
  <div class="resource-block" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
    <div>{{resource.resourceName}} - {{resource.resourceType}}</div>
    <div class="recommended-by-clock"><i>Отметил: {{resource.recommendedBy}}</i></div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.resource-block {
  border: 1px solid black;
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #df7931;
}

.recommended-by-clock {
  font-size: x-large;
}
</style>
