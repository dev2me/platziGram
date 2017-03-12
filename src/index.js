var page = require('page');

var main = document.getElementById('main-container');

page('/', (ctx, nxt) => {
  // home 
 // main.innerHTML = "Home";
})

page('/signup', (ctx, nxt) => {
 main.innerHTML = "sesion";
})


page();