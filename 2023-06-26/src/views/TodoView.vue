<template>
  <div>TODO SAYFASI</div>
</template>

<script>
export default {
  name: "TodoView",
  created() {
    this.$store.dispatch("todoStore/fetchTodos");
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeCreate() {
    console.log("before-create");
  },
  beforeMount() {
    console.log("before-mount");
  },
};
</script>

<style></style>
