const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Menu mobile
const mb=$(".menu-btn"),nav=$("#nav");
mb.addEventListener("click",()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")}});

// Áreas + filtros + comparação
const sel=new Set();
const fill=(id,key)=>{[...new Set(AREAS.map(a=>a[key]))].forEach(v=>$(id).insertAdjacentHTML("beforeend",`<option>${esc(v)}</option>`))};
fill("#f-cat","cat");fill("#f-perfil","perfil");
function renderAreas(){
  const c=$("#f-cat").value,p=$("#f-prog").value,f=$("#f-perfil").value;
  const list=AREAS.filter(a=>(!c||a.cat===c)&&(!p||a.prog===p)&&(!f||a.perfil===f));
  $("#areas-status").textContent=list.length?`${list.length} área(s) exibida(s).`:"Nenhuma área com esses filtros. Altere ou limpe os filtros.";
  $("#areas-grid").innerHTML=list.map(a=>`<article class="card" id="area-${a.id}"><span class="tag">${esc(a.cat)}</span><span class="tag">Programação: ${esc(a.prog)}</span>
  <h3>${esc(a.nome)}</h3><p>${esc(a.desc)}</p>
  <details><summary>Ver detalhes</summary><p><b>Ferramentas:</b> ${esc(a.tools)}</p><p><b>Cargos:</b> ${esc(a.cargos)}</p><p><b>Perfil:</b> ${esc(a.perfil)}</p><p><b>Primeiro passo:</b> ${esc(a.passo)}</p></details>
  <label class="cmp"><input type="checkbox" data-id="${a.id}" ${sel.has(a.id)?"checked":""}> Comparar</label></article>`).join("");
}
["#f-cat","#f-prog","#f-perfil"].forEach(s=>$(s).addEventListener("change",renderAreas));
$("#areas-grid").addEventListener("change",e=>{if(e.target.dataset.id){e.target.checked?sel.add(e.target.dataset.id):sel.delete(e.target.dataset.id);renderCmp()}});
function renderCmp(){
  const l=AREAS.filter(a=>sel.has(a.id));
  if(l.length<2){$("#cmp-out").innerHTML=`<p class="muted">${l.length?"Selecione mais uma área para comparar.":"Nenhuma área selecionada. Marque “Comparar” nos cards."}</p>`;return}
  const rows=[["Descrição","desc"],["Programação","prog"],["Perfil","perfil"],["Ferramentas","tools"],["Cargos","cargos"],["Primeiro passo","passo"]];
  $("#cmp-out").innerHTML=`<table><thead><tr><th>Critério</th>${l.map(a=>`<th>${esc(a.nome)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${l.map(a=>`<td>${esc(a[r[1]])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
$("#cmp-clear").addEventListener("click",()=>{sel.clear();renderAreas();renderCmp()});

// Quiz
let qi=0,score={};
function quiz(){
  const box=$("#quiz-box");
  if(qi>=QUIZ.length){
    const top=Object.entries(score).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id])=>AREAS.find(a=>a.id===id));
    box.innerHTML=`<div role="status" tabindex="-1" id="q-res"><h3>Áreas para explorar</h3><p class="muted">Resultado exploratório, baseado nas suas respostas. Não é avaliação profissional.</p>
    ${top.map(a=>`<h4>${esc(a.nome)}</h4><p>${esc(a.desc)} Combina com o perfil ${esc(a.perfil.toLowerCase())}.</p><p><b>Para começar:</b> ${esc(a.tools)}.<br><b>Primeiro passo:</b> ${esc(a.passo)}<br><a href="#area-${a.id}" data-go="${a.id}">Ver na seção de áreas</a></p>`).join("")}
    <button class="btn" id="q-redo">Refazer o quiz</button></div>`;
    $("#q-res").focus();
    $("#q-redo").onclick=()=>{qi=0;score={};quiz()};
    box.querySelectorAll("[data-go]").forEach(l=>l.onclick=()=>{$("#f-cat").value=$("#f-prog").value=$("#f-perfil").value="";renderAreas()});
    return;
  }
  const [q,opts]=QUIZ[qi];
  box.innerHTML=`<progress value="${qi}" max="${QUIZ.length}" aria-label="Progresso do quiz"></progress><p class="muted">Pergunta ${qi+1} de ${QUIZ.length}</p><h3 tabindex="-1">${esc(q)}</h3>${opts.map((o,i)=>`<button class="btn opt" data-i="${i}">${esc(o[0])}</button>`).join("")}`;
  box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{opts[b.dataset.i][1].forEach(id=>score[id]=(score[id]||0)+1);qi++;quiz();const h=box.querySelector("h3");if(h)h.focus()});
}

// Vagas (links para pesquisas externas)
const cargos=["Desenvolvedor Front-end","Desenvolvedor Back-end","Analista de Dados","Analista de Suporte","QA","UX Designer","DevOps","Analista de Segurança"];
cargos.forEach(c=>$("#v-cargo").insertAdjacentHTML("beforeend",`<option>${c}</option>`));
function vagas(){
  const q=encodeURIComponent($("#v-cargo").value+" "+$("#v-nivel").value);
  $("#v-links").innerHTML=[["LinkedIn Jobs",`https://www.linkedin.com/jobs/search/?keywords=${q}&location=Brasil`],["Indeed",`https://br.indeed.com/jobs?q=${q}`],["Gupy",`https://portal.gupy.io/job-search/term=${q}`]]
   .map(([n,u])=>`<li><a href="${u}" target="_blank" rel="noopener">Pesquisar no ${n}</a></li>`).join("");
}
["#v-cargo","#v-nivel"].forEach(s=>$(s).addEventListener("change",vagas));

// Glossário
function gloss(){
  const t=$("#g-q").value.trim().toLowerCase();
  const l=GLOSS.filter(([k,d])=>(k+d).toLowerCase().includes(t));
  $("#g-list").innerHTML=l.map(([k,d])=>`<dt>${esc(k)}</dt><dd>${esc(d)}</dd>`).join("");
  $("#g-empty").hidden=l.length>0;
}
$("#g-q").addEventListener("input",gloss);

renderAreas();renderCmp();quiz();vagas();gloss();
