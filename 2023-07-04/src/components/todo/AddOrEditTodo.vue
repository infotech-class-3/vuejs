<template>
  <v-card-text>
    <v-text-field
      v-if="!isEditMode"
      v-model="todoText"
      density="compact"
      label="Add Todo"
      @keydown.enter="onKeyDown"
    ></v-text-field>

    <v-text-field
      v-else
      v-model="updateTodo.todo"
      density="compact"
      label="Edit Todo"
      focused
      @keydown.enter="onEditKeyDown"
    ></v-text-field>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
      updateTodo: {},
    };
  },
  props: {
    isEditMode: {
      type: Boolean,
    },
    item: {
      type: Object,
    },
  },
  methods: {
    onKeyDown() {
      this.$emit("item-entered", this.todoText);
      this.todoText = "";
    },
    onEditKeyDown() {
      this.$emit("item-edited", this.updateTodo);
    },
  },
  mounted() {
    if (this.item?._id) {
      this.updateTodo = { ...this.item };
    }
  },
};
</script>

<style></style>
