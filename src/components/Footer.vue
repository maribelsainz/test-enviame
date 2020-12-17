<template>
  <div>
    <footer class="footer">
      <div class="footer__info">
        <h6 class="footer__info-text"><i class="fas fa-laptop-code"></i> Test envíame 2020</h6>
      </div>

      <div class="footer__links">
        <a href="https://www.facebook.com/MarvelLatinoamerica/" target="_blank">
          <i class="fab fa-facebook-square fa-3x text-light"></i>
        </a>
        <a href="https://twitter.com/marvellatam" target="_blank">
          <i class="fab fa-twitter-square fa-3x text-light"></i>
        </a>
        <a href="https://www.instagram.com/marvellatam" target="_blank">
          <i class="fab fa-instagram fa-3x text-light"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background-color: black;
  color: #e8e8e8;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2% 0%;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  text-align: center;
}

.footer__links a {
  text-decoration: none;
  color: #e8e8e8;
  padding: 0px 5px;
}

.footer__info {
  text-align: center;
  color: #e8e8e8;
  text-align: left;
}

.footer__info-text {
  font-size: 22px;
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif */
  font-family: monospace;
}
</style>
