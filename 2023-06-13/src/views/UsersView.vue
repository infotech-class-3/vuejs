<template>
  <div>
    <div class="about">
      <h1>Kullanicilar sayfasi</h1>
      <h3>Secilen kullanici: {{ secilenKullanici }}</h3>
    </div>

    <UserCard
      v-for="user in users"
      :key="user.id"
      :userData="user"
      v-bind:isActive="user.isActive"
      @butona-basma-eventi="changeUser"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "UsersView",
  components: {
    UserCard,
  },
  methods: {
    changeUser(isim) {
      this.$store.commit("setSelectedUser", isim);
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    secilenKullanici() {
      return this.$store.getters.getSelectedUser;
    },
  },
};
</script>
