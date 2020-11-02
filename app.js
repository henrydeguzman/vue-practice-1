const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
       add(isPlus) {            
            isPlus ? this.counter++ : this.counter--;
       }
  }
});

app.mount('#events');
