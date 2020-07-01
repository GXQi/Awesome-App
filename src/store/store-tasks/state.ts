export interface ExampleStateInterface {
  tasks: any;
  search: string;
  sort: string;
}

const state: ExampleStateInterface = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2020/06/19",
      dueTime: "18:30"
    },
    ID2: {
      name: "Get bananas",
      completed: true,
      dueDate: "2020/06/19",
      dueTime: "18:30"
    },
    ID3: {
      name: "Get apples",
      completed: false,
      dueDate: "2020/06/19",
      dueTime: "18:31"
    }
  },
  search: "",
  sort: "dueDate"
};

export default state;
