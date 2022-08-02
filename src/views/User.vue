<template>
  <div>
    <input type="search">
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }} {{ post.title }}</h2>
      <p>{{ post.body }}</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "User",
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.posts = response.data))
    },

}
</script>

<style scoped>
input{
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 10px;
  padding-left: 5px;
}


</style>


