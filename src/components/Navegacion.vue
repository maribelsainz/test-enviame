<template>
  <div>
    <nav class="navigation navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <div class="header__titulo">
          <router-link :to="{ name: 'Home' }" class="p-3 router__texto-logo">{{
            marca
          }}</router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto text-center">

            <li class="nav-item">
              <router-link :to="{ name: 'Favoritos' }" class="p-3 router__texto"><i class="fas fa-heart"></i></router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navegacion",
  computed: {
    marca() {
      return this.$store.getters.getMarca;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  background: black;
  padding: 15px !important;
}
.header__titulo {
  font-family: 'Passion One', cursive;
  font-size: 35px;
  color: white;
}
.router__texto {
  text-decoration: none;
  color: white;
  font-family: "Ginebra", sans-serif;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: red;
  }
}

.router__texto-logo {
  color: red;
}
</style>
