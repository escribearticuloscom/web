<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white q-pt-sm q-mb-md">
      <q-toolbar class="row justify-between">
        <div class="col-3">
          <div class="q-ml-lg q-my-sm">
            <q-img
              src="imgs/logo_largo.png"
              style="width: 200px; height: 50px"
            />
          </div>
        </div>
        <div class="col-7 row justify-end">
          <q-btn
            v-for="btn in headerButtons"
            :key="btn.label"
            class="text-black q-mx-lg"
            flat
            :label="btn.label"
            @click="goTo(btn.path)"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Nuestro servicio</h3>
          <p>
            Ofrecemos la redacción de artículos de calidad y optimizados para el
            SEO, con una investigación de palabras clave y una revisión para
            asegurar su coherencia y claridad.
          </p>
        </div>
        <div class="footer-section">
          <h3>Enlaces útiles</h3>
          <ul>
            <li><a href="#/home">Inicio</a></li>
            <li><a href="#/aboutUs">Sobre nosotros</a></li>
            <li><a href="#/blog">Nuestro Blog</a></li>
            <li><a href="#/prices">Tarifas</a></li>
            <li><a href="#/contact">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contacto</h3>
          <p>Puedes contactarnos a través de las siguientes vías:</p>
          <ul>
            <li>
              <q-icon name="email" class="q-mr-sm" />
              contacto@escribearticulos.com
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        Copyright &copy; 2023 Ejemplo. Todos los derechos reservados.
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      headerButtons: [
        { label: "Inicio", path: "home" },
        { label: "Nuestro Blog", path: "blog" },
        { label: "Sobre Nosotros", path: "aboutUs" },
        { label: "Tarifas", path: "prices" },
        { label: "Contacto", path: "contact" },
      ],
    };
  },
  methods: {
    goTo(path) {
      this.$router.push("/" + path);
    },
  },
});
</script>

<style>
.page-title {
  font-size: 36px;
  letter-spacing: 4px;
  font-weight: 400;
  margin-bottom: 24px;
}

.page-subtitle {
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 16px;
}

.content {
  font-size: 18px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-section {
  width: 30%;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #fff;
}

.copyright {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  margin-top: 2rem;
}
</style>
