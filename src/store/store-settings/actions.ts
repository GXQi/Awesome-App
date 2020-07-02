import { ActionTree } from "vuex";
import { LocalStorage } from "quasar";
import { StoreInterface } from "../index";
import { ExampleStateInterface } from "./state";

const actions: ActionTree<ExampleStateInterface, StoreInterface> = {
  setShow12HourTimeFormat({ commit, dispatch }, value: boolean) {
    commit("setShow12HourTimeFormat", value);
    dispatch("saveSettings");
  },
  setShowTasksInOneList({ commit, dispatch }, value: boolean) {
    commit("setShowTasksInOneList", value);
    dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
  }
};

export default actions;
