<template>
  <div>
    <list-item></list-item>
<!--    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        &lt;!&ndash;        포인트 영역 &ndash;&gt;
        <div class="points">
          {{ job.points || 0 }}
        </div>
        &lt;!&ndash;        기타 정보 영역 &ndash;&gt;
        <div>
          <p class="news-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>

          <small class="user-text">
            {{ job.time_ago }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>-->
<!--    <section v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}{{ job.domain }}</small>
    </section>-->
  </div>
</template>

<script>

import ListItem from "@/components/ListItem.vue";
import ListMixins from "@/mixins/ListMixins";

export default {
  name: "JobsView",
  mixins:[ListMixins],
  components: {
    ListItem
  },
}
</script>

<style scoped>

</style>