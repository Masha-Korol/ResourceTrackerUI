<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">
  <div class="header-container">
    <div class="title-container">
      <text class="title-text"><b>Административная страница</b></text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div style="display: flex; flex-direction: row;">
    <div class="administration-stuff-container">
      <div class="data-modification-forms-container">
        <div class="button-container">
          <button class="add-data-button" @click="showAddResourceDialog = true">Добавить ресурс</button>
        </div>
        <div class="button-container">
          <button class="add-data-button" @click="showAddUserDialog = true">Добавить пользователя</button>
        </div>
        <div class="button-container">
          <button class="add-data-button" @click="showAddCompanyDialog = true">Создать компанию</button>
        </div>
        <div class="button-container">
          <button class="add-data-button" @click="showAddSelectionDialog = true">Создать подборку</button>
        </div>
        <div class="button-container">
          <button class="add-data-button" @click="showAddTagDialog = true">Создать тэг</button>
        </div>
      </div>

      <div class="data-view-container">
        <div>
          <view-resources :resources="resources"/>
        </div>
        <div>
          <view-users :users="users"/>
        </div>
        <div>
          <view-companies :companies="companies"/>
        </div>
        <div>
          <view-tags :tags="tags"/>
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
        <br>
        <br>
        <br>
        <div>
          <view-selections :selections="selections"/>
        </div>
      </div>
    </div>
    <div>
      <add-resource-dialog v-model:show="showAddResourceDialog" @createResource="createResource"/>
      <add-user-dialog v-model:show="showAddUserDialog" @createUser="createUser"/>
      <add-selection-dialog v-model:show="showAddSelectionDialog" @createSelection="createSelection"/>
      <add-tag-dialog v-model:show="showAddTagDialog"/>
      <add-company-dialog v-model:show="showAddCompanyDialog"/>
    </div>
    <div style="display: flex; margin-left: 100px; height: min-content;">
      <view-statistics :stats="stats"/>
    </div>
  </div>
</template>

<script>
import AddResourceDialog from '@/components/dialogs/AddResourceDialog.vue';
import AddUserDialog from '@/components/dialogs/AddUserDialog.vue';
import ViewResources from '@/components/administration/ViewResources.vue';
import ViewUsers from '@/components/administration/ViewUsers.vue';
import ViewRecentUploads from "@/components/administration/ViewPendingResources.vue";
import ViewPendingResources from "@/components/administration/ViewPendingResources.vue";
import ViewRejectedResources from "@/components/administration/ViewRejectedResources.vue";
import AddSelectionDialog from "@/components/dialogs/AddSelectionDialog.vue";
import ViewSelections from "@/components/administration/ViewSelections.vue";
import ViewStatistics from "@/components/administration/ViewStatistics.vue";
import AddTagDialog from "@/components/dialogs/AddTagDialog.vue";
import ViewTags from "@/components/administration/ViewTags.vue";
import AddCompanyDialog from "@/components/dialogs/AddCompanyDialog.vue";
import ViewCompanies from "@/components/administration/ViewCompanies.vue";

