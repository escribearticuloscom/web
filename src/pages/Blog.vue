<template>
  <q-page class="row">
    <div class="col-2" />
    <div
      id="text-area"
      class="col-md-8 col-xs-12 q-my-xl"
      :class="{ 'q-pl-lg': $q.screen.lt.md }"
    >
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
              v-if="$q.screen.lt.md"
              :src="`imgs/${blog.img}`"
              style="height: 80px; width: 100px"
            /><q-img
              v-else
              :src="`imgs/${blog.img}`"
              style="height: 140px; width: 220px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-mb-md text-bold" style="font-size: 28px">{{
              blog.title
            }}</q-item-label>
            <q-item-label caption style="font-size: 20px"
              >{{ blog.description }}...</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-separator inset />
      </div>
      <!-- Añadir esto en un futuro -->
      <!-- https://quasar.dev/vue-components/pagination#introduction -->
    </div>
    <div class="col-2" />
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
    pages.forEach((p) => console.log(p));
    console.log(pages);
    for (let page of pages) {
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
