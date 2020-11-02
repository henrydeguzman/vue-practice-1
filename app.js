const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      addNum: 5
    };
  },
  methods: {
       add(isPlus) {            
            isPlus ? this.counter += this.addNum  : this.counter -= this.addNum;
       }
  }
});

app.mount('#events');
