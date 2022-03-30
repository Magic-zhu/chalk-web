var chalk=function(){"use strict";
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
    ***************************************************************************** */function r(r,o,n){if(n||2===arguments.length)for(var t,e=0,l=o.length;e<l;e++)!t&&e in o||(t||(t=Array.prototype.slice.call(o,0,e)),t[e]=o[e]);return r.concat(t||Array.prototype.slice.call(o))}return function(o,n,t){void 0===t&&(t="");for(var e=[],l=3;l<arguments.length;l++)e[l-3]=arguments[l];var c="";if("string"==typeof o)c="color:"+o;else for(var a in o)c=c+a+":"+o[a]+";";return console.log.apply(console,r(["%c"+n,c,t],e,!1))}}();
