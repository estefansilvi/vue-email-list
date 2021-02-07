new Vue({
  el: '#root',
  data: {
    elencoMail : [],
  },
  mounted() {
    const self = this;
    for (var i = 0; i < 10; i++) {
      axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(response) {
        self.elencoMail.push(response.data.response);
      });
    }
  }

})
Vue.config.devtools = true
