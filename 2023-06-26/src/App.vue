<template>
  <AppBar :userProp="user" v-if="user.id" class="mb-16" />
  <router-view />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "AppView",
  components: {
    AppBar,
  },
  computed: {
    user() {
      const user = this.$store.getters["userStore/getUser"];
      return {
        name: user.name || "",
        surname: user.surname || "",
        id: user.id,
      };
    },
  },
  created() {
    const user = this.$store.getters["userStore/getUser"];
    if (!user.id) {
      this.$router.push("/login");
    }

    this.$store.dispatch("userStore/checkMe");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
