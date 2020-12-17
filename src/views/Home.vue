<template>
  <div class="home pt-4">
    <div class="container">
      <!-- Filtro buscador por nombre de personaje -->
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="busqueda" placeholder="Escribe el personaje que deseas buscar..."/>
      </div>

      <!-- Cards de personajes con nombre y foto -->
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item, index) in datosApi" :key="index">
          <div class="card" >
            <img :src="item.thumbnail.path + '.jpg' " class="card-img-top" :alt="item.index" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>

              <!-- Botón a Modal de Ver Más -->
              <button type="button" class="btn btn-danger" data-toggle="modal" :data-target="'#ver' + index">Ver más</button>
            </div>
          </div>

          <!-- Modal Ver Más-->
          <div class="modal fade" :id="'ver' + index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ item.name }}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body container-fluid">
                  <div class="row">
                    <div class="col-md-6 ml-auto">
                      <img :src="item.thumbnail.path + '.jpg' " class="img-fluid" :alt="item.index" />
                    </div>
                    <div class="col-md-6 ml-auto">
                      <p>ID: {{ item.id }}</p>
                      <p>Fecha: {{ item.modified }}</p>
                      <p>Descripción: {{ item.description }}</p>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-success" data-dismiss="modal" @click.prevent="agregandoFav(item)">Agregar a Favoritos</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      busqueda: "",
      opinion: "",
      nombreUsuario: "",
    };
  },
  methods: {
    agregandoFav(item) {
      this.$store.dispatch("agregandoFav", item);
      this.$router.push("/favoritos");
    },
  },
  computed: {
    datosApi() {
      return this.$store.getters.envioPersonajes.filter((item) => {
        return item.name.toLowerCase().includes(this.busqueda.toLowerCase());
      });
    },
  },
};
</script>

<style scoped lang="scss">
$danger: #ec1d24;

.home {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
  color: black !important;
}

img {
  height: 300px;
  }

@import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>
