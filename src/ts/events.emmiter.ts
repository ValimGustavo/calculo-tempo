import { getClock } from "./timer";

export function startTimer(func:Function) {
  const seconds = 1000;
  setInterval(() => {
      func()
  }, seconds);
}

