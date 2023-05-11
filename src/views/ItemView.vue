<template>
  <div>
    <section>
      <user-profile :info="askInfo">
        <div slot="username">{{ askInfo.user }}</div>
        <template slot="time">{{ askInfo.time_ago }}</template>
      </user-profile>
<!--      <div class="user-container">
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
      </div>-->
    </section>
<!--    <p>{{ askInfo.title }}</p>
        <div>
          {{ askInfo.content }}
        </div>-->
    <section>
      <h2>{{ askInfo.title }}</h2>
    </section>
    <section>
      <div v-html="askInfo.content">
<!--        {{ askInfo.content }}-->
      </div>
    </section>

  </div>
</template>

<script>

import UserProfile from "@/components/UserProfile.vue";

export default {
  name: "ItemView",
  components: {UserProfile},
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

</style>