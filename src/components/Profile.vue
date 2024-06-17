<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="profile-name" class="title-text"><b style="font-size: 60px;">{{userInfo.userName}}</b></text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <administration-header-item v-if="userInfo.isAdmin"/>
    <logout-header-item/>
  </div>

  <div class="profile-container">
    <div class="profile-detail-container">
      <div class="profile-detail-container-title">
        Мои ресурсы
      </div>
     <resource-text-info v-for="resource in userInfo.userResources" :resource="resource" :key="resource.id" />

      <div class="button-container">
        <button class="add-data-button">Добавить ресурс</button>
      </div>
    </div>

    <div class="personal-info-container">
      <div class="company-container">
        <div class="company-container-title">
          Я работаю в
        </div>
        <p class="company-name" @click="this.$router.push({name: 'CompanyInfo'})">DSR</p>
      </div>
      <div class="projects-container">
        <div class="company-container-title">
          Мои специализации
        </div>
        <p v-for="specialty in userInfo.specialties" class="project">{{specialty}}</p>
      </div>
      <div class="projects-container">
        <div class="company-container-title">
          Мои проекты
        </div>
        <p v-for="project in userInfo.projects" class="project">{{project}}</p>
      </div>
      <div class="tags-container">
        <div class="company-container-title">
          Мои тэги
        </div>
        <div style="display: flex; flex-direction: row;">
          <div><button style="margin-left: 5px" v-for="tag in userInfo.tags" class="dropbtn">{{tag}}</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceTextInfo from '@/components/resources/ResourceTextInfo.vue';
import Friend from '@/components/users/Friend.vue';

export default {
  name: 'Profile',
  components: {
    ResourceTextInfo, Friend
  },
  data() {
    return {
      userInfo: {
        userName: '',
        isAdmin: false,
        userResources: [],
        projects: [],
        tags: [],
      },
    }
  },
  methods: {

  },
  created() {
    axios
        .get(`${BACKEND_URL}/users`, {headers: authHeader()})
        .then((response) => {
          this.userInfo = response.data;
        })
        .catch(handleAxiosError);
  }
}
</script>

<style scoped>
.dropbtn {
  background-color: #df7931;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 0 16px 0 16px;
  width: 90px;
}

.company-name {
  cursor: pointer;
}

.project {
  font-size: x-large;
  height: 0;
}

.profile-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.personal-info-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.profile-detail-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 40px;
  width: 40%;
  min-width: 40%;
  height: max-content;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}

.profile-detail-container-title {
  margin-bottom: 50px;
  font-weight: 900;
  font-style: normal;
}

.add-data-button {
  height: 50px;
  padding: 10px;
  font-size: 20px;
  min-width: 300px;
  cursor: pointer;
  margin-bottom: 10px;
}

.company-container-title {
  font-weight: 900;
  font-style: normal;
}

.company-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 40px;
  width: 80%;
  min-width: 40%;
  height: max-content;
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  padding: 10px;
}

.projects-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 40px;
  width: 80%;
  min-width: 40%;
  height: max-content;
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  padding: 10px;
}

.tags-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 40px;
  width: 80%;
  min-width: 40%;
  height: max-content;
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  padding: 10px;
}
</style>
