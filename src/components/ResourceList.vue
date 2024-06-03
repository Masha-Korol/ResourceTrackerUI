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

    <h1 class="most-popular-resources-h1">Ресурсы, подобранные по вашим тэгам</h1> <br>
    <div class="resources-container most-popular-resources">
      <resource-preview v-for="resource in recommendedResourcesByTags" :resource="resource" :key="resource.id" />
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
      recommendedResourcesByTags: [],
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
      },
      {
        id: '1',
        resourceName: 'Vue.js + C# Как начать?',
        resourceType: 'Статья',
      },
      {
        id: '1',
        resourceName: 'Vue.js + Asp.Net Core MVC',
        resourceType: 'Туториал',
      },
      {
        id: '1',
        resourceName: 'Курс Angular 15 Advanced',
        resourceType: 'Курс',
      },
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
      },
    ];
    this.recommendedResourcesByTags = [
      {
        id: '31',
        resourceName: 'UI: все что нужно знать',
        resourceType: 'Статья',
      },
      {
        id: '32',
        resourceName: 'Vue.js',
        resourceType: 'Курс',
      },
      {
        id: '33',
        resourceName: 'Team Leadership',
        resourceType: 'Курс',
      },
    ];
  }
}
</script>

<style scoped>
.resources-block {
  display: flex;
  flex-direction: column;
}

/* resources list */

.resources-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
