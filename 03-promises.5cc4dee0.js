!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");const u=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function s(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();let t=l.valueAsNumber;const o=d.valueAsNumber,r=a.valueAsNumber;for(let n=1;n<=r;n++)s(n,t).then((({position:n,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({i:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)})),t+=o}))}();
//# sourceMappingURL=03-promises.5cc4dee0.js.map
