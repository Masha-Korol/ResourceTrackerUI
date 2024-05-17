<template>
  <div class="concert-block" @click="this.$router.push({name: 'EventInfo', params: { id: this.event.id}})">
    <img src="../images/image.png">
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      posterFile: '',
    }
  },
  created() {
    // this.posterFile = '../images/' + this.event.posterFile;
    // document.getElementById(`image-some-id).src = this.posterFile;
  }
}
</script>

<style scoped>
.concert-block {
  padding: 10px;
  cursor: pointer;
}

img {
  width: 400px;
  height: 400px;
}
</style>
