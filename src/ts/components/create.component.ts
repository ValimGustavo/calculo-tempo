type element = {
  type: string;
  attr?: any;
  node?: any;
  functions?: any;
};

//TODO: criar modo de diferenciar quando o elemento eh da tag ou textNode
export function element(config: element) {
  const element = document.createElement(config.type);

  if (config.attr) {
    const props = Object.keys(config.attr);

    for (let prop of props) {
      element.setAttribute(prop, config.attr[prop]);
    }
  }

  if (config.node) {
    const nodes = Object.keys(config.node) || [];

    for (let prop of nodes) {
      if (prop === "text") {
        const text = document.createTextNode(config.node[prop]);
        element.appendChild(text);
      }
    }
  }

  if (config.functions) {
    const functions = Object.keys(config.functions);
    for (const type of functions) {
      element.addEventListener(type, config.functions[type]);
    }
  }

  return element;
}
