<template>
  <div class="header-container">
    <div class="title-container">
      <text class="title-text">Ресурсы</text>
    </div>
    <profile-header-item/>
  </div>

  <div class="resources-block">
    <h1 class="most-popular-resources-h1">Вам должно понравиться</h1> <br>
    <div class="concerts-container most-popular-resources">
      <concert-preview v-for="resource in recommendedResources" :event="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Самые популярные ресурсы сейчас</h1> <br>
    <div class="concerts-container most-popular-resources">
      <concert-preview v-for="resource in popularResources" :event="resource" :key="resource.id" />
    </div>

    <h1 class="most-popular-resources-h1">Все ресурсы</h1> <br>
    <div id="concerts-container" class="concerts-container">
      <concert-preview v-for="event in events" :event="event" :key="event.id" />
    </div>
  </div>
</template>

<script>
import ConcertPreview from '@/components/events/ConcertPreview.vue';
import axios from 'axios';
import {authHeader, handleAxiosError} from '@/util/authentication-helper';

export default {
  name: 'EventList',
  components: {
    ConcertPreview
  },
  data() {
    return {
      events: [],
      popularResources: [],
      recommendedResources: [],
    }
  },
  methods: {

  },
  created() {
    this.events = [
      {
        id: '1',
        resourceName: 'Статья 2',
        resourceType: 'Статья',
      }
    ];

    this.popularResources = [
      {
        id: '2',
        resourceName: 'Статья 2',
        resourceType: 'Статья',
      },
      {
        id: '3',
        resourceName: 'Видео о ML',
        resourceType: 'Видео',
      }
    ];

    this.recommendedResources = [
      {
        id: '4',
        resourceName: 'Статья 4',
        resourceType: 'Статья',
      },
      {
        id: '5',
        resourceName: 'Курс 1',
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

/* concerts list */

.concerts-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}

.search-field {
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}

/* city select */

.select-city {
  position: relative;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 30px;
  text-wrap: nowrap;
}

.select-city select {
  display: none;
}

.select-selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 0;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 40%;
}

.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

.select-items {
  position: absolute;
  background-color: #ccc;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  min-width: max-content;
}

.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
