"use strict";(self.webpackChunkbuyer=self.webpackChunkbuyer||[]).push([[487],{7950:(M,a,o)=>{o.d(a,{p:()=>h});var s=o(2223),d=o(4660);let h=(()=>{class n{constructor(u){this.router=u}canActivate(u,c){return!!localStorage.getItem("isAuth")||(this.router.navigate(["../auth"]),!1)}}return n.\u0275fac=function(u){return new(u||n)(s.LFG(d.F0))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},7487:(M,a,o)=>{o.r(a),o.d(a,{ModulesModule:()=>m});var s=o(4755),d=o(4660),h=o(7950),n=o(2223);let r=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-modules"]],decls:1,vars:0,template:function(l,f){1&l&&n._UZ(0,"router-outlet")},dependencies:[d.lC]}),t})();const u=[{path:"",component:r,children:[{path:"",loadChildren:()=>Promise.all([o.e(648),o.e(6)]).then(o.bind(o,2006)).then(t=>t.DashboardModule)},{path:"auth",loadChildren:()=>Promise.all([o.e(648),o.e(817)]).then(o.bind(o,2817)).then(t=>t.AuthModule)},{path:"chat",loadChildren:()=>o.e(77).then(o.bind(o,5077)).then(t=>t.ChatModule),canActivate:[h.p]}]}];let c=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(u),d.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=n.oAB({type:t,bootstrap:[r]}),t.\u0275inj=n.cJS({imports:[s.ez,c]}),t})()}}]);