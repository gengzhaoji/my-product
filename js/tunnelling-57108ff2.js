import{_ as G}from"./my-alarm-27769293.js";import{a as C,A as S,_ as O,a6 as V,g as F,a7 as q,a8 as H,U as W,a9 as J,o as v,c as x,aa as K,ab as Q,u as d,b as e,h as r,w,t as c,d as $,ad as X,f as Y,ah as Z,F as I,r as N,i as j,p as ee,e as te,ai as se,aj as ne,ak as ae,af as oe,ag as le}from"./index-a360b131.js";import{E as ie}from"./el-progress-7e7e81d9.js";import{_ as ce}from"./my-box-a135ed03.js";import{_ as re}from"./my-compass-a39cd824.js";import{S as de,P as _e,c as pe,r as me,a as fe,G as ue,g as ge,A as he,D as ve,k as z,b as xe,d as ye,_ as we}from"./threeMinx-2c4305b0.js";import{c as be,T as ke}from"./animations-158c1fb4.js";/* empty css                   */import"./my-list-panel-dba34f6a.js";/* empty css                 *//* empty css               */import"./el-select-4ba0ef32.js";import"./el-scrollbar-922a1011.js";import"./strings-41f0a66e.js";import"./isEqual-dc73e6ec.js";import"./my-table-2797da89.js";import"./el-checkbox-63c4bf05.js";/* empty css                  *//* empty css                */const De=a=>C({method:"get",data:a,url:S+"/integratedControl/intelligentDriving/leaderInfo"}),Fe=a=>C({method:"get",data:a,url:S+"/integratedControl/intelligentDriving/environmentMonitoring"}),Le=a=>C({method:"get",data:a,url:S+"/integratedControl/intelligentDriving/tunnellingProgress"});const Ce={style:{position:"absolute","z-index":"10"},class:"flex-center w100 h100"},Se={class:"fw",style:{"font-size":"30px"}},Te=$({name:"tunnelling"}),Ae=Object.assign(Te,{setup(a){let _=V(null),o,t,s,l,b=F(!1),m=F(0),u,g;q(_,n=>{u=n[0].contentRect.width,g=n[0].contentRect.height,s.aspect=u/g,s.updateProjectionMatrix(),o.setSize(u,g)}),H(()=>{b.value=!0,i()}),W(()=>{cancelAnimationFrame(A),o==null||o.dispose(),_=null,t=null});function i(){t=new de,s=new _e(45,u/g,1,2e3),s.position.set(67,-3,7.6),s.lookAt(72,-4,0),l=pe(s),t.add(s),o=me(_),R()}let h=[],T=[],f;new fe;function R(){new J().get("/my-product/model/掘进面.glb").then(n=>{let k=URL.createObjectURL(n);ue.load(k,function(p){b.value=!1,f=p.scene,t.add(f),h=f.getObjectByName("矿道").children,U();const D=p.animations,P=new ge(f),B=[];for(var L=0;L<D.length;L++)B.push(P.clipAction(D[L]));B.forEach(M=>{M.play()}),T.push(P),setTimeout(()=>{be({camera:s,newP:{x:45,y:-3,z:4},newT:{x:72,y:-3,z:-10},time:5e3})},5e3),E()},function(p){p.lengthComputable&&(m.value=Math.round(p.loaded/p.total*100,2))})})}function U(){t.add(new he("#a1a1a1",.2));let n=new ve("#a1a1a1",.5);n.position.set(-17.57,9.398,-.864),n.target=f.getObjectByName("掘进机"),t.add(n)}let A;function E(){var n;z.value=l(h),xe(s),T.forEach(k=>k.update(ye.getDelta())),(n=ke)==null||n.update(),f.getObjectByName("传送带贴图面1").material.map.offset.x+=.01,f.getObjectByName("传送带贴图面2").material.map.offset.y+=.01,o==null||o.render(t,s),A=requestAnimationFrame(E)}return(n,k)=>{const p=we,D=re;return v(),x("div",{ref_key:"container",ref:_},[K(e("div",Ce,[r(p,{scale:2},{default:w(()=>[e("span",Se,c(d(m))+"% ",1)]),_:1})],512),[[Q,d(b)]]),r(D,{keyType:d(z)},null,8,["keyType"])],512)}}}),Ee=O(Ae,[["__scopeId","data-v-b75dbf71"]]);const y=a=>(ee("data-v-6f31f750"),a=a(),te(),a),Pe={class:"w100 h100 flex-col"},Be={class:"flex h100 m-between"},Ie={class:"left flex-col p-t-26 p-l-10 p-b-10"},Ne={class:"flex w100 m-between overflow-y-auto",style:{"max-height":"120px","flex-wrap":"wrap"}},je={class:"flex"},ze=["src"],Oe={class:"flex-col m-l-4"},$e={class:"name"},Re={class:"englishname"},Ue={class:"value"},Me={class:"unit"},Ge={class:"flex-col w100 h100 overflow-y-auto"},Ve={style:{"line-height":"32px"}},qe=y(()=>e("img",{src:se,alt:""},null,-1)),He={class:"name m-l-10"},We={class:"",style:{"line-height":"32px"}},Je={class:"name"},Ke=y(()=>e("img",{class:"m-l-15",style:{"vertical-align":"middle"},src:ne,alt:""},null,-1)),Qe={class:"progress flex-col w100",style:{"max-height":"120px"}},Xe={class:"flex m-between m-b-10"},Ye={class:"finish_len"},Ze=y(()=>e("span",null,"当前已完成：",-1)),et={class:"finish_len"},tt=y(()=>e("span",null,"设计长度：",-1)),st={class:"days"},nt={class:"m-r-4",style:{"font-size":"18px",color:"#fff"}},at=y(()=>e("div",{class:"flex-center"},[e("img",{src:ae,alt:""})],-1)),ot=y(()=>e("div",{class:"middle"},[e("span",{style:{color:"#fff"}},"五盘区域回风巷掘进面")],-1)),lt={class:"right p-t-26"},it={class:"flex m-between",style:{"flex-wrap":"wrap"}},ct=Z('<div class="start pointer" data-v-6f31f750><img src="'+oe+'" style="vertical-align:middle;" alt="" data-v-6f31f750><span style="font-size:14px;color:#deedff;" data-v-6f31f750>一键启动</span></div><div class="stop pointer" data-v-6f31f750><img src="'+le+'" style="vertical-align:middle;" alt="" data-v-6f31f750><span style="font-size:14px;color:#deedff;" data-v-6f31f750>一键停机</span></div><div class="empty" data-v-6f31f750></div>',3),rt=$({name:"comprehensive/tunnelling"}),dt=Object.assign(rt,{setup(a){let _=X([{imgs:"gas",name:"瓦斯浓度",Englishname:"GAS",value:0,unit:"%"},{imgs:"dust",name:"粉尘浓度",Englishname:"DUST",value:0,unit:"mg/m³"}]);Fe().then(l=>{_[0].value=l.data.gasConcentration,_[1].value=l.data.dustConcentration});let o=F([]);De().then(l=>{o.value=l.data});let t=F({designLength:0,finishedLength:0,planningDateCount:0}),s=Y(()=>+(t.value.finishedLength/t.value.designLength*100).toFixed(2));return Le().then(l=>{t.value=l.data}),(l,b)=>{const m=ce,u=ie,g=G;return v(),x("div",Pe,[r(Ee,{class:"three"}),e("div",Be,[e("div",Ie,[r(m,{class:"m-b-10",title:"环境检测"},{default:w(()=>[e("div",Ne,[(v(!0),x(I,null,N(d(_),(i,h)=>(v(),x("div",{class:"item p-10 flex m-between b-r-2",key:h},[e("div",je,[e("img",{src:l.getImgUrl(`../assets/img/rd/${i.imgs}.png`),alt:""},null,8,ze),e("div",Oe,[e("span",$e,c(i.name),1),e("span",Re,c(i.Englishname),1)])]),e("div",null,[e("span",Ue,c(i.value),1),e("span",Me,c(i.unit),1)])]))),128))])]),_:1}),r(m,{class:"m-b-10 f1 h0",title:"带班人员"},{default:w(()=>[e("div",Ge,[(v(!0),x(I,null,N(d(o),(i,h)=>(v(),x("div",{class:"take_person p-l-10 p-r-10 b-r-2 flex m-between",key:h},[e("div",Ve,[qe,e("span",He,c(i.leaderName),1)]),e("div",We,[e("span",Je,c(i.leaderPhone),1),Ke])]))),128))])]),_:1}),r(m,{class:"m-b-10",title:"掘进进度"},{default:w(()=>[e("div",Qe,[e("div",Xe,[e("div",Ye,[Ze,e("span",null,c(d(t).finishedLength)+"米",1)]),e("div",et,[tt,e("span",null,c(d(t).designLength)+"米",1)])]),r(u,{percentage:d(s),"stroke-width":4,"show-text":!1,color:"linear-gradient(270deg, #4D88FE 4%, #4DB5FF 99%)"},null,8,["percentage"]),e("div",st,[e("span",null,[j(" 预计完成还需："),e("span",nt,c(d(t).planningDateCount),1),j("天 ")])])])]),_:1}),r(m,{class:"flex-col",title:"巷道断面图"},{default:w(()=>[at]),_:1}),ot]),e("div",lt,[e("div",it,[ct,r(g,{type:"2"})])])])])}}}),At=O(dt,[["__scopeId","data-v-6f31f750"]]);export{At as default};