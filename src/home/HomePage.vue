<template>
    <div>
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>Glad too see you here! InventorSoft is the best!</p>
        <h3>Users:</h3>
        <em v-if="users.loading">Loading users...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users.items">
            <li v-for="user in users.items" :key="user.id">
                {{user.firstName + ' ' + user.lastName}}
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
            </li>
        </ul>
        <p>
            <router-link to="/login"><button class="btn btn-primary"> Logout </button></router-link>
        </p>
        <div class="posts col-sm-12">
        <Posts /></div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex';
    import Posts from '../components/Posts.vue';

    export default {
        components: {
            Posts
        },
        computed: {
            ...mapState({
                account: state => state.account,
                users: state => state.users.all
            })
        },
        created() {
            this.getAllUsers();
            this.getPosts();
        },
        methods: {
            ...mapActions('users', {
                getAllUsers: 'getAll',
                deleteUser: 'delete'
            }),
            ...mapActions(["getPosts"])
        }
    };
</script>
<style>
.posts{
    display: inline-block;
}
</style>