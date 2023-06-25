<template>
  <div class="home">
    <AppBar :userProp="user" />
    <div class="mt-16">Ana Sayfamiz</div>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "HomeView",
  components: {
    AppBar,
  },
  computed: {
    user() {
      const user = this.$store.getters.getUser;
      return { name: user.name || "", surname: user.surname || "" };
    },
  },
  mounted() {
    console.log("mounted calisti");
    const user = this.$store.getters.getUser;
    if (!user.id) {
      this.$router.push("/login");
    }
  },
};
</script>
