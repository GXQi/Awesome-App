import Vue from "vue";
import { MutationTree } from "vuex";
import { ExampleStateInterface } from "./state";

const mutation: MutationTree<ExampleStateInterface> = {
  updateTask(state: any, payload: any): void {
    Object.assign(state.tasks[payload.id], payload.updates);
    // console.log(payload.completed);
  },
  deleteTask(state: any, id: any): void {
    // delete state.tasks[id];
    Vue.delete(state.tasks, id);
  },
  addTask(state: any, payload: any): void {
    console.log(payload.task);
    Vue.set(state.tasks, payload.id, payload.task);
  }
};

export default mutation;
