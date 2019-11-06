// Uncomment if using ES2016 and running into
// issues
// require("@babel/polyfill");

// console.log('Hello From Site.js!')

// import lozad from 'lozad';
var lozad = require('lozad')

var observer = lozad('.lozad', {
    loaded: function(el) {
        el.classList.add('loaded');
    }
});
observer.observe();
