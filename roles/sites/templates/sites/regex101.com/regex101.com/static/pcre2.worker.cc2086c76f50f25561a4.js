!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="669f78b6-1667-4fe4-8079-0c8df33e2a9a",e._sentryDebugIdIdentifier="sentry-dbid-669f78b6-1667-4fe4-8079-0c8df33e2a9a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"11.4.7"},(()=>{"use strict";var e="/static/";const t=e+"libs/pcre2lib.3a8abe73458a72fe843aaedda7764299.js",r=e+"libs/pcre2lib.6c4f753ddfeeef30a81cc3f818e653dd.wasm",n=e=>{const t={};for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++){const r=n[e],a=o(r),u=a.groupStart,l=a.groupEnd;if(!(u<0))if(u===l)t[u]=[...t[u]||[],r];else for(let e=u;e<l;e++)t[e]=[...t[e]||[],r]}}return t},o=e=>{var t,r;const n=null!=(t=e.startUtf16)?t:e.start,o=null!=(r=e.endUtf16)?r:e.end;return{groupStart:Math.min(n,o),groupEnd:Math.max(n,o)}};var a;null==(a=self).performance&&(a.performance={}),null==a.performance.now&&(a.performance.now=()=>Date.now()),self.Module={locateFile:()=>r},importScripts(t);const u=Module.cwrap("pcre2_compile_16","number",["number","number","number","number","number","number"]),l=Module.cwrap("pcre2_match_data_create_from_pattern_16","number",["number","number"]),c=Module.cwrap("pcre2_match_16","number",["number","number","number","number","number","number","number"]),s=Module.cwrap("pcre2_get_ovector_pointer_16","number",["number"]),i=Module.cwrap("pcre2_get_ovector_count_16","number",["number"]),d=Module.cwrap("pcre2_pattern_info_16","number",["number","number","number"]),b=Module.cwrap("pcre2_match_data_free_16","number",["number"]),g=Module.cwrap("pcre2_code_free_16","number",["number"]),f=Module.cwrap("pcre2_match_context_create_16","number",["number"]),m=Module.cwrap("pcre2_match_context_free_16","number",["number"]),p=Module.cwrap("pcre2_set_callout_16","number",["number","number","number"]),_=Module.cwrap("pcre2_get_error_message_16","number",["number","number","number"]),M=Module.cwrap("setStepCountingCallout","number",["number","number"]);let w,S,h,k,V={},y=[];function D(e){try{const{regex:t,flags:r,testString:o,options:a}=e.data,g=function(e,t,r){let n=0,o=!1;if(r.isDebugging&&(t+="Y"),(r.calculateSteps||r.isDebugging)&&(t+="Z"),V){if(V.pattern===e&&V.flags===t)return;E()}for(let e=0,r=t.length;e<r;e++)switch(t[e]){case"g":o=!0;break;case"A":n|=2147483648;break;case"E":n|=1;break;case"X":n|=2;break;case"C":n|=2097152;break;case"i":n|=8;break;case"D":n|=16;break;case"s":n|=32;break;case"J":n|=64;break;case"x":n|=128;break;case"N":n|=512;break;case"m":n|=1024;break;case"n":n|=8192;break;case"u":n|=655360;break;case"U":n|=262144;break;case"Y":n|=65536;break;case"Z":n|=4;break;default:throw new Error(`Unknown option '${t[e]}' supplied.`)}V.pattern=e,V.flags=t,V.optionBits=2097152|n,V.globalMatch=o;const a=Module._malloc(8),l=a,c=a+4,s=T(e),i=u(s,-1,n,l,c,0);if(Module._free(s),!i){const e=`${function(e){const t=Module._malloc(512);let r=`Error ${e}`;return _(e,t,256)>0&&(r=Module.UTF16ToString(t)),Module._free(t),r}(Module.getValue(l,"i32"))} - offset: ${Module.getValue(c,"i32")}`;return Module._free(a),E(),e||"Unknown compilation error"}V.regex=i,d(i,17,a),V.namedSubpatternCount=Module.getValue(a,"i32"),d(i,18,a),V.namedSubpatternSize=Module.getValue(a,"i32"),d(i,19,a);const b=Module.getValue(a,"i32");d(i,4,a);const g=Module.getValue(a,"i32");V.namedSubpatternTable=new Array(g);for(let e=0;e<V.namedSubpatternCount;e++){const t=Module.getValue(b+e*V.namedSubpatternSize*2,"i16");V.namedSubpatternTable[t]=b+e*V.namedSubpatternSize*2+2}Module._free(a)}(t,r,a);if(g)return void self.postMessage({error:g});const D=performance.now(),v=function(e,t){if(!V.regex)throw new Error("No pattern supplied to matching function!");if(V.subject!==e||!V.testStringPointer){V.testStringPointer&&Module._free(V.testStringPointer);const t=e.length,r=T(e);V.testStringPointer=r,V.subject=e,V.subjectLength=t}const r=[];let o=0;const a=f(0),u=l(V.regex,0);let d=null;t.isDebugging?p(a,k,0):t.calculateSteps&&(d=Module._malloc(8),Module.setValue(d,0,"i64"),M(a,d)),w=0,S=0,h=0,y=[];let g=null,_=0;for(let n=0,l=0;;n++){const n=c(V.regex,V.testStringPointer,V.subjectLength,l,_,u,a);if(n<0){-1!==n&&(g=n),t.isDebugging&&x(n);break}const d=s(u),b=i(u),f=Module.getValue(d,"i32"),m=Module.getValue(d+4,"i32");t.isDebugging&&x(n),S=0;const p=[];let M=0;for(let t=0;t<b;t++){const r=Module.getValue(d+8*t,"i32"),n=Module.getValue(d+8*t+4,"i32"),a=t,u=-1!==r;if(p[M++]={isParticipating:u,groupNum:a,start:r,end:n,content:e.substring(r,n),match:o},u&&V.namedSubpatternCount>0)for(let e=1;e<b;e++){const t=Module.getValue(d+8*e,"i32");Module.getValue(d+8*e+4,"i32")>=t&&void 0!==V.namedSubpatternTable[e]&&void 0!==p[e]&&(p[e].groupName=Module.UTF16ToString(V.namedSubpatternTable[e]))}}if(r[o++]=p,_=m===f?8:0,l=m,!V.globalMatch||l>V.subjectLength||l===V.subjectLength&&f===m)break}b(u),m(a);let D=null;return t.isDebugging?D=w:t.calculateSteps&&(D=Module.getValue(d,"i64"),Module._free(d)),{matchMap:n(r),matchResult:r,error:g,calloutData:y,steps:D}}(o,a);v.time=performance.now()-D,self.postMessage(v)}catch(e){console.error("An unhandled error was thrown, please report this",e),self.postMessage({error:e.message||"Unknown error occurred"})}}function E(){V.regex&&g(V.regex),V={}}function x(e){y[h]||(y[h]=[]),y[h].steps=S,y[h].status=e,S=0,h++}function T(e){const t=2*e.length+2,r=Module._malloc(t);return Module.stringToUTF16(e,r,t),r}function v(e,t){const r=Module.getValue(e+32,"i32"),n=Module.getValue(e+36,"i32"),o=Module.getValue(e+40,"i32"),a=Module.getValue(e+44,"i32");y[h]||(y[h]=[]),y[h][S]={patternStart:o,patternEnd:a,stringStart:r,stringEnd:n-r},w++,S++}Module.onRuntimeInitialized=function(){k=Module.addFunction(v,["i","i","i"]),self.onmessage=D,self.postMessage("onload")}})();