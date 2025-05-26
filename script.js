document.addEventListener('DOMContentLoaded', function() {
  // Funcționalitate pentru ascunderea header-ului la scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  const scrollThreshold = 100; // Numărul de pixeli scrollați înainte de a ascunde header-ul
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Verificăm dacă am scrollat suficient pentru a activa comportamentul
    if (currentScroll > scrollThreshold) {
      // Scrollăm în jos - ascundem header-ul
      if (currentScroll > lastScrollTop) {
        header.style.top = `-${header.offsetHeight}px`;
      } 
      // Scrollăm în sus - afișăm header-ul
      else {
        header.style.top = '0';
      }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pentru browsere mobile
  });

  // Obținem referințe către butoanele de redirecționare a impozitului
  const taxButtons = document.querySelectorAll('#tax-deduction-link, #tax-deduction-btn');
 
  // Adăugăm evenimentul de click pe butoane
  taxButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', function() {
        // Încărcăm scriptul și afișăm mesajul într-o singură funcție
        const scriptElement = document.createElement('script');
        scriptElement.src = "https://formular230.ro/share/7d2614d2f60";
        document.body.appendChild(scriptElement);
        
        alert("Se încarcă formularul pentru redirecționarea a 3,5% din impozit. Vă mulțumim pentru sprijin!");
        
        // Aplicăm stilurile pentru iframe după încărcare
        handleFormStyles();
      });
    }
  });
  
  // Gestionare formular de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nume = document.getElementById('nume').value;
      const email = document.getElementById('email').value;
      const subiect = document.getElementById('subiect').value;
      const mesaj = document.getElementById('mesaj').value;
      
      // Creăm un mailto link
      const subject = encodeURIComponent(subiect);
      const body = encodeURIComponent(`Nume: ${nume}\nEmail: ${email}\n\nMesaj:\n${mesaj}`);
      const mailtoLink = `mailto:asociatiaadept@yahoo.com?subject=${subject}&body=${body}`;
      
      // Deschidem clientul de email
      window.location.href = mailtoLink;
      
      // Mesaj de confirmare
      alert('Se deschide clientul de email pentru a trimite mesajul.');
    });
  }
  
  // Funcție pentru a gestiona stilurile formularului
  function handleFormStyles() {
    // Verificăm periodic dacă iframe-ul a fost adăugat
    const checkInterval = setInterval(function() {
      const iframes = document.querySelectorAll('iframe[src*="formular230.ro"]');
      
      if (iframes.length > 0) {
        iframes.forEach(function(iframe) {
          // Aplicăm stiluri pentru iframe
          iframe.style.width = '100%';
          iframe.style.height = '90vh';
          
          // Căutăm container-ul modal și aplicăm stiluri
          let modalContainer = iframe.closest('.modal-content');
          if (modalContainer) {
            modalContainer.style.width = '90%';
            modalContainer.style.maxWidth = '90%';
          }
        });
        
        clearInterval(checkInterval);
      }
    }, 500);
    
    // Oprim verificarea după 5 secunde
    setTimeout(() => clearInterval(checkInterval), 5000);
  }
});