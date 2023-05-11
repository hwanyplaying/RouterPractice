<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Spinner from "@/components/Spinner.vue";
import bus from "@/utils/bus";

export default {
  components: {
    Spinner,
    ToolBar
  },
  data() {
    return {
      loadingStatus: false
    };
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, -fade-leave-to {
  opacity: 0;
}
</style>
