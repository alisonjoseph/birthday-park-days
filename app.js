(() => {
'use strict';
const days=window.TRIP_DAYS, key='park-days-v1', validIds=new Set(days.flatMap(d=>d.sections.flatMap(s=>s.items.filter(i=>!i.unavailable).map(i=>i.id))));
let state={checked:[],day:'sun',times:{}}, hidden=false, timer, installPrompt;
const warning=document.querySelector('#save-warning');
try { const saved=JSON.parse(localStorage.getItem(key)||'null'); if(saved&&Array.isArray(saved.checked)){state.checked=saved.checked.filter(x=>validIds.has(x));if(saved.times&&typeof saved.times==='object')state.times=saved.times;if(days.some(d=>d.id===saved.day))state.day=saved.day;} else {const today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York'}).format(new Date());state.day=days.find(d=>d.date===today)?.id||'sun';} } catch { warning.hidden=false;warning.textContent='Saved progress could not be loaded. Checkmarks will work here, but may not survive closing this page.'; }
let checked=new Set(state.checked),times={};state.checked.forEach(id=>{if(Number.isFinite(state.times[id]))times[id]=state.times[id];});
function persist(){try{localStorage.setItem(key,JSON.stringify({checked:[...checked],day:state.day,times}));warning.hidden=true;return true;}catch{warning.hidden=false;warning.textContent='Your browser could not save progress. Keep this page open; checkmarks may be lost when you close it.';return false;}}
function toast(text){const el=document.querySelector('#save-status');el.textContent=text;el.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>el.classList.remove('visible'),1800);}
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function totals(){const day=days.find(d=>d.id===state.day),items=day.sections.flatMap(s=>s.items).filter(i=>!i.unavailable),done=items.filter(i=>checked.has(i.id)).length;document.querySelector('#day-progress').textContent=`${done} of ${items.length} checked off`;const p=document.querySelector('#progress');p.max=items.length;p.value=done;document.querySelector('#total-progress').textContent=`${checked.size} checked off`;document.querySelector('#all-done').hidden=done!==items.length;}
const FILTERS=[{id:'all',label:'All',test:()=>true},{id:'rides',label:'Rides',test:i=>i.kind==='ride'},{id:'food',label:'Food',test:i=>Boolean(i.food)},{id:'shows',label:'Shows',test:i=>Boolean(i.show)},{id:'express',label:'⚡ Express',test:i=>Boolean(i.express)}];
let activeFilter='all';
function renderFilters(){const bar=document.querySelector('#filters');bar.replaceChildren();FILTERS.forEach(f=>{const b=el('button','filter-chip',f.label);b.type='button';b.setAttribute('aria-pressed',String(activeFilter===f.id));b.onclick=()=>{activeFilter=f.id;render();};bar.append(b);});}
let resetArmed=null;document.addEventListener('click',e=>{const btn=e.target.closest&&e.target.closest('#reset-day');if(!btn)return;const day=days.find(d=>d.id===state.day);const ids=day.sections.flatMap(s=>s.items.map(i=>i.id));const n=ids.filter(id=>checked.has(id)).length;if(!n){toast('Nothing checked off yet');return;}if(resetArmed!==state.day){resetArmed=state.day;btn.classList.add('armed');btn.textContent=`Tap again to clear ${n} checkmark${n===1?'':'s'}`;clearTimeout(btn._t);btn._t=setTimeout(()=>{resetArmed=null;btn.classList.remove('armed');btn.textContent='Reset this day’s checkmarks';},4000);return;}clearTimeout(btn._t);resetArmed=null;btn.classList.remove('armed');btn.textContent='Reset this day’s checkmarks';ids.forEach(id=>{checked.delete(id);delete times[id];});persist();render();toast('Checkmarks cleared');});
(()=>{const sen=document.querySelector('#nav-sentinel'),nav=document.querySelector('.sticky-nav');if(sen&&nav&&'IntersectionObserver' in window)new IntersectionObserver(([e])=>(nav.classList.toggle('stuck',!e.isIntersecting),document.body.classList.toggle('nav-stuck',!e.isIntersecting)),{threshold:0}).observe(sen);})();
function render(){renderFilters();
 const day=days.find(d=>d.id===state.day),nav=document.querySelector('#days');nav.replaceChildren();
 days.forEach((d,i)=>{const b=el('button','day-button');b.type='button';b.setAttribute('aria-current',state.day===d.id?'date':'false');b.setAttribute('aria-label',`${d.short}, October ${Number(d.day)}: ${d.name}`);b.append(el('span','date',`${d.short} ${d.day}`),el('span','label',['Islands','Studios','Epic'][i]));b.onclick=()=>{state.day=d.id;persist();render();document.querySelector('#days').scrollIntoView({block:'start'});document.querySelectorAll('.day-button')[i].focus({preventScroll:true});};nav.append(b);});
 const head=document.querySelector('#park-heading');head.replaceChildren((()=>{const row=el('div','park-title');const txt=el('div','park-text');txt.append(el('p','eyebrow',`${day.id === 'sun'?'SUNDAY':day.id === 'mon'?'MONDAY':'TUESDAY'} · OCTOBER ${Number(day.day)}`),el('h2','',day.name));row.append(txt);const logos=el('div','park-logos');(day.logos||[]).forEach(l=>{const img=el('img','park-logo');img.src='./'+l.src;img.alt=l.alt;logos.append(img);});row.append(logos);return row;})());const hours=el('div','hours');hours.append(el('span','',day.hours),el('span','early',day.early==='None'?'No early admission':`Early entry ${day.early}`));if(day.hoursExtra)hours.prepend(el('span','',day.hoursExtra));head.append(hours);
 const list=document.querySelector('#checklist');list.replaceChildren();const pinNo=routeNumbers(day);
 day.sections.forEach((s,n)=>{const visible=s.items.filter(i=>(!hidden||!checked.has(i.id))&&FILTERS.find(f=>f.id===activeFilter).test(i));if(!visible.length)return;const section=el('section','section');const heading=el('div','section-title');heading.append(el('span','number',String(n+1).padStart(2,'0')));const names=el('div');names.append(el('p','time',s.time),el('h3','',s.name));heading.append(names);section.append(heading);const items=el('div','items');visible.forEach(i=>{const label=el('label','item'+(checked.has(i.id)?' done':'')+(i.food?' food food-'+i.food:'')+(i.kind==='ride'?' ride':'')+(i.show?' show':'')+(i.meet?' meet':'')+(i.maybe?' maybe':'')+(i.booked?' is-booked':''));const input=el('input');input.type='checkbox';input.checked=checked.has(i.id);input.disabled=Boolean(i.unavailable);input.id=i.id;const body=el('span','item-body'),title=el('span','item-title',i.title);title.id=i.id+'-label';input.setAttribute('aria-labelledby',title.id);if(i.booked){const bk=el('span','booked');const bl=i.bookedLabel??'✓ RES';if(bl)bk.append(el('span','booked-label',bl));bk.append(el('span','booked-time',i.booked));body.append(bk);}body.append(title);{const pn=pinNo.get(i.id);if(pn){const no=el('span','pin-no t-'+pinType(i),String(pn));no.setAttribute('aria-hidden','true');no.title='Stop '+pn+' on the map';title.prepend(no);}}if(i.est)body.append(el('span','item-est','⏱ '+i.est));if(i.description)body.append(el('span','item-description',i.description));if(i.note){const note=el('span','item-note',i.note);note.id=i.id+'-note';input.setAttribute('aria-describedby',note.id);body.append(note);}if(i.meet)body.append(el('span','tag meet-tag','CHARACTER MEET-UP'));if(i.show)body.append(el('span','tag show-tag','SHOW'));if(i.food)body.append(el('span','tag food-tag',i.food==='meal'?'MEAL':i.food==='coffee'?'COFFEE':'SNACK'));if(i.kind==='ride')body.append(el('span','tag ride-tag','RIDE'));if(i.noExpress)body.append(el('span','tag no-express-tag','NO EXPRESS'));if(i.express)body.append(el('span','tag express','EXPRESS'));if(i.lockers)body.append(el('span','tag lockers-tag','LOCKERS'));if(i.mobileOrder)body.append(el('span','tag mobile-tag','MOBILE ORDER'));if(i.tag)body.append(el('span','tag'+(i.tag==='PRIORITY'?' priority':i.tag==='BIRTHDAY MOMENT'?' birthday':''),i.tag));if(i.maybe)body.append(el('span','tag maybe-tag','MAYBE'));input.onchange=()=>setChecked(i.id,input.checked);label.append(input,body);if(i.photo){const image=el('img','item-photo');image.src='./'+i.photo;image.alt=i.photoAlt||i.title;image.width=80;image.height=80;image.loading='lazy';image.decoding='async';image.onerror=()=>image.remove();body.prepend(image);}if(i.unavailable)label.classList.add('unavailable');items.append(label);});section.append(items);list.append(section);});
 document.querySelector('#park-note').hidden=true;totals();renderNear();
}
// Route map: the day's plan order drawn as a numbered path, inked in as stops are checked off. Plain SVG, so it works offline.
const LANDS={sun:[['Hogsmeade',28.4729,-81.4731,90],['Jurassic Park',28.4712,-81.4726,105],['Skull Island',28.4692,-81.4731,55],['Toon Lagoon',28.4700,-81.4713,75],['Marvel',28.4708,-81.4694,85],['Seuss Landing',28.4730,-81.4697,85],['Lost Continent',28.4726,-81.4714,55]],
 mon:[['Hogsmeade',28.4729,-81.4729,80],['Jurassic Park',28.4713,-81.4724,70],['Diagon Alley',28.4797,-81.4697,65],['New York',28.4766,-81.4693,75],['Production Central',28.4762,-81.4683,70],['Minion Land',28.4755,-81.4677,65],['DreamWorks Land',28.4782,-81.4667,65],['Springfield',28.4789,-81.4680,65],['World Expo',28.4802,-81.4680,55]],
 tue:[['Ministry of Magic',28.4429,-81.4478,80],['Celestial Park',28.4410,-81.4475,95],['Isle of Berk',28.4406,-81.4452,90],['Nintendo World',28.4389,-81.4481,90],['Dark Universe',28.4402,-81.4502,80]]};
const SVGNS='http://www.w3.org/2000/svg';
function sv(tag,attrs,parent){const e=document.createElementNS(SVGNS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.append(e);return e;}
const extrasKey='park-days-map-extras';let mapExtras=true;try{mapExtras=localStorage.getItem(extrasKey)!=='off';}catch{}
function mapStops(day){return day.sections.flatMap(s=>s.items).filter(i=>i.locs&&!i.unavailable);}
// Stops in plan order (optional extras too while they're shown); back-to-back items at the same spot (a second lap) share one pin.
function routeFor(day){const order=mapStops(day),r=[];order.filter(i=>mapExtras||!i.optional).forEach(i=>{const at=i.locs[0],l=r[r.length-1];if(l&&l.at[0]===at[0]&&l.at[1]===at[1])l.items.push(i);else r.push({at,items:[i],plan:order.indexOf(i)});});r.forEach(s=>s.extra=s.items.every(i=>i.optional));return r;}
const pinType=i=>/-gate$/.test(i.id)?'gate':i.kind==='ride'?'ride':i.food==='coffee'?'coffee':i.food?'food':i.show||i.kind==='show'?'show':i.meet?'meet':'other';
const stopDone=s=>s.items.every(i=>checked.has(i.id)),stopStarted=s=>s.items.some(i=>checked.has(i.id));
// Next up is the first open main stop from the furthest one checked, so skipped stops don't hold the route back. Extras are never next up.
function nextStop(route){let last=0;route.forEach((s,n)=>{if(stopStarted(s))last=n;});const open=s=>!s.extra&&!stopDone(s);return route.slice(last).find(open)||route.find(open);}
function routeNumbers(day){const m=new Map();routeFor(day).forEach((s,n)=>s.items.forEach(i=>m.set(i.id,n+1)));return m;}
// Where you've actually been: checked stops in the order they were checked (older checkmarks without a time keep plan order).
function trailFor(day){return mapStops(day).map((i,n)=>({i,n})).filter(x=>checked.has(x.i.id)).sort((a,b)=>(times[a.i.id]||0)-(times[b.i.id]||0)||a.n-b.n).map(x=>x.i);}
function walkMins(a,b){return Math.max(1,Math.round(metres(a,b)*1.3/75));}
let mapPick=null,mapDragged=false;const mapZoom={z:1,dx:0,dy:0};
function drawMap(svg,day,o={}){
 const box=svg.getBoundingClientRect(),W=Math.round(box.width)||o.w||340,H=Math.round(box.height)||o.h||180,pad=o.pad??20,v=o.view||{z:1,dx:0,dy:0},z=v.z;
 const stops=mapStops(day),route=routeFor(day),lands=LANDS[day.id]||[],trail=trailFor(day),next=nextStop(route);
 svg.replaceChildren();svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
 const cl=Math.cos(28.46*Math.PI/180),pts=stops.map(i=>i.locs[0]).concat(lands.map(l=>[l[1],l[2]]));
 let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;pts.forEach(([la,ln])=>{x0=Math.min(x0,ln*cl);x1=Math.max(x1,ln*cl);y0=Math.min(y0,-la);y1=Math.max(y1,-la);});
 const top=o.top||0,k=Math.min((W-2*pad)/(x1-x0),(H-top-2*pad)/(y1-y0)),ox=(W-(x1-x0)*k)/2,oy=top+(H-top-(y1-y0)*k)/2;
 // B places a point on the fitted map; P adds the pinch zoom and drag on top.
 const B=([la,ln])=>[ox+(ln*cl-x0)*k,oy+(-la-y0)*k],P=p=>{const [x,y]=B(p);return [(x-W/2)*z+W/2+v.dx,(y-H/2)*z+H/2+v.dy];},pxPerM=k*z/111320;
 let sc=o.scale||1;if(pxPerM<.5)sc*=.75;// Monday spans two parks, so pins shrink to stay apart
 lands.forEach(([n,la,ln,r])=>{const [x,y]=P([la,ln]),rr=Math.max(r*pxPerM,10);sv('ellipse',{cx:x,cy:y,rx:rr*1.15,ry:rr*.9,class:'map-land'},svg);if(o.labels!==false&&n.length*5.4*sc<rr*2.3){const t=sv('text',{x,y:Math.max(y-rr*.9+10*sc,11*sc),class:'map-land-label','font-size':8.5*sc},svg);t.textContent=n;}});
 const line=list=>list.map((p,j)=>(j?'L':'M')+P(p).map(n=>n.toFixed(1)).join(',')).join('');
 const req=route.filter(s=>!s.extra);
 if(req.length>1)sv('path',{d:line(req.map(s=>s.at)),class:'map-plan','stroke-width':2.2*sc},svg);
 if(trail.length>1)sv('path',{d:line(trail.map(i=>i.locs[0])),class:'map-trail','stroke-width':3.4*sc},svg);
 const tap=(g,label,pick)=>{if(!o.onPick)return;g.setAttribute('class',g.getAttribute('class')+' map-tap');g.setAttribute('role','button');g.setAttribute('tabindex','0');g.setAttribute('aria-label',label);g.onclick=()=>{if(!mapDragged)o.onPick(pick);};g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();o.onPick(pick);}};};
 const routeIds=new Set(route.flatMap(s=>s.items.map(i=>i.id)));
 stops.filter(i=>!routeIds.has(i.id)).forEach(i=>{const [x,y]=P(i.locs[0]),g=sv('g',{class:'map-extra t-'+pinType(i)+(checked.has(i.id)?' done':'')+(mapPick===i.id?' picked':'')},svg);if(o.onPick)sv('circle',{cx:x,cy:y,r:14,class:'map-hit'},g);sv('circle',{cx:x,cy:y,r:3.4*sc},g);tap(g,i.title+(checked.has(i.id)?', checked off':', optional'),i.id);});
 // Draw extras first so the main stops sit on top where they overlap.
 [...route.filter(s=>s.extra),...req].forEach(s=>{const n=route.indexOf(s),[x,y]=P(s.at),st=stopDone(s)?'done':s===next?'next':'later',r=(o.pin||10)*sc*(s.extra&&st!=='next'?.8:1),g=sv('g',{class:'map-pin t-'+pinType(s.items[0])+' '+st+(s.extra?' extra':'')+(s.items.some(i=>i.id===mapPick)?' picked':'')},svg);
  if(o.onPick)sv('circle',{cx:x,cy:y,r:Math.max(r+6,16),class:'map-hit'},g);
  if(st==='next'&&o.pulse!==false)sv('circle',{cx:x,cy:y,r,class:'map-pulse'},g);
  sv('circle',{cx:x,cy:y,r,class:'map-dot'},g);
  if(o.numbers!==false){const t=sv('text',{x,y:y+.5,'font-size':(st==='done'?10:9)*sc*(r/10/sc)},g);t.textContent=st==='done'?'✓':String(n+1);}
  tap(g,`Stop ${n+1}${s.extra?' (optional)':''}: ${s.items[0].title}${st==='done'?', checked off':''}`,s.items[0].id);});
 if(o.you&&nearFix&&nearFix.acc<=NEAR_MAX_ACC){const [x,y]=P([nearFix.lat,nearFix.lng]);if(x>-10&&x<W+10&&y>-10&&y<H+10){sv('circle',{cx:x,cy:y,r:Math.max(nearFix.acc*pxPerM,9),class:'map-you-acc'},svg);sv('circle',{cx:x,cy:y,r:6,class:'map-you'},svg);}}
 return {route,next,trail,B,W,H};
}
function renderRoute(){const card=document.querySelector('#route-card');if(!card)return;const day=days.find(d=>d.id===state.day),mini=document.querySelector('#route-mini');
 const {route,next}=drawMap(mini,day,{pad:14,scale:.85,labels:true,you:true}),main=route.filter(s=>!s.extra),done=main.filter(stopDone).length;
 document.querySelector('#route-sum').textContent=next?`${done} of ${main.length} main stops · next: ${next.items[0].title}`:`All ${route.length} stops done`;
 if(mapView?.open)renderFullMap();}
let lastMap=null,sheetDir=0;
function renderFullMap(){const day=days.find(d=>d.id===state.day),svg=document.querySelector('#route-full');
 lastMap=drawMap(svg,day,{pad:30,top:44,you:true,view:mapZoom,onPick:id=>{mapPick=mapPick===id?null:id;sheetDir=0;renderFullMap();}});
 const {route,next,trail}=lastMap;
 document.querySelector('#map-title').textContent=day.name;
 const ex=document.querySelector('#map-extras');ex.setAttribute('aria-pressed',String(mapExtras));ex.textContent='Extras';
 document.querySelector('#map-fit').hidden=mapZoom.z<=1.01&&!mapZoom.dx&&!mapZoom.dy;
 const sheet=document.querySelector('#map-sheet');sheet.replaceChildren();
 const picked=mapPick&&mapStops(day).find(i=>i.id===mapPick),stop=picked?route.find(s=>s.items.includes(picked)):next,item=picked||(next&&next.items.find(i=>!checked.has(i.id)));
 if(!item){sheet.append(el('p','map-sheet-empty',route.length?'Every stop on today’s route is checked off. Tap any pin, or use the arrows, to look back.':'No map stops for this day.'));sheet.append(mapNav(route,-1));return;}
 const n=stop?route.indexOf(stop)+1:0,done=checked.has(item.id),last=trail.filter(i=>i.id!==item.id).at(-1);
 const body=el('div','map-sheet-body'+(sheetDir>0?' from-right':sheetDir<0?' from-left':''));
 const badge=el('span','map-sheet-no t-'+pinType(item)+(done?' done':'')+(item.optional&&!done?' extra':''),done?'✓':n?String(n):'+');badge.setAttribute('aria-hidden','true');
 const eyebrow=[];if(stop&&stop===next&&!done)eyebrow.push('NEXT UP');if(item.optional)eyebrow.push('OPTIONAL');if(n)eyebrow.push(`STOP ${n} OF ${route.length}`);
 const txt=el('div','map-sheet-text');txt.append(el('span','map-sheet-eyebrow',eyebrow.join(' · ')),el('span','map-sheet-title',item.title));
 const meta=[];if(item.est)meta.push('⏱ '+item.est);if(last&&!done)meta.push(`About ${walkMins(last.locs[0],item.locs[0])} min walk`);if(meta.length)txt.append(el('span','map-sheet-meta',meta.join(' · ')));
 const btn=el('button','map-check'+(done?' done':''),done?'✓ Done':'Check off');btn.type='button';btn.setAttribute('aria-label',(done?'Uncheck ':'Check off ')+item.title);btn.onclick=()=>{mapPick=picked&&!done?null:picked?item.id:null;sheetDir=0;setChecked(item.id,!done);};
 const go=el('a','map-go','Walk ↗');go.href=`https://maps.apple.com/?daddr=${item.locs[0][0]},${item.locs[0][1]}&dirflg=w`;go.target='_blank';go.rel='noopener';go.setAttribute('aria-label','Walking directions to '+item.title+' in Maps');
 const acts=el('div','map-sheet-actions');acts.append(btn,go);body.append(badge,txt,acts);sheet.append(body,mapNav(route,stop?route.indexOf(stop):-1,picked));
}
// Arrows (and swipes) step through the route in plan order from whatever stop is showing.
function mapStep(route,pos,picked,dir){if(!route.length)return null;if(pos<0&&picked){const plan=mapStops(days.find(d=>d.id===state.day)).indexOf(picked);return dir>0?route.find(s=>s.plan>plan):[...route].reverse().find(s=>s.plan<plan);}if(pos<0)return dir>0?route[0]:route[route.length-1];return route[pos+dir];}
function mapNav(route,pos,picked){const nav=el('div','map-nav');[[-1,'‹','Previous stop'],[1,'›','Next stop']].forEach(([dir,sym,label])=>{const s=mapStep(route,pos,picked,dir),b=el('button','map-nav-btn');b.type='button';b.disabled=!s;b.setAttribute('aria-label',s?`${label}: ${s.items[0].title}`:label);const n=s?route.indexOf(s)+1:0;b.append(dir<0?sym+' ':'',el('span','',s?`Stop ${n}`:dir<0?'Start':'End'),dir>0?' '+sym:'');b.onclick=()=>goStop(s,dir);nav.append(b);});
 const hint=el('span','map-nav-hint','Swipe or tap arrows');nav.insertBefore(hint,nav.lastChild);return nav;}
function goStop(s,dir){if(!s)return;const item=s.items.find(i=>!checked.has(i.id))||s.items[0];mapPick=item.id;sheetDir=dir;
 // Keep the chosen pin in view while zoomed in.
 if(lastMap&&mapZoom.z>1){const [x,y]=lastMap.B(s.at),W=lastMap.W,H=lastMap.H,sx=(x-W/2)*mapZoom.z+W/2+mapZoom.dx,sy=(y-H/2)*mapZoom.z+H/2+mapZoom.dy;if(sx<40||sx>W-40||sy<40||sy>H-40){mapZoom.dx=-(x-W/2)*mapZoom.z;mapZoom.dy=-(y-H/2)*mapZoom.z;}}
 renderFullMap();}
function stepFromSheet(dir){if(!lastMap)return;const day=days.find(d=>d.id===state.day),picked=mapPick&&mapStops(day).find(i=>i.id===mapPick),{route,next}=lastMap,stop=picked?route.find(s=>s.items.includes(picked)):next;goStop(mapStep(route,stop?route.indexOf(stop):-1,picked,dir),dir);}
const mapView=document.querySelector('#map-view');
function openMap(){mapPick=null;sheetDir=0;Object.assign(mapZoom,{z:1,dx:0,dy:0});mapView.showModal();document.body.classList.add('modal-open');requestAnimationFrame(renderFullMap);}
document.querySelector('#route-open').onclick=openMap;document.querySelector('#route-expand').onclick=openMap;
document.querySelector('#map-close').onclick=()=>mapView.close();mapView.addEventListener('close',()=>{document.body.classList.remove('modal-open');mapPick=null;});
document.querySelector('#map-extras').onclick=()=>{mapExtras=!mapExtras;try{localStorage.setItem(extrasKey,mapExtras?'on':'off');}catch{}render();};
document.querySelector('#map-fit').onclick=()=>{Object.assign(mapZoom,{z:1,dx:0,dy:0});renderFullMap();};
document.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{const svg=document.querySelector('#route-full').getBoundingClientRect();zoomAt(svg.width/2,svg.height/2,mapZoom.z*Number(b.dataset.zoom));});
// Pinch to zoom, drag to pan, double-tap to zoom in. Pins stay the same size; the map spreads out under them.
let drawQueued=false;function redrawSoon(){if(drawQueued)return;drawQueued=true;requestAnimationFrame(()=>{drawQueued=false;renderFullMap();});}
function clampPan(){const s=document.querySelector('#route-full').getBoundingClientRect(),mx=s.width/2*mapZoom.z,my=s.height/2*mapZoom.z;mapZoom.dx=Math.max(-mx,Math.min(mx,mapZoom.dx));mapZoom.dy=Math.max(-my,Math.min(my,mapZoom.dy));if(mapZoom.z<=1.001){mapZoom.z=1;mapZoom.dx=0;mapZoom.dy=0;}}
function zoomAt(mx,my,z2){const s=document.querySelector('#route-full').getBoundingClientRect(),C=[s.width/2,s.height/2];z2=Math.max(1,Math.min(5,z2));const bx=(mx-C[0]-mapZoom.dx)/mapZoom.z,by=(my-C[1]-mapZoom.dy)/mapZoom.z;mapZoom.dx=mx-C[0]-bx*z2;mapZoom.dy=my-C[1]-by*z2;mapZoom.z=z2;clampPan();redrawSoon();}
(()=>{const svg=document.querySelector('#route-full'),ptrs=new Map();let start=null,lastTap=0;
 const pos=e=>{const r=svg.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};};
 const snap=()=>{const p=[...ptrs.values()];start={z:mapZoom.z,dx:mapZoom.dx,dy:mapZoom.dy,p,mid:p.length>1?{x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2}:p[0],dist:p.length>1?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):0};};
 svg.addEventListener('pointerdown',e=>{if(!ptrs.size)mapDragged=false;ptrs.set(e.pointerId,pos(e));snap();});
 svg.addEventListener('pointermove',e=>{if(!ptrs.has(e.pointerId)||!start)return;ptrs.set(e.pointerId,pos(e));const p=[...ptrs.values()],s=svg.getBoundingClientRect(),C=[s.width/2,s.height/2];
  if(p.length>1&&start.dist){const mid={x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2},z2=Math.max(1,Math.min(5,start.z*Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)/start.dist)),bx=(start.mid.x-C[0]-start.dx)/start.z,by=(start.mid.y-C[1]-start.dy)/start.z;mapZoom.z=z2;mapZoom.dx=mid.x-C[0]-bx*z2;mapZoom.dy=mid.y-C[1]-by*z2;mapDragged=true;}
  else{const ddx=p[0].x-start.mid.x,ddy=p[0].y-start.mid.y;if(Math.hypot(ddx,ddy)>6)mapDragged=true;if(mapDragged&&mapZoom.z>1){mapZoom.dx=start.dx+ddx;mapZoom.dy=start.dy+ddy;}}
  clampPan();redrawSoon();});
 const end=e=>{if(!ptrs.has(e.pointerId))return;const p=ptrs.get(e.pointerId);ptrs.delete(e.pointerId);if(ptrs.size)snap();else{start=null;
   if(e.type==='pointerup'&&!mapDragged&&!e.target.closest('.map-tap')){const now=Date.now();if(now-lastTap<320){lastTap=0;if(mapZoom.z>1.5)Object.assign(mapZoom,{z:1,dx:0,dy:0}),redrawSoon();else zoomAt(p.x,p.y,mapZoom.z*2.2);}else lastTap=now;}}};
 ['pointerup','pointercancel','pointerleave'].forEach(t=>svg.addEventListener(t,end));
 svg.addEventListener('wheel',e=>{e.preventDefault();const p=pos(e);zoomAt(p.x,p.y,mapZoom.z*Math.exp(-e.deltaY*.002));},{passive:false});
 svg.addEventListener('gesturestart',e=>e.preventDefault());
 // Swipe the stop card left or right to move through the route.
 const sheet=document.querySelector('#map-sheet');let sw=null;
 sheet.addEventListener('pointerdown',e=>{if(e.target.closest('button,a'))return;sw={x:e.clientX,y:e.clientY};});
 sheet.addEventListener('pointerup',e=>{if(!sw)return;const dx=e.clientX-sw.x,dy=e.clientY-sw.y;sw=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.5)stepFromSheet(dx<0?1:-1);});
 sheet.addEventListener('pointercancel',()=>sw=null);
})();
window.addEventListener('resize',()=>{renderRoute();});
// Trip recap: all three days' trails on one keepsake screen.
const recap=document.querySelector('#recap');
function renderRecap(){const wrap=document.querySelector('#recap-maps');wrap.replaceChildren();
 days.forEach((d,n)=>{const tile=el('div','recap-tile'),svg=document.createElementNS(SVGNS,'svg');svg.setAttribute('role','img');const c=mapStops(d).filter(i=>checked.has(i.id)).length;svg.setAttribute('aria-label',`${d.name}: ${c} places checked off`);tile.append(svg,el('span','recap-label',`${d.short} · ${['Islands','Studios','Epic'][n]}`));wrap.append(tile);});
 const all=days.flatMap(d=>d.sections.flatMap(s=>s.items)),rides=all.filter(i=>i.kind==='ride'&&checked.has(i.id)).length,treats=all.filter(i=>i.food&&checked.has(i.id)).length;
 const stats=document.querySelector('#recap-stats');stats.replaceChildren();[[rides,'rides'],[treats,'meals & treats'],[all.filter(i=>checked.has(i.id)).length,'checked off']].forEach(([v,l])=>{const d=el('div');d.append(el('b','',String(v)),el('span','',l));stats.append(d);});
 requestAnimationFrame(()=>wrap.querySelectorAll('svg').forEach((svg,n)=>drawMap(svg,days[n],{pad:10,scale:.62,labels:false,numbers:false,pulse:false,pin:9})));}
