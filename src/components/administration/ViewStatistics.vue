<template>
  <table>
    <caption>Статистика</caption>
    <thead @click="isTableHidden = !isTableHidden">
    <tr>
      <th>Ресурс</th>
      <th>Добавлен в избранное</th>
      <th>Нажатий на ссылку</th>
      <th>Оценка 5</th>
      <th>Оценка 4</th>
      <th>Оценка 3</th>
      <th>Оценка 2</th>
      <th>Оценка 1</th>
    </tr>
    </thead>
    <tbody v-if="!isTableHidden">
    <tr v-for="stat in stats">
      <td>{{stat.resource}}</td>
      <td>{{stat.favorite}}</td>
      <td>{{stat.link}}</td>
      <td>{{stat.mark5}}</td>
      <td>{{stat.mark4}}</td>
      <td>{{stat.mark3}}</td>
      <td>{{stat.mark2}}</td>
      <td>{{stat.mark1}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ViewStatistics',
  props: {
    stats: {
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
.menu-buttons {
  display: flex;
  flex-direction: row;
}

.menu-button {
  display: flex;
}

button {
  cursor: pointer;
}

.approve-button {
  color: white;
  background-color: green;
}

.reject-button {
  color: white;
  margin-left: 2px;
  background-color: red;
}

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
