<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text">Ресурсы</text>
    </div>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="resources-block">
    <h1 class="most-popular-resources-h1">Вам должно понравиться</h1> <br>
    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in recommendedResources" :resource="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Самые популярные ресурсы сейчас</h1> <br>
    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in popularResources" :resource="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Все ресурсы</h1> <br>
    <div class="resources-container">
      <resource-preview v-for="resource in resources" :resource="resource" :key="resource.id" />
    </div>
  </div>
</template>

<script>
import ResourcePreview from '@/components/resources/ResourcePreview.vue';

export default {
  name: 'ResourceList',
  components: {
    ResourcePreview
  },
  data() {
    return {
      resources: [],
      popularResources: [],
      recommendedResources: [],
    }
  },
  methods: {

  },
  created() {
    this.resources = [
      {
        id: '1',
        resourceName: 'Learning C# for beginners',
        resourceType: 'Статья',
      }
    ];

    this.popularResources = [
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
    ];

    this.recommendedResources = [
      {
        id: '4',
        resourceName: 'Project Management',
        resourceType: 'Статья',
      },
      {
        id: '5',
        resourceName: 'Angular from zero to hero',
        resourceType: 'Курс',
      }
    ];
  }
}
</script>

<style scoped>
.resources-block {
  display: flex;
  flex-direction: column;
}

.most-popular-resources-h1 {
  color: white;
}

/* resources list */

.resources-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
