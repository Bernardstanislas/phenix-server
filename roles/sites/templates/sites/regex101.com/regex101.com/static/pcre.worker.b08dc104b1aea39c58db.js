!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="42a8889a-e377-4cee-8c0d-44fa5ff41cfe",e._sentryDebugIdIdentifier="sentry-dbid-42a8889a-e377-4cee-8c0d-44fa5ff41cfe")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"11.4.7"},(()=>{"use strict";var e="/static/";const t=e+"libs/pcrelib.f84adbca8f2187ce1b565d5363317e69.js",r=e+"libs/pcrelib.879afe94f2f691ee64e38970bfdad0a9.wasm",n=e=>{const t={};for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++){const r=n[e],l=o(r),a=l.groupStart,u=l.groupEnd;if(!(a<0))if(a===u)t[a]=[...t[a]||[],r];else for(let e=a;e<u;e++)t[e]=[...t[e]||[],r]}}return t},o=e=>{var t,r;const n=null!=(t=e.startUtf16)?t:e.start,o=null!=(r=e.endUtf16)?r:e.end;return{groupStart:Math.min(n,o),groupEnd:Math.max(n,o)}};var l;null==(l=self).performance&&(l.performance={}),null==l.performance.now&&(l.performance.now=()=>Date.now()),self.Module={locateFile:()=>r},importScripts(t);const a=Module.cwrap("pcre16_compile","number",["number","number","number","number","number"]),u=Module.cwrap("pcre16_exec","number",["number","number","number","number","number","number","number","number"]),s=Module.cwrap("pcre16_fullinfo","number",["number","number","number","number"]),c=Module.cwrap("getCalloutAddress","number",[]),d=Module.cwrap("getExtraAddress","number",[]);let i,f,b,g,m=!1,p={},M=null;function E(e){if(m){const t=e>>2,r=Module.HEAP32[t+5],n=Module.HEAP32[t+6],o=Module.HEAP32[t+10],l=Module.HEAP32[t+11];g[b]||(g[b]=[]),g[b][f]={patternStart:o,patternEnd:l,stringStart:r,stringEnd:n-r}}i++,f++}function h(e){m&&(g[b]||(g[b]=[]),g[b].steps=f,g[b].status=e,f=0,b++)}function w(e){try{const{regex:t,flags:r,testString:o,options:l}=e.data;m=!!l.isDebugging;const E=function(e,t,r){if((r.calculateSteps||r.isDebugging)&&(t+="C"),p){if(p.pattern===e&&p.flags===t)return;S()}let n=0,o=!1;for(let e=0,r=t.length;e<r;e++)switch(t[e]){case"g":o=!0;break;case"i":n|=1;break;case"m":n|=2;break;case"s":n|=4;break;case"x":n|=8;break;case"A":n|=16;break;case"C":n|=16384;break;case"D":case"E":n|=32;break;case"J":n|=524288;break;case"N":n|=4096;break;case"S":break;case"U":n|=512;break;case"X":n|=64;break;case"Y":n|=67108864;break;case"u":n|=536872960;break;case"P":n|=2048;break;default:throw new Error(`Unknown option '${t[e]}' supplied.`)}p.pattern=e,p.flags=t,p.optionBits=2097152|n,p.globalMatch=o;const l=2*(2*e.length+1),u=Module._malloc(l);Module.stringToUTF16(e,u,l);const i=Module._malloc(4),f=Module._malloc(4),b=a(u,n,i,f,null);if(!b){const e=`${function(e,t){if(0===t||!e)return"";for(var r,n=0,o=0;n|=r=HEAPU8[e+o>>0],(0!=r||t)&&(o++,!t||o!=t););t||(t=o);var l="";if(n<128){for(var a,u=1024;t>0;)a=String.fromCharCode.apply(String,HEAPU8.subarray(e,e+Math.min(t,u))),l=l?l+a:a,e+=u,t-=u;return l}return Module.UTF16ToString(e)}(Module.HEAP32[i>>2])} - offset: ${Module.HEAP32[f>>2]}`;return Module._free(u),Module._free(i),Module._free(f),S(),e||"Unknown compilation error"}(r.calculateSteps||r.isDebugging)&&(Module.HEAP32[c()>>2]=M);const g=Module._malloc(4);s(b,null,8,g),p.namedSubpatternCount=Module.HEAP32[g>>2],Module._free(g);var m=Module._malloc(4);s(b,null,9,m),p.namedSubpatternTable=m;const E=Module._malloc(4);s(b,null,7,E),p.namedSubpatternSize=Module.HEAP32[E>>2],Module._free(E);var h=Module._malloc(4);s(b,null,2,h),p.ovectorLen=3*(Module.HEAP32[h>>2]+1),Module._free(h),p.matchLimit=d(),p.regex=b,Module._free(u),Module._free(i),Module._free(f)}(t,r,l);if(E)return void self.postMessage({error:E});const w=performance.now(),_=function(e,t){if(!p.regex)throw new Error("No pattern supplied to matching function!");if(i=0,f=0,b=0,g=[],p.subject!==e||!p.testStringPointer){p.testStringPointer&&Module._free(p.testStringPointer);const t=e.length,r=2*(2*t+1),n=Module._malloc(r);Module.stringToUTF16(e,n,r),p.testStringPointer=n,p.subject=e,p.subjectLength=t}const r=Module._malloc(4*p.ovectorLen),o=r>>2;let l=0,a=0;const s=[];let c,d=0,m=null;do{if(c=u(p.regex,p.matchLimit,p.testStringPointer,p.subjectLength,l,a,r,p.ovectorLen),c>=0){h(c),f=0,0===c&&(c=p.ovectorLen/3);const t=new Array(c);let r=0;for(let n=0;n<2*c;n+=2){const l=Module.HEAP32[o+n],a=Module.HEAP32[o+n+1],u=n/2,s=-1!==l;if(t[r++]={isParticipating:s,groupNum:u,start:l,end:a,content:e.substring(l,a),match:d},s&&a>=l&&p.namedSubpatternCount>0){let e=Module.HEAP32[p.namedSubpatternTable>>2];for(let r=0;r<p.namedSubpatternCount;r++){const r=Module.HEAP8[e];void 0!==t[r]&&(t[r].groupName=Module.UTF16ToString(e+2)),e+=2*p.namedSubpatternSize}}}s[d++]=t}else{if(-1!==c){l>=p.subjectLength||(h(c),m=c);break}if(!(0!==a&&l<p.subjectLength)){f>0&&h(c);break}Module.HEAP32[o]=l,Module.HEAP32[o+1]=l+1,l<p.subjectLength-1&&"\r"===e.charAt(l)&&"\n"===e.charAt(l+1)&&(Module.HEAP32[o+1]+=1),h(c)}const n=Module.HEAP32[o+1]===Module.HEAP32[o];t.bumpalong?l=Module.HEAP32[o+1]+(n?1:0):(a=n?268435472:0,l=Module.HEAP32[o+1])}while(p.globalMatch);return Module._free(r),{matchMap:n(s),matchResult:s,error:m,calloutData:g,steps:t.calculateSteps?i:null}}(o,l);_.time=performance.now()-w,self.postMessage(_)}catch(e){console.error("An unhandled error was thrown, please report this",e),self.postMessage({error:e.message||"Unknown error occurred"})}}function S(){p.namedSubpatternTable&&Module._free(p.namedSubpatternTable),p.regex&&Module._free(p.regex),p={}}Module.onRuntimeInitialized=function(){M=Module.addFunction(E,["i","i"]),self.onmessage=w,self.postMessage("onload")}})();