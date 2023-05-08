<template>
  <main>
    <section v-for="user in this.$store.state.news">{{ user.title }}</section>
  </main>
</template>

<script>

export default {
  name: "NewsView",
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //     .then(res => {
    //       this.users = res.data;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
  }
}
</script>

<style scoped>

</style>