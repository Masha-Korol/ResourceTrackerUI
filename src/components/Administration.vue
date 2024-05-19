<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text">Административная страница</text>
    </div>
    <events-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="administration-stuff-container">
    <div class="data-modification-forms-container">
      <div class="button-container">
        <button class="add-data-button" @click="showAddCityDialog = true">Добавить ресурс</button>
      </div>
      <div class="button-container">
        <button class="add-data-button" @click="showAddUserDialog = true">Добавить пользователя</button>
      </div>
    </div>

    <div class="data-view-container">
      <div>
        <view-cities :cities="cities"/>
      </div>
      <div>
        <view-users :users="users"/>
      </div>
    </div>
  </div>

  <add-city-dialog v-model:show="showAddCityDialog" @createCity="createCity"/>
  <add-user-dialog v-model:show="showAddUserDialog" @createUser="createUser"/>
</template>

<script>
import AddCityDialog from '@/components/dialogs/AddCityDialog.vue';
import AddVenueDialog from '@/components/dialogs/AddVenueDialog.vue';
import AddArtistDialog from '@/components/dialogs/AddArtistDialog.vue';
import AddEventDialog from '@/components/dialogs/AddEventDialog.vue';
import AddUserDialog from '@/components/dialogs/AddUserDialog.vue';
import ViewCities from '@/components/administration/ViewCities.vue';
import ViewVenues from '@/components/administration/ViewVenues.vue';
import ViewArtists from '@/components/administration/ViewArtists.vue';
import ViewEvents from '@/components/administration/ViewEvents.vue';
import ViewUsers from '@/components/administration/ViewUsers.vue';
import axios from 'axios';
import FormData from 'form-data';
import {authHeader, handleAxiosError} from '@/util/authentication-helper';

export default {
  name: 'Administration',
  components: {
    AddCityDialog, AddVenueDialog, AddArtistDialog, AddEventDialog, AddUserDialog,
    ViewCities, ViewVenues, ViewArtists, ViewEvents, ViewUsers
  },
  data() {
    return {
      cities: [],
      venues: [],
      artists: [],
      events: [],
      users: [],
      showAddCityDialog: false,
      showAddVenueDialog: false,
      showAddArtistDialog: false,
      showAddEventDialog: false,
      showAddUserDialog: false
    }
  },
  methods: {
    createResource(newEvent) {
      this.events.push(newEvent);
    },
    createUser(newUser) {
      this.users.push(newUser);
    }
  },
  created() {
    this.cities = [
      {
        id: '1',
        resourceName: 'Статья 2',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '2',
        resourceName: 'Статья 2',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '3',
        resourceName: 'Видео о ML',
        resourceType: 'Видео',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '4',
        resourceName: 'Статья 4',
        resourceType: 'Статья',
        resourceLink: 'https://stackoverflow.com/questions/1232793/javascript-set-img-src',
      },
      {
        id: '5',
        resourceName: 'Курс 1',
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

.form-popup {
  display: none;
  position: fixed;
  border: 3px solid #f1f1f1;
  z-index: 9;
  overflow-y: auto;
  height: auto;
  max-height: 70%;
  left: 40%;
}

.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

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

.form-container .btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

.form-container .cancel {
  background-color: red;
}

.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}
</style>
