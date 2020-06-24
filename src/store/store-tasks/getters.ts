import { GetterTree } from "vuex";
import { StoreInterface } from "../index";
import { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StoreInterface> = {
  tasks: state => {
    return state.tasks;
  }
};

export default getters;
