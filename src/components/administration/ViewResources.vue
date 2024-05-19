<template>
  <table>
    <caption>Ресурсы</caption>
    <thead @click="isTableHidden = !isTableHidden">
    <tr>
      <th>Id</th>
      <th>Название</th>
      <th>Тип</th>
      <th>Ссылка</th>
    </tr>
    </thead>
    <tbody v-if="!isTableHidden">
    <tr v-for="resource in resources">
      <td>{{ resource.id }}</td>
      <td>{{ resource.resourceName }}</td>
      <td>{{ resource.resourceType }}</td>
      <td><a class="resource-link"><u>{{ resource.resourceLink }}</u></a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'view-resources',
  props: {
    resources: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      isTableHidden: true
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
}

table thead {
  cursor: pointer;
}

table thead th,
table tfoot th {
  color: #777;
  background: rgba(0,0,0,.1);
}

table caption {
  padding: .5em;
  color: white;
}

table th,
table td {
  padding: .5em;
  border: 1px solid lightgrey;
}

.resource-link {
  color: black !important;
}
</style>
