"use strict";
exports.__esModule = true;
function element(config) {
    var document = new Document();
    var label = document.createElement(config.type);
    var props = Object.keys(config.attr);
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var prop = props_1[_i];
        label.setAttribute(prop, config.attr[prop]);
    }
    return label;
}
exports.element = element;
