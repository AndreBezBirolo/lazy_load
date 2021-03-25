  function lazyLoadImg() {
    if ("IntersectionObserver" in window) {
      let lazyImages = Array.prototype.slice.call(document.querySelectorAll("img.lazy"));
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      let lazyImages = document.querySelectorAll('img.lazy');
      // Debounce do Lodash
      const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
          const context = this;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
      function isVisible(elem) {
        let coords = elem.getBoundingClientRect();
        let windowHeight = document.documentElement.clientHeight;
        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
        return topVisible || bottomVisible;
      }
      function showVisible() {
        for (let img of lazyImages) {
          let realSrc = img.dataset.src;
          if (!realSrc) continue;
          if (isVisible(img)) {
            realSrc += '?nocache=' + Math.random();
            img.src = realSrc;
            img.dataset.src = '';
          }
        }
      }
      window.addEventListener('scroll', debounce(showVisible), 200);
      showVisible();
    }
  }
  lazyLoadImg();
