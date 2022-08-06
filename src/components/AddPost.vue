<template>
  <div>
    <div class="add">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="Title: ">
            <input type="text" v-model="body" placeholder="Body: ">
            <input type="submit" value="Submit">
        </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: "Add Post",
    data() {
        return {
            title: '',
            body: ''
        }
    },
    computed: mapState(['posts']),
    methods: {
        ...mapActions(['addPost']),
        onSubmit() {
            this.addPost(this.title)
            this.title = ''
            this.body = ''
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