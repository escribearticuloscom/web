<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white q-mt-sm q-mb-md">
      <q-toolbar class="row justify-center">
        <q-btn
          v-for="btn in headerButtons"
          :key="btn.label"
          class="text-black"
          flat
          :label="btn.label"
          @click="goTo(btn.path)"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      headerButtons: [
        { label: "Inicio", path: "/" },
        { label: "Nuestro Blog", path: "blog" },
        { label: "Sobre Nosotros", path: "aboutUs" },
        { label: "Tarifas", path: "prices" },
        { label: "Contacto", path: "contact" },
      ],
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
});
</script>
