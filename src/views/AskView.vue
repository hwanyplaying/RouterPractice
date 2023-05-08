<template>
  <main>
    <section v-for="user in this.$store.state.ask">{{ user.user }}</section>
  </main>
</template>

<script>
export default {
  name: "AskView",
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>