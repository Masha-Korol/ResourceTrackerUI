<template>
  <router-view/>
</template>

<script>
import ResourceList from '@/components/ResourceList.vue';
import ResourceInfo from '@/components/ResourceInfo.vue';
import Profile from '@/components/Profile.vue';
import Recommendations from '@/components/Recommendations.vue';
import UserProfile from '@/components/UserProfile.vue';
import Administration from '@/components/Administration.vue';

export default {
  components: {
    ResourceList,
    ResourceInfo,
    Profile,
    Recommendations,
    UserProfile,
    Administration
  },
  data() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
