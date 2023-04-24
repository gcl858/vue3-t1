<template>
  <img alt="Vue logo" id="logo1" src="./assets/logo.png" />
  <HelloWorld msg="Hee ccvn in Codebox!" />
  <v-tour name="myTour" :steps="steps"></v-tour>
  <button @click="clickTour">Toure</button>
</template>

<script>
import { ref, onMounted } from "vue";
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
  },
  setup() {
    const steps = ref([]);

    steps.value = [
      {
        target: "#logo1",
        step: {
          // offset: 100, // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        },
        header: {
          title: "Get Started",
        },
        content: `Discover <strong>Vue Tour</strong>!`,
      },
      {
        target: ".hello",
        content: "An awesome plugin made with Vue.js!",
      },
      {
        target: ".hello h1",
        content:
          "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
        params: {
          placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        },
      },
    ];

    // 移到第一個欄位
    onMounted(() => {
      // window.tours["myTour"].start();
    });

    const clickTour = () => {
      steps.value = [
        {
          target: "#logo1",
          step: {
            offset: 100, // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          },
          header: {
            title: "test2",
          },
          content: `Discover <strong>Vue Tour</strong>!`,
        },
        {
          target: ".hello",
          content: "An awesome plugin made with Vue.js!",
        },
        {
          target: ".hello h1",
          content:
            "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
          params: {
            placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          },
        },
      ];

      window.tours["myTour"].start();
    };

    return {
      clickTour,
      steps,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
