<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="band-name" class="title-text">{{event.eventName}}</text>
    </div>
    <events-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="concert-container">
    <div class="concert-poster-container">
      <div class="concert-block" @click="this.$router.push({name: 'EventInfo', params: { id: this.event.id}})">
        <div class="resource-name-block">
          <a href="https://stackoverflow.com/questions/1232793/javascript-set-img-src">
            <u>{{event.resourceName}} - {{event.resourceType}}
            </u>
          </a>
        </div>
      </div>

      <div class="rating-and-favorite-block">
        <rating :mark="event.mark" @onMarkChange="onMarkChange"/>
        <div>
          <i class="fas fa-bookmark favorite-icon"></i>
        </div>
      </div>

      <comments :event-comments="event.eventComments" @createComment="createComment"/>
    </div>

    <div class="concert-description">

    </div>
  </div>
</template>

<script>
import Rating from '@/components/ui-components/Rating.vue';
import Comments from '@/components/ui-components/Comments.vue';
import axios from 'axios';
import {authHeader, handleAxiosError} from '@/util/authentication-helper';

export default {
  name: 'EventInfo',
  components: {
    Comments, Rating
  },
  computed: {
    eventId() {
      return this.$route.params.id
    },
  },
  data() {
    return {
      event: {
        eventName: '',
        posterFile: '',
        mark: 1,
        willGo: '',
        eventComments: []
      },
      commentText: ''
    }
  },
  methods: {
    onMarkChange(newMark) {},
    createComment(newComment) {
      this.event.eventComments.push(newComment);
    }
  },
  created() {
    this.event = {
      id: '1',
      resourceName: 'Введение в Java',
      resourceType: 'Статья',
      eventComments: [
        {
          id: '1',
          userName: 'some',
          text: 'Вау супер',
          date: '12/13/2024',
        },
        {
          id: '2',
          userName: 'someone',
          text: 'Вау ужас',
          date: '04/10/2024',
        },
      ],
      willGo: true,
      mark: 5,
    };
  }
}
</script>

<style scoped>
/* concert info */

.concert-container {
  display: flex;
  flex-direction: row;
  padding: 30px;
}

.concert-description {
  flex: 1;
  margin-left: 200px;
}

.concert-info-big {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 60px;
  line-height: 90px;
  color: #FFFFFF;
}

.concert-info-small {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 30px;
  line-height: 48px;
  color: #FFFFFF;
}

#concert-venue {
  margin-top: 30px;
}

img {
  width: 608px;
  height: 608px;
}

.concert-poster-container {
  display: flex;
  flex-direction: column;
}


/* button 'I will/won't go' */

.ill-go-container {
  margin-top: 100px;
}

.btn-ill-go {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 40px;
  background: none;
}

.button-not-pressed {
  border-color: #FFFFFF;
  color: #FFFFFF;
  border-radius: 10px;
}

.button-not-pressed:hover {
  color: black;
  background: #FFFFFF;
  opacity: 80%;
  border-radius: 10px;
}

.button-pressed {
  color: black;
  background: #FFFFFF;
  opacity: 80%;
  border-radius: 10px;
}

.button-pressed:hover {
  color: #FFFFFF;
  background: none;
  border-color: #FFFFFF;
  border-radius: 10px;
}

.concert-block {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: rgba(28, 28, 28, 0.5);
  width: 350px;
  height: 100px;
}

.resource-name-block {
  font-size: xx-large;
  margin-top: 8%;
  align-self: center;
}

.rating-and-favorite-block {
  display: flex;
  flex-direction: row;
}

.favorite-icon {
  color: #ffc700;
  margin-top: 16px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
