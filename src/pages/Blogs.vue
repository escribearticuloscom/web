<template>
  <q-page class="row">
    <div class="col-3" />
    <div
      id="text-area"
      class="col-md-6 col-xs-12 q-mt-xl"
      :class="{ 'q-px-lg': $q.screen.lt.md }"
    >
      <div class="page-title">{{ title }}</div>
      <q-img :src="`imgs/${img}`" style="width: 100%" class="q-mb-xl" />
      <div v-html="html"></div>
    </div>
    <div class="col-3" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogsView",
  data() {
    return {
      title: "",
      html: "",
      img: "",
    };
  },
  async created() {
    await import(`../assets/json/${this.$route.params.id}`).then((blog) => {
      this.html = blog.html;
      this.title = blog.title;
      this.img = blog.img;
    });
  },
});
</script>
