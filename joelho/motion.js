'use strict';
// Animações ligadas à rolagem. Não altera dados nem a lógica do app.
(()=>{
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const main=document.querySelector('main');if(!main)return;
 const targets='.hero,.days,.progress-panel,.exercise,.plan-card,.history-card,.metric-row>div,.profile-card,.section-heading,.banner';
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
 let lastKey='';
 function decorate(){
  const hero=main.querySelector('.hero');
  if(hero&&!hero.querySelector('.orb'))hero.insertAdjacentHTML('afterbegin','<i class="orb o1" data-s=".16"></i><i class="orb o2" data-s="-.1"></i><i class="orb o3" data-s=".26"></i>');
  if(hero&&!main.querySelector('.ribbon'))hero.insertAdjacentHTML('afterend','<div class="ribbon" aria-hidden="true"><span>TREINA ✦ EVOLUI ✦ REPETE ✦ TREINA ✦ EVOLUI ✦ REPETE ✦ TREINA ✦ EVOLUI ✦ REPETE ✦ TREINA ✦ EVOLUI ✦ REPETE ✦</span></div>');
 }
 function prep(){
  decorate();
  let key;try{key=tab+'|'+selected+'|'+viewedDay;}catch{key='x';}
  const fresh=key!==lastKey;lastKey=key;
  main.querySelectorAll(targets).forEach((el,i)=>{
   if(el.classList.contains('rv'))return;
   el.classList.add('rv');
   if(fresh){el.style.setProperty('--d',Math.min(i,7)*70+'ms');io.observe(el);}else el.classList.add('in');
  });
  onScroll();
 }
 let ticking=false;
 function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;const y=scrollY;
  document.querySelector('.topbar')?.classList.toggle('scrolled',y>12);
  const h=main.querySelector('.hero');
  if(h){h.style.setProperty('--py',(y*.2).toFixed(1)+'px');h.style.setProperty('--fade',Math.max(0,1-y/520).toFixed(3));h.querySelectorAll('.orb').forEach(o=>{o.style.transform=`translate3d(0,${(-y*o.dataset.s).toFixed(1)}px,0)`;});}
  const r=main.querySelector('.ribbon span');if(r)r.style.transform=`translate3d(${(-y*.7).toFixed(1)}px,0,0)`;
 });}
 new MutationObserver(prep).observe(main,{childList:true,subtree:true});
 addEventListener('scroll',onScroll,{passive:true});prep();
})();
