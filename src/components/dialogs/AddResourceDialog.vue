<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="this.$emit('update:show', false)">&times;</span>
        <h2>Добавить ресурс</h2>
      </div>
      <div class="modal-body">
        <div class="form-body">
          <form>
            <label for="resource-name">Название</label>
            <input type="text" id="resource-name" name="resourceName" placeholder="" v-model="newResource.resourceName">

            <label for="resource-type">Тип</label>
            <input type="text" id="resource-type" name="resourceType" placeholder="" v-model="newResource.resourceType">

            <label for="resource-link">Ссылка</label>
            <input type="text" id="resource-link" name="resourceLink" placeholder="" v-model="newResource.resourceLink">

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
  name: 'add-resource-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newResource: {
        resourceName: '',
        resourceType: '',
        resourceLink: '',
      },
      errors: []
    }
  },
  methods: {
    createResource(event) {
      event.preventDefault();

      this.validateForm();

      if (this.errors.length === 0) {
        this.$emit('createResource', this.newResource);
        this.newResource.resourceName = '';
        this.newResource.resourceType = '';
        this.newResource.resourceLink = '';
        this.$emit('update:show', false);
      }
    },
    validateForm() {
      this.errors = [];

      if (!this.newResource.resourceName) {
        this.errors.push('Необходимо указать название ресурса.');
      }

      if (!this.newResource.resourceType) {
        this.errors.push('Необходимо указать тип ресурса.');
      }

      if (!this.newResource.resourceLink) {
        this.errors.push('Необходимо указать ссылку на ресурс.');
      }
    }
  }
}
</script>

<style scoped>
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
  background-color: #f2f2f2;
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
</style>
