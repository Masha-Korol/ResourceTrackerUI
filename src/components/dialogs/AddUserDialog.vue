<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="this.$emit('update:show', false)">&times;</span>
        <h2>Добавить пользователя</h2>
      </div>
      <div class="modal-body">
        <div class="form-body">
          <form>
            <label for="user-name">Имя</label>
            <input type="text" id="user-name" name="userName" placeholder="" v-model="newUser.userName">

            <label for="user-password">Пароль</label>
            <input type="text" id="user-password" name="userPassword" placeholder="" v-model="newUser.password">

            <label for="user-password">Работник компании</label>
            <select name="dog-names" id="dog-names">
              <option value="rigatoni">DSR</option>
              <option value="dave">Netcracker</option>
              <option value="pumpernickel">DataArt</option>
              <option value="reeses">RedCollar</option>
            </select>

            <label for="is-admin">Администратор</label>
            <input type="checkbox" id="is-admin" name="isAdmin" v-model="newUser.isAdmin">
            <br>

            <label for="is-admin-selec">Составитель подборок</label>
            <input type="checkbox" id="is-admin-selec" name="isAdminSel" v-model="newUser.isAdminSel">
            <br>

            <label for="is-company-authority">Представитель компании</label>
            <input type="checkbox" id="is-company-authority" name="isCompanyAuthority" v-model="newUser.isCompanyAuthority"
            @click="showChooseCompanyAuth = !showChooseCompanyAuth">
            <select name="dog-names" id="dog-names" v-show="showChooseCompanyAuth">
              <option value="rigatoni">DSR</option>
              <option value="dave">Netcracker</option>
              <option value="pumpernickel">DataArt</option>
              <option value="reeses">RedCollar</option>
            </select>

            <input type="submit" value="Отправить" @click="createUser">

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
  name: 'add-user-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newUser: {
        userName: '',
        password: '',
        isAdmin: false,
        isAdminSel: false,
        isCompanyAuthority: false,
      },
      errors: [],
      showChooseCompanyAuth: false,
    }
  },
  methods: {
    createUser(event) {
      event.preventDefault();

      this.validateForm();

      if (this.errors.length === 0) {
        this.$emit('createUser', this.newUser);
        this.newUser.userName = '';
        this.newUser.password = '';
        this.newUser.isAdmin = false;
        this.newUser.isCompanyAuthority = false;
        this.$emit('update:show', false);
      }
    },
    validateForm() {
      this.errors = [];

      if (!this.newUser.userName) {
        this.errors.push('Необходимо указать имя пользователя.');
      }

      if (!this.newUser.password) {
        this.errors.push('Необходимо указать пароль пользователя.');
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
</style>
