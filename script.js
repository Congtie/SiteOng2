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
  
  setTimeout(function() {
    if (!document.getElementById('closeFormular230Button')) {
      const closeButton = document.createElement('button');
      closeButton.id = 'closeFormular230Button';
      closeButton.innerHTML = '✖';
      closeButton.style.position = 'fixed';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.zIndex = '10001';
      closeButton.style.backgroundColor = '#f44336';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '50%';
      closeButton.style.width = '40px';
      closeButton.style.height = '40px';
      closeButton.style.fontSize = '20px';
      closeButton.style.cursor = 'pointer';
      closeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
      
      closeButton.addEventListener('click', function() {
        const overlay = document.querySelector('div[style*="z-index"]');
        if (overlay) overlay.style.display = 'none';
        
        const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
        if (iframes.length > 0) {
          iframes.forEach(iframe => {
            iframe.style.display = 'none';
          });
        }
        
        this.style.display = 'none';
      });
      
      document.body.appendChild(closeButton);
    }
  }, 1000);
}
document.getElementById('tax-deduction-link').addEventListener('click', function(e) {
  e.preventDefault();
  openFormular230();
});
document.getElementById('tax-deduction-btn').addEventListener('click', function(e) {
  e.preventDefault();
  openFormular230();
});