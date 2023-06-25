<template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title
          >{{ userProp.name }} {{ userProp.surname }}</v-app-bar-title
        >

        <template v-slot:append>
          <v-btn class="mr-8" @click="handleLogout"> logout </v-btn>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    userProp: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleLogout() {
      this.$store.commit("setUser", {});
    },
  },
};
</script>

<style></style>
