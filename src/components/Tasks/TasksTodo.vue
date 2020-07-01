<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header bgColor="bg-orange-4" v-if="!settings.showTasksInOneList"
        >Todo</list-header
      >
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksTodo"
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
  props: ["tasksTodo"],
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