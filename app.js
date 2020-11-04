const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			//  this.message = this.currentUserInput;
			this.message = this.$refs.userText.value;
			// console.log(this.$refs.userText)
		},
	},
	beforeCreate() {
		console.log("beforeCreate");
	},
	created() {
		console.log("created()");
	},
	beforeMount() {
		console.log("BeforeMount()");
	},
	mounted() {
		console.log("mounted()");
	},
	beforeUpdate() {
		console.log("beforeUpdated()");
	},
	updated() {
		console.log("updated()");
	},
	beforeUnmount() {
          console.log('beforeUnmount()')
     },
	unmount() {
          console.log('unmount()')
     },
});

// setTimeout(function () {
//      app.unmount()
// }, 3000)

app.mount("#app");
