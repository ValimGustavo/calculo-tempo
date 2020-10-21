import { startTimer } from "./events.emmiter";
import { getAllSecondsElapsed, getClock, transformInSeconds } from "./timer";
import { addElement, setValueInElement } from "./dom";
import { element } from "./components/create.component";
import { getElementsList } from "./get.elements";

function setTimer() {
  const startClock = () => {
    const { hours, minutes, seconds } = getClock();
    setValueInElement("#hours", hours);
    setValueInElement("#minutes", minutes);
    setValueInElement("#seconds", seconds);
  };
  startTimer(startClock);
}

const configLabel = {
  type: "label",
  attr: {
    for: "timerInput",
  },
  node: {
    text: "label",
  },
};
const timerConfg = {
  type: "input",
  attr: {
    id: "inputTimer",
    type: "time",
  },
};

function getTime(){
  console.log('AAAA');
  
  let { hours, minutes, seconds } = getClock()

  const hour = hours <= 9 ? '0'+hours : hours
  const minute = minutes <= 9 ? '0'+minutes : minutes
  const second = seconds <= 9 ? '0'+seconds : seconds

  const time = `${hour}:${minute}:${second}`
  setValueInElement('#inputTimer', time)
}

const buttonConfig = {
  type: "button",
  attr: {
    id: "getTimer",
  },
  node: {
    text: "get Hours",
  },
  functions: {
    click: getTime,
  },
};
const list = document.querySelector("#list");
function setTime(){

  const time = document.querySelector('#inputTimer')

  if(time && (time instanceof HTMLInputElement)){
    console.log(time.value)
    const list = document.querySelector('#list')

    const li = document.createElement('li')
    const text = document.createTextNode(time.value)
    li.appendChild(text)
    
    list?.appendChild(li)
  }
}

const buttonSetTimerConfig = {
  type: 'input',
  attr:{
    value: 'set time'
  },
  functions:{
    click: setTime
  }
}

const buttonGetItemsList = {
  type: 'input',
  attr: {
    value: 'get Items'
  },
  functions: {
    click: getElementsList
  }

}

const configPTotalInSeconds = {
  type:'p',
  functions:{
    click: setTotalSeconds
  }
}

const configButtonTotalInSeconds = {
  type : 'input',
  attr:{
    value: "total in seconds"
  },
  functions: {
    click: setTotalSeconds
  }
}

const label = element(configLabel);
const timer = element(timerConfg);
const button = element(buttonConfig);
const buttonGetELement = element(buttonGetItemsList);

const buttonSetTimer = element(buttonSetTimerConfig)

const pTotalInSeconds = element(configPTotalInSeconds)

const buttonTotalInSeconds = element(configButtonTotalInSeconds)
const info = document.querySelector('#info')

if (list && list instanceof HTMLElement) {
  addElement(label, list);
  addElement(timer, list);
  addElement(button, list);
  addElement(buttonSetTimer, list)
  addElement(buttonGetELement, list)
  addElement(buttonTotalInSeconds, list)
}

if(info && info instanceof HTMLElement){
  addElement(pTotalInSeconds, info)
}

setTimer();


function setTimeInSeconds(){
  const timer = getElementsList()
  let timers = []
  for(let time of timer ){
    timers.push(transformInSeconds(time))
  }

  return timers
}

function setTotalSeconds(){
  const timers = setTimeInSeconds()
  const totalSeconds = getAllSecondsElapsed(timers)
  console.log('total  all', totalSeconds)
  setValueInElement('#info', totalSeconds)
}