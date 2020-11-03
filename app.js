const app = Vue.createApp({
	data() {
		return {
               enteredValue: '',
               goals: []
          };
     },
     computed: {          
     },
	methods: {
          remove(idx) {
               console.log(idx)
               this.goals.splice(idx, 1);
          },
          addGoal () {
               this.goals.push({
                    name: this.enteredValue
               })
          },
          sm () {
               console.log('sm')
          }
     }
});

app.mount("#user-goals");
