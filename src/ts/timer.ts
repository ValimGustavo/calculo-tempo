export function getClock() {
  const timer = new Date();
  const hours = timer.getHours();
  const minutes = timer.getMinutes();
  const seconds = timer.getSeconds();

  return { hours, minutes, seconds };
}
export function transformInSeconds(time: string) {
  const timerSplitted = time.split(":");
  const hours = Number(timerSplitted[0]) * 3600;
  const minutes = Number(timerSplitted[1]) * 60;

  let seconds = 0;
  if (timerSplitted.length === 3) {
    seconds = Number(timerSplitted[2]);
  }

  const total = hours + minutes + seconds;
  return total
}



export function takeTimeBetweenTwoMoments(firstMoment:number, secondMoment:number){
  return secondMoment - firstMoment
}

export function getAllSecondsElapsed(times:number[]){

  let oddTime:number | undefined = undefined
  if(times.length % 2 != 0){
    oddTime = times.pop()
  }

  console.log(times)

  let total = 0
  for(let i = 0; i <= times.length - 2;){
    total += takeTimeBetweenTwoMoments(times[i], times[i+1])
    i = i + 2
  }

  if(oddTime != undefined){
    total += takeTimeBetweenTwoMoments(times[times.length - 1], oddTime)
  }
  return total 
}
