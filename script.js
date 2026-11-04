(() => {
 const root=document.documentElement,langButton=document.getElementById('langToggle'),menuButton=document.getElementById('menuToggle'),nav=document.getElementById('mainNav');let language='ar';
 function setLanguage(next){language=next;root.lang=next;root.dir=next==='ar'?'rtl':'ltr';document.querySelectorAll('[data-ar][data-en]').forEach(n=>{n.innerHTML=n.dataset[next]});langButton.textContent=next==='ar'?'EN':'عربي';langButton.setAttribute('aria-label',next==='ar'?'Switch to English':'التبديل إلى العربية');try{localStorage.setItem('alnoor-language',next)}catch(_){}}
 langButton.addEventListener('click',()=>setLanguage(language==='ar'?'en':'ar'));
 menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
 nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop())a.classList.add('active');a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'})});
 document.querySelectorAll('.bottom-nav a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop())a.classList.add('active')});
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 try{if(localStorage.getItem('alnoor-language')==='en')setLanguage('en')}catch(_){}
})();