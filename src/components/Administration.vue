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
      axios.post(`${BACKEND_URL}/resources`,
          {
            resource: newResource,
          },
          {headers: authHeader()})
          .then((response) => {
            this.resources.push(response.data);
          })
          .catch(handleAxiosError);
    },
    createUser(newUser) {
      axios.post(`${BACKEND_URL}/users`,
          {
            user: newUser,
          },
          {headers: authHeader()})
          .then((response) => {
            this.users.push(response.data);
          })
          .catch(handleAxiosError);
    },
    createSelection(newSelection) {
      axios.post(`${BACKEND_URL}/selections`,
          {
            selection: newSelection,
          },
          {headers: authHeader()})
          .then((response) => {
            this.selections.push(response.data);
          })
          .catch(handleAxiosError);
    },
    createTag(newTag) {
      axios.post(`${BACKEND_URL}/tags`,
          {
            tag: newTag,
          },
          {headers: authHeader()})
          .then((response) => {
            this.tags.push(response.data);
          })
          .catch(handleAxiosError);
    },
    createCompany(newCompany) {
      axios.post(`${BACKEND_URL}/companies`,
          {
            company: newCompany,
          },
          {headers: authHeader()})
          .then((response) => {
            this.companies.push(response.data);
          })
          .catch(handleAxiosError);
    },
    createProject(newProject) {
      axios.post(`${BACKEND_URL}/projects`,
          {
            project: newProject,
          },
          {headers: authHeader()})
          .then((response) => {
            this.projects.push(response.data);
          })
          .catch(handleAxiosError);
    }
  },
  created() {
    axios
        .get(`${BACKEND_URL}/resources`, {headers: authHeader()})
        .then((response) => {
          this.pendingResources = response.data.pendingResources;
          this.rejectedResources = response.data.rejectedResources;
          this.resources = response.data.resources;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/users`, {headers: authHeader()})
        .then((response) => {
          this.users = response.data;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/companies`, {headers: authHeader()})
        .then((response) => {
          this.companies = response.data;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/selections`, {headers: authHeader()})
        .then((response) => {
          this.selections = response.data;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/tags`, {headers: authHeader()})
        .then((response) => {
          this.tags = response.data;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/stats`, {headers: authHeader()})
        .then((response) => {
          this.stats = response.data;
        })
        .catch(handleAxiosError);
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
