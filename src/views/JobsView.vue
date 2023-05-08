<template>
  <main>
    <section v-for="user in this.$store.state.jobs">{{ user.id }}</section>
  </main>
</template>

<script>

export default {
  name: "JobsView",
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>