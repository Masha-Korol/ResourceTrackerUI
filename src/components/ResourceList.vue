<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text"><b style="font-size: 60px;">Ресурсы</b></text>
    </div>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="resources-block">
    <div class="rec-res">
      <div>
        <h1 class="most-popular-resources-h2">Вам должно понравиться</h1>
      </div>
      <div class="dropdown specialty">
        <button class="dropbtn">Backend</button>
        <div class="dropdown-content">
          <a href="#">Frontend</a>
          <a href="#">Management</a>
          <a href="#">Embedded</a>
          <a href="#">System Administration</a>
          <a href="#">QA</a>
        </div>
      </div>
    </div>

    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in recommendedResources" :resource="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Ресурсы, подобранные по вашим тэгам</h1> <br>
    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in recommendedResourcesByTags" :resource="resource" :key="resource.id" />
    </div>

    <div class="rec-res">
      <div>
        <h1 class="most-popular-resources-h1">Самые популярные ресурсы сейчас</h1>
      </div>
      <div class="dropdown specialty">
        <button class="dropbtn">Backend</button>
        <div class="dropdown-content">
          <a href="#">Frontend</a>
          <a href="#">Management</a>
          <a href="#">Embedded</a>
          <a href="#">System Administration</a>
          <a href="#">QA</a>
        </div>
      </div>
    </div>
    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in popularResources" :resource="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Все ресурсы</h1> <br>
    <div class="menu-items">
      <div class="topnav">
        <input type="text" placeholder="Поиск..">
      </div>
      <div class="dropdown">
        <button class="dropbtn">Тип ресурса</button>
        <div class="dropdown-content">
          <a href="#">Статья</a>
          <a href="#">Курс</a>
          <a href="#">Туториал</a>
          <a href="#">Видео</a>
          <a href="#">Книга</a>
        </div>
      </div>
      <div class="dropdown specialty">
        <button class="dropbtn">Специализация</button>
        <div class="dropdown-content">
          <a href="#">Backend</a>
          <a href="#">Frontend</a>
          <a href="#">Management</a>
          <a href="#">Embedded</a>
          <a href="#">System Administration</a>
          <a href="#">QA</a>
        </div>
      </div>
      <div class="form_label">
        <div class="multiselect_block">
          <div class="field_multiselect">
            <span v-if="!selectedOptions.length">Тэги</span>
            <button
                v-for="option in selectedOptions"
                :key="option"
                type="button"
                class="btn_multiselect"
                @click="deselectOption(option)">
              {{ option }}
            </button>
          </div>
          <input id="checkbox-1" class="multiselect_checkbox" type="checkbox">
          <label for="checkbox-1" class="multiselect_label"></label>
          <select @change="handleChange" id="select-1" class="field_select" name="technology" multiple style="@media (min-width: 768px) { height: calc(4 * 38px)}">
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="ProjectManagement">Project Management</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
          </select>
        </div>
        <span class="error_text"></span>
      </div>
    </div>
    <div class="resources-container">
      <resource-preview v-for="resource in resources" :resource="resource" :key="resource.id" />
    </div>
  </div>
</template>

<script>
import ResourcePreview from '@/components/resources/ResourcePreview.vue';

export default {
  name: 'ResourceList',
  components: {
    ResourcePreview
  },
  data() {
    return {
      resources: [],
      popularResources: [],
      recommendedResources: [],
      recommendedResourcesByTags: [],
      selectedOptions: [],
    }
  },
  methods: {
    handleChange(event) {
      this.selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
      console.log(`selected options: ${JSON.stringify(this.selectedOptions)}`);
    },
    deselectOption(optionToRemove) {
      this.selectedOptions = this.selectedOptions.filter(option => option !== optionToRemove);
      const selectElement = this.$el.querySelector('.field_select');
      Array.from(selectElement.options).forEach(option => {
        if (option.value === optionToRemove) {
          option.selected = false;
        }
      });
    }
  },
  created() {
    axios
        .get(`${BACKEND_URL}/resources`, {headers: authHeader()})
        .then((response) => {
          this.resources = response.data.resources;
          this.popularResources = response.data.this.popularResources;
          this.recommendedResources = response.data.this.recommendedResources;
          this.recommendedResourcesByTags = response.data.this.recommendedResourcesByTags;
        })
        .catch(handleAxiosError);
  }
}
</script>

<style scoped>
.resources-block {
  display: flex;
  flex-direction: column;
}

/* resources list */

.resources-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}

.most-popular-resources-h1 {
  height: 0;
  margin-top: 0;
}

.most-popular-resources-h2 {
  height: 0;
  margin-top: 4px;
}

