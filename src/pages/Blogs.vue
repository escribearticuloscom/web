<template>
  <q-page class="row">
    <div class="col-3" />
    <div id="text-area" class="col-6 q-mt-xl">
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
    };
  },
  async created() {
    await import(`../assets/json/${this.$route.params.id}`).then((blog) => {
      this.html = blog.html;
      this.title = blog.title;
    });
  },
});
</script>
