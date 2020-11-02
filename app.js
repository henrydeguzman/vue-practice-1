const app = Vue.createApp({
     data () {
          return {
               name: 'Henry G. De Guzman',
               birthday: new Date(1992, 11, 08),
               imageUrl: 'https://asia.olympus-imaging.com/content/000107506.jpg',
               textValue: 'This is my value from js'
          }
     },
     methods: {
          getAge (isTrue) {
               return isTrue ? this.calculate_age(this.birthday.setFullYear(this.birthday.getFullYear() - 5) ) : this.calculate_age( this.birthday )
          },
          calculate_age (age) {
               var diff_ms = Date.now() - age;
               var age_dt = new Date(diff_ms);               
               return Math.abs(age_dt.getUTCFullYear() - 1970);
          },
          randomNum () {
               return Math.floor(Math.random() * 11);
          }
     }
})
app.mount('#assignment')