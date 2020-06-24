<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name :name.sync="taskToSubmit.name" />
        <div class="row q-mb-sm">
          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="taskToSubmit.dueDate"
            label="Due date"
            class="col"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="taskToSubmit.dueDate"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="taskToSubmit.dueTime"
            label="Due time"
            class="col"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
      <pre>{{ taskToSubmit }}</pre>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalHeader from "../Models/Shared/ModalHeader";
import ModalTaskName from "../Models/Shared/ModalTaskName";

export default {
  components: {
    ModalHeader,
    ModalTaskName
  },
  data() {
    return {
      taskToSubmit: {
        name: "12",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      // console.log(this.$refs.name.validate());
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    }
  }
};
</script>