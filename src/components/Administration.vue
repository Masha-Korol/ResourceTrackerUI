<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">
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
      <br>
      <br>
      <br>
      <div>
        <view-pending-resources :resources="pendingResources"/>
      </div>
      <div>
        <view-rejected-resources :resources="rejectedResources"/>
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
import ViewRecentUploads from "@/components/administration/ViewPendingResources.vue";
import ViewPendingResources from "@/components/administration/ViewPendingResources.vue";
import ViewRejectedResources from "@/components/administration/ViewRejectedResources.vue";

export default {
  name: 'Administration',
  components: {
    ViewRejectedResources,
    ViewPendingResources,
    ViewRecentUploads,
    AddResourceDialog, AddUserDialog,
    ViewResources, ViewUsers
  },
  data() {
    return {
      resources: [],
      users: [],
      pendingResources: [],
      rejectedResources: [],
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
        tags: newResource.tags,
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
    this.pendingResources = [
      {
        id: '20',
        resourceName: 'Что нужно знать Java-разработчику в 2024 году',
        resourceType: 'Статья',
        resourceLink: 'https://habr.com/ru/companies/ibs/articles/810711/',
        tags: ['Java', 'ML'],
      },
      {
        id: '21',
        resourceName: 'Java: перспективы и тренды',
        resourceType: 'Статья',
        resourceLink: 'https://habr.com/ru/companies/lanit/articles/742100/',
        tags: [],
      },
    ];
    this.rejectedResources = [
      {
        id: '1',
        resourceName: 'Кино-новинки 2024',
        resourceType: 'Статья',
        resourceLink: 'https://www.kinopoisk.ru/media/article/4008819/',
        tags: [],
      },
    ];
    this.resources = [
      {
        id: '1',
        resourceName: 'Learning C# for beginners',
        resourceType: 'Статья',
        resourceLink: 'https://www.simplilearn.com/c-sharp-programming-for-beginners-article',
        tags: ['C#'],
      },
      {
        id: '2',
        resourceName: 'Microservices: pros and cons',
        resourceType: 'Статья',
        resourceLink: 'https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/',
        tags: ['microservices', 'backend-development'],
      },
      {
        id: '3',
        resourceName: 'Machine Learning - basics',
        resourceType: 'Видео',
        resourceLink: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
        tags: ['ML', 'algorythms'],
      },
      {
        id: '4',
        resourceName: 'Project Management',
        resourceType: 'Статья',
        resourceLink: 'https://hbr.org/topic/subject/project-management',
        tags: ['PM', 'management'],
      },
      {
        id: '5',
        resourceName: 'Angular from zero to hero',
        resourceType: 'Курс',
        resourceLink: 'https://www.udemy.com/course/new-angular-from-zero-to-hero/',
        tags: ['Angular', 'frontend-development', 'UI'],
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
