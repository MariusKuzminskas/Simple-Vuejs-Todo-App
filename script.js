var app = new Vue({
	el: "#app",
	data: {
		todo: "add new todo",
		todosArr: [],
		classTest: true
	},
	methods: {
		addToDoHandler: function(textInput) {
			console.log(textInput);
			this.todosArr.push({ text: textInput, checked: false });
		},
		selected: function(index) {
			// itemState === false ? (itemState = false) : (itemState = true);
			if (this.todosArr[index].checked == false) {
				this.todosArr[index].checked = true;
			} else {
				this.todosArr[index].checked = false;
			}
			// console.log("item state after: ", this.todosArr[index].checked);
		},
		deleteMe: function(index) {
			this.todosArr.splice(index, 1);
		}
	}
});
