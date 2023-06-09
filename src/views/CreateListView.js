import bus from "@/utils/bus.js";
import ListView from "@/views/ListView.vue";

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log(this.$route.name, 'fetched');
                    bus.$emit('end:spinner');
                })
                .catch((error) => {
                    console.log(error);
                });
            /*setTimeout(() => {

            }, 3000);*/
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}