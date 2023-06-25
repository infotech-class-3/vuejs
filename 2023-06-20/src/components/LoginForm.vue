<template>
  <v-sheet width="300" class="mx-auto mt-10">
    <v-form fast-fail>
      <v-text-field
        density="compact"
        v-model="userData.username"
        label="Username"
      ></v-text-field>

      <v-text-field
        density="compact"
        v-model="userData.password"
        label="Password"
      ></v-text-field>

      <v-btn block class="mt-2" @click="handleLogin">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", this.userData);
    },
  },
};
</script>

<style></style>
