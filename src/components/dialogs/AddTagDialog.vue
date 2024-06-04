<template>
  <div class="modal" v-show="show">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="this.$emit('update:show', false)">&times;</span>
        <h2>Создать тэг</h2>
      </div>
      <div class="modal-body">
        <div class="form-body">
          <form>
            <label for="tag-name">Название</label>
            <input type="text" id="tag-name" name="tagName" placeholder="" v-model="newTag.tagName">

            <input type="submit" value="Отправить" @click="createResource">

            <p v-if="errors.length">
              <ul>
                <li v-for="error in errors" class="error-text">{{ error }}</li>
              </ul>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-tag-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newTag: {
        tagName: '',
      },
      errors: [],
    }
  },
  methods: {
    createResource(event) {
      event.preventDefault();

      this.validateForm();

      if (this.errors.length === 0) {
        this.$emit('createTag', this.newTag);
        this.newTag.tagName = '';
        this.$emit('update:show', false);
      }
    },
    validateForm() {
      this.errors = [];

      if (!this.newTag.tagName) {
        this.errors.push('Необходимо указать название тэга.');
      }
    },
  },
}
</script>

<style scoped>
.form_label {
  position: relative;
  min-height: 88px;
}

.form_text {
  vertical-align: top;
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #686ea1;
}

.form_text:after {
  content: "*";
  position: relative;
  top: 0;
  font-size: 13px;
  color: #f00;
}

.form_label input,
.field_multiselect {
  position: relative;
  width: 100%;
  display: block;
  min-height: 46px;
  border: 1px solid #cdd6f3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 12px 40px 10px 16px;
  font-size: 14px;
  color: #a8acc9;
  outline-color: #cdd6f3;
}
.form_label input::placeholder,
.field_multiselect::placeholder {
  color: #a8acc9;
}
.form_label input:hover,
.field_multiselect:hover {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16);
}
.form_label input:focus,
.field_multiselect:focus {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16);
}

.form_label input.error {
  border-color: #eb5757;
}

.error_text {
  color: #eb5757;
}

.field_multiselect {
  padding-right: 60px;
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
  width: 100%;
  border: 2px solid #cdd6f3;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  box-sizing: border-box;
  outline-color: #cdd6f3;
  z-index: 6;
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
  background: #ebe4fb;
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
  background: #ffffff url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.4958 6.49499C19.7691 6.22162 19.7691 5.7784 19.4958 5.50504C19.2224 5.23167 18.7792 5.23167 18.5058 5.50504L12.5008 11.5101L6.49576 5.50504C6.22239 5.23167 5.77917 5.23167 5.50581 5.50504C5.23244 5.7784 5.23244 6.22162 5.50581 6.49499L11.5108 12.5L5.50581 18.505C5.23244 18.7784 5.23244 19.2216 5.50581 19.495C5.77917 19.7684 6.22239 19.7684 6.49576 19.495L12.5008 13.49L18.5058 19.495C18.7792 19.7684 19.2224 19.7684 19.4958 19.495C19.7691 19.2216 19.7691 18.7784 19.4958 18.505L13.4907 12.5L19.4958 6.49499Z' fill='%234F5588'/%3E%3C/svg%3E") 50% 50% no-repeat;
}

.multiselect_checkbox:checked ~ .field_multiselect_help {
  opacity: 1;
}

/* Modal Header */
.modal-header {
  padding: 2px 16px;
  background-color: #f2f2f2;
}

/* Modal Body */
.modal-body {
  padding: 2px 16px;
  background-color: #fefefe;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Form */
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #df7931;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #df7931;
}

.form-body {
  border-radius: 5px;
  background-color: #fefefe;
  padding: 20px;
}

.error-text {
  color: red;
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
</style>
