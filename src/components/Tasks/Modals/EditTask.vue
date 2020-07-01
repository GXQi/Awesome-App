<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
        <modal-due-time
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"
        />
      </q-card-section>
      <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixinsAddEditTask from "src/mixins/mixin-add-edit-task.js";

export default {
  props: ["task", "id"],
  mixins: [mixinsAddEditTask],
  data() {
    return {
      taskToSubmit: {
        // name: "",
        // dueDate: "",
        // dueTime: "",
        // completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({ id: this.id, updates: this.taskToSubmit });
      this.$emit("close");
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>
