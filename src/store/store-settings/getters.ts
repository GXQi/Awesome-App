import { GetterTree } from "vuex";
import { StoreInterface } from "../index";
import { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StoreInterface> = {
  settings: state => {
    return state.settings;
  }
};

export default getters;
