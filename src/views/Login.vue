<template>
    <form @submit.prevent="handleSubmit">
        <h1>{{title}}</h1>
        <br />
        <input type="text" v-model="username" placeholder="Enter Username"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <br/>
        <button>Log in</button>
    </form>
</template>



<script>
export default{
    data() {
        return {
            title: 'Login',
            username: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(){
            if(this.username == 'user' && this.password == 'user'){
                console.log("we've made it boys")
                this.$router.push('/user');
            }else if(this.username == 'admin' && this.password == 'admin'){
                console.log('admin is in the house')
                this.$router.push('/admin');
            }else{
                alert("Please enter valid information !");
            }

            
        }
    },
}
</script>





<style scoped>

form{
    position: relative;
    top: 30px;
    left: 40%;
    height: 30vh;
    width: 400px;
    padding: 20px;
}
input{
    position: relative;
    left: 4.2vw;
    padding-left: 10px;
    display: block;
    border: 1px solid #aaa;
    border-radius: 10px;
    margin: 10px;
    width: 200px;
    height: 30px;
}
button{
    font-size: 1.2rem;
    width: 120px;
    height: 40px;
    border: 1px solid #aaa;
}
button:hover{
    font-size: 1.3rem;
    background: rgb(98, 184, 255);
    border-color: rgb(0, 0, 0);
}


</style>