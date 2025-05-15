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
              const overlay = document.querySelector('div[style*="z-index"]');
              if (overlay) {
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.maxWidth = '100%';
                overlay.style.maxHeight = '100%';
                overlay.style.zIndex = '9999';
                overlay.style.background = 'rgba(0,0,0,0.7)';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.overflow = 'hidden';
              }
              const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
              if (iframes.length > 0) {
                iframes.forEach(iframe => {
                  iframe.style.width = '100%';
                  iframe.style.height = '100%';
                  iframe.style.maxWidth = '100%';
                  iframe.style.maxHeight = '100%';
                  iframe.style.position = 'fixed';
                  iframe.style.top = '0';
                  iframe.style.left = '0';
                  iframe.style.display = 'block';
                  iframe.style.margin = '0';
                  iframe.style.padding = '0';
                  iframe.style.background = '#fff';
                  iframe.style.border = 'none';
                  iframe.style.zIndex = '10000';
                });
              }
            }, 600);
          } catch(e) {
            console.error('Eroare la deschiderea formularului:', e);
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
        const overlay = document.querySelector('div[style*="z-index"]');
        if (overlay) {
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.maxWidth = '100%';
          overlay.style.maxHeight = '100%';
          overlay.style.zIndex = '9999';
          overlay.style.background = 'rgba(0,0,0,0.7)';
          overlay.style.display = 'flex';
          overlay.style.alignItems = 'center';
          overlay.style.justifyContent = 'center';
          overlay.style.overflow = 'hidden';
        }
        const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
        if (iframes.length > 0) {
          iframes.forEach(iframe => {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.maxWidth = '100%';
            iframe.style.maxHeight = '100%';
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.display = 'block';
            iframe.style.margin = '0';
            iframe.style.padding = '0';
            iframe.style.background = '#fff';
            iframe.style.border = 'none';
            iframe.style.zIndex = '10000';
          });
        }
      }, 600);
    } catch(e) {
      console.error('Eroare la deschiderea formularului:', e);
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