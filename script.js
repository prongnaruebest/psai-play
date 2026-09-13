const langButton=document.querySelector('.lang');
let language='th';
langButton.addEventListener('click',()=>{language=language==='th'?'en':'th';document.documentElement.lang=language;document.querySelectorAll('[data-th]').forEach(el=>el.textContent=el.dataset[language]);langButton.textContent=language==='th'?'TH / EN':'EN / TH'});
const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.menu');
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
