<template>
  <q-select
    outlined
    v-model="sortBy"
    :options="options"
    label="Sort by"
    stack-label
    emit-value
    map-options
    class="q-ml-sm"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Date",
          value: "dueDate"
        }
      ]
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSort"])
  }
};
</script>

<style lang="stylus" scoped>
.q-select {
  width: 112px;
}
</style>