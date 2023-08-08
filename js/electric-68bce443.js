import{_ as D}from"./my-alarm-27769293.js";import{a as T,A as U,a6 as q,g as z,a7 as E,a8 as G,U as V,a9 as Y,B as H,at as J,o as F,c as M,aa as K,ab as Q,u as b,b as g,h as w,w as W,t as X,d as k,_ as Z,p as ee,e as te}from"./index-a360b131.js";import{_ as ae}from"./my-compass-a39cd824.js";import{S as oe,P as se,c as ne,r as ie,l as ce,a as re,G as le,C as pe,A as de,s as me,k as A,b as _e,_ as fe}from"./threeMinx-2c4305b0.js";import{m as ue}from"./my-label-41458c09.js";/* empty css                   */import"./my-list-panel-dba34f6a.js";/* empty css                 *//* empty css               */import"./el-select-4ba0ef32.js";import"./el-scrollbar-922a1011.js";import"./strings-41f0a66e.js";import"./isEqual-dc73e6ec.js";import"./my-table-2797da89.js";import"./el-checkbox-63c4bf05.js";/* empty css                  *//* empty css                */import"./my-box-a135ed03.js";const he=l=>T({method:"get",data:l,url:U+"/integratedControl/electricPower/boxInfo"}),be={style:{position:"absolute","z-index":"10"},class:"flex-center w100 h100"},ge={class:"fw",style:{"font-size":"30px"}},we=k({name:"electron"}),ye=Object.assign(we,{props:{data:{type:Array,required:!0}},setup(l){const d=l;let p=q(null),n,o,i,S,m,y=z(!1),B=z(0),_,f;E(p,a=>{_=a[0].contentRect.width,f=a[0].contentRect.height,i.aspect=_/f,i.updateProjectionMatrix(),n.setSize(_,f),m.setSize(_,f)}),G(()=>{y.value=!0,C()}),V(()=>{cancelAnimationFrame(N),n==null||n.dispose(),p=null,o=null});function C(){o=new oe,i=new se(45,_/f,1,2e3),i.position.set(0,4,0),S=ne(i),o.add(i),n=ie(p),n.shadowMap.enabled=!0,m=ce(p),R(),P()}let j=[],s,v=new re;function P(){new Y().get("/my-product/model/电力监控.glb").then(a=>{let u=URL.createObjectURL(a);le.load(u,c=>{y.value=!1,s=c.scene,o.add(s),j=s.getObjectByName("墙体").children,o.add(v),O(),s.getObjectByName("顶部横杆").traverse(e=>{e.isMesh&&(e.castShadow=!0)}),s.getObjectByName("顶部窄墙").traverse(e=>{e.isMesh&&(e.castShadow=!0)}),s.getObjectByName("墙体").traverse(e=>{e.isMesh&&(e.receiveShadow=!0)});for(let e=1;e<5;e++){const t=s.getObjectByName("顶灯").clone();t.position.z=t.position.z-e*24,o.add(t)}for(let e=0;e<31;e++){const t=s.getObjectByName("顶部横杆").clone();t.position.z=t.position.z-e*4,o.add(t);const r=s.getObjectByName("顶部横杆").clone();r.rotateY(Math.PI),r.position.x=-r.position.x,r.position.z=r.position.z-e*4,o.add(r)}for(let e=0;e<5;e++){const t=s.getObjectByName("电机1").clone();t.position.z=t.position.z-e*5,o.add(t)}for(let e=0;e<15;e++){const t=s.getObjectByName("电机2").clone();t.position.z=t.position.z-e*8,o.add(t)}for(let e=0;e<11;e++){const t=s.getObjectByName("电机2").clone();t.rotateY(Math.PI),t.position.z=t.position.z-e*8-32,t.position.x=-t.position.x,o.add(t)}I()},c=>{c.lengthComputable&&(B.value=Math.round(c.loaded/c.total*100,2))})})}H(()=>d.data,a=>{s&&O(a)});function O(a=d.data){var t,r;v.clear();const{x:u,y:c,z:e}=(r=(t=s==null?void 0:s.getObjectByName("电机2"))==null?void 0:t.clone())==null?void 0:r.position;a.forEach((h,L)=>{const $=J(ue,{right:!1,data:{name:h.boxName,list:[{title:"电压",val:h.voltage,suffix:"V"},{title:"电流",val:h.current,suffix:"A"}]},callBack:function(){console.log(h)}}).mount(document.createElement("div")).$el,x=new pe($);x.position.set(u,c+2,e-L*8),x.scale.set(.015,.015,.015),v.add(x)})}function R(){o.add(new de("#a1a1a1",.5));let a=new me("#ffffff",.6);a.castShadow=!0,a.position.set(0,10.4,-24),a.shadow.camera.near=.01,a.shadow.camera.far=500,a.shadow.camera.right=10,a.shadow.camera.left=-10,a.shadow.camera.top=10,a.shadow.camera.bottom=-10,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.radius=2.5,a.shadow.bias=-1e-4,o.add(a)}let N;function I(){A.value=S(j),_e(i),n==null||n.render(o,i),m==null||m.render(o,i),N=requestAnimationFrame(I)}return(a,u)=>{const c=fe,e=ae;return F(),M("div",{ref_key:"container",ref:p},[K(g("div",be,[w(c,{scale:2},{default:W(()=>[g("span",ge,X(b(B))+"% ",1)]),_:1})],512),[[Q,b(y)]]),w(e,{keyType:b(A)},null,8,["keyType"])],512)}}});const ve=l=>(ee("data-v-f80bc6ef"),l=l(),te(),l),xe={class:"w100 h100 position-relative"},ze=ve(()=>g("div",{class:"middle m-t-20"},[g("span",{style:{color:"#fff"}},"中央变电所")],-1)),Se=k({name:"comprehensive/electric"}),Be=Object.assign(Se,{setup(l){let d=z([]);return he().then(p=>{d.value=p.data}),(p,n)=>{const o=D;return F(),M("div",xe,[w(ye,{class:"three",data:b(d)},null,8,["data"]),ze,w(o,{type:"4"})])}}}),Ge=Z(Be,[["__scopeId","data-v-f80bc6ef"]]);export{Ge as default};