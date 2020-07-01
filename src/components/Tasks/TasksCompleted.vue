<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div :class="{ 'q-mt-lg': !settings.showTasksInOneList }">
      <list-header bgColor="bg-green-4" v-if="!settings.showTasksInOneList"
        >Completed</list-header
      >
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "components/Tasks/Tasks.vue";
import ListHeader from "components/Tasks/Modals/ListHeader.vue";
export default {
  props: ["tasksCompleted"],
  components: {
    Task,
    ListHeader
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style>
</style>