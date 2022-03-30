!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).chalk=o()}(this,(function(){"use strict";
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
    ***************************************************************************** */function e(e,o,n){if(n||2===arguments.length)for(var t,r=0,l=o.length;r<l;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))}return function(o,n,t){void 0===t&&(t="");for(var r=[],l=3;l<arguments.length;l++)r[l-3]=arguments[l];var i="";if("string"==typeof o)i="color:"+o;else for(var f in o)i=i+f+":"+o[f]+";";return console.log.apply(console,e(["%c"+n,i,t],r,!1))}}));
