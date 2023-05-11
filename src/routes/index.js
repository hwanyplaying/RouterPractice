import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from "../views/AskView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "@/views/JobsView.vue";
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue";
import createListView from "@/views/CreateListView";
import bus from "@/utils/bus";
import {store} from "@/store";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: 'news'
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(to.name, 'fetched');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                /*console.log('to', to);
                console.log('from', from);
                console.log(next);
                next();*/
            }
            // component: createListView('NewsView')
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(to.name, 'fetched');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                /*console.log('to', to);
                console.log('from', from);
                console.log(next);
                next();*/
            }
            // component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(to.name, 'fetched');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            // component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});