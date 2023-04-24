import { createApp } from "vue";
import App from "./App.vue";
import VueTour from "v3-tour";
import "v3-tour/dist/vue-tour.css";

import "v3-tour/dist/vue-tour.css";

const app = createApp(App);

app.use(VueTour);

window.tours = app.config.globalProperties.$tours;

app.mount("#app");
