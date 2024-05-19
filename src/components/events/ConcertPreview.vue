<template>
  <div class="concert-block" @click="this.$router.push({name: 'EventInfo', params: { id: this.event.id}})">
    <div class="resource-name-block">{{event.resourceName}} - {{event.resourceType}}</div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.concert-block {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: rgba(28, 28, 28, 0.5);
  width: 350px;
  height: 100px;
}

.resource-name-block {
  font-size: xx-large;
  margin-top: 8%;
  align-self: center;
}
</style>
