
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.price-row button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const old=btn.textContent;
    btn.textContent='Added ✓';
    setTimeout(()=>btn.textContent=old,1400);
  });
});

document.getElementById('sendBtn').addEventListener('click',()=>{
  document.getElementById('formNote').textContent =
  'Thanks! This demo form is ready to connect to your real email, WhatsApp, Shopify, Stripe, PayPal or CRM.';
});
