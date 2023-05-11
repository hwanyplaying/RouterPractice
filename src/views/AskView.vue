<template>
  <div>
    <list-item></list-item>
<!--    <ul class="news-list">
      <li v-for="ask in fetchedAsk" class="post">
        &lt;!&ndash;        포인트 영역 &ndash;&gt;
        <div class="points">
          {{ ask.points }}
        </div>
        &lt;!&ndash;        기타 정보 영역 &ndash;&gt;
        <div>
          <p class="news-title">
            <a :href="ask.url">
              {{ ask.title }}
            </a>
          </p>

          <small class="user-text">
            {{ ask.time_ago }} by
            <router-link :to="`item/${ask.id}`">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>-->

  </div>
<!--  <section v-for="ask in fetchedAsk">
    <router-link :to="`item/${ask.id}`">
      {{ ask.title }}
    </router-link>
    <small>{{ ask.time_ago }} by {{ ask.user }}</small>
  </section>-->
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import ListMixins from "@/mixins/ListMixins";

export default {
  name: "AskView",
  mixins: [ListMixins],
  components: {
    ListItem
  },

}
</script>

<style scoped>

</style>