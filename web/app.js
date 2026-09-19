const $=s=>document.querySelector(s);
const projects=[];
const projectsEl=$("#projects");
const messages=$("#messages");
const frame=$("#frame");

function renderProjects(){
  projectsEl.innerHTML="";
  projects.forEach((p,i)=>{
    const el=document.createElement("div");
    el.className="project"+(i===projects.length-1?" active":"");
    el.textContent=p;
    projectsEl.appendChild(el);
  });
}
function preview(prompt){
  const safe=prompt.replace(/[<>]/g,"");
  frame.srcdoc=`<!doctype html><html><body style="font-family:system-ui;padding:40px;background:#f7f7f8;color:#16181d"><h1>${safe}</h1><p>This is the Rilable Web static preview shell.</p></body></html>`;
}
$("#newProject").onclick=()=>{
  const name="Project "+(projects.length+1);
  projects.push(name); renderProjects(); $("#title").textContent=name;
};
$("#refresh").onclick=()=>{if(frame.srcdoc) frame.srcdoc=frame.srcdoc};
$("#promptForm").onsubmit=e=>{
  e.preventDefault();
  const value=$("#prompt").value.trim();
  if(!value)return;
  if(!projects.length){projects.push("Project 1");renderProjects();$("#title").textContent="Project 1"}
  const empty=document.querySelector(".empty"); if(empty) empty.remove();
  const msg=document.createElement("div"); msg.className="message"; msg.textContent=value;
  messages.appendChild(msg); messages.scrollTop=messages.scrollHeight;
  preview(value); $("#prompt").value="";
};
