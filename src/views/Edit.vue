<template>
    <container>
        <div class="field">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title">
        </div>
        <div class="field">
            <label for="body">Title</label>
            <input type="text" id="body" v-model="body">
        </div>
    </container>
</template>

<script>
export default {
    name: 'Edit',
    data() {
        return {
            title: '',
            body: ''
        }
    },


}
</script>

<style>

</style>