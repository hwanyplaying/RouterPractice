<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-description">
          <router-link :to="`/user/${askInfo.user}`">
            {{ askInfo.user }}
          </router-link>

          <div class="time">
            {{ askInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ askInfo.title }}</h2>
    </section>
<!--    <p>{{ askInfo.title }}</p>
        <div>
          {{ askInfo.content }}
        </div>-->
    <section>
      <div v-html="askInfo.content">
<!--        {{ askInfo.content }}-->
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: "ItemView",
  computed: {
    askInfo() {
      return this.$store.state.id;
    }
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_INFO', askId);
  },
  methods: {
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>