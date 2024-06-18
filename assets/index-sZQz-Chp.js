var Be=Object.defineProperty;var He=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>(He(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function E(){}const ye=e=>e;function be(e){return e()}function ie(){return Object.create(null)}function P(e){e.forEach(be)}function J(e){return typeof e=="function"}function ve(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function oe(e,t){return e===t?!0:(B||(B=document.createElement("a")),B.href=t,e===B.href)}function Te(e){return Object.keys(e).length===0}function le(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const ke=typeof window<"u";let $e=ke?()=>window.performance.now():()=>Date.now(),ee=ke?e=>requestAnimationFrame(e):E;const D=new Set;function we(e){D.forEach(t=>{t.c(e)||(D.delete(t),t.f())}),D.size!==0&&ee(we)}function je(e){let t;return D.size===0&&ee(we),{promise:new Promise(n=>{D.add(t={c:e,f:n})}),abort(){D.delete(t)}}}function y(e,t){e.appendChild(t)}function Ee(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Re(e){const t=v("style");return t.textContent="/* empty */",Ve(Ee(e),t),t.sheet}function Ve(e,t){return y(e.head||e,t),t.sheet}function N(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function Le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function L(){return X(" ")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function qe(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Fe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}const R=new Map;let V=0;function Ie(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ge(e,t){const n={stylesheet:Re(t),rules:{}};return R.set(e,n),n}function Oe(e,t,n,r,o,i,u,d=0){const l=16.666/r;let a=`{
`;for(let p=0;p<=1;p+=l){const g=t+(n-t)*i(p);a+=p*100+`%{${u(g,1-g)}}
`}const s=a+`100% {${u(n,1-n)}}
}`,f=`__svelte_${Ie(s)}_${d}`,c=Ee(e),{stylesheet:h,rules:b}=R.get(c)||Ge(c,e);b[f]||(b[f]=!0,h.insertRule(`@keyframes ${f} ${s}`,h.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,V+=1,f}function Y(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),V-=o,V||Ue())}function Ue(){ee(()=>{V||(R.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&j(t)}),R.clear())})}let te;function z(e){te=e}const C=[],ue=[];let M=[];const ae=[],Je=Promise.resolve();let Z=!1;function Ke(){Z||(Z=!0,Je.then(Ne))}function S(e){M.push(e)}const Q=new Set;let A=0;function Ne(){if(A!==0)return;const e=te;do{try{for(;A<C.length;){const t=C[A];A++,z(t),We(t.$$)}}catch(t){throw C.length=0,A=0,t}for(z(null),C.length=0,A=0;ue.length;)ue.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];Q.has(n)||(Q.add(n),n())}M.length=0}while(C.length);for(;ae.length;)ae.pop()();Z=!1,Q.clear(),z(e)}function We(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}function Qe(e){const t=[],n=[];M.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),M=t}let x;function Pe(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function q(e,t,n){e.dispatchEvent(Fe(`${t?"intro":"outro"}${n}`))}const H=new Set;let O;function F(){O={r:0,c:[],p:O}}function I(){O.r||P(O.c),O=O.p}function k(e,t){e&&e.i&&(H.delete(e),e.i(t))}function w(e,t,n,r){if(e&&e.o){if(H.has(e))return;H.add(e),O.c.push(()=>{H.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Se={duration:0};function Ae(e,t,n){const r={direction:"in"};let o=t(e,n,r),i=!1,u,d,l=0;function a(){u&&Y(e,u)}function s(){const{delay:c=0,duration:h=300,easing:b=ye,tick:m=E,css:p}=o||Se;p&&(u=Oe(e,0,1,h,c,b,p,l++)),m(0,1);const g=$e()+c,$=g+h;d&&d.abort(),i=!0,S(()=>q(e,!0,"start")),d=je(K=>{if(i){if(K>=$)return m(1,0),q(e,!0,"end"),a(),i=!1;if(K>=g){const se=b((K-g)/h);m(se,1-se)}}return i})}let f=!1;return{start(){f||(f=!0,Y(e),J(o)?(o=o(r),Pe().then(s)):s())},invalidate(){f=!1},end(){i&&(a(),i=!1)}}}function Ce(e,t,n){const r={direction:"out"};let o=t(e,n,r),i=!0,u;const d=O;d.r+=1;let l;function a(){const{delay:s=0,duration:f=300,easing:c=ye,tick:h=E,css:b}=o||Se;b&&(u=Oe(e,1,0,f,s,c,b));const m=$e()+s,p=m+f;S(()=>q(e,!1,"start")),"inert"in e&&(l=e.inert,e.inert=!0),je(g=>{if(i){if(g>=p)return h(0,1),q(e,!1,"end"),--d.r||P(d.c),!1;if(g>=m){const $=c((g-m)/f);h(1-$,$)}}return i})}return J(o)?Pe().then(()=>{o=o(r),a()}):a(),{end(s){s&&"inert"in e&&(e.inert=l),s&&o.tick&&o.tick(1,0),i&&(u&&Y(e,u),i=!1)}}}function G(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function De(e){e&&e.c()}function ne(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),S(()=>{const i=e.$$.on_mount.map(be).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...i):P(i),e.$$.on_mount=[]}),o.forEach(S)}function re(e,t){const n=e.$$;n.fragment!==null&&(Qe(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(C.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Me(e,t,n,r,o,i,u=null,d=[-1]){const l=te;z(e);const a=e.$$={fragment:null,ctx:[],props:i,update:E,not_equal:o,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:ie(),dirty:d,skip_bound:!1,root:t.target||l.$$.root};u&&u(a.root);let s=!1;if(a.ctx=n?n(e,t.props||{},(f,c,...h)=>{const b=h.length?h[0]:c;return a.ctx&&o(a.ctx[f],a.ctx[f]=b)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](b),s&&Xe(e,f)),c}):[],a.update(),s=!0,P(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const f=qe(t.target);a.fragment&&a.fragment.l(f),f.forEach(j)}else a.fragment&&a.fragment.c();t.intro&&k(e.$$.fragment),ne(e,t.target,t.anchor),Ne()}z(l)}class xe{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){re(this,1),this.$destroy=E}$on(t,n){if(!J(n))return E;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);function Ze(e){let t,n,r,o,i,u,d,l,a,s,f;return{c(){t=v("a"),n=v("h2"),r=X(e[3]),o=L(),i=v("img"),d=L(),l=v("p"),a=X(e[1]),oe(i.src,u=e[0])||_(i,"src",u),_(i,"alt",e[3]),fe(i,"transform","scale("+e[4]+")"),_(i,"class","svelte-10xeszr"),_(l,"class","svelte-10xeszr"),_(t,"href",e[2]),_(t,"target","_blank"),_(t,"class","svelte-10xeszr")},m(c,h){N(c,t,h),y(t,n),y(n,r),y(t,o),y(t,i),y(t,d),y(t,l),y(l,a),s||(f=[T(i,"mouseover",e[5]),T(i,"mouseout",e[6])],s=!0)},p(c,[h]){h&8&&ce(r,c[3]),h&1&&!oe(i.src,u=c[0])&&_(i,"src",u),h&8&&_(i,"alt",c[3]),h&16&&fe(i,"transform","scale("+c[4]+")"),h&2&&ce(a,c[1]),h&4&&_(t,"href",c[2])},i:E,o:E,d(c){c&&j(t),s=!1,P(f)}}}function et(e,t,n){let{src:r}=t,{description:o}=t,{href:i}=t,{title:u}=t,d=1;const l=()=>n(4,d=1.2),a=()=>n(4,d=1);return e.$$set=s=>{"src"in s&&n(0,r=s.src),"description"in s&&n(1,o=s.description),"href"in s&&n(2,i=s.href),"title"in s&&n(3,u=s.title)},[r,o,i,u,d,l,a]}class ze extends xe{constructor(t){super(),Me(this,t,et,Ze,ve,{src:0,description:1,href:2,title:3})}}function tt(e){const t=e-1;return t*t*t+1}function U(e,{delay:t=0,duration:n=400,easing:r=tt,x:o=0,y:i=0,opacity:u=0}={}){const d=getComputedStyle(e),l=+d.opacity,a=d.transform==="none"?"":d.transform,s=l*(1-u),[f,c]=le(o),[h,b]=le(i);return{delay:t,duration:n,easing:r,css:(m,p)=>`
			transform: ${a} translate(${(1-m)*f}${c}, ${(1-m)*h}${b});
			opacity: ${l-s*p}`}}function de(e,t,n){const r=e.slice();return r[6]=t[n],r}function he(e,t,n){const r=e.slice();return r[9]=t[n],r}function me(e){let t,n,r,o,i,u,d=G(e[2]),l=[];for(let s=0;s<d.length;s+=1)l[s]=pe(he(e,d,s));const a=s=>w(l[s],1,1,()=>{l[s]=null});return{c(){t=v("p"),t.innerHTML='worked on these with my dear friend <a href="https://github.com/kamilzygowski" target="_blank">swedishsailor</a>',n=L(),r=v("games");for(let s=0;s<l.length;s+=1)l[s].c();_(t,"class","svelte-s3tko"),_(r,"class","svelte-s3tko")},m(s,f){N(s,t,f),N(s,n,f),N(s,r,f);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(r,null);u=!0},p(s,f){if(f&4){d=G(s[2]);let c;for(c=0;c<d.length;c+=1){const h=he(s,d,c);l[c]?(l[c].p(h,f),k(l[c],1)):(l[c]=pe(h),l[c].c(),k(l[c],1),l[c].m(r,null))}for(F(),c=d.length;c<l.length;c+=1)a(c);I()}},i(s){if(!u){for(let f=0;f<d.length;f+=1)k(l[f]);s&&S(()=>{u&&(i&&i.end(1),o=Ae(r,U,{y:-20,duration:1e3}),o.start())}),u=!0}},o(s){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)w(l[f]);o&&o.invalidate(),s&&(i=Ce(r,U,{y:-20,duration:1e3})),u=!1},d(s){s&&(j(t),j(n),j(r)),Le(l,s),s&&i&&i.end()}}}function pe(e){let t,n;return t=new ze({props:{title:e[9].title,src:e[9].src,description:e[9].description,href:e[9].href}}),{c(){De(t.$$.fragment)},m(r,o){ne(t,r,o),n=!0},p:E,i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){re(t,r)}}}function ge(e){let t,n,r,o,i,u,d=G(e[3]),l=[];for(let s=0;s<d.length;s+=1)l[s]=_e(de(e,d,s));const a=s=>w(l[s],1,1,()=>{l[s]=null});return{c(){t=v("p"),t.textContent="in no particular order",n=L(),r=v("games");for(let s=0;s<l.length;s+=1)l[s].c();_(t,"class","svelte-s3tko"),_(r,"class","svelte-s3tko")},m(s,f){N(s,t,f),N(s,n,f),N(s,r,f);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(r,null);u=!0},p(s,f){if(f&8){d=G(s[3]);let c;for(c=0;c<d.length;c+=1){const h=de(s,d,c);l[c]?(l[c].p(h,f),k(l[c],1)):(l[c]=_e(h),l[c].c(),k(l[c],1),l[c].m(r,null))}for(F(),c=d.length;c<l.length;c+=1)a(c);I()}},i(s){if(!u){for(let f=0;f<d.length;f+=1)k(l[f]);s&&S(()=>{u&&(i&&i.end(1),o=Ae(r,U,{y:-20,duration:1e3}),o.start())}),u=!0}},o(s){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)w(l[f]);o&&o.invalidate(),s&&(i=Ce(r,U,{y:-20,duration:1e3})),u=!1},d(s){s&&(j(t),j(n),j(r)),Le(l,s),s&&i&&i.end()}}}function _e(e){let t,n;return t=new ze({props:{title:e[6].title,src:e[6].src,description:e[6].description,href:e[6].href}}),{c(){De(t.$$.fragment)},m(r,o){ne(t,r,o),n=!0},p:E,i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){re(t,r)}}}function nt(e){let t,n,r,o,i,u,d,l,a,s,f,c,h,b,m=e[0]&&me(e),p=e[1]&&ge(e);return{c(){t=v("div"),n=v("intro"),n.innerHTML=`<p style="margin-right: 30px;" class="svelte-s3tko">the incomplete works of marcodeevil<br/>
      lifelong maker of games and stuff<br/> 
      trying to have some fun in life<br/>
      bigger projects probably here: <a href="https://whitespacestudio.dev/" target="_blank">white space studio</a></p> <socials class="svelte-s3tko"><a href="https://marcodeevil.itch.io/" target="_blank" class="svelte-s3tko"><img src="https://static.itch.io/images/itchio-textless-black.svg" alt="Twitter" class="svelte-s3tko"/></a> <a href="https://github.com/MarcoDeevil" target="_blank" class="svelte-s3tko"><img src="images/github-mark.png" alt="GitHub" class="svelte-s3tko"/></a></socials>`,r=L(),o=v("projects"),i=v("project"),u=v("button"),u.innerHTML="<h1>Jams</h1>",d=L(),m&&m.c(),l=L(),a=v("project"),s=v("button"),s.innerHTML="<h1>Prototypes</h1>",f=L(),p&&p.c(),_(n,"class","svelte-s3tko"),_(u,"class","text-button svelte-s3tko"),_(i,"class","svelte-s3tko"),_(s,"class","text-button svelte-s3tko"),_(a,"class","svelte-s3tko"),_(o,"class","svelte-s3tko"),_(t,"id","container"),_(t,"class","svelte-s3tko")},m(g,$){N(g,t,$),y(t,n),y(t,r),y(t,o),y(o,i),y(i,u),y(i,d),m&&m.m(i,null),y(o,l),y(o,a),y(a,s),y(a,f),p&&p.m(a,null),c=!0,h||(b=[T(u,"click",e[4]),T(s,"click",e[5])],h=!0)},p(g,[$]){g[0]?m?(m.p(g,$),$&1&&k(m,1)):(m=me(g),m.c(),k(m,1),m.m(i,null)):m&&(F(),w(m,1,1,()=>{m=null}),I()),g[1]?p?(p.p(g,$),$&2&&k(p,1)):(p=ge(g),p.c(),k(p,1),p.m(a,null)):p&&(F(),w(p,1,1,()=>{p=null}),I())},i(g){c||(k(m),k(p),c=!0)},o(g){w(m),w(p),c=!1},d(g){g&&j(t),m&&m.d(),p&&p.d(),h=!1,P(b)}}}function rt(e,t,n){let r=!1,o=!1;return[r,o,[{title:"Melody of the Wild - LD54",src:"images/panda-banjo-cropped.jpg",description:"Panda, banjo, campfire.",href:"https://marcodeevil.itch.io/melody-of-the-wild"},{title:"Do Not Open the Letter - LD53",src:"images/do-not-open-the-letter-cropped.png",description:"Do not open the letter.",href:"https://marcodeevil.itch.io/do-not-open-the-letter"}],[{title:"Subject",src:"images/subject-cropped.png",description:"Short, logical",href:"https://marcodeevil.itch.io/subject"},{title:"Broken Dreams",src:"images/broken-dreams-cropped.png",description:"For now just an artistic concept...",href:"https://marcodeevil.itch.io/broken-dreams"},{title:"Hard Game",src:"images/hard-cropped.png",description:"Just a hard game",href:"https://marcodeevil.itch.io/hard-game"}],()=>n(0,r=!r),()=>n(1,o=!o)]}class st extends xe{constructor(t){super(),Me(this,t,rt,nt,ve,{})}}new st({target:document.getElementById("app")});
