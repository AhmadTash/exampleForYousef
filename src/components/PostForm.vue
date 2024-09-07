<template>
    <div>
      <h2>{{ isEdit ? 'Edit Post' : 'Create Post' }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="title" placeholder="Title" required />
        <textarea v-model="content" placeholder="Content" required></textarea>
        <button type="submit">{{ isEdit ? 'Update Post' : 'Create Post' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    props: ['postId'],
    data() {
      return {
        title: '',
        content: ''
      };
    },
    computed: {
      ...mapGetters(['getPostById']),
      
      isEdit() {
        return !!this.postId;
      }
    },
    watch: {
      postId: {
        immediate: true,
        handler(id) {
          if (id) {
            const post = this.getPostById(id);
            this.title = post.title;
            this.content = post.content;
          }
        }
      }
    },
    methods: {
      ...mapActions(['addPost', 'editPost']),
      submitForm() {
        const post = {
          id: this.postId || Date.now(),
          title: this.title,
          content: this.content
        };
  
        if (this.isEdit) {
          this.editPost(post);
        } else {
          this.addPost(post);
        }
  
        this.$emit('post-saved');
        this.title = '';
        this.content = '';
      }
    }
  };
  </script>
  