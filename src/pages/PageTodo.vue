<template>
  <q-page padding class="q-pa-md">
    <q-list separator bordered v-if="Object.keys(tasks).length">
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Task from "components/Tasks/Tasks.vue";
import AddTask from "components/Tasks/Models/AddTask.vue";

export default Vue.extend({
  name: "PageIndex",
  data() {
    return {
      showAddTask: true
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    Task,
    AddTask
  }
});
</script>

<style lang="stylus" scoped>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
