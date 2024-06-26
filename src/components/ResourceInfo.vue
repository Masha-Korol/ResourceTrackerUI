<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">

  <div class="header-container">
    <div class="title-container">
      <text id="band-name" class="title-text"><b>{{resource.resourceName}}</b></text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="resource-container">
    <div class="resource-main-info-container">
      <div class="resource-block-first" @click="this.$router.push({name: 'ResourceInfo', params: { id: this.resource.id}})">
        <div class="resource-info-block">
          <span>{{ resource.resourceName }}</span> <br>
          <span class="resource-type"><i class="resource-type-span">{{ resource.resourceType }}</i></span>
          <br>
          <div style="margin-left: 180px; font-size: large;">
            <span>Тэги:</span>
            <button v-for="tag in resource.tags" class="dropbtn">{{tag}}</button>
          </div>
          <div style="margin-left: 60px; font-size: large;">
            <span>Специализации:</span>
            <button v-for="specialty in resource.specialties" class="dropbtn">{{specialty}}</button>
          </div>
        </div>
        <div class="resource-block-summary">
          <p>Одной из многих причин, почему мне нравится работать именно с функциональным программированием, является высокий уровень абстракции. Это связано с тем, что в конечном итоге мы имеем дело с более читаемым и лаконичным кодом, что, несомненно, способствует сближению с логикой предметной области.
            <br> <br>
            В данной статье большее внимание уделяется на четыре вещи, представленные в Java 8, которые помогут вам овладеть новым уровнем абстракции.</p>
        </div>
        <div class="see-resource-block">
          <a class="see-resource" href="https://habr.com/ru/articles/256057/">
            <u>Читать статью полностью</u>
          </a>
        </div>
      </div>

      <div class="rating-and-favorite-block">
        <rating :mark="resource.mark" @onMarkChange="onMarkChange"/>
        <div><i class="fas fa-bookmark favorite-icon"></i></div>
      </div>

      <comments :resource-comments="resource.resourceComments" @createComment="createComment"/>
    </div>

    <br><br>
    <h1 class="similar-resources-recommendations-title">Похожие ресурсы</h1>
    <div class="resource-block-aa">
      <div class="resource-block" v-for="recommendedResource in similarResourcesRecommended">
        <div class="recommended-resource-info-block">
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
    resourceId() {
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
        tags: [],
        specialties: [],
      },
      commentText: ''
    }
  },
  methods: {
    onMarkChange(newMark) {
      axios.patch(`${BACKEND_URL}/resources/${this.resourceId}/mark`, {newMark: newMark},
          {headers: authHeader()})
          .catch(handleAxiosError);
    },
    onFavoriteChange() {
      axios.patch(`${BACKEND_URL}/resources/${this.resourceId}/favorite`,
          {headers: authHeader()})
          .catch(handleAxiosError);
    },
    createComment(newComment) {
      axios.post(`${BACKEND_URL}/comments`, {text: newComment.commentText, resourceId: this.resourceId},
          {headers: authHeader()})
          .then((response) => {
            this.resource.resourceComments.push(response.data);
          }).catch(handleAxiosError);
    }
  },
  created() {
    axios
        .get(`${BACKEND_URL}/resources/${this.resourceId}`, {headers: authHeader()})
        .then((response) => {
          this.resource = response.data;
        })
        .catch(handleAxiosError);
    axios
        .get(`${BACKEND_URL}/resources/${this.resourceId}/similar`, {headers: authHeader()})
        .then((response) => {
          this.similarResourcesRecommended = response.data;
        })
        .catch(handleAxiosError);
  }
}
</script>

<style scoped>
/* resource info */

.resource-container {
  display: flex;
  flex-direction: column;
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

.resource-block-summary {
  font-size: x-large;
  text-align: justify;
  padding: 0 30px 0 30px;
}

.see-resource-block {
  margin-top: 20px;
  align-self: center;
}

.see-resource {
  font-size: xx-large;
  padding-left: 30px;
}

.resource-block-first {
  border-radius: 5px;
  min-width: 400px;
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background: #df7931;
  height: min-content;
}

.resource-block-aa {
  display: flex;
  flex-direction: row;
}

.resource-block {
  border-radius: 5px;
  width: min-content;
  min-width: 400px;
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: #df7931;
  height: min-content;
  min-height: 120px;
}

.resource-info-block {
  font-size: xx-large;
  align-self: center;
}

.recommended-resource-info-block {
  font-size: xx-large;
  align-self: center;
  text-align: center;
}

.resource-type {
  margin-left: 40%;
}

.recommended-resource-type {
  margin: 0;
  font-size: smaller;
}

.rating-and-favorite-block {
  display: flex;
  flex-direction: row;
}

.fa-bookmark:before {
  font-size: 30px;
}

.favorite-icon {
  color: #ffc700;
  margin-top: 24px;
  margin-left: 20px;
  cursor: pointer;
}

.similar-resources-recommendations-title {
  font-size: 40px;
}

.resource-type-span {
  font-size: smaller;
}

.dropbtn {
  background-color: #FFBF00;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  height: 25px;
  margin-top: 5px;
  margin-left: 3px;
  padding: 0 16px 0 16px;
}

.dropbtn-1 {
  background-color: #df7931;
  font-size: 25px;
  cursor: pointer;
  border: 3px solid black;
  border-radius: 10px;
  height: 80px;
  margin-top: 5px;
  padding: 0 16px 0 16px;
  width: 210px;
  margin-left: 30px;
}
</style>
