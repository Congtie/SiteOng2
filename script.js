document.addEventListener('DOMContentLoaded', function() {
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