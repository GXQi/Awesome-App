import Vue from "vue";
import { MutationTree } from "vuex";
import { ExampleStateInterface } from "./state";

const mutation: MutationTree<ExampleStateInterface> = {
  setShow12HourTimeFormat(state: any, value: boolean): void {
    state.settings.show12HourTimeFormat = value;
  },
  setShowTasksInOneList(state: any, value: boolean): void {
    state.settings.showTasksInOneList = value;
  },
  setSettings(state: any, settings: any): void {
    // state.settings = settings;
    Object.assign(state.settings, settings);
  }
};

export default mutation;
