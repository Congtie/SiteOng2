const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navList = document.getElementById('nav-list');
mobileMenuIcon.addEventListener('click', function() {
  if(navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
    navList.style.flexDirection = "column";
  }
});
const navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if(window.innerWidth <= 768) {
      navList.style.display = "none";
    }
  });
});
function openFormular230() {
  if (typeof FORMular230 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://formular230.ro/share/7d2614d2f60';
    script.onload = function() {
      setTimeout(function() {
        if (typeof FORMular230 !== 'undefined') {
          try {
            FORMular230.open();
            setTimeout(function() {
              const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
              if (iframes.length > 0) {
                iframes.forEach(iframe => {
                  iframe.style.position = 'fixed';
                  iframe.style.top = '0';
                  iframe.style.left = '0';
                  iframe.style.width = '100vw';
                  iframe.style.height = '100vh';
                  iframe.style.maxWidth = '100vw';
                  iframe.style.maxHeight = '100vh';
                  iframe.style.zIndex = '9999';
                  if (iframe.parentElement) {
                    iframe.parentElement.style.position = 'fixed';
                    iframe.parentElement.style.top = '0';
                    iframe.parentElement.style.left = '0';
                    iframe.parentElement.style.width = '100vw';
                    iframe.parentElement.style.height = '100vh';
                    iframe.parentElement.style.maxWidth = '100vw';
                    iframe.parentElement.style.maxHeight = '100vh';
                    iframe.parentElement.style.zIndex = '9999';
                  }
                });
              }
            }, 500);
          } catch(e) {
            FORMular230.open();
          }
        }
      }, 500);
    };
    document.head.appendChild(script);
  } else {
    try {
      FORMular230.open();
      setTimeout(function() {
        const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
        if (iframes.length > 0) {
          iframes.forEach(iframe => {
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100vw';
            iframe.style.height = '100vh';
            iframe.style.maxWidth = '100vw';
            iframe.style.maxHeight = '100vh';
            iframe.style.zIndex = '9999';
            if (iframe.parentElement) {
              iframe.parentElement.style.position = 'fixed';
              iframe.parentElement.style.top = '0';
              iframe.parentElement.style.left = '0';
              iframe.parentElement.style.width = '100vw';
              iframe.parentElement.style.height = '100vh';
              iframe.parentElement.style.maxWidth = '100vw';
              iframe.parentElement.style.maxHeight = '100vh';
              iframe.parentElement.style.zIndex = '9999';
            }
          });
        }
      }, 500);
    } catch(e) {
      FORMular230.open();
    }
  }
}
document.getElementById('tax-deduction-link').addEventListener('click', function(e) {
  e.preventDefault();
  openFormular230();
});
document.getElementById('tax-deduction-btn').addEventListener('click', function(e) {
  e.preventDefault();
  openFormular230();
});