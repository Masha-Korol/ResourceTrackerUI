<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="profile-name" class="title-text">{{userInfo.userName}}</text>
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
    </div>

    <div class="personal-info-container">
      <div class="company-container">
        <div class="company-container-title">
          Я работаю в
        </div>
        <p class="company-name" @click="this.$router.push({name: 'CompanyInfo'})">DSR</p>
      </div>
      <div class="tags-container">
        <div class="company-container-title">
          Мои тэги
        </div>
        <p class="company-name">Java,Kotlin,C#</p>
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
        userResources: []
      },
    }
  },
  methods: {

  },
  created() {
    this.userInfo = {
      userName: 'Masha',
      isAdmin: true,
      userResources: [
        {
          id: '2',
          resourceName: 'Microservices: pros and cons',
          resourceType: 'Статья',
        },
        {
          id: '3',
          resourceName: 'Machine Learning - basics',
          resourceType: 'Видео',
        }
      ]
    };
  }
}
</script>

<style scoped>
.company-name {
  cursor: pointer;
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
}
</style>
