'use strict';

function sayHello(name) {
    return "Hello from " + name;
}

function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
showHello("greeting", "TypeScript");
var LucksheetPluginPrint = /** @class */ (function () {
    function LucksheetPluginPrint() {
    }
    return LucksheetPluginPrint;
}());

module.exports = LucksheetPluginPrint;
