<template>
  <header class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </header>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.header {
  color: #fff;
  background: #42b883;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active{
  color: #35495e;
}

.header a {
  color: #fff;
}
</style>