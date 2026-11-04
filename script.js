(() => {
  const root = document.documentElement;
  const langButton = document.getElementById('langToggle');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  let language = 'ar';

  function setLanguage(next) {
    language = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-ar][data-en]').forEach((node) => {
      node.innerHTML = node.dataset[next];
    });
    langButton.textContent = next === 'ar' ? 'EN' : 'عربي';
    langButton.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = next === 'ar'
      ? 'جمهورية النور الشعبية | People's Republic of Al-Noor'
      : "People's Republic of Al-Noor | جمهورية النور الشعبية";
    try { localStorage.setItem('alnoor-language', next); } catch (_) {}
  }

  langButton.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  try {
    const saved = localStorage.getItem('alnoor-language');
    if (saved === 'en') setLanguage('en');
  } catch (_) {}
})();