<template>
  <div>
    <!--<input type="search" v-model.trim="input" placeholder="Search..." >-->
    <AddPost />
    <div class="container" v-for="post in posts" :key="post.id">
      <h2 class="form-title">{{ post.id }}. {{ post.title }}</h2>
      <p class="form-body">{{ post.body }}</p>
      <button class="form-button edit">Edit</button>
      <button class="form-button delete" @click="onDelete">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddPost from '../components/AddPost.vue';
export default {
    name: "Admin",
    components: { AddPost },
    mounted(){
      ///this.$store.dispatch('getPosts')
    },
    computed: mapState(['posts']),
    methods: {
      ...mapActions(['getPosts','deletePost']),
      onDelete() {
        this.deletePost(this.id)
      }
    },
    created() {
      this.getPosts();
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
.container{
  position: relative;
  width: 60vw;
  padding: 40px 50px;
  border-bottom: 1px solid black;

}
.container:hover{
  font-size: 17px;
  background-color:  rgb(98, 184, 255);
  border-radius: 10px;
  border-bottom: none;
  font-weight: 600;

}
button{
  font-size: 17px;
  margin: 20px;
  height: 40px;
  border-radius: 10px;

}
.form-button:hover{
  font-weight: 600;
  font-size: 17px;

}
.edit:hover{
  background-color: rgb(34, 197, 34);
}
.delete:hover{
  background-color: rgb(247, 94, 94);
}
</style>
