<template>
  <main>
    <PostForm :postId="selectedPostId" @post-saved="refreshPosts" />
    <PostList @edit-post="selectPostToEdit" />
  </main>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';

export default{
  components: {
    PostForm,
    PostList
  },

  data() {
    return {
      selectedPostId: null
    };
  },
  methods: {
    selectPostToEdit(id) {
      this.selectedPostId = id;
    },
    refreshPosts() {
      this.selectedPostId = null;
    }
  }
};

</script>
