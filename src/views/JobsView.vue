<template>
  <main>
    <section v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}{{ job.domain }}</small>
    </section>
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