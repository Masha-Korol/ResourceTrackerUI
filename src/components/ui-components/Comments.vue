<template>
  <div class="comments-container">
    <div class="send-comment-form col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
      <form id="algin-form">
        <div class="form-group">
          <h2 class="leave-comment-h4">Оставьте коментарий</h2>
          <textarea v-model="newComment.commentText" v-bind:class="isCommentEmpty ? 'comment-text-empty-error' : ''" name="msg" ref="commentTexterea" cols="30" rows="5" class="form-control" required></textarea>
        </div>
        <div class="form-group">
          <div class="comment-form-button-container">
            <button @click="createComment" id="post" class="btn-comment-form">Отправить</button>
          </div>
        </div>
      </form>
    </div>

    <div id="comments-section" class="comments-section col-sm-5 col-md-6 col-12 pb-4">
      <div class="comments-title">
        <h1 class="comments-header">Комментарии</h1>
      </div>
      <comment v-for="comment in resourceComments" :comment="comment" :key="comment.id"/>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/ui-components/Comment.vue';
import {format} from 'date-fns'
export default {
  components: {
    Comment
  },
  props: {
    resourceComments: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      newComment: {
        commentText: '',
        userName: '',
        date: '',
      },
      isCommentEmpty: false
    }
  },
  methods: {
    createComment(event) {
      event.preventDefault();

      this.validateForm();

      if (!this.isCommentEmpty) {
        this.newComment.userName = 'Masha';
        this.newComment.date = format(new Date(), 'dd/MM/yyyy');
        this.newComment.text = this.newComment.commentText;
        this.$emit('createComment', this.newComment);
        this.newComment.commentText = '';
      }
    },
    validateForm() {
      this.isCommentEmpty = !this.newComment.commentText;
    }
  }
}
</script>

<style scoped>
/* comments section */

.comments-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.comments-header {
  font-size: 40px;
  height: 0;
}

#algin-form {
  width: 50%;
}

.comments-title {
  margin-top: 40px;
}

.comments-section {
  display: flex;
  flex-direction: column;
  margin-right: 100px;
}

.send-comment-form {
  margin-top: 98px;
}

#post {
  margin: 10px;
  padding: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  background-color: #df7931;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 13px;
}

.darker {
  border: 1px solid #df7931;
  background-color: #df7931;
  float: right;
  border-radius: 10px;
  padding-left: 20px;
}

.comment {
  word-wrap: break-word;
  width: 50%;
  margin-top: 3%;
}

.comment h4, .comment span, .darker h4, .darker span {
  display: inline;
}

.comment p, .comment span, .darker p, .darker span {
  color: rgb(184, 183, 183);
}

.leave-comment-h4 {
  text-align: center;
}

.form-group {
  text-align: center;
}

.form-group input, .form-group textarea {
  background-color: black;
  border: 1px solid rgba(16, 46, 46, 1);
  border-radius: 12px;
}

form {
  border: 1px solid rgba(16, 46, 46, 1);
  background-color: rgb(199 208 208 / 24%);
  border-radius: 10px;
  padding: 20px;
}

textarea {
  width: 100%;
}

.btn-comment-form {
  border: 2px solid black;
  color: black;
  padding: 14px 28px;
  cursor: pointer;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  background: none;
}

.comment-form-button-container {
  display: flex;
  justify-content: center;
}

.form-control {
  background-color: black !important;
  color: #FFFFFF !important;
}

textarea:invalid {
  border: 2px white;
}

textarea:valid {
  border: 2px solid black;
}
</style>
