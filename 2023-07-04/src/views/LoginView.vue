<template>
  <div row wrap align-center align-content-center justify-content-center>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
