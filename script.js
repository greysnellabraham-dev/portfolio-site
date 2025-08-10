// Simple JS for modal previews and form handling
document.addEventListener('DOMContentLoaded', function(){
  const projects = document.querySelectorAll('.project');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalLink = document.getElementById('modalLink');
  const modalClose = document.getElementById('modalClose');

  projects.forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img').src;
      const title = p.dataset.title || 'Proyecto';
      const desc = p.dataset.desc || '';
      modalImg.src = img;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalLink.href = '#';
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e)=> { if(e.target === modal) modal.setAttribute('aria-hidden','true') });

  // Contact form: open mailto with content (fallback)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent('Contacto desde portafolio: ' + name);
    const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:tucorreo@example.com?subject=' + subject + '&body=' + body;
  });
});
