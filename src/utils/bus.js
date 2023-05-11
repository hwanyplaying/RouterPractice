import Vue from "vue";

export default new Vue();

/*
1. bus.js 파일에서 변수에 담아 export 할 경우
export const bus = new Vue();

App.vue 파일에서 import 이렇게 해야한다.
import { bus } from '.bus.js';

2. bus.js 파일에서 그냥 export 할 경우
export default new Vue();

App.vue 파일에서 import 이렇게 해야한다.
import bus from '.bus.js';*/
