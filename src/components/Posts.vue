<template>
  <div class="Posts">
    <h1>Posts:</h1>
    <div class="d-flex flex-wrap">
      <b-card
        v-for="(post, i) in posts"
        :key="i"
        :title=post.title
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="m-3"
      >
        <b-card-text>{{post.body}}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  
  export default {
    name: 'Posts',

    computed: {
      ...mapGetters(["posts"])
    },
  };
</script>

<style scoped>

</style>