document.querySelector('#recap-open').onclick=()=>{recap.showModal();document.body.classList.add('modal-open');renderRecap();};
document.querySelector('#recap-close').onclick=()=>recap.close();recap.addEventListener('close',()=>document.body.classList.remove('modal-open'));
// Near you: opt-in, foreground-only. Watches location only while the page is visible and stops the moment it is hidden.
const nearKey='park-days-near',NEAR_MAX_ACC=50,NEAR_RADIUS=60;let nearOn=false,nearPinned=null,nearWatch=null,nearFix=null,nearMsg='';
try{nearOn=localStorage.getItem(nearKey)==='on';}catch{}
function saveNear(){try{localStorage.setItem(nearKey,nearOn?'on':'off');}catch{}}
function metres(a,b){const r=Math.PI/180,dLat=(b[0]-a[0])*r,dLng=(b[1]-a[1])*r,x=Math.sin(dLat/2)**2+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dLng/2)**2;return 2*6371e3*Math.asin(Math.sqrt(x));}
function nearby(){const day=days.find(d=>d.id===state.day),here=[nearFix.lat,nearFix.lng],reach=NEAR_RADIUS+nearFix.acc;const found=day.sections.flatMap(s=>s.items).filter(i=>i.locs&&!i.unavailable).map((i,order)=>({item:i,order,dist:Math.min(...i.locs.map(l=>metres(here,l)))})).filter(m=>m.dist<=reach);if(!found.some(m=>m.item.id===nearPinned))nearPinned=null;
 // The ride just checked off in the card stays put so it can be undone; otherwise the closest unchecked stop wins, with plan order breaking ties within ~25 m.
 return found.sort((a,b)=>(b.item.id===nearPinned)-(a.item.id===nearPinned)||(checked.has(a.item.id)-checked.has(b.item.id))||Math.round(a.dist/25)-Math.round(b.dist/25)||a.order-b.order);}
