<template>
  <div class="resource-block" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
    <div class="resource-name-block">{{resource.resourceName}}</div>
    <div class="resource-type-block"><i>{{resource.resourceType}}</i></div>
    <div>
      <button v-for="tag in resource.tags" class="dropbtn">{{tag}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.dropbtn {
  background-color: #FFBF00;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  height: 25px;
  margin-top: 5px;
  margin-left: 3px;
  padding: 0 16px 0 16px;
}

.resource-block {
  border: 1px solid black;
  background: none;
  padding: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background: #df7931;
  width: 280px;
  height: 105px;
}

.resource-name-block {
  font-size: x-large;
  align-self: center;
  text-align: center;
}

.resource-type-block {
  font-size: large;
  align-self: center;
}
</style>
