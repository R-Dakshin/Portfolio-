// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouch) {
    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');
  const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;

  cards.forEach(card => {
    // Build chips
    const panel = card.querySelector('.skill-panel');
    const items = (card.dataset.items || '').split(',').map(t => t.trim()).filter(Boolean);
    panel.innerHTML = items.map(t => `
      <span class="chip"><i class="fa fa-check-circle"></i>${t}</span>
    `).join('');

    // Flip if near bottom on hover/enter
    const ensurePosition = () => {
      card.classList.remove('flip');
      const rect = panel.getBoundingClientRect();
      const overflowBottom = rect.bottom > (window.innerHeight - 16);
      if (overflowBottom) card.classList.add('flip');
    };

    card.addEventListener('mouseenter', ensurePosition);
    window.addEventListener('scroll', () => {
      if (!isTouch && card.matches(':hover')) ensurePosition();
    }, { passive: true });

    // Touch: toggle open/close
    if (isTouch) {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });

      document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) {
    console.warn('No .skill-card found. Check HTML section IDs and class names.');
    return;
  }
  const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;

  cards.forEach(card => {
    const panel = card.querySelector('.skill-panel');
    if (!panel) {
      console.warn('Missing .skill-panel inside a .skill-card', card);
      return;
    }
    const items = (card.dataset.items || '').split(',').map(t => t.trim()).filter(Boolean);
    if (!items.length) {
      console.warn('No data-items on card, nothing to render', card);
    }
    panel.innerHTML = items.map(t => `<span class="chip"><i class="fa fa-check-circle"></i>${t}</span>`).join('');

    const ensurePosition = () => {
      card.classList.remove('flip');
      const rect = panel.getBoundingClientRect();
      const overflowBottom = rect.bottom > (window.innerHeight - 16);
      if (overflowBottom) card.classList.add('flip');
    };
    card.addEventListener('mouseenter', ensurePosition);
    window.addEventListener('scroll', () => { if (!isTouch && card.matches(':hover')) ensurePosition(); }, { passive: true });

    if (isTouch) card.addEventListener('click', () => card.classList.toggle('active'));
  });
});

    }
  });
});

