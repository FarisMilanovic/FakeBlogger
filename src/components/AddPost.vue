<template>
  <div>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="newPost.title" placeholder="Title: ">
            <input type="text" v-model="newPost.body" placeholder="Body: ">
            <input type="submit" value="Submit">
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
import {mapAction, mapState} from 'vuex'
export default {
    name: "Add Post",
    data() {
        return {
            newPost:{
                title: '',
                body: ''
            }
        }
    },
    computed: mapState(['posts']),
    methods: {
        async onSubmit() {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.newPost.title, 
                body: this.newPost.body})
            .then(store.state.posts.unshift(this.newPost))
            console.log(this.newPost)
            
            
            ///.catch(error => console.log(error))
            ///this.target.id = this.todos.length + 1
            
            
        }
    }
}
</script>







<style scoped>
div{
    padding-bottom: 30px;
}

input[type="text"]{
    width: 300px;
    padding: 10px;
    border: 1px solid black;
}
input[type="submit"] {
    width: 100px;
    height: 37px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 1px solid black;
    cursor: pointer;
}
input[type="submit"]:hover{
    background: rgb(48, 52, 88);
    color: white;
}

</style>