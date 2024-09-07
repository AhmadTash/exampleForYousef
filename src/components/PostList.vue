<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post">
        Title: {{ post.title }} <br>
        Content: {{ post.content }} <br>
        <button @click="editPost(post.id)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      return this.allPosts;
    }
  },
  methods: {
    ...mapActions(['deletePost']),
    editPost(id) {
      this.$emit('edit-post', id);
    },
    handleDelete(id) {
      // Call Vuex action to delete the post
      this.deletePost(id);
    },
  }
};
</script>


<style>
.post {
  margin-bottom: 20px;
  padding: 15px;
  width: 300px;
  border: 1px solid #ccc;
}
</style>