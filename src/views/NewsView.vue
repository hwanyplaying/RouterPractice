<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
<!--        포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
<!--        기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>

          <small class="user-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
<!--    <a :href="item.url">
          {{ item.title }}
        </a>

        <small>
          {{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>-->
      </li>
    </ul>
<!--    <section v-for="item in this.$store.state.news">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
&lt;!&ndash;        <router-link :to="'/user/' + item.user">{{ item.user }}</router-link>&ndash;&gt;
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
      &lt;!&ndash;    <section v-for="user in users">{{user.title}}</section>&ndash;&gt;
    </section>-->

  </div>
</template>

<script>
// import {fetchNewsList} from "@/api";
export default {
  name: "NewsView",
  // data() {
  //   return {
  //     users: []
  //   }
  // },
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
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #555;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.user-text {
  color: #828282;
}
</style>