<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="profile-name" class="title-text">{{userInfo.userName}}</text>
    </div>
    <events-header-item/>
    <recommendations-header-item/>
    <administration-header-item v-if="userInfo.isAdmin"/>
    <logout-header-item/>
  </div>

  <div class="profile-container">
    <div id="profile-detail-concerts" class="profile-detail-container">
      <div class="profile-detail-container-title">
        Ресурсы
      </div>
     <event-text-info v-for="event in userInfo.userEvents" :event="event" :key="event.id" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EventTextInfo from '@/components/events/EventTextInfo.vue';
import ChatPreview from '@/components/users/ChatPreview.vue';
import Friend from '@/components/users/Friend.vue';
import {authHeader, handleAxiosError} from '@/util/authentication-helper';

export default {
  name: 'Profile',
  components: {
    EventTextInfo, ChatPreview, Friend
  },
  data() {
    return {
      userName: 'Masha',
      userInfo: {
        userName: '',
        userEvents: [],
        userMessages: [],
        userFriends: [],
        isAdmin: false
      },
      isChatsBlockVisible: true
    }
  },
  methods: {
    sendFriendRequest(userId) {},
    cancelFriendRequest(userId) {}
  },
  created() {
    this.userInfo = {};
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.profile-detail-container {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 40px;
  width: 40%;
  min-width: 40%;
  height: max-content;
  color: #FFFFFF;
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


/* chats */

#profile-detail-chats {
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
}

.friends-icon-container {
  align-self: end;
  margin-right: 10px;
  width: min-content;
}

.fa-user-friends {
  cursor: pointer;
  color: white;
}


/* friends */

#profile-detail-friends {
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  color: #FFFFFF;
  text-align: center;
}

.chats-icon-container {
  align-self: end;
  margin-right: 10px;
  width: min-content;
}

.fa-comments {
  cursor: pointer;
  color: white;
}
</style>
