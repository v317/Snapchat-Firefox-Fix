// ==UserScript==
// @name         Snapchat Web on Firefox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows Snapchat Web to function on Firefox by modifying the user agent to mimic Chrome.
// @author       Alt
// @match        https://www.snapchat.com/web/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Modify the user agent to mimic Chrome
    Object.defineProperty(navigator, 'userAgent', {
        get: function () {
            return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
        }
    });
})();