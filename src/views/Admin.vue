<template>
  <div>
    <input type="search" v-model="search" placeholder="Search...">
    <div class="form-container" v-for="post in filteredPosts" :key="post.id">
      <h2 class="form-title">{{ post.id }}. {{ post.title }}</h2>
      <p class="form-body">{{ post.body }}</p>
    </div>
    <div class="item error" v-if="input&&!filteredList().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
    name: "User",
    data() {
      return {
        posts: [],
        search: ''
      }
    },
    mounted() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.posts = response.data))
    },
    computed: {
      filteredPosts(){
        return this.posts.filter(post => post.body.includes(this.search) || post.title.includes(this.search))
      }
    }

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
  margin-bottom: 30px
}
.form-container{
  position: relative;
  left: 17vw;
  width: 60vw;
  padding: 30px 50px;
  border-bottom: 1px solid black;

}
.form-container:hover{
  font-size: 17px;
  background-color:  rgb(98, 184, 255);
  border-radius: 10px;
  border-bottom: none;
  
}
.form-body{
  padding-top: 15px;
}


</style>
