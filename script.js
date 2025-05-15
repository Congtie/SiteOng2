// Mobile Menu Toggle
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

// Close mobile menu on link click
const navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if(window.innerWidth <= 768) {
      navList.style.display = "none";
    }
  });
});

// Funcție pentru încărcarea și deschiderea formularului 230
function openFormular230() {
  // Verificăm dacă scriptul este deja încărcat
  if (typeof FORMular230 === 'undefined') {
    // Creăm un element script
    const script = document.createElement('script');
    script.src = 'https://formular230.ro/share/7d2614d2f60';
    script.onload = function() {
      // După încărcarea scriptului, deschidem formularul
      setTimeout(function() {
        if (typeof FORMular230 !== 'undefined') {
          // Încercăm să setăm opțiuni pentru dimensiuni mai mari dacă API-ul le suportă
          try {
            FORMular230.open({
              width: '90%',
              height: '90%',
              maxWidth: '1000px',
              maxHeight: '800px'
            });
          } catch(e) {
            // Dacă nu funcționează cu opțiuni, deschidem normal
            FORMular230.open();
            
            // Așteptăm ca iframe-ul să fie adăugat în DOM și încercăm să-l redimensionăm
            setTimeout(function() {
              const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
              if (iframes.length > 0) {
                iframes.forEach(iframe => {
                  iframe.style.width = '90vw';
                  iframe.style.height = '90vh';
                  iframe.style.maxWidth = '1000px';
                  iframe.style.maxHeight = '800px';
                  
                  // Încercăm să obținem și containerul părinte
                  if (iframe.parentElement) {
                    iframe.parentElement.style.width = '90vw';
                    iframe.parentElement.style.height = '90vh';
                    iframe.parentElement.style.maxWidth = '1000px';
                    iframe.parentElement.style.maxHeight = '800px';
                  }
                });
              }
            }, 500);
          }
        }
      }, 500);
    };
    document.head.appendChild(script);
  } else {
    // Dacă scriptul este deja încărcat, doar deschidem formularul cu opțiuni de dimensiuni
    try {
      FORMular230.open({
        width: '90%',
        height: '90%',
        maxWidth: '1000px',
        maxHeight: '800px'
      });
    } catch(e) {
      // Dacă nu funcționează cu opțiuni, deschidem normal
      FORMular230.open();
      
      // Așteptăm ca iframe-ul să fie adăugat în DOM și încercăm să-l redimensionăm
      setTimeout(function() {
        const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
        if (iframes.length > 0) {
          iframes.forEach(iframe => {
            iframe.style.width = '90vw';
            iframe.style.height = '90vh';
            iframe.style.maxWidth = '1000px';
            iframe.style.maxHeight = '800px';
            
            // Încercăm să obținem și containerul părinte
            if (iframe.parentElement) {
              iframe.parentElement.style.width = '90vw';
              iframe.parentElement.style.height = '90vh';
              iframe.parentElement.style.maxWidth = '1000px';
              iframe.parentElement.style.maxHeight = '800px';
            }
          });
        }
      }, 500);
    }
  }
}