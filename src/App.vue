<template>
  <div id="app">
    <div id="nav">
      <navegacion></navegacion>
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { conexionApi } from "./config/conexionApi";
import Navegacion from "@/components/Navegacion.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navegacion,
    Footer,
  },
  mounted() {
    console.log("Funciona mounted");
    conexionApi();
  },
};
</script>

<style lang="scss">
#app {
  background-image: url("assets/bg-marvel.jpg");
  width: 100%;
  height: auto;
  padding-top: 50px;
  font-family: Ginebra, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
