import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marca: 'MARVEL',
    listaPersonajes: [],
    listaFavorito: []
  },
  getters: {
    getMarca(state) {
      return state.marca;
    },
    envioPersonajes(state) {
      return state.listaPersonajes;
    },
    enviarFavList(state) {
      return state.listaFavorito;
    }
  },
  mutations: {
    // Aquí se muta la variable listaPersonajes(arreglo) creada en el state con los nuevos datos recibidos de la API
    mutandoInfoAPI(state, infoPersonajeRecibido) {
      state.listaPersonajes = infoPersonajeRecibido;
    },
    mutandoFav(state, favRecibido) {
      state.listaFavorito.push(favRecibido);
    },
    eliminarFavMutacion(state, index) {
      console.log(`Se elimina el favorito número: ${index}`)
      state.listaFavorito.splice(index, 1);
    }
  },
  actions: {
    // Aquí se envía a VUEX mediante acciones la info recibida de la API
    recibidoInfoAPI(context, infoAPI) {
      context.commit('mutandoInfoAPI', infoAPI);
    },
    agregandoFav(context, favRecibido) {
      context.commit('mutandoFav', favRecibido);
    },
    eliminandoFavorito(context, elimiFavRecibido) {
      context.commit('eliminarFavMutacion', elimiFavRecibido);
    }
  },
})
