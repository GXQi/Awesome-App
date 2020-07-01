<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      ></q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row items-center">
        <q-icon name="event" size="18px" class="q-mr-xs"></q-icon>
        <div class="column">
          <q-item-label caption class="row justify-end">{{
            task.dueDate | niceDate
          }}</q-item-label>
          <q-item-label caption class="row justify-end">{{
            taskDueTime
          }}</q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click.stop="showEditTaskModal"
        />
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptToDelete(id)"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task
        @close="showEditTask = false"
        :task="task"
        :id="id"
      ></edit-task>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { date } from "quasar";
import EditTask from "components/Tasks/Modals/EditTask.vue";

export default {
  props: ["task", "id"],
  components: {
    EditTask
  },
  data() {
    return {
      confirm: false,
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    showEditTaskModal() {
      this.showEditTask = true;
    }
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        // return this.task.dueTime + "(๑•̀ㅂ•́)و✧";
        // 2020/07/01 15:00
        return date.formatDate(
          this.task.dueDate + " " + this.task.dueTime,
          "h:mmA"
        );
      }
      return this.task.dueTime;
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM D");
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, "ig");
        return value.replace(searchRegExp, match => {
          return '<span class="bg-yellow-6">' + match + "</span>";
        });
      }
      return value;
    }
  }
};
</script>

<style lang="stylus" scoped>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
