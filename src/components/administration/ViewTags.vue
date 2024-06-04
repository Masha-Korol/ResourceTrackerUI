<template>
  <table>
    <caption>Тэги</caption>
    <div class="topnav" v-if="!isTableHidden">
      <input type="text" placeholder="Поиск..">
    </div>
    <thead @click="isTableHidden = !isTableHidden">
    <tr>
      <th>Тэг</th>
      <th></th>
    </tr>
    </thead>
    <tbody v-if="!isTableHidden">
    <tr v-for="tag in tags">
      <td>{{ tag.tagName }}</td>
      <td>
        <div style="display: flex;">
          <i class='far fa-edit' style='font-size:24px; margin-left: 5px; cursor: pointer;'></i>
          <i style="font-size:24px; margin-left: 10px; cursor: pointer;" class="fa">&#xf00d;</i>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ViewTags',
  props: {
    tags: {
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
}

table th,
table td {
  padding: .5em;
  border: 1px solid lightgrey;
}

/* Style the search box inside the navigation bar */
.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  height: 9px;
  margin-bottom: 5px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;
  }
}
</style>
