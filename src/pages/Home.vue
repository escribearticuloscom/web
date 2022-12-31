<template>
  <q-page>
    <div class="row full-height">
      <div class="col-1"></div>
      <div
        class="col-md-4 col-xs-12"
        :class="{ 'text-center': $q.screen.lt.md }"
      >
        <div class="landing-tile">
          Mejora el SEO de tu sitio web con nuestros artículos de calidad
        </div>
        <div class="row">
          <div class="col-md-8 col-xs-12 landing-subtitle">
            Aumenta el tráfico y la visibilidad de tu sitio gracias a nuestros
            contenidos optimizados para los motores de búsqueda
          </div>
        </div>
        <q-btn
          color="primary"
          class="q-mt-lg"
          size="xl"
          rounded
          no-caps
          @click="() => $router.push('/prices')"
        >
          <div style="letter-spacing: 2px">Ver tarifas</div>
        </q-btn>
        <div class="landing-benefits-tile">Características</div>
      </div>
      <div v-if="$q.screen.gt.sm" class="col-7 landing-background"></div>
      <div class="col-12 row" :class="{ 'text-center': $q.screen.lt.md }">
        <div class="col-md-4 col-xs-12 benefit-card">
          <div :class="{ dot: $q.screen.gt.sm }" />
          <q-icon name="edit_document" size="128px" color="secondary" />
          <div class="benefit-title">Optimización SEO</div>
          <div :class="{ 'q-pr-lg': $q.screen.lt.md }">
            Nuestros artículos están diseñados para mejorar el posicionamiento
            de tu sitio web en los motores de búsqueda. Utilizamos técnicas de
            optimización SEO para asegurarnos de que tu contenido sea encontrado
            por tus clientes potenciales.
          </div>
        </div>
        <div class="col-md-4 col-xs-12 benefit-card">
          <div :class="{ dot: $q.screen.gt.sm }" />
          <q-icon name="saved_search" size="128px" color="secondary" />
          <div class="benefit-title">Palabras clave</div>
          <div :class="{ 'q-pr-lg': $q.screen.lt.md }">
            Nuestro equipo de redactores especializados en SEO crea contenido de
            alta calidad que atrae a tu audiencia y te ayuda a alcanzar tus
            objetivos de negocio. Todos nuestros artículos pasan por un proceso
            de revisión y edición para garantizar su calidad.
          </div>
        </div>
        <div class="col-md-4 col-xs-12 benefit-card">
          <div :class="{ dot: $q.screen.gt.sm }" />
          <q-icon name="timer" size="128px" color="secondary" />
          <div class="benefit-title">Entrega rápida</div>
          <div :class="{ 'q-pr-lg': $q.screen.lt.md }">
            Trabajamos con rapidez y eficiencia para asegurarnos de que recibas
            tu contenido de forma oportuna. Ofrecemos un servicio personalizado
            para adaptarnos a tus necesidades específicas y brindar una solución
            a medida para tu empresa.
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style>
.landing-tile {
  font-size: 42px;
  font-weight: bold;
  margin-top: 5vh;
  letter-spacing: 2px;
}

.landing-benefits-tile {
  font-size: 28px;
  font-weight: bold;
  margin-top: 5vh;
  letter-spacing: 2px;
  margin-bottom: 10vh;
  letter-spacing: 2px;
}

.landing-subtitle {
  font-size: 18px;
  margin-top: 16px;
}

.landing-background {
  text-align: right;
  background-position: right;
  background-size: 550px;
  background-repeat: no-repeat;
  background-image: url("../../public/imgs/fondo_home.png");
  margin-top: -20vh;
}

.benefit-card {
  padding-left: 5vw;
  margin-bottom: 48px;
  position: relative;
}

.benefit-title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 16px;
  margin-top: 16px;
}

.benefit-card:hover .dot {
  border-radius: 10px;
  width: 90%;
  height: 110%;
  left: 4vw;
}

.dot {
  position: absolute;
  z-index: -1;
  top: -10px;
  left: 4.5vw;
  height: 150px;
  width: 150px;
  border-top-left-radius: 15rem 10rem;
  border-bottom-right-radius: 5rem 15rem;
  border-bottom-left-radius: 5rem 13rem;
  border-top-right-radius: 2rem 10rem;
  background-color: #caf0f8;
  display: inline-block;
  transition: all 0.5s;
}
</style>
