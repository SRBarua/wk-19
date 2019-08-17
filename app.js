//vue object
var app = new Vue ({
    el: '#app',
    data:{
        name: 'James'
    },
    methods: {
        hello: function (event) {
            // `this` inside methods point to the Vue instance
            alert ('Hello ' + this.name + '!')
        }
    }
})
