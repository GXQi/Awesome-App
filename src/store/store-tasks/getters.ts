import { GetterTree } from "vuex";
import { StoreInterface } from "../index";
import { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StoreInterface> = {
  tasksFiltered: (state, getters) => {
    let tasksFiltered: any = {},
      tasksSorted = getters.tasksSorted;
    if (state.search) {
      Object.keys(tasksSorted).forEach(function(key: any): any {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered: any = getters.tasksFiltered;
    let tasks: any = {};
    Object.keys(tasksFiltered).forEach(function(key: any): any {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered: any = getters.tasksFiltered;
    let tasks: any = {};
    Object.keys(tasksFiltered).forEach(function(key: any): any {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksSorted: state => {
    let tasksSorted: any = {},
      keysOrdered = Object.keys(state.tasks);
    keysOrdered.sort((a: string, b: string): number => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase();
      if (taskAProp > taskBProp) return 1;
      else if (taskBProp > taskAProp) return -1;
      else return 0;
    });
    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key];
    });
    return tasksSorted;
  }
};

export default getters;
