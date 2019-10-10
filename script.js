var app = new Vue({
  el: "#app",
  data: {
    todo: "",
    todosArr: [],
    mainIndex: 0
  },
  methods: {
    addToDoHandler: function(textInput) {
      console.log(textInput);
      this.todosArr.push({
        id: this.mainIndex,
        text: textInput,
        checked: false
      });
      this.mainIndex++;
      this.todo = "";
    },
    deleteMe: function(index) {
      this.todosArr.splice(index, 1);
    }
  }
});
