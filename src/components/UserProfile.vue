<template>
  <div class="header-container">
    <div class="title-container">
      <text id="profile-name" class="title-text">
        <b style="font-size: 60px;">{{userInfo.userName}}</b>
      </text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="profile-container">
    <div id="profile-detail-concerts" class="profile-detail-container">
      <div class="profile-detail-container-title">
        Ресурсы
      </div>
      <resource-text-info v-for="resource in userInfo.userResources" :resource="resource" :key="resource.id"/>
    </div>

    <div class="company-container">
      <div class="company-container-title">
        Я работаю в
      </div>
      <p class="company-name" @click="this.$router.push({name: 'CompanyInfo'})">Netcracker</p>
    </div>
  </div>
</template>

<script>
import ResourceTextInfo from '@/components/resources/ResourceTextInfo.vue';

export default {
  name: 'UserProfile',
  components: {
    ResourceTextInfo
  },
  computed: {
    userId() {
      return this.$route.params.id
    },
  },
  data() {
    return {
      isCurrentUsersPage: false,
      userInfo: {
        userResources: [],
      }
    }
  },
  created() {
    axios
        .get(`${BACKEND_URL}/users/${this.userId}`, {headers: authHeader()})
        .then((response) => {
          this.userInfo = response.data;
        })
        .catch(handleAxiosError);
  }
}
</script>

<style scoped>
.company-name {
  cursor: pointer;
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
  width: 40%;
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

.profile-container {
  display: flex;
  flex-direction: row;
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
}

.profile-detail-container-title {
  margin-bottom: 50px;
  font-weight: 900;
  font-style: normal;
}

/* marked concerts */

#profile-detail-concerts {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}

.resource-block {
  border: 1px solid black;
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #df7931;
}

/* buttons */

#buttons {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  flex-direction: row;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 40%;
  min-width: 40%;
}

.user-request-block {
  margin-left: 50px;
  border: 1px solid black;
  padding: 5px;
  font-size: 30px;
  cursor: pointer;
  background: #FFFFFF;
  opacity: 80%;
  border-radius: 10px;
  line-height: 30px;
  align-self: self-end;
  white-space: nowrap;
}

html {
  height: 80%;
}

body {
  height: 100%;
}
</style>
