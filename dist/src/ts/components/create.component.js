//TODO: criar modo de diferenciar quando o elemento eh da tag ou textNode
export function element(config) {
    var element = document.createElement(config.type);
    if (config.attr) {
        var props = Object.keys(config.attr);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            element.setAttribute(prop, config.attr[prop]);
        }
    }
    if (config.node) {
        var nodes = Object.keys(config.node) || [];
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var prop = nodes_1[_a];
            if (prop === "text") {
                var text = document.createTextNode(config.node[prop]);
                element.appendChild(text);
            }
        }
    }
    if (config.functions) {
        var functions = Object.keys(config.functions);
        for (var _b = 0, functions_1 = functions; _b < functions_1.length; _b++) {
            var type = functions_1[_b];
            element.addEventListener(type, config.functions[type]);
        }
    }
    return element;
}
//# sourceMappingURL=create.component.js.map