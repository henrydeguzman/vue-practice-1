const app = Vue.createApp({
  data() {
    return {
         counter: 10,
         addNum: 5,
         name: '',
         confirmedName: ''
    };
  },
  methods: {
       confirmInput() {
            this.confirmedName = this.name
       },
       submitForm () {            
            alert('Submittted')
       },
       setName (event, lastName) {            
            this.name = event.target.value + ' ' + lastName
       },
       add(isPlus) {            
            isPlus ? this.counter += this.addNum  : this.counter -= this.addNum;
       }
  }
});

app.mount('#events');
