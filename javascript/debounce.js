function debounce(callback, delay, immediate = false) {
    let timer;
    return function (...args) {
      
      if(immediate && !timer) {
        callback.call(this, ...args);
      }
      
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        if(!immediate) {
          callback.call(this, ...args);
        }
        timer = null;
      }, delay);
    }
  }
  
  // Do not edit the line below.
  exports.debounce = debounce;

  const debounced = debounce(console.log, 3000);
  document.addEventListener('keypress', () => debounce(new Date()));