function startNear(){if(nearWatch!==null||document.hidden)return;if(!('geolocation' in navigator)){nearMsg='This browser can’t share your location.';renderNear();return;}nearMsg='';nearWatch=navigator.geolocation.watchPosition(pos=>{nearFix={lat:pos.coords.latitude,lng:pos.coords.longitude,acc:pos.coords.accuracy};nearMsg='';renderNear();},err=>{if(err.code===1){nearOn=false;saveNear();stopNear();nearMsg='Location is blocked for this app. Allow it in your phone’s settings, then try again.';}else nearMsg='Can’t find you right now. Still trying.';renderNear();},{enableHighAccuracy:true,maximumAge:15000,timeout:30000});}
function stopNear(){if(nearWatch!==null)navigator.geolocation.clearWatch(nearWatch);nearWatch=null;nearFix=null;}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopNear();else if(nearOn)startNear();renderNear();});
window.addEventListener('pagehide',stopNear);
function renderNear(){renderRoute();const box=document.querySelector('#near-you');if(!box)return;box.replaceChildren();box.className='near-you';
 if(!nearOn){box.classList.add('off');const b=el('button','near-enable');b.type='button';b.append(el('span','near-pin','📍'),el('span','','Show what’s near me'));b.onclick=()=>{nearOn=true;saveNear();startNear();renderNear();};box.append(b,el('p','near-fine',nearMsg||'Uses your location only while this app is open on screen.'));return;}
 const head=el('div','near-head');head.append(el('span','near-eyebrow','📍 NEAR YOU'));const off=el('button','near-off','Turn off');off.type='button';off.onclick=()=>{nearOn=false;saveNear();stopNear();nearMsg='';renderNear();};head.append(off);box.append(head);
 const say=t=>box.append(el('p','near-status',t));
 if(nearMsg){say(nearMsg);return;}if(!nearFix){say('Finding you…');return;}
 if(nearFix.acc>NEAR_MAX_ACC){say(`Your location is fuzzy right now (±${Math.round(nearFix.acc)} m).`);return;}
 const found=nearby();if(!found.length){say('Nothing from today’s plan right here.');return;}
 const {item:i,dist}=found[0],done=checked.has(i.id),card=el('div','near-card'+(done?' done':''));
 if(i.photo){const img=el('img','near-photo');img.src='./'+i.photo;img.alt='';img.width=64;img.height=64;img.onerror=()=>img.remove();card.append(img);}
 const txt=el('div','near-text');txt.append(el('span','near-title',i.title),el('span','near-dist',dist<25?'You’re here':`About ${Math.round(dist/5)*5} m away`));card.append(txt);
 const btn=el('button','near-check',done?'✓ Done':'Check off');btn.type='button';btn.setAttribute('aria-pressed',String(done));btn.setAttribute('aria-label',(done?'Uncheck ':'Check off ')+i.title);btn.onclick=()=>{nearPinned=i.id;setChecked(i.id,!checked.has(i.id));};card.append(btn);box.append(card);
 const others=found.slice(1,3).filter(m=>!checked.has(m.item.id));if(others.length)box.append(el('p','near-also','Also close: '+others.map(m=>m.item.title).join(' · ')));
}
if(nearOn)startNear();
function setChecked(id,value){if(!validIds.has(id)||typeof value!=='boolean')throw new Error('Choose a valid itinerary item and a true/false checked value.');if(value){checked.add(id);times[id]=Date.now();}else{checked.delete(id);delete times[id];}const saved=persist();const input=document.getElementById(id);if(input){input.checked=value;input.closest('.item').classList.toggle('done',value);}if(hidden){const focusTarget=input?.closest('.item')?.nextElementSibling?.querySelector('input');const nextId=focusTarget?.id;render();(nextId?document.getElementById(nextId):document.querySelector('#filter'))?.focus({preventScroll:true});}totals();renderNear();toast(saved?(value?'Checked off · saved on this phone':'Unchecked · saved on this phone'):'Checked here · not saved');return{id,checked:value,saved};}
const filter=document.querySelector('#filter');filter.onclick=()=>{hidden=!hidden;filter.setAttribute('aria-pressed',String(hidden));filter.textContent=hidden?'Show completed':'Hide completed';render();};
const help=document.querySelector('#help');document.querySelector('#help-open').onclick=()=>{help.showModal();document.body.classList.add('modal-open');};document.querySelector('#help-close').onclick=()=>help.close();help.addEventListener('close',()=>document.body.classList.remove('modal-open'));
window.addEventListener('storage',event=>{if(event.key!==key)return;try{const data=JSON.parse(event.newValue||'null');checked=new Set(Array.isArray(data?.checked)?data.checked.filter(x=>validIds.has(x)):[]);times=data?.times&&typeof data.times==='object'?data.times:{};render();}catch{}});
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;document.querySelector('#install').hidden=false;});document.querySelector('#install').onclick=async()=>{if(!installPrompt)return;await installPrompt.prompt();installPrompt=null;document.querySelector('#install').hidden=true;};
if('serviceWorker' in navigator){window.addEventListener('load',async()=>{const status=document.querySelector('#offline-status');try{await navigator.serviceWorker.register('./sw.js');await navigator.serviceWorker.ready;status.textContent='Ready for offline use on this device. Open the app once online after an update to refresh it.';}catch{status.textContent='Offline setup is unavailable in this browser. You can still use the app while connected.';}});}else document.querySelector('#offline-status').textContent='This browser does not support offline installation.';
render();
if(document.modelContext?.registerTool){try{document.modelContext.registerTool({name:'get_itinerary',description:'Read the three-day itinerary and current checked items on this device.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({days,checked:[...checked]})});document.modelContext.registerTool({name:'set_itinerary_item_checked',description:'Check or uncheck one itinerary item and save progress on this device.',inputSchema:{type:'object',properties:{id:{type:'string'},checked:{type:'boolean'}},required:['id','checked'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>setChecked(input.id,input.checked)});}catch{}}
})();
