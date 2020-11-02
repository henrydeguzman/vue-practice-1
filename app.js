const app = Vue.createApp({
     data () {
          return {
               courseGoal: 'Finish the course and learn Vue!',
               vueLink: 'https://vuejs.org/'
          }
     },
     methods : {
          // Needs to be a function
          outputGoal () {
               const randomRnumber = Math.random();
               if (randomRnumber < 0.5) {
                    return 'Learn Vue!'
               } else {
                    return 'Master Vue!'
               }
          }
     }
})

app.mount('#user-goal');