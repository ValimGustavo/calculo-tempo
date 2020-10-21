export function setValueInElement(elem: string, value: any) {
  const elementSelected = document.querySelector(elem);

  if( elementSelected instanceof HTMLInputElement){
    elementSelected.value = value
  }else if (elementSelected instanceof HTMLElement) {   
    elementSelected.innerText = value;
  }
}

export function addElement(element:HTMLElement, target:HTMLElement){
  target.appendChild(element)
}