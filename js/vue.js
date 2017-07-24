new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'pizza-man',
    website: 'http://www.google.com'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' +this.name;
    }
  }

});
