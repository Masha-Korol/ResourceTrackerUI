<template>
  <table>
    <caption>Новые ресурсы</caption>
    <thead @click="isTableHidden = !isTableHidden">
    <tr>
      <th>Id</th>
      <th>Название</th>
      <th>Тип</th>
      <th>Ссылка</th>
      <th>Тэги</th>
      <th></th>
    </tr>
    </thead>
    <tbody v-if="!isTableHidden">
    <tr v-for="resource in resources">
      <td>{{ resource.id }}</td>
      <td>{{ resource.resourceName }}</td>
      <td>{{ resource.resourceType }}</td>
      <td><a class="resource-link"><u>{{ resource.resourceLink }}</u></a></td>
      <td>{{ resource.tags.join(',') }}</td>
      <td>
        <div class="menu-buttons">
          <div class="menu-button">
            <button class="approve-button">Одобрить</button>
          </div>
          <div class="menu-button">
            <button class="reject-button">Отклонить</button>
          </div>
          <div>
            <i class='far fa-edit' style='font-size:24px; margin-left: 5px; cursor: pointer;'></i>
            <i style="font-size:24px; margin-left: 10px; cursor: pointer;" class="fa">&#xf00d;</i>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ViewPendingResources',
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

.approve-button {
  color: white;
  background-color: green;
}

.reject-button {
  color: white;
  margin-left: 2px;
  background-color: red;
}
</style>
