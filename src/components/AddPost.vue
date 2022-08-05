<template>
  <div>
    <div class="add">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="Add post">
            <input type="submit" value="Submit">
        </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "Add Post",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addPost']),
        onSubmit() {
            this.addPost(this.title)
            this.title = ''
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
}
input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid black;
}
input[type="submit"] {
    flex: 2;
    background: #333;
    color: #fff;
    cursor: pointer;
}

</style>