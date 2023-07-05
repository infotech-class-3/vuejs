<template>
  <v-card-text class="pt-0 pb-0 mb-2">
    <div class="d-flex justify-space-between todo-item pa-2">
      <div
        class="button-icon"
        @click="onCompleted"
        :class="item.completed ? 'text-decoration-line-through' : ''"
      >
        {{ item.todo }}
      </div>
      <div>
        <v-icon class="button-icon" @click="onEdit"
          >mdi-note-edit-outline</v-icon
        >
        <v-icon class="button-icon" @click="onDelete">mdi-trash-can</v-icon>
      </div>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onEdit() {
      this.$emit("item-edit", this.item);
      // dumb component
      // stupid component
    },
    onDelete() {
      this.$emit("item-delete", this.item._id);
    },
    onCompleted() {
      this.$emit("item-complete", this.item);
    },
  },
};
</script>

<style>
.todo-item {
  border: 1px solid rgb(60, 159, 149);
  border-radius: 5px;
  box-shadow: 1px 1px rgb(60, 159, 149);
}

.button-icon {
  cursor: pointer;
}
</style>
