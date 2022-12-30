<template>
  <q-page class="row">
    <div class="col-md-2 col-xs-12" />
    <div id="text-area" class="col-md-8 col-xs-12 row justify-between q-mt-xl">
      <div
        v-for="plan in plans"
        :key="plan.title"
        class="col-md-4 col-xs-12 q-px-sm"
      >
        <q-card class="row q-mt-md">
          <q-card-action class="card-header col-12">
            {{ plan.title }}
            <q-separator inset class="q-my-md" />
          </q-card-action>
          <q-card-action class="card-price col-12">
            {{ plan.price }}€/mes
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm text-bold">
            <q-icon name="check" color="green" class="q-ml-sm" />
            {{ plan.numberOfArticles }}
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm">
            <q-icon name="check" color="green" class="q-ml-sm" /> Análisis de
            palabras clave
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm">
            <q-icon name="check" color="green" class="q-ml-sm" /> Investigación
            exhaustiva sobre el tema a tratar
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm">
            <q-icon name="check" color="green" class="q-ml-sm" /> Diseño de una
            estructura y organización adecuada
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm">
            <q-icon name="check" color="green" class="q-ml-sm" /> Optimización
            SEO
          </q-card-action>
          <q-card-action class="col-12 q-px-md q-mt-sm">
            <q-icon name="check" color="green" class="q-ml-sm" /> Revisión y
            corrección de errores
          </q-card-action>

          <div class="col-12 q-mt-md">
            <q-separator inset />
          </div>
          <q-card-actions class="col-12 justify-center">
            <q-btn
              label="contactanos"
              color="primary"
              @click="() => $router.push('contact')"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="col-md-2 col-xs-12" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      plans: [
        { title: "Esencial", numberOfArticles: "1 Artículo al mes", price: 20 },
        {
          title: "Avanzado",
          numberOfArticles: "4 Artículos al mes",
          price: 50,
        },
        {
          title: "Empresa",
          numberOfArticles: "12 Artículos al mes",
          price: 120,
        },
      ],
    };
  },
});
</script>

<style>
.card-header {
  margin-top: 16px;
  font-weight: 500;
  letter-spacing: 4px;
  text-align: center;
  font-size: 26px;
}
/* q-mt-sm text-bold text-center */
.card-price {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  letter-spacing: 4px;
  margin-bottom: 8px;
}
</style>
