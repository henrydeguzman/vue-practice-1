const app = Vue.createApp({
	data() {
		return {
			output: "",
			output2: "",
		};
	},
	methods: {
		setOutput(e) {
			this.output = e.target.value;
		},
		setOutput2(e) {
			this.output2 = e.target.value;
		},
		submitButton() {
			alert("This is an alert message!");
		},
	},
}).mount("#assignment");