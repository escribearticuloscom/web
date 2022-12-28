<template>
  <q-page class="row">
    <div class="col-3" />
    <div id="text-area" class="col-6 q-mt-xl">
      <div class="page-title">Nuestros blogs</div>
      <div v-for="blog in blogs" :key="blog.id">
        <q-item
          clickable
          v-ripple
          class="q-mt-lg"
          @click="() => $router.push(`/blogs/${blog.id}`)"
        >
          <q-item-section side>
            <q-img
              :src="`imgs/${blog.img}`"
              style="height: 80px; width: 80px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-mb-md text-bold" style="font-size: 20px">{{
              blog.title
            }}</q-item-label>
            <q-item-label caption>{{ blog.description }}...</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator inset />
      </div>
      <!-- Añadir esto en un futuro -->
      <!-- https://quasar.dev/vue-components/pagination#introduction -->
    </div>
    <div class="col-3" />
  </q-page>
</template>

<script>
import babelConfig from "app/babel.config";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    const pages = require
      .context("../assets/json", true, /^\.\/.*\.json$/)
      .keys()
      .map((x) => x.split("./")[1]);
    for (let page of pages) {
      console.log("GET", page);
      await import(`../assets/json/${page}`).then((blog) => {
        this.blogs.push({
          title: blog.title,
          id: page.split(".json")[0],
          description: blog.description,
          img: blog.img,
        });
      });
    }
  },
});
</script>
