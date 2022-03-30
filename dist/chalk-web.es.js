/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function o(o,r,e){if(e||2===arguments.length)for(var l,t=0,n=r.length;t<n;t++)!l&&t in r||(l||(l=Array.prototype.slice.call(r,0,t)),l[t]=r[t]);return o.concat(l||Array.prototype.slice.call(r))}function r(r,e,l){void 0===l&&(l="");for(var t=[],n=3;n<arguments.length;n++)t[n-3]=arguments[n];var a="";if("string"==typeof r)a="color:"+r;else for(var c in r)a=a+c+":"+r[c]+";";return console.log.apply(console,o(["%c"+e,a,l],t,!1))}export{r as default};
