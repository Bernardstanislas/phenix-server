!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="254a519a-a8c8-42ad-9701-34d749273cdb",e._sentryDebugIdIdentifier="sentry-dbid-254a519a-a8c8-42ad-9701-34d749273cdb")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"11.4.7"},(()=>{"use strict";const e=e=>{const t={};for(let s=0;s<e.length;s++){const o=e[s];for(let e=0;e<o.length;e++){const s=o[e],a=n(s),r=a.groupStart,d=a.groupEnd;if(!(r<0))if(r===d)t[r]=[...t[r]||[],s];else for(let e=r;e<d;e++)t[e]=[...t[e]||[],s]}}return t},n=e=>{var n,t;const s=null!=(n=e.startUtf16)?n:e.start,o=null!=(t=e.endUtf16)?t:e.end;return{groupStart:Math.min(s,o),groupEnd:Math.max(s,o)}};var t;null==(t=self).performance&&(t.performance={}),null==t.performance.now&&(t.performance.now=()=>Date.now());const s=void 0!==/test/.hasIndices;self.onmessage=function(n){try{const t=performance.now();let o=n.data.flags;s&&!o.includes("d")&&(o+="d");const a=function(n,t,s){const o=new RegExp(n,t),a=[],r=t.includes("g");let d;for(;d=o.exec(s);){d.index===o.lastIndex&&o.lastIndex++;const e=[];for(let n=0;n<d.length;n++){let t,s;null!=d.indices&&null!=d.indices[n]?(t=d.indices[n][0],s=d.indices[n][1]):0===n&&(t=d.index,s=d.index+d[0].length);const o={content:d[n],groupNum:n,isParticipating:void 0!==d[n],match:a.length,start:t,end:s};e.push(o)}if(a.push(e),!r)break}return{matchResult:a,matchMap:e(a)}}(n.data.regex,o,n.data.testString);a.time=performance.now()-t,self.postMessage(a)}catch(e){console.error(e),self.postMessage({error:e.message})}},self.postMessage("onload")})();