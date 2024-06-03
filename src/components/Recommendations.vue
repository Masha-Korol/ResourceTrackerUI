<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text">Рекомендации</text>
    </div>
    <resources-header-item/>
    <profile-header-item/>
  </div>

  <div class="recommendations-container">
    <div id="recommendations-detail-concerts" class="recommendations-detail-container">
      <div class="recommendations-detail-container-title">
        Ресурсы, которые могут вас заинтересовать
      </div>
      <resource-text-info v-for="resource in recommendations.recommendedResources" :resource="resource" :key="resource.id" />
    </div>

    <div id="recommendations-detail-users" class="recommendations-detail-container">
      <div class="recommendations-detail-container-title">
        Ресурсы от сотрудников DSR
      </div>
      <recommended-resource v-for="resource in recommendations.recommendedResourcesByCompany" :resource="resource" :key="resource.id"
                        @sendFriendRequest="sendFriendRequest"
                        @cancelFriendRequest="cancelFriendRequest"/>
    </div>
  </div>
</template>

<script>
import ResourceTextInfo from '@/components/resources/ResourceTextInfo.vue';
import RecommendedResource from '@/components/users/RecommendedResource.vue';

export default {
  name: 'Recommendations',
  components: {
    ResourceTextInfo, RecommendedResource
  },
  data() {
    return {
      recommendations: {
        recommendedResourcesByCompany: [],
        recommendedResources: []
      }
    }
  },
  methods: {
    sendFriendRequest(userId) {},
    cancelFriendRequest(userId) {}
  },
  created() {
    this.recommendations = {
      recommendedResources:  [
        {
          id: '2',
          resourceName: 'Microservices: pros and cons',
          resourceType: 'Статья',
        },
        {
          id: '3',
          resourceName: 'Machine Learning - basics',
          resourceType: 'Видео',
        },
        {
          id: '5',
          resourceName: 'Angular from zero to hero',
          resourceType: 'Курс',
        }
      ],
      recommendedResourcesByCompany: [
        {
          id: '2',
          resourceName: 'Microservices: pros and cons',
          resourceType: 'Статья',
          recommendedBy: 'maxim',
        },
        {
          id: '4',
          resourceName: 'Project Management',
          resourceType: 'Курс',
          recommendedBy: 'pedro.soares',
        },
      ]
    };
  }
}
</script>

<style scoped>
.recommendations-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.recommendations-detail-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 40px;
  width: 40%;
  min-width: 40%;
  height: max-content;
}

.recommendations-detail-container-title {
  margin-bottom: 50px;
  font-weight: 900;
  font-style: normal;
}


/* concerts */

#recommendations-detail-concerts {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}


/* users */

#recommendations-detail-users {
  margin-left: 20%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
