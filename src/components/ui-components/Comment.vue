<template>
  <div class="comment text-justify darker mt-4'">
    <h1 class="comment-author">{{comment.userName}}</h1>
    <span class="comment-date">{{comment.date}}</span>
    <p class="comment-text">{{comment.text}}</p>
  </div>
</template>

<script>
export default {
  components: {Comment},
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.comment-author {
  font-size: 40px;
}

.comment-date {
  font-size: 22px;
}

.comment-text {
  font-size: x-large;
}
</style>
