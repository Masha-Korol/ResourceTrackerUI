<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text">Административная страница</text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="administration-stuff-container">
    <div class="data-modification-forms-container">
      <div class="button-container">
        <button class="add-data-button" @click="showAddResourceDialog = true">Добавить ресурс</button>
      </div>
      <div class="button-container">
        <button class="add-data-button" @click="showAddUserDialog = true">Добавить пользователя</button>
      </div>
    </div>

    <div class="data-view-container">
      <div>
        <view-resources :resources="resources"/>
      </div>
      <div>
        <view-users :users="users"/>
      </div>
    </div>
  </div>

  <add-resource-dialog v-model:show="showAddResourceDialog" @createResource="createResource"/>
  <add-user-dialog v-model:show="showAddUserDialog" @createUser="createUser"/>
</template>

<script>
import AddResourceDialog from '@/components/dialogs/AddResourceDialog.vue';
import AddUserDialog from '@/components/dialogs/AddUserDialog.vue';
import ViewResources from '@/components/administration/ViewResources.vue';
import ViewUsers from '@/components/administration/ViewUsers.vue';

export default {
  name: 'Administration',
  components: {
    AddResourceDialog, AddUserDialog,
    ViewResources, ViewUsers
  },
  data() {
    return {
      resources: [],
      users: [],
      showAddResourceDialog: false,
      showAddUserDialog: false,
    }
  },
  methods: {
    createResource(newResource) {
      this.resources.push({
        id: '6',
        resourceName: newResource.resourceName,
        resourceType: newResource.resourceType,
        resourceLink: newResource.resourceLink,
      });
    },
    createUser(newUser) {
      this.users.push({
        id: '4',
        userName: newUser.userName,
        isAdmin: newUser.isAdmin,
      });
    }
  },
  created() {
    this.resources = [
      {
        id: '1',
        resourceName: 'Learning C# for beginners',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '2',
        resourceName: 'Microservices: pros and cons',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '3',
        resourceName: 'Machine Learning - basics',
        resourceType: 'Видео',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '4',
        resourceName: 'Project Management',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '5',
        resourceName: 'Angular from zero to hero',
        resourceType: 'Курс',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      }
    ];
    this.users = [
      {
        id: '1',
        userName: 'maria',
        isAdmin: true,
      },
      {
        id: '2',
        userName: 'alexander',
        isAdmin: true,
      },
      {
        id: '3',
        userName: 'marina',
        isAdmin: false,
      }
    ];
  }
}
</script>

<style scoped>
.administration-stuff-container {
  display: flex;
  flex-direction: row;
}

.data-view-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}

/* buttons block */

.data-modification-forms-container {
  display: flex;
  flex-direction: column;
  height: 50px;
}

.button-container {
  margin: 10px;
}

.add-data-button {
  height: 50px;
  padding: 10px;
  font-size: 20px;
  min-width: 300px;
  cursor: pointer;
}

/* form popups */

.form-container input[type=text], .form-container input[type=password] {
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

.form-container input[type=text]:focus, .form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
