<template>
  <div class="home">
    <div class="mt-16">Ana Sayfamiz</div>
    <v-btn @click="onClick">Todo List</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},

  methods: {
    onClick() {
      this.$router.push("/todo");
    },
  },
};
</script>
