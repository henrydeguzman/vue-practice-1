const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			addNum: 5,
			name: "",
			confirmedName: "",
		};
	},
	computed: {
		fullname() {
			console.log("Running again...");
			if (this.name === "") {
				return "";
               }
               return this.name + ' ' + 'De Guzman'
		},
	},
	methods: {
		outputFullName() {
			console.log("Running again...");
			if (this.name === "") {
				return "";
			}
		},
		resetInput() {
			this.name = "";
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		setName(event, lastName) {
			this.name = event.target.value + " " + lastName;
		},
		add(isPlus) {
			isPlus ? (this.counter += this.addNum) : (this.counter -= this.addNum);
		},
	},
});

app.mount("#events");
