<template>
  <div class="resource-block" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
    <div class="resource-name-block">{{resource.resourceName}}</div>
    <div class="resource-type-block"><i>{{resource.resourceType}}</i></div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.resource-block {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background: rgba(28, 28, 28, 0.5);
  width: 350px;
  height: 80px;
}

.resource-name-block {
  font-size: xx-large;
  white-space: nowrap;
  align-self: center;
}

.resource-type-block {
  font-size: x-large;
  align-self: center;
}
</style>
