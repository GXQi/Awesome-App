import { ActionTree } from "vuex";
import { StoreInterface } from "../index";
import { ExampleStateInterface } from "./state";
import { uid } from "quasar";

const actions: ActionTree<ExampleStateInterface, StoreInterface> = {
  updateTask({ commit }, payload: any): void {
    // console.log("payload: ", payload);
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    console.log(payload);
    commit("addTask", payload);
  }
};

export default actions;
