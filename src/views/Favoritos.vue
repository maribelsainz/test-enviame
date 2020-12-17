<template>
  <div class="favoritos">
    <br>
    <h2 class="mt-5">FAVORITOS</h2>
    <div class="container" v-if="traerFav.length > 0">
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4"
          v-for="(item, index) in traerFav"
          :key="index"
        >
          <div class="card">
            <img :src="item.thumbnail.path + '.jpg' " :alt="index" />
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <a class="btn btn-danger mx-3" @click="eliminarFav(index)">Eliminar de Favoritos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-primary mt-5" role="alert" v-else>No hay favoritos...</div>
  </div>
</template>

<script>
export default {
  name: "Favoritos",
  computed: {
    traerFav() {
      return this.$store.getters.enviarFavList;
    },
  },
  methods: {
    eliminarFav(index) {
      this.$store.dispatch("eliminandoFavorito", index);
    },
  },
};
</script>

<style lang="scss">
$danger: #ec1d24;
.favoritos {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
}

img {
  height: 300px;
  }

 h2 {
   font-weight: bold;
 }

 @import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>