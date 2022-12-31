<template>
  <q-page class="row">
    <div class="col-3" />
    <div
      id="text-area"
      class="col-md-6 col-xs-12 q-mt-xl"
      :class="{ 'q-px-lg': $q.screen.lt.md }"
    >
      <div class="page-title">Contacto</div>
      <div class="row q-mb-lg">
        <div class="col-md-6 col-xs-12">
          <div class="page-subtitle">Disponibilidad</div>
          <div class="row">
            <div class="col-6 q-mt-sm text-bold">Lunes</div>
            <div class="col-6 q-mt-sm">7:00am - 8:00pm</div>
            <div class="col-6 q-mt-sm text-bold">Martes</div>
            <div class="col-6 q-mt-sm">7:00am - 8:00pm</div>
            <div class="col-6 q-mt-sm text-bold">Miercoles</div>
            <div class="col-6 q-mt-sm">7:00am - 8:00pm</div>
            <div class="col-6 q-mt-sm text-bold">Jueves</div>
            <div class="col-6 q-mt-sm">7:00am - 8:00pm</div>
            <div class="col-6 q-mt-sm text-bold">Viernes</div>
            <div class="col-6 q-mt-sm">7:00am - 8:00pm</div>
            <div class="col-6 q-mt-sm text-bold">Sábado</div>
            <div class="col-6 q-mt-sm">Cerrado</div>
            <div class="col-6 q-mt-sm text-bold">Domingo</div>
            <div class="col-6 q-mt-sm">Cerrado</div>
          </div>
        </div>
        <div class="col-1" style="border-left: 1px solid black"></div>
        <div class="col-md-5 col-xs-12" :class="{ 'q-mt-xl': $q.screen.lt.md }">
          <div class="page-subtitle">Correo</div>
          No dudes en ponerte en contacto con nosotros a través de nuestro
          correo electrónico:
          <a
            href="mailto:contacto@escribearticulos.com"
            target="_blank"
            rel="noreferrer noopener"
            >contacto@escribearticulos.com</a
          >
          <br /><br />
          Si tienes alguna pregunta sobre nuestros productos o servicios, no
          dudes en enviarnos un mensaje y estaremos encantados de ayudarte.
          También estamos abiertos a sugerencias o comentarios para mejorar
          nuestro sitio web y ofrecerle una mejor experiencia de usuario.
        </div>
      </div>
    </div>
    <div class="col-3" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
