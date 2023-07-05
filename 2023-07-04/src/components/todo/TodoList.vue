<template>
  <v-card class="mx-auto" width="400">
    <template v-slot:title> TODO List </template>

    <AddOrEditTodo @item-entered="handleCreate" />

    <v-divider class="mb-2" />

    <TodoItem
      v-for="item in todos"
      :key="item.id"
      :item="item"
      @item-edit="handleEdit"
      @item-delete="handleDelete"
      @item-complete="handleUpdate"
    />

    <div v-if="editItem.isEditMode">
      <v-divider class="mb-2" />
      <AddOrEditTodo
        :isEditMode="editItem.isEditMode"
        :item="editItem.itemToBeEdited"
        @item-edited="handleUpdate"
      />
    </div>
  </v-card>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddOrEditTodo from "./AddOrEditTodo.vue";

export default {
  components: {
    AddOrEditTodo,
    TodoItem,
  },
  data() {
    return {
      editItem: {
        isEditMode: false,
        itemToBeEdited: {},
      },
    };
  },
  computed: {
    todos() {
      return this.$store.getters["todoStore/getTodos"];
    },
  },
  methods: {
    handleEdit(item) {
      this.editItem.isEditMode = true;
      this.editItem.itemToBeEdited = item;
    },
    handleDelete(id) {
      this.$store.dispatch("todoStore/deleteTodo", id);
    },
    handleUpdate(updatedItem) {
      let data = updatedItem;
      if (!this.editItem.isEditMode) {
        data = { ...data, completed: !data.completed };
      }
      this.$store.dispatch("todoStore/updateTodo", data);
      this.editItem.isEditMode = false;
    },
    handleCreate(todoText) {
      this.$store.dispatch("todoStore/createTodo", todoText);
    },
  },
};
</script>

<style></style>
