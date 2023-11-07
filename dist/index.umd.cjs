(function(T,_){typeof exports=="object"&&typeof module<"u"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(T=typeof globalThis<"u"?globalThis:T||self,_(T["@tooooools/utils"]={}))})(this,function(T){"use strict";const _=n=>({toDataURL:async()=>new Promise(s=>{const e=new FileReader;e.onload=u=>s(u.target.result),e.readAsDataURL(n)}),toObjectURL:()=>URL.createObjectURL(n),toImage:async()=>{const s=_(n).toObjectURL();return B(s).toImage()}}),ne=n=>({toBlob:async()=>B(n.src).toBlob(),toDataURL:async()=>{console.log(n);const s=await ne(n).toBlob();return console.log(s),_(s).toDataURL()},toObjectURL:async()=>{const s=await ne(n).toBlob();return _(s).toObjectURL()}}),pe=n=>({toBlob:()=>{const s=n.split(","),e=s[0].match(/:(.*?);/)[1],u=atob(s[1]);let c=u.length;const v=new Uint8Array(c);for(;c--;)v[c]=u.charCodeAt(c);return new Blob([v],{type:e})},toObjectURL:()=>{const s=pe(n).toBlob();return _(s).toObjectURL()}}),B=n=>({toBlob:async()=>new Promise(s=>{const e=new XMLHttpRequest;e.open("GET",n,!0),e.responseType="blob",e.onload=()=>s(e.response),e.send()}),toDataURL:async()=>{const s=await B(n).toBlob();return _(s).toDataURL()},toImage:async()=>new Promise((s,e)=>{const u=new Image;u.error=e,u.onload=()=>s(u),u.src=n})}),Ce={blob:_,image:ne,dataURL:pe,objectURL:B};function Se(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function De(n){var s=2.5949095;return(n*=2)<1?.5*(n*n*((s+1)*n-s)):.5*((n-=2)*n*((s+1)*n+s)+2)}var Te=De;function je(n){var s=1.70158;return n*n*((s+1)*n-s)}var ke=je;function Ue(n){var s=1.70158;return--n*n*((s+1)*n+s)+1}var Ne=Ue;function Le(n){var s=.36363636363636365,e=8/11,u=9/10,c=4356/361,v=35442/1805,y=16061/1805,O=n*n;return n<s?7.5625*O:n<e?9.075*O-9.9*n+3.4:n<u?c*O-v*n+y:10.8*n*n-20.52*n+10.72}var te=Le,he=te;function Ye(n){return n<.5?.5*(1-he(1-n*2)):.5*he(n*2-1)+.5}var Be=Ye,Ge=te;function Xe(n){return 1-Ge(1-n)}var Ve=Xe;function We(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}var ze=We;function He(n){return 1-Math.sqrt(1-n*n)}var Je=He;function Ze(n){return Math.sqrt(1- --n*n)}var Ke=Ze;function Qe(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}var en=Qe;function nn(n){return n*n*n}var tn=nn;function rn(n){var s=n-1;return s*s*s+1}var an=rn;function sn(n){return n<.5?.5*Math.sin(13*Math.PI/2*2*n)*Math.pow(2,10*(2*n-1)):.5*Math.sin(-13*Math.PI/2*(2*n-1+1))*Math.pow(2,-10*(2*n-1))+1}var on=sn;function un(n){return Math.sin(13*n*Math.PI/2)*Math.pow(2,10*(n-1))}var cn=un;function ln(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-10*n)+1}var fn=ln;function pn(n){return n===0||n===1?n:n<.5?.5*Math.pow(2,20*n-10):-.5*Math.pow(2,10-n*20)+1}var hn=pn;function gn(n){return n===0?n:Math.pow(2,10*(n-1))}var vn=gn;function bn(n){return n===1?n:1-Math.pow(2,-10*n)}var $n=bn;function wn(n){return n}var In=wn;function dn(n){return n/=.5,n<1?.5*n*n:(n--,-.5*(n*(n-2)-1))}var On=dn;function An(n){return n*n}var Mn=An;function yn(n){return-n*(n-2)}var xn=yn;function mn(n){return n<.5?8*Math.pow(n,4):-8*Math.pow(n-1,4)+1}var Rn=mn;function _n(n){return Math.pow(n,4)}var En=_n;function Fn(n){return Math.pow(n-1,3)*(1-n)+1}var Pn=Fn;function qn(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}var Cn=qn;function Sn(n){return n*n*n*n*n}var Dn=Sn;function Tn(n){return--n*n*n*n*n+1}var jn=Tn;function kn(n){return-.5*(Math.cos(Math.PI*n)-1)}var Un=kn;function Nn(n){var s=Math.cos(n*Math.PI*.5);return Math.abs(s)<1e-14?1:1-s}var Ln=Nn;function Yn(n){return Math.sin(n*Math.PI/2)}var Bn=Yn,Gn={backInOut:Te,backIn:ke,backOut:Ne,bounceInOut:Be,bounceIn:Ve,bounceOut:te,circInOut:ze,circIn:Je,circOut:Ke,cubicInOut:en,cubicIn:tn,cubicOut:an,elasticInOut:on,elasticIn:cn,elasticOut:fn,expoInOut:hn,expoIn:vn,expoOut:$n,linear:In,quadInOut:On,quadIn:Mn,quadOut:xn,quartInOut:Rn,quartIn:En,quartOut:Pn,quintInOut:Cn,quintIn:Dn,quintOut:jn,sineInOut:Un,sineIn:Ln,sineOut:Bn};const Xn=Se(Gn);function Vn(n){return{a:parseFloat(n.a),b:parseFloat(n.b),c:parseFloat(n.c),d:parseFloat(n.d),e:parseFloat(n.e),f:parseFloat(n.f)}}const Wn=/^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;function zn(n){const s=n.match(Wn);if(s===null||s.length<7)throw new Error(`'${n}' is not a matrix`);return{a:parseFloat(s[1]),b:parseFloat(s[2]),c:parseFloat(s[3]),d:parseFloat(s[4]),e:parseFloat(s[5]),f:parseFloat(s[6])}}function L(n){return typeof n>"u"}function C(n,s=0){return{a:1,c:0,e:n,b:0,d:1,f:s}}function G(...n){n=Array.isArray(n[0])?n[0]:n;const s=(e,u)=>({a:e.a*u.a+e.c*u.b,c:e.a*u.c+e.c*u.d,e:e.a*u.e+e.c*u.f+e.e,b:e.b*u.a+e.d*u.b,d:e.b*u.c+e.d*u.d,f:e.b*u.e+e.d*u.f+e.f});switch(n.length){case 0:throw new Error("no matrices provided");case 1:return n[0];case 2:return s(n[0],n[1]);default:{const[e,u,...c]=n,v=s(e,u);return G(v,...c)}}}function X(...n){return G(...n)}const{cos:Hn,sin:Jn,PI:Zn}=Math;function ge(n,s,e){const u=Hn(n),c=Jn(n),v={a:u,c:-c,e:0,b:c,d:u,f:0};return L(s)||L(e)?v:G([C(s,e),v,C(-s,-e)])}function ve(n,s=void 0,e=void 0){return ge(n*Zn/180,s,e)}function k(n,s=void 0,e=void 0,u=void 0){L(s)&&(s=n);const c={a:n,c:0,e:0,b:0,d:s,f:0};return L(e)||L(u)?c:G([C(e,u),c,C(-e,-u)])}function Kn(n,s){return{a:1,c:n,e:0,b:s,d:1,f:0}}const{tan:be}=Math;function Qn(n,s){return{a:1,c:be(n),e:0,b:be(s),d:1,f:0}}function $e(n,s){return Qn(n*Math.PI/180,s*Math.PI/180)}function et(n){return`matrix(${n.a},${n.b},${n.c},${n.d},${n.e},${n.f})`}function nt(n){return Array.isArray(n)?n.map(s):s(n);function s(e){switch(e.type){case"matrix":if("a"in e&&"b"in e&&"c"in e&&"d"in e&&"e"in e&&"f"in e)return Vn(e);throw new Error("MISSING_MANDATORY_PARAM");case"translate":if(!("tx"in e))throw new Error("MISSING_MANDATORY_PARAM");return"ty"in e?C(e.tx,e.ty):C(e.tx);case"scale":if(!("sx"in e))throw new Error("MISSING_MANDATORY_PARAM");return"sy"in e?k(e.sx,e.sy):k(e.sx);case"rotate":if(!("angle"in e))throw new Error("MISSING_MANDATORY_PARAM");return"cx"in e&&"cy"in e?ve(e.angle,e.cx,e.cy):ve(e.angle);case"skewX":if(!("angle"in e))throw new Error("MISSING_MANDATORY_PARAM");return $e(e.angle,0);case"skewY":if(!("angle"in e))throw new Error("MISSING_MANDATORY_PARAM");return $e(0,e.angle);case"shear":if(!("shx"in e&&"shy"in e))throw new Error("MISSING_MANDATORY_PARAM");return Kn(e.shx,e.shy);default:throw new Error("UNSUPPORTED_DESCRIPTOR")}}}function tt(n,s){function e(){this.constructor=n}e.prototype=s.prototype,n.prototype=new e}function U(n,s,e,u){var c=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(c,U.prototype),c.expected=s,c.found=e,c.location=u,c.name="SyntaxError",c}tt(U,Error);function re(n,s,e){return e=e||" ",n.length>s?n:(s-=n.length,e+=e.repeat(s),n+e.slice(0,s))}U.prototype.format=function(n){var s="Error: "+this.message;if(this.location){var e=null,u;for(u=0;u<n.length;u++)if(n[u].source===this.location.source){e=n[u].text.split(/\r\n|\n|\r/g);break}var c=this.location.start,v=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(c):c,y=this.location.source+":"+v.line+":"+v.column;if(e){var O=this.location.end,I=re("",v.line.toString().length," "),g=e[c.line-1],p=c.line===O.line?O.column:g.length+1,A=p-c.column||1;s+=`
 --> `+y+`
`+I+` |
`+v.line+" | "+g+`
`+I+" | "+re("",c.column-1," ")+re("",A,"^")}else s+=`
 at `+y}return s},U.buildMessage=function(n,s){var e={literal:function(g){return'"'+c(g.text)+'"'},class:function(g){var p=g.parts.map(function(A){return Array.isArray(A)?v(A[0])+"-"+v(A[1]):v(A)});return"["+(g.inverted?"^":"")+p.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(g){return g.description}};function u(g){return g.charCodeAt(0).toString(16).toUpperCase()}function c(g){return g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(p){return"\\x0"+u(p)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(p){return"\\x"+u(p)})}function v(g){return g.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(p){return"\\x0"+u(p)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(p){return"\\x"+u(p)})}function y(g){return e[g.type](g)}function O(g){var p=g.map(y),A,q;if(p.sort(),p.length>0){for(A=1,q=1;A<p.length;A++)p[A-1]!==p[A]&&(p[q]=p[A],q++);p.length=q}switch(p.length){case 1:return p[0];case 2:return p[0]+" or "+p[1];default:return p.slice(0,-1).join(", ")+", or "+p[p.length-1]}}function I(g){return g?'"'+c(g)+'"':"end of input"}return"Expected "+O(n)+" but "+I(s)+" found."};function rt(n,s){s=s!==void 0?s:{};var e={},u=s.grammarSource,c={transformList:Ae},v=Ae,y="matrix",O="(",I=")",g="translate",p="scale",A="rotate",q="skewX",V="skewY",W=",",z=".",H=/^[eE]/,ae=/^[+\-]/,J=/^[0-9]/,m=/^[ \t\r\n]/,Y=F("matrix",!1),S=F("(",!1),R=F(")",!1),D=F("translate",!1),Z=F("scale",!1),se=F("rotate",!1),pt=F("skewX",!1),ht=F("skewY",!1),gt=F(",",!1),vt=Ut("fractionalConstant"),Ie=F(".",!1),bt=ee(["e","E"],!1,!1),$t=ee(["+","-"],!1,!1),wt=ee([["0","9"]],!1,!1),It=ee([" ","	","\r",`
`],!1,!1),dt=function(t){return t},Ot=function(t,r){return t.concat(r)},At=function(t,r,i,o,h,l){return[{type:"matrix",a:t,b:r,c:i,d:o,e:h,f:l}]},Mt=function(t,r){var i={type:"translate",tx:t};return r&&(i.ty=r),[i]},yt=function(t,r){var i={type:"scale",sx:t};return r&&(i.sy=r),[i]},xt=function(t,r){var i={type:"rotate",angle:t};return r&&(i.cx=r[0],i.cy=r[1]),[i]},mt=function(t){return[{type:"skewX",angle:t}]},Rt=function(t){return[{type:"skewY",angle:t}]},_t=function(t){return parseFloat(t.join(""))},Et=function(t){return parseInt(t.join(""))},Ft=function(t){return t},Pt=function(t,r){return[t,r]},qt=function(t){return t.join("")},Ct=function(t,r){return[t,r||null].join("")},St=function(t,r){return[t,r].join("")},Dt=function(t,r){return[t?t.join(""):null,".",r.join("")].join("")},Tt=function(t){return t.join("")},jt=function(t,r){return["e",t,r.join("")].join("")},a=0,K=[{line:1,column:1}],E=0,ie=[],b=0,Q;if("startRule"in s){if(!(s.startRule in c))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');v=c[s.startRule]}function F(t,r){return{type:"literal",text:t,ignoreCase:r}}function ee(t,r,i){return{type:"class",parts:t,inverted:r,ignoreCase:i}}function kt(){return{type:"end"}}function Ut(t){return{type:"other",description:t}}function de(t){var r=K[t],i;if(r)return r;for(i=t-1;!K[i];)i--;for(r=K[i],r={line:r.line,column:r.column};i<t;)n.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return K[t]=r,r}function Oe(t,r,i){var o=de(t),h=de(r),l={source:u,start:{offset:t,line:o.line,column:o.column},end:{offset:r,line:h.line,column:h.column}};return i&&u&&typeof u.offset=="function"&&(l.start=u.offset(l.start),l.end=u.offset(l.end)),l}function w(t){a<E||(a>E&&(E=a,ie=[]),ie.push(t))}function Nt(t,r,i){return new U(U.buildMessage(t,r),t,r,i)}function Ae(){var t,r,i,o,h;for(t=a,r=[],i=f();i!==e;)r.push(i),i=f();for(i=Me(),i===e&&(i=null),o=[],h=f();h!==e;)o.push(h),h=f();return t=dt(i),t}function Me(){var t,r,i,o;if(t=a,r=ye(),r!==e){if(i=[],o=P(),o!==e)for(;o!==e;)i.push(o),o=P();else i=e;i!==e?(o=Me(),o!==e?t=Ot(r,o):(a=t,t=e)):(a=t,t=e)}else a=t,t=e;return t===e&&(t=ye()),t}function ye(){var t;return t=Lt(),t===e&&(t=Yt(),t===e&&(t=Bt(),t===e&&(t=Gt(),t===e&&(t=Xt(),t===e&&(t=Vt()))))),t}function Lt(){var t,r,i,o,h,l,M,$,d,ue,Ee,ce,Fe,le,Pe,fe,qe,j;if(t=a,n.substr(a,6)===y?(r=y,a+=6):(r=e,b===0&&w(Y)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e)if(M=P(),M!==e)if($=x(),$!==e)if(d=P(),d!==e)if(ue=x(),ue!==e)if(Ee=P(),Ee!==e)if(ce=x(),ce!==e)if(Fe=P(),Fe!==e)if(le=x(),le!==e)if(Pe=P(),Pe!==e)if(fe=x(),fe!==e){for(qe=[],j=f();j!==e;)qe.push(j),j=f();n.charCodeAt(a)===41?(j=I,a++):(j=e,b===0&&w(R)),j!==e?t=At(l,$,ue,ce,le,fe):(a=t,t=e)}else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e;else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function Yt(){var t,r,i,o,h,l,M,$,d;if(t=a,n.substr(a,9)===g?(r=g,a+=9):(r=e,b===0&&w(D)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e){for(M=xe(),M===e&&(M=null),$=[],d=f();d!==e;)$.push(d),d=f();n.charCodeAt(a)===41?(d=I,a++):(d=e,b===0&&w(R)),d!==e?t=Mt(l,M):(a=t,t=e)}else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function Bt(){var t,r,i,o,h,l,M,$,d;if(t=a,n.substr(a,5)===p?(r=p,a+=5):(r=e,b===0&&w(Z)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e){for(M=xe(),M===e&&(M=null),$=[],d=f();d!==e;)$.push(d),d=f();n.charCodeAt(a)===41?(d=I,a++):(d=e,b===0&&w(R)),d!==e?t=yt(l,M):(a=t,t=e)}else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function Gt(){var t,r,i,o,h,l,M,$,d;if(t=a,n.substr(a,6)===A?(r=A,a+=6):(r=e,b===0&&w(se)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e){for(M=Wt(),M===e&&(M=null),$=[],d=f();d!==e;)$.push(d),d=f();n.charCodeAt(a)===41?(d=I,a++):(d=e,b===0&&w(R)),d!==e?t=xt(l,M):(a=t,t=e)}else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function Xt(){var t,r,i,o,h,l,M,$;if(t=a,n.substr(a,5)===q?(r=q,a+=5):(r=e,b===0&&w(pt)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e){for(M=[],$=f();$!==e;)M.push($),$=f();n.charCodeAt(a)===41?($=I,a++):($=e,b===0&&w(R)),$!==e?t=mt(l):(a=t,t=e)}else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function Vt(){var t,r,i,o,h,l,M,$;if(t=a,n.substr(a,5)===V?(r=V,a+=5):(r=e,b===0&&w(ht)),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();if(n.charCodeAt(a)===40?(o=O,a++):(o=e,b===0&&w(S)),o!==e){for(h=[],l=f();l!==e;)h.push(l),l=f();if(l=x(),l!==e){for(M=[],$=f();$!==e;)M.push($),$=f();n.charCodeAt(a)===41?($=I,a++):($=e,b===0&&w(R)),$!==e?t=Rt(l):(a=t,t=e)}else a=t,t=e}else a=t,t=e}else a=t,t=e;return t}function x(){var t,r,i,o;return t=a,r=a,i=oe(),i===e&&(i=null),o=Ht(),o!==e?(i=[i,o],r=i):(a=r,r=e),r!==e&&(r=_t(r)),t=r,t===e&&(t=a,r=a,i=oe(),i===e&&(i=null),o=zt(),o!==e?(i=[i,o],r=i):(a=r,r=e),r!==e&&(r=Et(r)),t=r),t}function xe(){var t,r,i;return t=a,r=P(),r!==e?(i=x(),i!==e?t=Ft(i):(a=t,t=e)):(a=t,t=e),t}function Wt(){var t,r,i,o,h;return t=a,r=P(),r!==e?(i=x(),i!==e?(o=P(),o!==e?(h=x(),h!==e?t=Pt(i,h):(a=t,t=e)):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),t}function P(){var t,r,i,o,h;if(t=a,r=[],i=f(),i!==e)for(;i!==e;)r.push(i),i=f();else r=e;if(r!==e){for(i=me(),i===e&&(i=null),o=[],h=f();h!==e;)o.push(h),h=f();r=[r,i,o],t=r}else a=t,t=e;if(t===e)if(t=a,r=me(),r!==e){for(i=[],o=f();o!==e;)i.push(o),o=f();r=[r,i],t=r}else a=t,t=e;return t}function me(){var t;return n.charCodeAt(a)===44?(t=W,a++):(t=e,b===0&&w(gt)),t}function zt(){var t,r;return t=a,r=N(),r!==e&&(r=qt(r)),t=r,t}function Ht(){var t,r,i;return t=a,r=Jt(),r!==e?(i=Re(),i===e&&(i=null),t=Ct(r,i)):(a=t,t=e),t===e&&(t=a,r=N(),r!==e?(i=Re(),i!==e?t=St(r,i):(a=t,t=e)):(a=t,t=e)),t}function Jt(){var t,r,i,o;return b++,t=a,r=N(),r===e&&(r=null),n.charCodeAt(a)===46?(i=z,a++):(i=e,b===0&&w(Ie)),i!==e?(o=N(),o!==e?t=Dt(r,o):(a=t,t=e)):(a=t,t=e),t===e&&(t=a,r=N(),r!==e?(n.charCodeAt(a)===46?(i=z,a++):(i=e,b===0&&w(Ie)),i!==e?t=Tt(r):(a=t,t=e)):(a=t,t=e)),b--,t===e&&(r=e,b===0&&w(vt)),t}function Re(){var t,r,i,o;return t=a,H.test(n.charAt(a))?(r=n.charAt(a),a++):(r=e,b===0&&w(bt)),r!==e?(i=oe(),i===e&&(i=null),o=N(),o!==e?t=jt(i,o):(a=t,t=e)):(a=t,t=e),t}function oe(){var t;return ae.test(n.charAt(a))?(t=n.charAt(a),a++):(t=e,b===0&&w($t)),t}function N(){var t,r;if(t=[],r=_e(),r!==e)for(;r!==e;)t.push(r),r=_e();else t=e;return t}function _e(){var t;return J.test(n.charAt(a))?(t=n.charAt(a),a++):(t=e,b===0&&w(wt)),t}function f(){var t;return m.test(n.charAt(a))?(t=n.charAt(a),a++):(t=e,b===0&&w(It)),t}if(Q=v(),Q!==e&&a===n.length)return Q;throw Q!==e&&a<n.length&&w(kt()),Nt(ie,E<n.length?n.charAt(E):null,E<n.length?Oe(E,E+1):Oe(E,E))}function at(n){return rt(n)}function st(n,s=!1,e=!1){s?e?n=X(n,k(-1,-1)):n=X(n,k(1,-1)):e&&(n=X(n,k(-1,1)));const u=n.a,c=n.b,v=n.c,y=n.d;let O,I,g;if(u!==0||v!==0){const p=Math.hypot(u,v);O=p,I=(u*y-c*v)/p;const A=Math.acos(u/p);g=v>0?-A:A}else if(c!==0||y!==0){const p=Math.hypot(c,y);O=(u*y-c*v)/p,I=p;const A=Math.acos(c/p);g=Math.PI/2+(y>0?-A:A)}else O=0,I=0,g=0;return e&&(O=-O),s&&(I=-I),{translate:{tx:n.e,ty:n.f},scale:{sx:O,sy:I},rotation:{angle:g}}}function it(n,s,e){return Math.max(s,Math.min(n,e))}function ot(n,s,e){return n+e*(s-n)}function ut(n){return n*Math.PI/180}const ct=["translateX","translateY","rotate","scale","scaleX","scaleY"],we=(n,s,e)=>Array.isArray(n)?n.map((u,c)=>we(u,s[c],e)):ot(n,s,e);function lt(n,{decimals:s=3,close:e=!0}={}){let u="";for(let c=0;c<n.length+(e?1:0);c++)u+=c?" L ":"M ",u+=n[c%n.length][0].toFixed(s)+" "+n[c%n.length][1].toFixed(s);return e&&(u+=" Z"),u}class ft{constructor({interpolations:s={},loop:e=!1,duration:u=0,frameRate:c=60}={}){this.props={interpolations:s,duration:u,frameRate:c,loop:e},this.length=this.toFrames(u)}get interpolations(){return this.props.interpolations}set interpolations(s){this.props.interpolations=s}get frameRate(){return this.props.frameRate}set loop(s){this.props.loop=s}get loop(){return this.props.loop}toFrames(s=0){const[,e,u]=/([-+]?[0-9.]+)([a-z%]*)/.exec(s)??[parseFloat(s)];if(!u)return e;let c=1;return u==="ms"&&(c=1e3),Math.floor(e/c*this.props.frameRate)}apply(s,e=null){for(const u in this.props.interpolations){const c=s.querySelectorAll(u);if(!c)continue;let v=0;const y=this.props.interpolations[u].span?this.toFrames(this.props.interpolations[u].span??0)/c.length:this.toFrames(this.props.interpolations[u].stagger??0);for(const O of c){for(let I in this.props.interpolations[u]){if(I==="stagger")continue;const{initial:g,from:p,to:A,delay:q,duration:V,easing:W}=this.props.interpolations[u][I],z=this.toFrames(V??this.length),H=this.toFrames(q??0)+v,ae=it((e-H)/z,0,1),J=Xn[W??"linear"];if(!J)throw new Error(`easing function '${W}' does not exist. See https://github.com/mattdesl/eases for available functions.`);let m=we(e<H&&g!==void 0?g:p,A,J(ae));if(ct.includes(I)){const Y=O.getAttribute("transform")??"translate(0,0)",S=/^matrix/i.test(Y)?zn(Y):nt(at(Y))[0],{translate:R,scale:D,rotation:Z}=st(S??C(0));switch(I){case"translateX":R.tx=m;break;case"translateY":R.ty=m;break;case"scale":D.sx=m,D.sy=m;break;case"scaleX":D.sx=m;break;case"scaleY":D.sy=m;break;case"rotate":Z.angle=ut(m);break}const se=X(C(R.tx??0,R.ty??0),k(D.sx??1,D.sy??1),ge(Z.angle??0));I="transform",m=et(se)}I==="d"&&(m=lt(m)),O.setAttribute(I,m)}v+=y}}}toJSON(){return this.props}}T.Convert=Ce,T.SVGTimeline=ft,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
