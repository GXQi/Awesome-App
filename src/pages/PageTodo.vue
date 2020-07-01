<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search></search>
        <sort></sort>
      </div>
      <p
        v-if="
          search &&
            !Object.keys(tasksTodo).length &&
            !Object.keys(tasksCompleted).length
        "
      >
        No Search results
      </p>
      <q-scroll-area class="q-scroll-area-tasks">
        <no-tasks
          v-if="
            !Object.keys(tasksTodo).length &&
              !search &&
              !settings.showTasksInOneList
          "
        ></no-tasks>
        <tasks-todo
          :tasksTodo="tasksTodo"
          v-if="Object.keys(tasksTodo).length"
        ></tasks-todo>
        <tasks-completed
          :tasksCompleted="tasksCompleted"
          v-if="Object.keys(tasksCompleted).length"
          class="q-mb-xl"
        ></tasks-completed>
      </q-scroll-area>
      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          round
          color="primary"
          size="24px"
          icon="add"
          @click="showAddTask = true"
          class="all-pointer-events"
        />
      </div>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import AddTask from "components/Tasks/Modals/AddTask.vue";
import TasksTodo from "components/Tasks/TasksTodo.vue";
import TasksCompleted from "components/Tasks/TasksCompleted.vue";
import NoTasks from "components/Tasks/NoTasks.vue";
import Search from "components/Tasks/Tools/Search.vue";
import Sort from "components/Tasks/Tools/Sort.vue";

export default Vue.extend({
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search"])
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    Search,
    Sort
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
});
</script>

<style lang="stylus" scoped>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
