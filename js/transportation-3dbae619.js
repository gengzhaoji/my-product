import{_ as oe}from"./my-table-2797da89.js";import{a as L,A as M,_ as G,a6 as se,g as v,a7 as le,a8 as ie,U as re,a9 as ce,al as de,o as T,c as P,aa as pe,ab as ue,u as _,b as e,h as p,w as u,t as m,d as U,F as me,r as _e,n as O,i as k,p as he,e as fe,ai as ge,aj as we}from"./index-a360b131.js";import{E as xe}from"./el-progress-7e7e81d9.js";import{_ as be}from"./my-box-a135ed03.js";import{S as ve,t as N,h as ye,P as Se,r as Fe,l as Re,G as Ce,m as Te,f as Pe,L as V,V as C,R as Ie,M as D,T as ke,i as Le,j as Me,n as $e,o as Ae,p as ze,q as Ee,A as Be,d as je,_ as Oe}from"./threeMinx-2c4305b0.js";import{M as Ne}from"./MapControls-fb6fb511.js";import"./el-checkbox-63c4bf05.js";import"./isEqual-dc73e6ec.js";/* empty css               */import"./el-scrollbar-922a1011.js";/* empty css                  *//* empty css                */const Ve=i=>L({method:"get",data:i,url:M+"/integratedControl/transport/leaderInfo"}),De=i=>L({method:"get",data:i,url:M+"/integratedControl/transport/runningState"}),Ge=i=>L({method:"get",data:i,url:M+"/integratedControl/transport/beltRunningInfo"});const Ue={style:{position:"absolute","z-index":"10"},class:"flex-center w100 h100"},qe={class:"fw",style:{"font-size":"30px"}},He={class:"geo-box",style:{right:"10px",bottom:"10px"}},We=U({name:"tunnelling"}),Xe=Object.assign(We,{setup(i){let c=se(null),o,s,a,h,d,f=v(!1),y=v(0),t,g;le(c,n=>{t=n[0].contentRect.width,g=n[0].contentRect.height,a.aspect=t/g,a.updateProjectionMatrix(),o.setSize(t,g),d.setSize(t,g)}),ie(()=>{f.value=!0,q()}),re(()=>{cancelAnimationFrame(B),o==null||o.dispose(),s.clear(),c=null,s=null,d=null});function q(){s=new ve;const n=N.load("/my-product/model/blue2.jpg");n.colorSpace=ye,s.background=n,a=new Se(45,c.value.offsetWidth/c.value.offsetHeight,1,2e3),a.position.set(109.63,86.72,96.25),s.add(a),o=Fe(c),d=Re(c),h=new Ne(a,o.domElement),h.target.set(110.48293056262132,-50.336801686323525,-3.7927571043980493),h.minPolarAngle=0,h.maxPolarAngle=Math.PI/2,H()}let w,A=[],S=[117.076481,0,31.660061];function H(){new ce().get("/my-product/model/巷道综采面.glb").then(n=>{let r=URL.createObjectURL(n);Ce.load(r,l=>{f.value=!1,w=l.scene,w.position.set(...S),X(w.position),s.add(w),W(),Y(),A.push(Te(l)),j()},l=>{l.lengthComputable&&(y.value=Math.round(l.loaded/l.total*100,2))})})}let F;function W(){let n=new Pe;n.curves.push(new V(new C(89.77380574060942,0,72.93748384923792),new C(89.78317699663523,0,32.12647226937418)),new V(new C(89.78317699663523,0,32.12647226937418),new C(173.29293620343606,0,32.14087952295474)));let r=N.load("/my-product/model/line1.png");r.wrapS=r.wrapT=Ie,r.repeat.set(50,2),F=new D(new ke(n,1e3,.3,8),new Le({opacity:1,map:r,transparent:!0,depthWrite:!0,depthTest:!0})),s.add(F)}let x;function X({x:n,y:r,z:l}){x=new D(new Me(1e3,1e3),new $e({color:16777215,side:Ae,opacity:0,transparent:!0})),x.rotation.x=.5*Math.PI,x.position.set(n,r,l),s.add(x),o.domElement.addEventListener("mousedown",b=>{b.button==2&&E(b,[x,w],!0)},!1),o.domElement.addEventListener("mousemove",b=>{de(E(b,[x,w],!1))},!1)}const z=new ze;let R=v({x:S[0].toFixed(4),y:S[1].toFixed(4),z:S[2].toFixed(4)});function E(n,r,l){const{left:b,top:K,width:Q,height:Z}=o.domElement.getBoundingClientRect(),ee=new Ee((n.clientX-b)/Q*2-1,-((n.clientY-K)/Z)*2+1);z.setFromCamera(ee,a);const I=z.intersectObjects(r);if(!(I.length<=0)){const{x:te,y:ne,z:ae}=I[0].point;R.value={x:te.toFixed(4),y:ne.toFixed(4),z:ae.toFixed(4)},l&&console.log(I[0].point)}}function Y(){s.add(new Be("#ffffff",.8))}let J=.02,B;function j(){F&&(F.material.map.offset.x-=J),d==null||d.render(s,a),h.update(),A.forEach(n=>n.update(je.getDelta())),o==null||o.render(s,a),B=requestAnimationFrame(j)}return(n,r)=>{const l=Oe;return T(),P("div",{ref_key:"container",ref:c},[pe(e("div",Ue,[p(l,{scale:2},{default:u(()=>[e("span",qe,m(_(y))+"% ",1)]),_:1})],512),[[ue,_(f)]]),e("div",He,[e("span",null,"经度："+m(_(R).x),1),e("span",null,"纬度："+m(_(R).z),1),e("span",null,"海拔："+m(_(R).y),1)])],512)}}}),Ye=G(Xe,[["__scopeId","data-v-dfe892f6"]]);const $=i=>(he("data-v-25244597"),i=i(),fe(),i),Je={class:"w100 h100 flex-col position-relative"},Ke={class:"left f1 h0 flex-col h100 p-t-26 p-l-10 p-b-10"},Qe={class:"flex-col w100 h100 overflow-y-auto"},Ze={style:{"line-height":"32px"}},et=$(()=>e("img",{src:ge,alt:""},null,-1)),tt={class:"name m-l-5"},nt={class:"",style:{"line-height":"32px"}},at={class:"name"},ot=$(()=>e("img",{class:"m-l-5",style:{"vertical-align":"middle"},src:we,alt:""},null,-1)),st=$(()=>e("div",{class:"flex"},[e("div",{class:"operation flex"},[e("div"),e("span",null,"工频运行")]),e("div",{class:"stop flex"},[e("div"),e("span",null,"正常停机")])],-1)),lt={class:"flex"},it=U({name:"comprehensive/transportation"}),rt=Object.assign(it,{setup(i){let c=v([]);Ve().then(a=>{c.value=a.data});let o=v([]);De().then(a=>{o.value=a.data});let s=v([]);return Ge().then(a=>{s.value=a.data}),(a,h)=>{const d=be,f=xe,y=oe;return T(),P("div",Je,[p(Ye,{class:"three"}),e("div",Ke,[p(d,{class:"m-b-10 h0",style:{"flex-grow":"2"},title:"带班人员"},{default:u(()=>[e("div",Qe,[(T(!0),P(me,null,_e(_(c),(t,g)=>(T(),P("div",{class:"take_person p-l-10 p-r-10 b-r-2 flex m-between",key:g},[e("div",Ze,[et,e("span",tt,m(t.leaderName),1)]),e("div",nt,[e("span",at,m(t.leaderPhone),1),ot])]))),128))])]),_:1}),p(d,{class:"h0 m-b-10",style:{"flex-grow":"4"},title:"设备运行状态"},{right:u(()=>[st]),default:u(()=>[p(y,{data:_(o),columns:[{label:"皮带",prop:"beltName",width:110,align:"center"},{label:"运行状态",prop:"normalRunningTime",align:"center"},{label:"当前速度",prop:"speed",align:"center",width:90}]},{normalRunningTime:u(({row:t})=>[e("div",lt,[p(f,{style:O({width:`${(t.normalRunningTime*100/(t.normalRunningTime+t.stopRunningTime)).toFixed(2)}%`}),color:"#3AB973","stroke-width":4,percentage:100,"show-text":!1},null,8,["style"]),p(f,{style:O({width:`${100-(t.normalRunningTime*100/(t.normalRunningTime+t.stopRunningTime)).toFixed(2)}%`,"margin-left":"3px"}),color:"#45A5FF","stroke-width":4,percentage:100,"show-text":!1},null,8,["style"])])]),speed:u(({row:t})=>[k(m(t.speed)+"m/s ",1)]),_:1},8,["data"])]),_:1}),p(d,{class:"h0",style:{"flex-grow":"4"},title:"皮带运行情况"},{default:u(()=>[p(y,{data:_(s),columns:[{label:"皮带",prop:"beltName",width:110,align:"center"},{label:"运行状态",prop:"runningState",align:"center"},{label:"	煤量",prop:"coalCount",align:"center"},{label:"当前速度",prop:"speed",align:"center",width:90},{label:"运行时间",prop:"runningTimeCount",align:"center",width:90},{label:"烟雾",prop:"smokeState",align:"center",width:90},{label:"堆煤",prop:"coalState",align:"center",width:90},{label:"温度",prop:"temperatureState",align:"center",width:90},{label:"纵撕",prop:"tearState",align:"center",width:90},{label:"机头跑偏",prop:"machineHead",align:"center",width:90},{label:"机尾跑偏",prop:"machineTail",align:"center",width:90}]},{runningState:u(({row:t})=>[k(m(["停止","运行"][t.runningState]),1)]),speed:u(({row:t})=>[k(m(t.speed)+"m/s ",1)]),_:1},8,["data"])]),_:1})])])}}}),vt=G(rt,[["__scopeId","data-v-25244597"]]);export{vt as default};
