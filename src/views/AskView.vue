<template>
  <main>
    <section v-for="ask in fetchedAsk">
      <router-link :to="`item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AskView",
  computed: {
    // 질문 해야한다. 왜 이때는 getter가 인식이 안될까
    // 3번 방식
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // }),

    // 2번 방식
    ...mapState({
      fetchedAsk: state => state.ask
    }),

    // 1번 방식
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>