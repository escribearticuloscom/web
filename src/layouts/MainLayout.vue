<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white q-pt-sm q-mb-md">
      <q-toolbar class="row justify-between">
        <div class="col-xs-12 col-md-2">
          <div
            class="q-my-sm row items-center"
            :class="{ 'q-ml-lg': $q.screen.gt.sm }"
          >
            <div class="col-1 text-left" v-if="$q.screen.lt.md">
              <q-btn
                flat
                @click="() => (leftMenuOpen = !leftMenuOpen)"
                round
                dense
                color="black"
                icon="menu"
              />
            </div>
            <div class="col-11 text-center">
              <q-img
                src="imgs/logo_largo.png"
                style="width: 200px; height: 50px"
              />
            </div>
          </div>
        </div>

        <div v-if="$q.screen.gt.sm" class="col-8 row justify-end">
          <q-btn
            v-for="btn in headerButtons"
            :key="btn.label"
            class="q-px-lg"
            flat
            :label="btn.label"
            :class="isActive(btn.path) ? 'text-primary' : 'text-black'"
            @click="goTo(btn.path)"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftMenuOpen" :width="200" bordered class="bg-grey-3">
      <div class="q-my-xl text-center">
        <q-img src="imgs/logo_corto.png" style="width: 50px; height: 50px" />
      </div>
      <q-list>
        <template v-for="btn in headerButtons" :key="btn.label">
          <q-item
            clickable
            v-ripple
            :active="isActive(btn.path)"
            @click="goTo(btn.path)"
          >
            <q-item-section avatar>
              <q-icon :name="btn.icon" />
            </q-item-section>
            <q-item-section>
              {{ btn.label }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>
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
            <li><a href="#/contact">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center q-mt-xl">
        <q-btn
          class="text-white"
          flat
          label="Política de privacidad"
          @click="() => goTo('privacy_policy')"
        />
        |
        <q-btn
          class="text-white"
          flat
          label="Términos y condiciones"
          @click="() => goTo('terms_and_conditions')"
        />
      </div>

      <div class="copyright">
        Copyright &copy; 2023 escribearticulos.com. Todos los derechos
        reservados.
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      headerButtons: [
        { label: "Inicio", path: "home", icon: "home" },
        { label: "Nuestro Blog", path: "blog", icon: "article" },
        { label: "Sobre Nosotros", path: "aboutUs", icon: "person" },
        { label: "Tarifas", path: "prices", icon: "sell" },
        { label: "Contacto", path: "contact", icon: "mail" },
      ],
      leftMenuOpen: false,
    };
  },
  methods: {
    goTo(path) {
      this.$router.push("/" + path);
    },
    isActive(path) {
      return this.$router.currentRoute.value.path.includes(path);
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