.rec-res {
  display: flex;
  flex-direciton: row;
}

/* Add a black background color to the top navigation bar */
.topnav {
  overflow: hidden;
}

.form_label {
  margin-left: 15px;
  background-color: #df7931;
  border-radius: 10px;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the "active" element to highlight the current page */
.topnav a.active {
  background-color: #2196F3;
  color: white;
}

/* Style the search box inside the navigation bar */
.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
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

/* Style The Dropdown Button */
.dropbtn {
  background-color: #df7931;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 0 16px 0 16px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

.specialty {
  margin-left: 15px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #FFBF00;
}

.menu-items {
  display: flex;
  flex-direction: row;
}

.field_multiselect {
  padding-right: 60px;
  margin-left: 15px;
  padding-top: 7px;
  font-size: 20px;
}

.field_multiselect:after {
  content: "";
  position: absolute;
  right: 14px;
  top: 15px;
  width: 6px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='6' height='16' viewBox='0 0 6 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 0L6 5H0L3 0Z' fill='%23A8ACC9'/%3E%3Cpath d='M3 16L6 11H0L3 16Z' fill='%23A8ACC9'/%3E%3C/svg%3E") 50% 50% no-repeat;
}

.multiselect_block {
  position: relative;
  width: 100%;
}

.field_select {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  border: 2px solid #cdd6f3;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  box-sizing: border-box;
  outline-color: #cdd6f3;
  z-index: 6;
  width: 200px;
}

.field_select[multiple] {
  overflow-y: auto;
}

.field_select option {
  display: block;
  padding: 8px 16px;
  width: calc(370px - 32px);
  cursor: pointer;
}
.field_select option:checked {
  background-color: #eceff3;
}
.field_select option:hover {
  background-color: #d5e8fb;
}

.field_multiselect button {
  position: relative;
  padding: 7px 34px 7px 8px;
  background: white;
  border-radius: 4px;
  margin-right: 9px;
  margin-bottom: 10px;
}
.field_multiselect button:hover, .field_multiselect button:focus {
  background-color: #dbd1ee;
}
.field_multiselect button:after {
  content: "";
  position: absolute;
  top: 7px;
  right: 10px;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.4958 6.49499C19.7691 6.22162 19.7691 5.7784 19.4958 5.50504C19.2224 5.23167 18.7792 5.23167 18.5058 5.50504L12.5008 11.5101L6.49576 5.50504C6.22239 5.23167 5.77917 5.23167 5.50581 5.50504C5.23244 5.7784 5.23244 6.22162 5.50581 6.49499L11.5108 12.5L5.50581 18.505C5.23244 18.7784 5.23244 19.2216 5.50581 19.495C5.77917 19.7684 6.22239 19.7684 6.49576 19.495L12.5008 13.49L18.5058 19.495C18.7792 19.7684 19.2224 19.7684 19.4958 19.495C19.7691 19.2216 19.7691 18.7784 19.4958 18.505L13.4907 12.5L19.4958 6.49499Z' fill='%234F5588'/%3E%3C/svg%3E") 50% 50% no-repeat;
  background-size: contain;
}

.multiselect_label {
  position: absolute;
  top: 1px;
  left: 2px;
  width: 100%;
  height: 44px;
  cursor: pointer;
  z-index: 3;
}

.field_select {
  display: none;
}

input.multiselect_checkbox {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border: none;
  opacity: 0;
}

.multiselect_checkbox:checked ~ .field_select {
  display: block;
}

.multiselect_checkbox:checked ~ .multiselect_label {
  width: 40px;
  left: initial;
  right: 4px;
  background: #df7931 url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.4958 6.49499C19.7691 6.22162 19.7691 5.7784 19.4958 5.50504C19.2224 5.23167 18.7792 5.23167 18.5058 5.50504L12.5008 11.5101L6.49576 5.50504C6.22239 5.23167 5.77917 5.23167 5.50581 5.50504C5.23244 5.7784 5.23244 6.22162 5.50581 6.49499L11.5108 12.5L5.50581 18.505C5.23244 18.7784 5.23244 19.2216 5.50581 19.495C5.77917 19.7684 6.22239 19.7684 6.49576 19.495L12.5008 13.49L18.5058 19.495C18.7792 19.7684 19.2224 19.7684 19.4958 19.495C19.7691 19.2216 19.7691 18.7784 19.4958 18.505L13.4907 12.5L19.4958 6.49499Z' fill='%234F5588'/%3E%3C/svg%3E") 50% 50% no-repeat;
}

.multiselect_checkbox:checked ~ .field_multiselect_help {
  opacity: 1;
}
</style>
