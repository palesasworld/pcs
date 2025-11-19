// script.js - theme toggle and small helpers
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('themeToggle');
  const body = document.body;
  // init from localStorage
  const saved = localStorage.getItem('pcs_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if(saved === 'dark') body.classList.add('dark');
  // set button state
  const setBtn = ()=>{ if(body.classList.contains('dark')) btn.innerHTML='☀️'; else btn.innerHTML='🌙'; }
  setBtn();
  btn.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    localStorage.setItem('pcs_theme', body.classList.contains('dark') ? 'dark' : 'light');
    setBtn();
  });
});