// Uncomment if using ES2016 and running into
// issues
// require("@babel/polyfill");

// console.log('Hello From Site.js!')

// import lozad from 'lozad';

import lozad from 'lozad';

/**
 * Class representing lazy load behavior, based on lozad library
 * @class LazyLoad
 */
class LazyLoad {
  /**
   *Creates an instance of LazyLoad.
   * @param {object} [customOptions={}]
   * @memberof LazyLoad
   */
  constructor(customOptions = {}) {
    // Set default options
    this.options = {...{selector: '.-lazyLoad', rootMargin: '0px 0px 200px 0px', threshold: 0, fadeIn: true}, ...customOptions};

    // add a listener on fully loaded <img>
    // to make a better fadeIn with CSS
    if (this.options.fadeIn) {
      const images = document.getElementsByClassName('-lazyLoad');
      for (const image of images) {
        if (image.getAttribute('data-src')) {
          image.onload = function() {
            this.setAttribute('data-fully-loaded', true);
          };
        }
      }
    }

    // Initialize lozad library
    this.engine = lozad(this.options.selector, this.options);
    this.refresh();
  }

  /**
   * Refresh Lazy Load to include new DOM elements insertion
   * after initial loading page
   * @memberof LazyLoad
   */
  refresh() {
    this.engine.observe();
  }
}

export {LazyLoad};

// var lozad = require('lozad')

var observer = lozad('.lozad', {
    loaded: function(el) {
        el.classList.add('loaded');
    },
    rootMargin: '100px 0px',
    threshold: 0.1
});
observer.observe();


// transition in selected elements

const animObserverConfig = {
  rootMargin: '100px 0',
  threshold: [0.5, 0]
};

const contentObjects = document.querySelectorAll('.anim-in');
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animated');
    } else {
      entry.target.classList.remove('animated');
    }
  }, animObserverConfig);
});

contentObjects.forEach(contentObject => {
  observer.observe(contentObject);
});