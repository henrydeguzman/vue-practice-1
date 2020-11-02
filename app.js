const app = Vue.createApp({
     data () {
          return {
               courseGoalA: 'Finish the course and learn Vue!',
               courseGoalB: '<h2>Master vue course app!</h2>',
               vueLink: 'https://vuejs.org/'
          }
     },
     methods : {
          // Needs to be a function
          outputGoal () {
               const randomRnumber = Math.random();
               if (randomRnumber < 0.5) {
                    return this.courseGoalA
               } else {
                    return this.courseGoalB
               }
          }
     }
})

app.mount('#user-goal');