export default {
  name: 'Administration',
  components: {
    ViewCompanies,
    AddCompanyDialog,
    ViewTags,
    AddTagDialog,
    ViewStatistics,
    ViewSelections,
    AddSelectionDialog,
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
      companies: [],
      selections: [],
      stats: [],
      pendingResources: [],
      rejectedResources: [],
      tags: [],
      showAddResourceDialog: false,
      showAddUserDialog: false,
      showAddSelectionDialog: false,
      showAddTagDialog: false,
      showAddCompanyDialog: false,
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
    },
    createSelection(newSelection) {
      this.selections.push({
        id: '4',
        selectionName: newSelection.selectionName,
        description: newSelection.description,
        resources: newSelection.resources,
      });
    }
  },
  created() {
    this.pendingResources = [
      {
        id: '20', resourceName: 'Что нужно знать Java-разработчику в 2024 году', resourceType: 'Статья',
        resourceLink: 'https://habr.com/ru/companies/ibs/articles/810711/',
        tags: ['Java', 'ML'],
      },
      {
        id: '21', resourceName: 'Java: перспективы и тренды', resourceType: 'Статья',
        resourceLink: 'https://habr.com/ru/companies/lanit/articles/742100/',
        tags: [],
      },
    ];
    this.rejectedResources = [
      {
        id: '1', resourceName: 'Кино-новинки 2024', resourceType: 'Статья',
        resourceLink: 'https://www.kinopoisk.ru/media/article/4008819/',
        tags: [],
      },
    ];
    this.resources = [
      {
        id: '1', resourceName: 'Learning C# for beginners', resourceType: 'Статья',
        resourceLink: 'https://www.simplilearn.com/c-sharp-programming-for-beginners-article',
        tags: ['C#'],
        specialties: ['Backend'],
      },
      {
        id: '2', resourceName: 'Microservices: pros and cons', resourceType: 'Статья',
        resourceLink: 'https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/',
        tags: ['microservices', 'backend-development'],
        specialties: ['Backend', 'Solution Architect'],
      },
      {
        id: '3', resourceName: 'Machine Learning - basics', resourceType: 'Видео',
        resourceLink: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
        tags: ['ML', 'algorythms'],
        specialties: ['Backend', 'Algorithms'],
      },
      {
        id: '4', resourceName: 'Project Management', resourceType: 'Статья',
        resourceLink: 'https://hbr.org/topic/subject/project-management',
        tags: ['PM', 'management'],
        specialties: ['PM'],
      },
      {
        id: '5', resourceName: 'Angular from zero to hero', resourceType: 'Курс',
        resourceLink: 'https://www.udemy.com/course/new-angular-from-zero-to-hero/',
        tags: ['Angular', 'frontend-development', 'UI'],
        specialties: ['Frontend'],
      }
    ];
    this.users = [
      {id: '1', userName: 'maria', isAdmin: true, companyAuthority: 'Netcracker'},
      {id: '2', userName: 'alexander', isAdmin: true},
      {id: '3', userName: 'marina', isAdmin: false, companyAuthority: 'RedCollar'}
    ];
    this.companies = [
      {id: '1', companyName: 'DSR', description: 'DSR Corporation — международная команда профессионалов, искренне увлеченных разработкой ПО. Созданная инженерами для инженеров. Мы решаем сложные задачи, работаем с новыми технологиями и разрабатываем комплексные программные решения. Нас ценят клиенты во всем мире — за проактивность, приверженность качеству и экспертизу. Обмен опытом, гибкость и разнообразие проектов в компании — гарантия быстрого профессионального роста для специалистов любого уровня.'},
      {id: '2', companyName: 'Netcracker', description: 'Поставщик продуктовых решений BSS/OSS для провайдеров услуг связи и кабельных операторов в мире. Компания специализируется на создании, внедрении и сопровождении систем поддержки бизнеса BSS и систем операционной поддержки OSS.'},
      {id: '3', companyName: 'RedCollar', description: 'Снаружи — сильный визуал, внутри — мощный технологический подход.'},
    ];
    this.selections = [
      {
        id: '1', selectionName: 'Топ 5 статей про Java', description: 'Эти статьи помогут вам в обучении с нуля',
        resources: ['Холостые циклы в Java', ' Производительность Java: нюансы', 'Обработка исключений в Java',
          'It is Wednesday, my java dudes', 'Сквозное и интеграционное тестирование'],
        author: 'mariia.alexeevna',
      },
      {
        id: '2', selectionName: 'Как стать Vue разработчиком за месяц', description: 'Курсы для фронтендеров',
        resources: ['Skills: Vue.js', 'Geeks: Vue.js covered', 'Frontend - Vue.js', 'JavaScript + Vue.js'],
        author: 'alexander.klukvin',
      },
      {
        id: '3', selectionName: 'Наиболее часто рекомендуемые книги для тестировщиков',
        resources: ['tестирование dot com', 'Тестирование программного обеспечения. Базовый курс', 'Тестирование черного ящика'],
        author: 'anastasia.knopkina',
      },
    ];
    this.tags = [
      {id: '1', tagName: 'ML'}, {id: '2', tagName: 'Java'}, {id: '3', tagName: 'Spring'}, {id: '4', tagName: 'AI'},
      {id: '5', tagName: 'Angular'}, {id: '6', tagName: 'QA'}, {id: '7', tagName: 'PM'}, {id: '8', tagName: 'Vue.js'},
    ];
    this.stats = [
      {resource: 'Как стать Vue разработчиком за месяц', favorite: 3, link: 10, mark5: 5, mark4: 15, mark3: 10, mark2: 0, mark1: 0},
      {resource: 'Geeks: Vue.js covered', favorite: 13, link: 22, mark5: 15, mark4: 15, mark3: 4, mark2: 0, mark1: 1},
      {resource: 'Производительность Java: нюансы', favorite: 20, link: 33, mark5: 12, mark4: 19, mark3: 0, mark2: 2, mark1: 0},
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
