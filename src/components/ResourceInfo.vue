<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="band-name" class="title-text">{{ resource.resourceName }}</text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="resource-container">
    <div class="resource-main-info-container">
      <div class="resource-block" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
        <div class="resource-info-block">
          <a href="https://stackoverflow.com/questions/1232793/javascript-set-img-src">
            <u>{{ resource.resourceName }} - {{ resource.resourceType }}</u>
          </a>
        </div>
      </div>

      <div class="rating-and-favorite-block">
        <rating :mark="resource.mark" @onMarkChange="onMarkChange"/>
        <div><i class="fas fa-bookmark favorite-icon"></i></div>
      </div>

      <comments :resource-comments="resource.resourceComments" @createComment="createComment"/>
    </div>

    <div class="similar-resources-recommendations">
      <h1 class="similar-resources-recommendations-title">Похожие ресурсы</h1>
      <div class="resource-block">
        <div class="recommended-resource-info-block" v-for="recommendedResource in similarResourcesRecommended">
          <a href="https://stackoverflow.com/questions/1232793/javascript-set-img-src">
            <u>{{ recommendedResource.resourceName }}</u>
          </a>
          <p class="recommended-resource-type"><i>{{ recommendedResource.resourceType }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/ui-components/Rating.vue';
import Comments from '@/components/ui-components/Comments.vue';

export default {
  name: 'ResourceInfo',
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
      resource: {
        resourceName: '',
        mark: 1,
        resourceComments: [],
        similarResourcesRecommended: [],
      },
      commentText: ''
    }
  },
  methods: {
    onMarkChange(newMark) {},
    createComment(newComment) {
      this.resource.resourceComments.push(newComment);
    }
  },
  created() {
    this.resource = {
      id: '1',
      resourceName: 'Введение в Java',
      resourceType: 'Статья',
      resourceComments: [
        {
          id: '1',
          userName: 'user123',
          text: 'Статья супер! Очень полезно',
          date: '12/13/2024',
        },
        {
          id: '2',
          userName: 'anya',
          text: 'Мне не понравилось',
          date: '04/10/2024',
        },
      ],
      willGo: true,
      mark: 5,
    };
    this.similarResourcesRecommended = [
      {
        id: '6',
        resourceName: 'Курс по Java для продвинутых',
        resourceType: 'Курс',
      }
    ]
  }
}
</script>

<style scoped>
/* resource info */

.resource-container {
  display: flex;
  flex-direction: row;
  padding: 30px;
}

img {
  width: 608px;
  height: 608px;
}

.resource-main-info-container {
  display: flex;
  flex-direction: column;
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
  width: 350px;
  height: 100px;
}

.resource-info-block {
  font-size: xx-large;
  margin-top: 8%;
  align-self: center;
}

.recommended-resource-info-block {
  font-size: xx-large;
  align-self: center;
  text-align: center;
}

.recommended-resource-type {
  margin: 0;
  font-size: smaller;
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

.similar-resources-recommendations {
  flex: 1;
  margin-left: 600px;
}

.similar-resources-recommendations-title {
  margin-left: 60px;
}
</style>
